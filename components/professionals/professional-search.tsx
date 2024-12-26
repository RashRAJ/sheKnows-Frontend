'use client';

import { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

const specialties = [
  'OB-GYN',
  'Primary Care',
  'Mental Health',
  'Nutrition',
  'Physical Therapy',
  'Dermatology',
  'Endocrinology',
  'Fertility',
];

export function ProfessionalSearch() {
  const [filters, setFilters] = useState({
    specialty: '',
    distance: 50,
    availability: '',
    rating: 0,
  });

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by name or specialty..."
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <div className="w-[200px]">
            <Select
              value={filters.specialty}
              onValueChange={(value) => setFilters({ ...filters, specialty: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty.toLowerCase()}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Results</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Distance</label>
                  <div className="pt-2">
                    <Slider
                      value={[filters.distance]}
                      onValueChange={([value]) => setFilters({ ...filters, distance: value })}
                      max={100}
                      step={1}
                    />
                    <div className="mt-1 text-sm text-muted-foreground">
                      Within {filters.distance} miles
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Availability</label>
                  <Select
                    value={filters.availability}
                    onValueChange={(value) => setFilters({ ...filters, availability: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="this-week">This Week</SelectItem>
                      <SelectItem value="next-week">Next Week</SelectItem>
                      <SelectItem value="any">Any Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Minimum Rating</label>
                  <Select
                    value={filters.rating.toString()}
                    onValueChange={(value) => setFilters({ ...filters, rating: parseInt(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select minimum rating" />
                    </SelectTrigger>
                    <SelectContent>
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <SelectItem key={rating} value={rating.toString()}>
                          {rating}+ Stars
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.specialty && (
          <Badge variant="secondary" className="text-sm">
            {filters.specialty}
            <button
              className="ml-2 hover:text-destructive"
              onClick={() => setFilters({ ...filters, specialty: '' })}
            >
              ×
            </button>
          </Badge>
        )}
        {filters.distance !== 50 && (
          <Badge variant="secondary" className="text-sm">
            Within {filters.distance} miles
            <button
              className="ml-2 hover:text-destructive"
              onClick={() => setFilters({ ...filters, distance: 50 })}
            >
              ×
            </button>
          </Badge>
        )}
        {filters.availability && (
          <Badge variant="secondary" className="text-sm">
            {filters.availability.replace('-', ' ')}
            <button
              className="ml-2 hover:text-destructive"
              onClick={() => setFilters({ ...filters, availability: '' })}
            >
              ×
            </button>
          </Badge>
        )}
      </div>
    </div>
  );
}