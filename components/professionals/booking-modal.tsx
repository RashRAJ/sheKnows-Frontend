'use client';

import { useState } from 'react';
import { Professional } from './types';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '2:00 PM', '3:00 PM', '4:00 PM'
];

interface BookingModalProps {
  professional: Professional | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingModal({ professional, open, onOpenChange }: BookingModalProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>('');
  const { toast } = useToast();

  const handleBooking = () => {
    if (!date || !time) {
      toast({
        title: 'Error',
        description: 'Please select both date and time',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Success',
      description: `Appointment booked with ${professional?.name} for ${date.toLocaleDateString()} at ${time}`,
    });
    onOpenChange(false);
  };

  if (!professional) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book Appointment with {professional.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Date</label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Select Time</label>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger>
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleBooking} className="w-full">
            Confirm Booking
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}