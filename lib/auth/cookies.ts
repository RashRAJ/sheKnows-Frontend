'use client';

// Client-side cookie handling
export function setAuthCookie(token: string) {
  document.cookie = `auth-token=${token}; path=/; max-age=2592000`; // 30 days
}

export function removeAuthCookie() {
  document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function getAuthCookie(): string | null {
  const cookies = document.cookie.split(';');
  const authCookie = cookies.find(cookie => cookie.trim().startsWith('auth-token='));
  return authCookie ? authCookie.split('=')[1] : null;
}