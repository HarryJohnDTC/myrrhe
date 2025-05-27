import { TestimonialCard } from '@/components/shared/TestimonialCard';

const testimonials = [
  {
    quote: "Myrrhe Assist a transformé ma gestion administrative. Je gagne un temps précieux et peux enfin me concentrer sur mon activité principale. Professionnalisme et efficacité au rendez-vous !",
    author: "Jean Dupont",
    role: "Entrepreneur, Secteur BTP",
    avatarFallback: "JD",
    avatarSrc: "https://placehold.co/80x80.png?text=JD",
  },
  {
    quote: "L'assistance pour mon dossier de sinistre a été impeccable. Myrrhe Assist a fait preuve d'une grande rigueur et m'a permis d'obtenir gain de cause rapidement. Je recommande vivement.",
    author: "Sophie Martin",
    role: "Particulier",
    avatarFallback: "SM",
    avatarSrc: "https://placehold.co/80x80.png?text=SM",
  },
  {
    quote: "Notre relation client s'est nettement améliorée grâce à Myrrhe Assist. Les réponses sont rapides, personnalisées et nos clients sont ravis. Un vrai plus pour notre image de marque.",
    author: "Thomas Dubois",
    role: "Gérant de PME, E-commerce",
    avatarFallback: "TD",
    avatarSrc: "https://placehold.co/80x80.png?text=TD",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-card rounded-lg shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          Ce que disent nos clients
        </h2>
         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          La satisfaction de nos clients est notre meilleure publicité. Découvrez leurs expériences avec Myrrhe Assist.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatarFallback={testimonial.avatarFallback}
              avatarSrc={testimonial.avatarSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
