'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { submitContactForm } from '@/app/actions';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const initialState = {
  message: undefined,
  errors: undefined,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-shadow">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Envoi en cours...
        </>
      ) : (
        'Envoyer le Message'
      )}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Succès !' : 'Oups !',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);
  
  return (
    <form action={formAction} ref={formRef} className="space-y-6 p-6 md:p-8 bg-card rounded-lg shadow-xl">
      <div>
        <Label htmlFor="name" className="font-medium">Nom complet</Label>
        <Input type="text" id="name" name="name" required className="mt-1" aria-describedby="name-error"/>
        {state.errors?.name && <p id="name-error" className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
      </div>
      <div>
        <Label htmlFor="email" className="font-medium">Adresse Email</Label>
        <Input type="email" id="email" name="email" required className="mt-1" aria-describedby="email-error"/>
        {state.errors?.email && <p id="email-error" className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
      </div>
      <div>
        <Label htmlFor="message" className="font-medium">Votre Message</Label>
        <Textarea id="message" name="message" rows={5} required className="mt-1" aria-describedby="message-error"/>
        {state.errors?.message && <p id="message-error" className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
      </div>
      {state.errors?._form && <p className="text-sm font-medium text-destructive">{state.errors._form.join(', ')}</p>}
      <SubmitButton />
    </form>
  );
}
