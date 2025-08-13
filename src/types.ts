// DATABASE

export type Role = 'admin' | 'user' | 'guest';

// API ENDPOINTs

export type DefaultAPIRet = {
  status: 'success' | 'error';
  message: string;
};