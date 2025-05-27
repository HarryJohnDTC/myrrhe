import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-card rounded-lg shadow-lg overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Myrrhe Assist: Votre Partenaire de Confiance pour une Gestion Optimisée
          </h1>
          <p className="text-lg text-foreground mb-8">
            Libérez-vous des tâches administratives et concentrez-vous sur votre cœur de métier. Myrrhe Assist vous offre un soutien sur mesure.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-shadow">
              Demander une consultation
            </Button>
          </Link>
        </div>
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl mt-8 md:mt-0">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Bureau professionnel et organisé symbolisant l'efficacité de Myrrhe Assist"
            fill
            className="object-cover"
            data-ai-hint="professional workspace"
            priority
          />
        </div>
      </div>
    </section>
  );
}
