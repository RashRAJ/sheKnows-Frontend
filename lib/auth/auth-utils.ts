import { cookies } from 'next/headers';

export function getAuthToken() {
  const cookieStore = cookies();
  return cookieStore.get('auth-token');
}

export function setAuthToken(token: string) {
  document.cookie = `auth-token=${token}; path=/; max-age=2592000`; // 30 days
}

export function removeAuthToken() {
  document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}