// 'use server';

/**
 * @fileOverview Generates a personalized welcome email draft for potential customers.
 *
 * - generateWelcomeEmail - A function that generates a welcome email.
 * - GenerateWelcomeEmailInput - The input type for the generateWelcomeEmail function.
 * - GenerateWelcomeEmailOutput - The return type for the generateWelcomeEmail function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWelcomeEmailInputSchema = z.object({
  industry: z.string().describe('The industry of the potential customer.'),
  role: z.string().describe('The role of the potential customer.'),
  requestDetails: z.string().describe('Details of the potential customer\'s initial request.'),
  similarUserContext: z.string().optional().describe('Context about similar past users and their successful interactions.'),
  dissimilarUserContext: z.string().optional().describe('Context about dissimilar past users and their unsuccessful interactions.'),
});

export type GenerateWelcomeEmailInput = z.infer<typeof GenerateWelcomeEmailInputSchema>;

const GenerateWelcomeEmailOutputSchema = z.object({
  emailDraft: z.string().describe('The generated welcome email draft.'),
});

export type GenerateWelcomeEmailOutput = z.infer<typeof GenerateWelcomeEmailOutputSchema>;

export async function generateWelcomeEmail(input: GenerateWelcomeEmailInput): Promise<GenerateWelcomeEmailOutput> {
  return generateWelcomeEmailFlow(input);
}

const generateWelcomeEmailPrompt = ai.definePrompt({
  name: 'generateWelcomeEmailPrompt',
  input: {
    schema: GenerateWelcomeEmailInputSchema,
  },
  output: {
    schema: GenerateWelcomeEmailOutputSchema,
  },
  prompt: `You are an AI assistant specializing in crafting personalized welcome emails for Myrrhe Assist, a virtual assistant service.

  Based on the potential customer's profile (industry: {{{industry}}}, role: {{{role}}}, request details: {{{requestDetails}}}), generate a welcome email draft.
  Incorporate insights from similar past users ({{{similarUserContext}}}) to create an engaging and relevant message.
  Avoid approaches that have proven unsuccessful with dissimilar users ({{{dissimilarUserContext}}}).

  Ensure the email:
  - Clearly introduces Myrrhe Assist and its services.
  - Highlights the benefits of the services for the customer's specific needs.
  - Includes a call to action to schedule a consultation or request more information.
  - Maintains a professional and friendly tone.
  - Is concise and easy to read.

  Here's the email draft:
  `,
});

const generateWelcomeEmailFlow = ai.defineFlow(
  {
    name: 'generateWelcomeEmailFlow',
    inputSchema: GenerateWelcomeEmailInputSchema,
    outputSchema: GenerateWelcomeEmailOutputSchema,
  },
  async input => {
    const {output} = await generateWelcomeEmailPrompt(input);
    return output!;
  }
);
