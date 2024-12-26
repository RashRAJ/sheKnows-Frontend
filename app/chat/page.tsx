import { ChatInterface } from '@/components/chat/chat-interface';

export default function ChatPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Health Assistant</h1>
      <ChatInterface />
    </div>
  );
}