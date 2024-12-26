import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChatWithUploads } from "@/components/chat/chat-with-uploads";

export default function HealthPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Health Resources</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Women's Health Basics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Essential information about women's health, from reproductive health to preventive care.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mental Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Resources and support for mental health and emotional well-being.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Nutrition Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Expert advice on nutrition and dietary needs for women at different life stages.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <ChatWithUploads placeholder="What health information would you like to know? Upload medical reports or relevant images for more specific guidance." />
        </div>
      </div>
    </div>
  );
}