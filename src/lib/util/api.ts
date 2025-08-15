import axios from 'axios';
import { Session } from '@supabase/supabase-js';
import { parseError } from './server_util';

type RequestProps = {
  type: 'GET' | 'POST' | 'DELETE';
  route: string;
  body: any;
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
        const { data: res }: { data: T } = await axios.post(route, bodyData, {
          signal: controller.signal,
          withCredentials: true,
          validateStatus: () => true,
          headers: session ? { Authorization: `Bearer ${session?.access_token}` } : undefined,
        });
        return res;
      }
      default:
        break;
    }

    throw new Error(`lib/util/api error: select a valid request type`);
  } catch (e: any) {
    console.log(`lib/util/api error`);
    await parseError(e.message, e.code);
    throw new Error('lib/util/api error');
  }
}

export function verifyBody<T>(body: any, route: string): boolean {
  try {
    const attempt: T = body;

    return true;
  } catch (e: any) {
    console.error(`${route} error: `, e);
    return false;
  }
}