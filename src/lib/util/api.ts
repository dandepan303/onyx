import axios from 'axios';
import { Session } from '@supabase/supabase-js';

type RequestProps<T> = {
  type: 'GET' | 'POST' | 'DELETE';
  route: string;
  body?: any;
  session: Session;
};

export async function request<T>({ type, route, body, session }: RequestProps<T>): Promise<T | undefined> {
  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 1000 * 60);

    switch (type) {
      case 'GET': {
        const { data: res }: { data: T } = await axios.get(route, {
          signal: controller.signal,
          withCredentials: true,
          validateStatus: () => true,
          headers: { Authorization: `Bearer ${session?.access_token}` },
        });
        return res;
      }
      case 'POST': {
        const bodyData = body ? body : undefined;
        const { data: res }: { data: T } = await axios.post(route, bodyData, {
          signal: controller.signal,
          withCredentials: true,
          validateStatus: () => true,
          headers: { Authorization: `Bearer ${session?.access_token}` },
        });
        return res;
      }
      case 'DELETE': {
        const bodyData = body ? body : undefined;
        const { data: res }: { data: T } = await axios.post(route, bodyData, {
          signal: controller.signal,
          withCredentials: true,
          validateStatus: () => true,
          headers: { Authorization: `Bearer ${session?.access_token}` },
        });
        return res;
      }
      default:
        throw new Error('lib/util/api error: select a valid request type');
    }
  } catch (e: any) {
    console.log(`lib/util/api error`);
    return { status: 'error', message: e.message } as any;
  }
}
