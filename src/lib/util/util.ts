import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { UserRoles } from '../prisma/generated/prisma';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const roleHierarchy: Record<UserRoles, number> = {
  ADMIN: 2,
  USER: 1,
  GUEST: 0
}

export function isAuthorized(userRole: string | null | undefined, requiredRole: string) {
  if (!userRole) {
    userRole = 'guest';
  }

  const userRoleLevel = roleHierarchy[userRole as UserRoles];
  const requiredRoleLevel = roleHierarchy[requiredRole as UserRoles];

  return userRoleLevel >= requiredRoleLevel;
}