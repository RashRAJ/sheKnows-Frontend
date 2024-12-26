'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="py-20 flex items-center justify-center bg-gradient-to-b from-background to-muted min-h-[80vh]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 max-w-4xl mx-auto">
          Your Journey to Wellness Starts Here
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join our community of women supporting each other through health, wellness, and personal growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="text-lg"
          >
            <Link href="/register">
              Join Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}