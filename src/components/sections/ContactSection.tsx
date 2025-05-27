import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          Contactez-Nous
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Une question ? Un projet ? N'hésitez pas à nous contacter. Nous serons ravis d'échanger avec vous et de trouver la meilleure solution pour vos besoins.
        </p>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="bg-card p-6 md:p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Discutons de votre projet</h3>
            <p className="text-muted-foreground mb-8">
              Prêt à déléguer vos tâches et à gagner en sérénité ? Remplissez le formulaire ou contactez-nous directement. Nous sommes impatients de découvrir comment Myrrhe Assist peut vous aider.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-foreground">
                <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <a href="mailto:contact@myrrhe-assist.com" className="hover:text-primary transition-colors break-all">mioraassdga@gmail.com</a>
              </div>
              <div className="flex items-center text-foreground">
                <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <a href="tel:+33123456789" className="hover:text-primary transition-colors">+261 34 45 634 12 </a>
              </div>
              <div className="flex items-center text-foreground">
                <MapPin className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <span>Basé à Madagascar (Intervention à distance)</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
