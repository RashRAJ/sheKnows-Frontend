'use client';

import { useState } from 'react';
import { Professional } from './types';
import { ProfessionalCard } from './professional-card';
import { BookingModal } from './booking-modal';
import { ReviewsModal } from './reviews-modal';

const professionals: Professional[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'OB-GYN',
    rating: 4.8,
    reviews: 127,
    location: 'New York, NY',
    distance: '2.3',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
    availability: ['Monday', 'Wednesday', 'Friday'],
    bio: 'Specialized in women\'s reproductive health with over 15 years of experience.',
    education: 'MD from Johns Hopkins University',
    languages: ['English', 'Spanish'],
  },
  {
    id: '2',
    name: 'Dr. Emily Chen',
    specialty: 'Mental Health',
    rating: 4.9,
    reviews: 89,
    location: 'San Francisco, CA',
    distance: '1.8',
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80',
    availability: ['Tuesday', 'Thursday', 'Friday'],
    bio: 'Experienced psychiatrist specializing in women\'s mental health and wellness.',
    education: 'MD from Stanford University',
    languages: ['English', 'Mandarin'],
  },
  {
    id: '3',
    name: 'Dr. Maria Rodriguez',
    specialty: 'Nutrition',
    rating: 4.7,
    reviews: 156,
    location: 'Miami, FL',
    distance: '3.1',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80',
    availability: ['Monday', 'Tuesday', 'Thursday'],
    bio: 'Certified nutritionist focusing on women\'s health and dietary needs.',
    education: 'PhD in Nutrition from Columbia University',
    languages: ['English', 'Spanish', 'Portuguese'],
  },
];

export function ProfessionalGrid() {
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {professionals.map((professional) => (
          <ProfessionalCard
            key={professional.id}
            professional={professional}
            onBooking={(prof) => {
              setSelectedProfessional(prof);
              setBookingModalOpen(true);
            }}
            onReviews={(prof) => {
              setSelectedProfessional(prof);
              setReviewsModalOpen(true);
            }}
          />
        ))}
      </div>

      <BookingModal
        professional={selectedProfessional}
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
      />
      
      <ReviewsModal
        professional={selectedProfessional}
        open={reviewsModalOpen}
        onOpenChange={setReviewsModalOpen}
      />
    </>
  );
}