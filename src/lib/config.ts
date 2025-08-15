import { UserRoles } from './prisma/generated/prisma';

// Middleware
export const privateRoutes: Record<string, UserRoles> = {
  '/developer': 'ADMIN',
  '/dashboard': 'USER',
};

// formatted env variables
export const config = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'Jam',
  },
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    anon_key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    service_role_key: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  },
  google: {
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
    client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
  },
};
