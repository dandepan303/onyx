import { Role } from '@/types';

// Middleware
export const privateRoutes: Record<string, Role> = {
  '/developer': 'admin',
  '/dashboard': 'user',
};

// formatted env variables
export const config = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'TradeSpace',
  },
  google: {
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
    client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
  },
};