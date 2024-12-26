export interface Professional {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  location: string;
  distance: string;
  avatar: string;
  availability: string[];
  bio: string;
  education: string;
  languages: string[];
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
}

export interface SearchFilters {
  specialty: string;
  distance: number;
  availability: string;
  rating: number;
}