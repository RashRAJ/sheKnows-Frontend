import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileForm } from '@/components/auth/profile-form';
import { SecuritySettings } from '@/components/auth/security-settings';
import { HealthProfile } from '@/components/profile/health-profile';
import { NotificationSettings } from '@/components/profile/notification-settings';

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
      
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="health">Health Info</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <ProfileForm />
        </TabsContent>

        <TabsContent value="health" className="space-y-6">
          <HealthProfile />
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <SecuritySettings />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <NotificationSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}