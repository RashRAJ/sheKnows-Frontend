'use client';

import { Professional } from './types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';

interface ProfessionalCardProps {
  professional: Professional;
  onBooking: (professional: Professional) => void;
  onReviews: (professional: Professional) => void;
}

export function ProfessionalCard({ professional, onBooking, onReviews }: ProfessionalCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={professional.avatar} alt={professional.name} />
              <AvatarFallback>{professional.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{professional.name}</h3>
              <p className="text-sm text-muted-foreground">{professional.specialty}</p>
            </div>
          </div>
          <Badge variant="secondary">
            {professional.rating} ★
          </Badge>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {professional.location} ({professional.distance} miles)
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            Available: {professional.availability.join(', ')}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{professional.bio}</p>
        <div className="flex flex-wrap gap-2">
          {professional.languages.map((language) => (
            <Badge key={language} variant="outline">
              {language}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button 
            className="flex-1"
            onClick={() => onBooking(professional)}
          >
            Book Appointment
          </Button>
          <Button 
            variant="outline"
            onClick={() => onReviews(professional)}
          >
            {professional.reviews} Reviews
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}