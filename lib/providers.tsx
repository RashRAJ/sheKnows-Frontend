'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
<<<<<<< HEAD
import { AuthContextType, ThemeContextType, User } from '@/lib/types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
=======
import { AuthContextType, User } from '@/lib/types';
import { AuthService } from '@/lib/auth/auth-service';
import { getAuthCookie } from '@/lib/auth/cookies';

const AuthContext = createContext<AuthContextType | undefined>(undefined);
>>>>>>> master

export function Providers({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

<<<<<<< HEAD
  // Mock auth functions for now
  const login = async (email: string, password: string) => {
    // Implement actual login logic
  };

  const logout = () => {
    setUser(null);
  };

  const signup = async (email: string, password: string, name: string) => {
    // Implement actual signup logic
  };

  useEffect(() => {
    // Check for existing session
=======
  const login = async (email: string, password: string, username: string) => {
    try {
      const response = await AuthService.login(email, password, username);
      if (response.user) {
        setUser(response.user);
      }
    } catch (err) {
      setError('Failed to login');
      throw err;
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      setUser(null);
    } catch (err) {
      setError('Failed to logout');
    }
  };

  const signup = async (email: string, password: string, name: string, username: string) => {
    try {
      const response = await AuthService.register(email, password, name, username);
      if (response.user) {
        setUser(response.user);
      }
    } catch (err) {
      setError('Failed to register');
      throw err;
    }
  };

  useEffect(() => {
    const token = getAuthCookie();
    if (token) {
      // For demo purposes, set a mock user
      setUser({
        id: '1',
        email: 'demo@example.com',
        name: 'Demo User',
        username: 'demo',
        role: 'user'
      });
    }
>>>>>>> master
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, logout, signup }}>
      <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        <Toaster />
      </NextThemeProvider>
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
<<<<<<< HEAD
};
=======
}
>>>>>>> master
