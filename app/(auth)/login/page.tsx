import { LoginForm } from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-16">
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome Back 💅</h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-lg border">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}