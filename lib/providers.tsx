'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
import { AuthContextType, ThemeContextType, User } from '@/lib/types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function Providers({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
};