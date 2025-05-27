import { ServiceCard } from '@/components/shared/ServiceCard';
import { Briefcase, ShieldCheck, Users } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Assistance Administrative',
    description: 'Optimisation de vos processus, gestion d\'agenda, préparation de documents, facturation, et plus encore pour une organisation impeccable.',
  },
  {
    icon: ShieldCheck,
    title: 'Assistance Expert Sinistre',
    description: 'Accompagnement spécialisé dans la constitution de vos dossiers de sinistre, suivi des réclamations et interface avec les assurances.',
  },
  {
    icon: Users,
    title: 'Gestion Relation Client',
    description: 'Support client réactif, gestion professionnelle des emails, suivi personnalisé des interactions pour fidéliser votre clientèle.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          Nos Services
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Découvrez comment Myrrhe Assist peut simplifier votre quotidien et optimiser votre activité grâce à une gamme complète de services personnalisés.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
