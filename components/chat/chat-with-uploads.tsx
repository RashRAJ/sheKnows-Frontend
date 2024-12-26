'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Upload, Image, FileText } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';  // Fixed type to be union
  content: string;
  attachments?: Array<{
    type: 'image' | 'document';
    url: string;
    name: string;
  }>;
}

// Rest of the file remains the same...