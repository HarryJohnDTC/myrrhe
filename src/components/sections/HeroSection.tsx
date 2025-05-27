import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const calendlyLink = "https://l.facebook.com/l.php?u=https%3A%2F%2Fcalendly.com%2Fmiora_assistanteadministratif%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExaURQZm9qZXVBM2c4ZUUyMAEeaoN6tPCGS9UHoUvvPIKuD4BRi63RDdpcjCY4galATjTSPUM7sP9ttjbq5yc_aem_MfZNqBZPw2NeXTA4hSCq_A&h=AT1PtDcKYNuA64oocMCDoHJmrrGF-z140LKEXw2XIna_hetQPlg_oWfIoznL5B2iTcJPpk3a-kxcPDw6ZkRsIN-4eFkd-ZwGWuUGQ0vpcMmwX5E8BVAQJUDjsizdNxKGbONx2A";

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
          <Link href= {calendlyLink}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-shadow">
              Demander une consultation
            </Button>
          </Link>
        </div>
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl mt-8 md:mt-0">
          <Image
            src="/fondMyrrhe.jpg"
            alt="Bannière principale de Myrrhe Assist"
            fill
            className="object-cover"
            data-ai-hint="custom banner"
            priority
          />

        </div>
      </div>
    </section>
  );
}
