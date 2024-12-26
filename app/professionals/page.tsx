import { ProfessionalSearch } from '@/components/professionals/professional-search';
import { ProfessionalGrid } from '@/components/professionals/professional-grid';

export default function ProfessionalsPage() {
  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Healthcare Professionals</h1>
        <p className="text-muted-foreground">
          Connect with verified healthcare professionals specializing in women's health and wellness
        </p>
      </div>
      
      <ProfessionalSearch />
      <ProfessionalGrid />
    </div>
  );
}