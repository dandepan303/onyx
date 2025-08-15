import { verifyBody } from '@/lib/util/api';
import { parseError } from '@/lib/util/server_util';
import { NextResponse } from 'next/server';

export type PostProps = {
  id: string;
  email: string;
  name: string;
  role: string;
};

export type PostRet = {
  status: 'success' | 'error';
  message: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as any;
  if (!verifyBody(body, 'api/auth/google')) return NextResponse.json<PostRet>({ status: 'error', message: 'Please provide all required information' });

  const { id, email, name, role } = body;

  try {
    const profile = await prisma.profile.findUnique({
      where: { id: id },
    });

    if (profile) return NextResponse.json<PostRet>({ status: 'success', message: 'Successfully signed in' });

    await prisma.profile.create({
      data: {
        id: id,
        email: email,
        name: name,
        role: role,
      },
    });

    return NextResponse.json<PostRet>({ status: 'success', message: 'Successfully signed up' });
  } catch (e: any) {
    console.log('api/auth/google error: ');
    await parseError(e.message, e.code);

    return NextResponse.json<PostRet>({ status: 'error', message: 'There was an issue using Google' }, { status: 500 });
  }
}
