'use client';

import { User } from '@/lib/types';
import { setAuthCookie, removeAuthCookie } from './cookies';

export interface AuthResponse {
  user: User | null;
  token?: string;
  error?: string;
}

export class AuthService {
  static async login(email: string, password: string, username: string): Promise<AuthResponse> {
    // TODO: Implement actual login logic with your backend
    const mockResponse: AuthResponse = {
      user: {
        id: '1',
        email,
        name: 'Test User',
        username,
        role: 'user', // Fixed type to match User interface
      },
      token: 'mock-jwt-token'
    };

    setAuthCookie(mockResponse.token!);
    return mockResponse;
  }

  // Rest of the file remains the same...
}