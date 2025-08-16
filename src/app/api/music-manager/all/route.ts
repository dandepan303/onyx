import { NextResponse } from "next/server"


export type PostProps = Record<string, never>;

export type PostRet = Record<string, never>;

export async function POST(_request: Request) {
  return NextResponse.json<PostRet>({});
}