import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc?: string;
  avatarFallback: string;
}

export function TestimonialCard({ quote, author, role, avatarSrc, avatarFallback }: TestimonialCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-background hover:border-accent">
      <CardContent className="pt-6 pb-4 flex-grow">
        <Quote className="w-8 h-8 text-accent mb-4 transform -scale-x-100 opacity-70" />
        <p className="text-foreground/90 italic mb-4 leading-relaxed">"{quote}"</p>
      </CardContent>
      <CardFooter className="flex items-center mt-auto border-t pt-4">
        <Avatar className="h-12 w-12 mr-4 border-2 border-accent/50">
          <AvatarImage src={avatarSrc || `https://placehold.co/80x80.png`} alt={author} data-ai-hint="person professional" />
          <AvatarFallback className="bg-accent/20 text-accent">{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-primary">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
