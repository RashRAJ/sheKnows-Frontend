'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Heart, Brain, Users, UserPlus } from 'lucide-react';

const quickLinks = [
  {
    icon: Heart,
    title: "Health Resources",
    description: "Access comprehensive women's health information",
    href: "/health"
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description: "Expert guidance for emotional well-being",
    href: "/wellness"
  },
  {
    icon: Users,
    title: "Join Community",
    description: "Connect with supportive women",
    href: "/community"
  },
  {
    icon: UserPlus,
    title: "Find Professionals",
    description: "Connect with healthcare experts",
    href: "/professionals"
  }
];

export function QuickAccessSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link key={index} href={link.href} className="group">
              <div className="h-full p-6 rounded-lg border-2 bg-card hover:border-primary transition-all">
                <link.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-muted-foreground mb-4">{link.description}</p>
                <Button variant="ghost" className="group-hover:text-primary">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}