"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SendLink } from "@/lib/mail";

export default function PaymentSuccessPage() {
  const [email, setEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmailAndSendLink = async () => {
      try {
        const storedEmail = localStorage.getItem("email");
        if (!storedEmail) {
          throw new Error("Email introuvable");
        }
        setEmail(storedEmail);
        await SendLink(storedEmail);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Une erreur est survenue"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmailAndSendLink();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Nous traitons votre paiement...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Paiement réussi !
          </CardTitle>
          <CardDescription>
            Merci pour votre achat. Votre transaction a été traitée avec succès.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Un email contenant le lien de la formation vous a été envoyé à votre
            adresse <span className="font-bold">{email}</span>.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button>Retour à l&apos;accueil</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
