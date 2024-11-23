"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// interface Props {
//   transactionId: string;
//   email: string;
// }


function FedaKarmelPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const transactionId = searchParams.get("id");
  const email = searchParams.get("email");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyTransaction = async () => {
      setLoading(true);
      try {
        if (!transactionId) {
          throw new Error("L'identifiant de transaction est manquant");
        }
        if (!email) {
          throw new Error("Adresse email manquante");
        }

        const res = await fetch("/api/fedatransac", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            transactionId,
          }),
        });

        const data = await res.json();

        if (data.type === "approved") {
          localStorage.setItem("email", email);
          router.push(`/paiementSuccess`);
        } else if (data.type === "pending" || data.type === "failed") {
          router.push("/paiementFailure");
        } else {
          router.push("/unknown-status");
        }
      } catch (error) {
        console.error("Erreur de vérification de la transaction", error);
        setError(
          error instanceof Error ? error.message : "Une erreur est survenue"
        );
      } finally {
        setLoading(false);
      }
    };

    verifyTransaction();
  }, [transactionId, email, router]);

  if (loading) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Vérification de la transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Nous sommes en train d&apos;effectuer votre transaction...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Erreur</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">{error}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => router.push("/")}>
            Retour à l&apos;accueil
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // return <div>Traitement de votre paiement...</div>;
  return null;
}

export default function FedaKarmelPage() {
  return (
    <Suspense fallback={<div>Chargement des paramètres...</div>}>
      <FedaKarmelPageContent />
    </Suspense>
  );
}