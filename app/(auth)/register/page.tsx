import { RegisterForm } from '@/components/auth/register-form';

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-16">
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Create Account</h1>
          <p className="text-muted-foreground">Join our community of women supporting each other</p>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-lg border">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}