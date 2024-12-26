'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "SheKnows has transformed my approach to health. The personalized guidance and supportive community are invaluable.",
    author: "Sarah Johnson",
    role: "Member since 2023",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    quote: "The expert advice and community support helped me through my wellness journey. I'm grateful for this platform.",
    author: "Emily Chen",
    role: "Member since 2023",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    quote: "Finding healthcare professionals who truly understand women's health needs has never been easier.",
    author: "Maria Garcia",
    role: "Member since 2023",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
  }
];

export function TestimonialSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="pt-6">
                <blockquote className="space-y-6">
                  <p className="text-lg">"{testimonial.quote}"</p>
                  <footer className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="not-italic font-medium">{testimonial.author}</cite>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}