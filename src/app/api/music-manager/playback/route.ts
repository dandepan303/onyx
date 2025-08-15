import { NextResponse } from 'next/server';

export type PostProps = {};

export type PostRet = {};

export async function POST(request: Request) {
  return NextResponse.json<PostRet>({});
}
