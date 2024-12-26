'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Get tailored health insights and connect with healthcare professionals who understand your unique needs."
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Join a vibrant community of women sharing experiences and supporting each other through life's journey."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your privacy is our priority. All your data is encrypted and securely stored with enterprise-grade security."
  },
  {
    icon: Sparkles,
    title: "Expert Guidance",
    description: "Access verified healthcare professionals, wellness coaches, and mental health specialists."
  }
];

export function FeatureSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose SheKnows?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive support for your health and wellness journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}