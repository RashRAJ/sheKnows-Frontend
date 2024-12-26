'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function NotificationSettings() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    emailUpdates: true,
    healthReminders: true,
    communityMessages: true,
    appointmentReminders: true,
  });

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement notification settings update
      toast({
        title: 'Success',
        description: 'Notification settings updated successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update notification settings',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="emailUpdates" className="flex flex-col">
              <span>Email Updates</span>
              <span className="text-sm text-muted-foreground">Receive updates about your health and wellness journey</span>
            </Label>
            <Switch
              id="emailUpdates"
              checked={settings.emailUpdates}
              onCheckedChange={(checked) => setSettings(prev => ({ ...prev, emailUpdates: checked }))}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="healthReminders" className="flex flex-col">
              <span>Health Reminders</span>
              <span className="text-sm text-muted-foreground">Get reminders for health check-ups and medications</span>
            </Label>
            <Switch
              id="healthReminders"
              checked={settings.healthReminders}
              onCheckedChange={(checked) => setSettings(prev => ({ ...prev, healthReminders: checked }))}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="communityMessages" className="flex flex-col">
              <span>Community Messages</span>
              <span className="text-sm text-muted-foreground">Receive notifications about community activities</span>
            </Label>
            <Switch
              id="communityMessages"
              checked={settings.communityMessages}
              onCheckedChange={(checked) => setSettings(prev => ({ ...prev, communityMessages: checked }))}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="appointmentReminders" className="flex flex-col">
              <span>Appointment Reminders</span>
              <span className="text-sm text-muted-foreground">Get notifications about upcoming appointments</span>
            </Label>
            <Switch
              id="appointmentReminders"
              checked={settings.appointmentReminders}
              onCheckedChange={(checked) => setSettings(prev => ({ ...prev, appointmentReminders: checked }))}
            />
          </div>
        </div>

        <Button onClick={handleSave} disabled={isLoading} className="w-full">
          {isLoading ? 'Saving...' : 'Save Notification Settings'}
        </Button>
      </CardContent>
    </Card>
  );
}