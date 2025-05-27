import { WelcomeEmailGeneratorForm } from '@/components/forms/WelcomeEmailGeneratorForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Générateur d\'Email de Bienvenue - Myrrhe Assist',
  description: 'Utilisez notre outil IA pour générer des emails de bienvenue personnalisés pour vos prospects.',
};

export default function WelcomeEmailGeneratorPage() {
  return (
    <div className="py-8">
      <WelcomeEmailGeneratorForm />
    </div>
  );
}
