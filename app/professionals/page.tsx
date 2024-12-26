<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
=======
import { ProfessionalSearch } from '@/components/professionals/professional-search';
import { ProfessionalGrid } from '@/components/professionals/professional-grid';
>>>>>>> master

export default function ProfessionalsPage() {
  return (
    <div className="container py-8">
<<<<<<< HEAD
      <h1 className="text-4xl font-bold mb-8">Healthcare Professionals</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Find a Doctor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Connect with verified healthcare professionals specializing in women's health.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mental Health Specialists</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Licensed therapists and counselors dedicated to women's mental health.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Wellness Coaches</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Expert coaches for nutrition, fitness, and holistic wellness guidance.
            </p>
          </CardContent>
        </Card>
      </div>
=======
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Healthcare Professionals</h1>
        <p className="text-muted-foreground">
          Connect with verified healthcare professionals specializing in women's health and wellness
        </p>
      </div>
      
      <ProfessionalSearch />
      <ProfessionalGrid />
>>>>>>> master
    </div>
  );
}