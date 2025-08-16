import axios from 'axios';
import { Session } from '@supabase/supabase-js';
import { parseError } from './server_util';

type RequestProps = {
  type: 'GET' | 'POST' | 'DELETE';
  route: string;
  body: unknown;
  session?: Session | null;
};

export async function request<T>({ type, route, body, session }: RequestProps): Promise<T> {
  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 1000 * 60);

    switch (type) {
      case 'GET': {
        const { data: res }: { data: T } = await axios.get(route, {
          signal: controller.signal,
          withCredentials: true,
          validateStatus: () => true,
          headers: session ? { Authorization: `Bearer ${session?.access_token}` } : undefined,
          data: body,
        });
        return res;
      }
      case 'POST': {
        const bodyData = body ? body : undefined;
        const { data: res }: { data: T } = await axios.post(route, bodyData, {
          signal: controller.signal,
          withCredentials: true,
          validateStatus: () => true,
          headers: session ? { Authorization: `Bearer ${session?.access_token}` } : undefined,
        });
        return res;
      }
      case 'DELETE': {
        const bodyData = body ? body : undefined;
        const { data: res }: { data: T } = await axios.delete(route, {
          signal: controller.signal,
          withCredentials: true,
          validateStatus: () => true,
          headers: session ? { Authorization: `Bearer ${session?.access_token}` } : undefined,
          data: bodyData,
        });
        return res;
      }
      default:
        break;
    }
    throw new Error(`lib/util/api error: select a valid request type`);
  } catch (e: unknown) {
    console.log(`lib/util/api error`);
    const errorMessage = e instanceof Error ? e.message : 'Unknown error';
    const errorCode = e && typeof e === 'object' && 'code' in e ? (e.code as string) : undefined;
    await parseError(errorMessage, errorCode);
    throw new Error('lib/util/api error');
  }
}

export function verifyBody<T>(body: unknown, route: string): body is T {
  try {
    // Simple validation - in a real scenario, you'd use a schema validator like Zod
    return body !== null && body !== undefined;
  } catch (e: unknown) {
    console.error(`${route} error: `, e);
    return false;
  }
}