import { createServerSupabaseClient } from "@/lib/supabase/server";
import { verifyBody } from "@/lib/util/api";
import { parseError } from "@/lib/util/server_util";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma/prisma";

export type GetProps = {
  email: string;
}

export type GetRet = {
  status: 'signin' | 'signup' | 'error';
  message: string;
}

export type PostProps = {
  email: string;
  password: string;
  name: string;
  role: string;
};

export type PostRet = {
  status: 'success' | 'error';
  message: string;
};

// Step 1: Check if email already exists -> sign in
export async function GET(request: Request) {
  try {
    // Get email from URL parameters instead of body
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json<GetRet>({ 
        status: 'error', 
        message: 'Please provide email' 
      }, { status: 400 });
    }

    const profile = await prisma.profile.findUnique({
      where: { email: email }
    });

    // Profile exists -> continue to sign in
    if (profile) {
      return NextResponse.json<GetRet>({ status: 'signin', message: '' });
    }

    // No profile -> continue to sign up (step 2)
    return NextResponse.json<GetRet>({ status: 'signup', message: '' });

  } catch (e: any) {
    console.log('api/auth/email get error');
    await parseError(e.message, e.code);
    return NextResponse.json<GetRet>({ 
      status: 'error', 
      message: 'There was an issue checking email' 
    }, { status: 500 });
  }
}

// Step 2: sign up
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as any;
    
    if (!verifyBody(body, 'api/auth/email')) {
      return NextResponse.json<PostRet>({ 
        status: 'error', 
        message: 'Please provide all required information' 
      }, { status: 400 });
    }

    const { email, password, name, role } = body;

    // Check if profile already exists
    const profile = await prisma.profile.findUnique({
      where: { email: email }
    });

    if (profile) {
      return NextResponse.json<PostRet>({ 
        status: 'error', 
        message: 'Account already exists' 
      }, { status: 400 });
    }

    const supabase = await createServerSupabaseClient();
    
    const { data: auth_data, error: auth_error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
          role: role,
        }
      }
    });

    if (auth_error) {
      console.log('api/auth/email post auth error: ', auth_error);
      return NextResponse.json<PostRet>({ 
        status: 'error', 
        message: await parseError(auth_error.message, auth_error.code) 
      }, { status: 400 });
    }

    if (!auth_data.user) {
      console.log('api/auth/email post error - no user data');
      return NextResponse.json<PostRet>({ 
        status: 'error', 
        message: 'There was an issue creating account' 
      }, { status: 400 });
    }

    // Create profile in database
    await prisma.profile.create({
      data: {
        id: auth_data.user.id,
        email: email,
        name: name,
        role: role,
      }
    });

    return NextResponse.json<PostRet>({ 
      status: 'success', 
      message: 'Successfully signed up' 
    });

  } catch (e: any) {
    console.log('api/auth/email post error');
    await parseError(e.message, e.code);
    return NextResponse.json<PostRet>({ 
      status: 'error', 
      message: 'There was an issue signing up' 
    }, { status: 500 });
  }
}