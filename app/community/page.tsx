import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CommunityPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Community</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Discussion Forums</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Join conversations with other members about health, wellness, and life experiences.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Support Groups</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Find and join support groups focused on specific health topics and life stages.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Discover virtual and local events focused on women's health and wellness.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}