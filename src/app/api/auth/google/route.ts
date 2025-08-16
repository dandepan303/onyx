import { verifyBody } from '@/lib/util/api';
import { parseError } from '@/lib/util/server_util';
import { NextResponse } from 'next/server';
import { UserRoles } from '@/lib/prisma/generated/prisma';

// Better type definition using the actual enum
export type PostProps = {
  id: string;
  email: string;
  name: string;
  role: UserRoles; // Use the actual enum type
};

export type PostRet = {
  status: 'success' | 'error';
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json() as PostProps;
    
    if (!verifyBody(body, 'api/auth/google')) {
      return NextResponse.json<PostRet>({ 
        status: 'error', 
        message: 'Please provide all required information' 
      });
    }

    const { id, email, name, role } = body;

    const profile = await prisma.profile.findUnique({
      where: { id: id },
    });

    if (profile) {
      return NextResponse.json<PostRet>({ 
        status: 'success', 
        message: 'Successfully signed in' 
      });
    }

    await prisma.profile.create({
      data: {
        id: id,
        email: email,
        name: name,
        role: role, // Now properly typed
      },
    });

    return NextResponse.json<PostRet>({ 
      status: 'success', 
      message: 'Successfully signed up' 
    });
    
  } catch (e: unknown) {
    console.log('api/auth/google error: ');
    
    const errorMessage = e instanceof Error ? e.message : 'Unknown error';
    const errorCode = e && typeof e === 'object' && 'code' in e ? (e.code as string) : undefined;
    
    await parseError(errorMessage, errorCode);
    
    return NextResponse.json<PostRet>({ 
      status: 'error', 
      message: 'There was an issue using Google' 
    }, { 
      status: 500 
    });
  }
}