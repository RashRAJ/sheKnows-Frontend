'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const healthProfileSchema = z.object({
  dateOfBirth: z.string(),
  height: z.string(),
  weight: z.string(),
  bloodType: z.string(),
  allergies: z.string(),
  medications: z.string(),
});

export function HealthProfile() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(healthProfileSchema),
    defaultValues: {
      dateOfBirth: '',
      height: '',
      weight: '',
      bloodType: '',
      allergies: '',
      medications: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof healthProfileSchema>) => {
    setIsLoading(true);
    try {
      // TODO: Implement health profile update
      toast({
        title: 'Success',
        description: 'Health profile updated successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update health profile',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Date of Birth</label>
              <Input
                type="date"
                {...form.register('dateOfBirth')}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Blood Type</label>
              <Select onValueChange={(value) => form.setValue('bloodType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select blood type" />
                </SelectTrigger>
                <SelectContent>
                  {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Height (cm)</label>
              <Input
                type="number"
                {...form.register('height')}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Weight (kg)</label>
              <Input
                type="number"
                {...form.register('weight')}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Allergies</label>
            <Input
              placeholder="List any allergies"
              {...form.register('allergies')}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Current Medications</label>
            <Input
              placeholder="List any current medications"
              {...form.register('medications')}
            />
          </div>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Health Information'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}