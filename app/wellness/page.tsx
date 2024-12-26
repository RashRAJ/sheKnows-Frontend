import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChatWithUploads } from "@/components/chat/chat-with-uploads";

export default function WellnessPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Wellness Center</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fitness & Exercise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Personalized workout plans and fitness tips for every fitness level.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mindfulness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Meditation guides and stress management techniques for daily life.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Self-Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Tips and resources for maintaining physical and emotional well-being.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <ChatWithUploads placeholder="What wellness information would you like to know? Share your fitness goals or upload progress pictures for personalized advice." />
        </div>
      </div>
    </div>
  );
}