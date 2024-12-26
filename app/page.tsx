<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';
=======
import { HeroSection } from '@/components/home/hero-section';
import { FeatureSection } from '@/components/home/feature-section';
import { TestimonialSection } from '@/components/home/testimonial-section';
import { QuickAccessSection } from '@/components/home/quick-access-section';
>>>>>>> master

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
<<<<<<< HEAD
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Your Journey to Wellness Starts Here
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of women supporting each other through health, wellness, and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/signup">
                Join Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SheKnows?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Heart className="h-8 w-8" />}
              title="Personalized Care"
              description="Access tailored health insights and connect with healthcare professionals who understand your needs."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Supportive Community"
              description="Join a vibrant community of women sharing experiences and supporting each other."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Privacy First"
              description="Your privacy is our priority. All your data is encrypted and securely stored."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
=======
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <QuickAccessSection />
>>>>>>> master
    </div>
  );
}