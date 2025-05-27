'use client';

import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { generateWelcomeEmailAction, type WelcomeEmailGeneratorState } from '@/app/actions';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Loader2, Copy } from 'lucide-react';

const initialState: WelcomeEmailGeneratorState = {
  emailDraft: undefined,
  message: undefined,
  errors: undefined,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-shadow">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Génération en cours...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" />
          Générer l'Email
        </>
      )}
    </Button>
  );
}

export function WelcomeEmailGeneratorForm() {
  const [state, formAction] = useActionState(generateWelcomeEmailAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Succès !' : 'Oups !',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
  }, [state, toast]);

  const handleCopyToClipboard = () => {
    if (state.emailDraft) {
      navigator.clipboard.writeText(state.emailDraft)
        .then(() => {
          toast({ title: 'Copié !', description: "L'email a été copié dans le presse-papiers." });
        })
        .catch(err => {
          toast({ title: 'Erreur', description: "Impossible de copier l'email.", variant: 'destructive' });
          console.error('Failed to copy text: ', err);
        });
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <Bot className="mr-3 h-7 w-7 text-primary" />
          Générateur d'Email de Bienvenue (IA)
        </CardTitle>
        <CardDescription>
          Créez un brouillon d'email personnalisé pour vos prospects en fonction de leur profil et de leur demande initiale. L'IA utilise les contextes fournis pour affiner la pertinence de l'email.
        </CardDescription>
      </CardHeader>
      <form action={formAction} ref={formRef} className="space-y-0">
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="industry">Industrie du prospect</Label>
              <Input type="text" id="industry" name="industry" required className="mt-1" placeholder="Ex: E-commerce, BTP..." aria-describedby="industry-error" />
              {state.errors?.industry && <p id="industry-error" className="text-sm text-destructive mt-1">{state.errors.industry.join(', ')}</p>}
            </div>
            <div>
              <Label htmlFor="role">Rôle du prospect</Label>
              <Input type="text" id="role" name="role" required className="mt-1" placeholder="Ex: Gérant, Responsable Marketing..." aria-describedby="role-error" />
              {state.errors?.role && <p id="role-error" className="text-sm text-destructive mt-1">{state.errors.role.join(', ')}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="requestDetails">Détails de la demande initiale</Label>
            <Textarea id="requestDetails" name="requestDetails" rows={3} required className="mt-1" placeholder="Ex: Recherche aide pour gestion administrative..." aria-describedby="requestDetails-error" />
            {state.errors?.requestDetails && <p id="requestDetails-error" className="text-sm text-destructive mt-1">{state.errors.requestDetails.join(', ')}</p>}
          </div>
          <div>
            <Label htmlFor="similarUserContext">Contexte utilisateurs similaires (optionnel)</Label>
            <Textarea id="similarUserContext" name="similarUserContext" rows={3} className="mt-1" placeholder="Informations sur ce qui a bien fonctionné avec des clients similaires." />
          </div>
          <div>
            <Label htmlFor="dissimilarUserContext">Contexte utilisateurs dissimilaires (optionnel)</Label>
            <Textarea id="dissimilarUserContext" name="dissimilarUserContext" rows={3} className="mt-1" placeholder="Informations sur ce qui n'a pas fonctionné ou les erreurs à éviter." />
          </div>

          {state.errors?._form && <p className="text-sm font-medium text-destructive text-center">{state.errors._form.join(', ')}</p>}
          
        </CardContent>
        <CardFooter className="flex flex-col items-stretch gap-4 pt-0 pb-6 px-6">
          <SubmitButton />
          {state.emailDraft && (
            <div className="mt-4 p-4 border rounded-md bg-muted/30">
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="generatedEmail" className="text-lg font-semibold">Email généré (brouillon) :</Label>
                <Button variant="ghost" size="sm" onClick={handleCopyToClipboard} aria-label="Copier l'email">
                  <Copy className="h-4 w-4 mr-2" /> Copier
                </Button>
              </div>
              <Textarea id="generatedEmail" value={state.emailDraft} readOnly rows={12} className="mt-1 bg-background focus:ring-0" />
              <p className="text-xs text-muted-foreground mt-2">Relisez et personnalisez ce brouillon avant de l'envoyer à votre prospect.</p>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
