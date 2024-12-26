'use client';

import { Professional, Review } from './types';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Emily Chen',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    rating: 5,
    date: '2024-03-15',
    content: 'Dr. Johnson is incredibly knowledgeable and caring. She took the time to explain everything thoroughly and made me feel completely at ease.',
  },
];

interface ReviewsModalProps {
  professional: Professional | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReviewsModal({ professional, open, onOpenChange }: ReviewsModalProps) {
  if (!professional) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Reviews for {professional.name}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            {mockReviews.map((review) => (
              <div key={review.id} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.author} />
                      <AvatarFallback>{review.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{review.author}</h4>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <time className="text-sm text-muted-foreground">
                    {new Date(review.date).toLocaleDateString()}
                  </time>
                </div>
                <p className="text-muted-foreground">{review.content}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}