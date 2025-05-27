'use server';

import { z } from 'zod';
import { generateWelcomeEmail, type GenerateWelcomeEmailInput } from '@/ai/flows/generate-welcome-email';

// Schema for contact form
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

interface ContactFormState {
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  };
  success: boolean;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Erreur de validation. Veuillez corriger les champs.',
      success: false,
    };
  }

  // Here you would typically send an email or save to a database
  // For this example, we'll just log it and return success
  console.log('Contact form submitted:', validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { message: 'Message envoyé avec succès ! Nous vous recontacterons bientôt.', success: true, errors: {} };
}


// Server action for Welcome Email Generator
const WelcomeEmailGeneratorSchema = z.object({
  industry: z.string().min(1, "L'industrie est requise."),
  role: z.string().min(1, "Le rôle est requis."),
  requestDetails: z.string().min(1, "Les détails de la requête sont requis."),
  similarUserContext: z.string().optional(),
  dissimilarUserContext: z.string().optional(),
});

export interface WelcomeEmailGeneratorState {
  emailDraft?: string;
  message?: string;
  errors?: {
    industry?: string[];
    role?: string[];
    requestDetails?: string[];
    similarUserContext?: string[];
    dissimilarUserContext?: string[];
    _form?: string[];
  };
  success: boolean;
}

export async function generateWelcomeEmailAction(
  prevState: WelcomeEmailGeneratorState,
  formData: FormData
): Promise<WelcomeEmailGeneratorState> {
  const validatedFields = WelcomeEmailGeneratorSchema.safeParse({
    industry: formData.get('industry'),
    role: formData.get('role'),
    requestDetails: formData.get('requestDetails'),
    similarUserContext: formData.get('similarUserContext'),
    dissimilarUserContext: formData.get('dissimilarUserContext'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Erreur de validation. Veuillez vérifier les champs.",
      success: false,
    };
  }

  try {
    const input: GenerateWelcomeEmailInput = {
        industry: validatedFields.data.industry,
        role: validatedFields.data.role,
        requestDetails: validatedFields.data.requestDetails,
        similarUserContext: validatedFields.data.similarUserContext || '', // Ensure empty strings if undefined
        dissimilarUserContext: validatedFields.data.dissimilarUserContext || '', // Ensure empty strings if undefined
    };
    const result = await generateWelcomeEmail(input);
    return {
      emailDraft: result.emailDraft,
      message: "Email de bienvenue généré avec succès.",
      success: true,
    };
  } catch (error) {
    console.error("Error generating welcome email:", error);
    let errorMessage = "Une erreur est survenue lors de la génération de l'email.";
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return {
      message: "Erreur serveur: " + errorMessage,
      errors: { _form: ["Erreur lors de la communication avec le service IA. Veuillez réessayer."] },
      success: false,
    };
  }
}
