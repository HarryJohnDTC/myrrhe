import Link from 'next/link';
import { Bot } from 'lucide-react';

export function Header() {
  return (
    <header className="py-6 bg-card shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          Myrrhe Assist
        </Link>
        <div className="space-x-4 md:space-x-6 flex items-center">
          <Link href="/#services" className="text-foreground hover:text-primary transition-colors text-sm md:text-base">
            Services
          </Link>
          <Link href="/#testimonials" className="text-foreground hover:text-primary transition-colors text-sm md:text-base">
            Témoignages
          </Link>
          <Link href="/#contact" className="text-foreground hover:text-primary transition-colors text-sm md:text-base">
            Contact
          </Link>
          {/* The AI tool link is removed as per user request
          <Link href="/welcome-email-generator" className="flex items-center text-foreground hover:text-primary transition-colors" title="Générateur d'Email de Bienvenue">
            <Bot className="mr-1 md:mr-2 h-5 w-5" />
            <span className="text-sm md:text-base">Outil IA</span>
          </Link>
          */}
        </div>
      </nav>
    </header>
  );
}
