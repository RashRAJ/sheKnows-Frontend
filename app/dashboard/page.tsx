import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Health Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Track your health metrics and upcoming appointments.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Wellness Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Monitor your progress towards wellness objectives.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Stay connected with your support network.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}