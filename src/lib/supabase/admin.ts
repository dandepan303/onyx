import { createClient } from '@supabase/supabase-js';
import { config } from '../config';

// Admin client for server-side operations
export const createAdminSupabaseClient = () => {
  return createClient(config.supabase.url, config.supabase.service_role_key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};
