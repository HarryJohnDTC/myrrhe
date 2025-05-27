import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-background hover:border-primary">
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <div className="p-3 bg-primary/10 rounded-md">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-xl mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pt-2">
        <CardDescription className="text-base text-foreground/80">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
