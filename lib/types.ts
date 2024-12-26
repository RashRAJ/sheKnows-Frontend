// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  avatar?: string;
  role: 'user' | 'professional' | 'admin';
  specialties?: string[];
  verified?: boolean;
}

// Auth Context Types
export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string, username: string) => Promise<void>;
}