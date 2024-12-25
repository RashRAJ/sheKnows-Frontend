'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Upload, Image, FileText } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  attachments?: Array<{
    type: 'image' | 'document';
    url: string;
    name: string;
  }>;
}

interface ChatWithUploadsProps {
  placeholder?: string;
}

export function ChatWithUploads({ placeholder }: ChatWithUploadsProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // TODO: Implement actual LLM API call here
      const response = { 
        role: 'assistant', 
        content: 'This is a placeholder response. Implement your LLM API here.' 
      };
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error('Failed to get response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        const message = {
          role: 'user',
          content: `Uploaded ${file.name}`,
          attachments: [{
            type: file.type.startsWith('image/') ? 'image' : 'document',
            url: URL.createObjectURL(file),
            name: file.name
          }]
        };
        setMessages(prev => [...prev, message]);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="flex flex-col h-[600px] bg-background border rounded-lg overflow-hidden">
      <div className="p-4 border-b bg-muted/30">
        <p className="text-sm text-muted-foreground">
          {placeholder || "What would you like to know? You can upload relevant documents or images."}
        </p>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted/50'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                {message.attachments?.map((attachment, index) => (
                  <div key={index} className="mt-2">
                    {attachment.type === 'image' ? (
                      <img 
                        src={attachment.url} 
                        alt={attachment.name}
                        className="max-w-xs rounded"
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-sm">
                        <FileText className="h-4 w-4" />
                        <span>{attachment.name}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t bg-background">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              multiple
              accept="image/*,.pdf,.doc,.docx"
            />
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload Files
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}