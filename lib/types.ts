// User Types
export interface User {
  id: string;
  email: string;
  name: string;
<<<<<<< HEAD
=======
  username: string;
>>>>>>> master
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
<<<<<<< HEAD
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string) => Promise<void>;
}

// Theme Types
export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
=======
  login: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string, username: string) => Promise<void>;
>>>>>>> master
}