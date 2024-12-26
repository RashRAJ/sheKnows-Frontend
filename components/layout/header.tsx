'use client';

import { useAuth } from '@/lib/providers';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/layout/mode-toggle';
import Link from 'next/link';
import { Search, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

<<<<<<< HEAD
=======
const capitalizeFirstLetter = (string: string) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
};

>>>>>>> master
export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">SheKnows</span>
        </Link>

        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:flex">
          <Link
            href="/health"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Health
          </Link>
          <Link
            href="/wellness"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Wellness
          </Link>
          <Link
            href="/professionals"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Find Professionals
          </Link>
          <Link
            href="/community"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Community
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          
          <ModeToggle />

          {user ? (
<<<<<<< HEAD
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => logout()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
=======
            <>
              <span className="text-sm text-muted-foreground hidden sm:inline-block">
                👋 Welcome, {capitalizeFirstLetter(user.username)}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => logout()}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
>>>>>>> master
          ) : (
            <Button asChild variant="default">
              <Link href="/login">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}