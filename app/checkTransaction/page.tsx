"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// import { toast } from "sonner";
import { Suspense } from "react";

export default function FedaKarmelPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const transactionId = searchParams.get("id");
  const email = searchParams.get("email");
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);

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
        // toast.error(error.message || "Une erreur est survenue");
        // setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (transactionId) {
      verifyTransaction();
    }
  }, [transactionId, email, router]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        Chargement...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Chargement en cours...</div>}>
      <div className="h-screen flex flex-col items-center justify-center">
        Nous sommes en train d&apos;effectuer votre transaction...
      </div>
    </Suspense>
  );
}
