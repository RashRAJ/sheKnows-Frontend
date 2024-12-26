import { HeroSection } from '@/components/home/hero-section';
import { FeatureSection } from '@/components/home/feature-section';
import { TestimonialSection } from '@/components/home/testimonial-section';
import { QuickAccessSection } from '@/components/home/quick-access-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <QuickAccessSection />
    </div>
  );
}