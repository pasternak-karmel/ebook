"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FedaKarmelPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const transactionId = searchParams.get("id");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyTransaction = async () => {
      setLoading(true);
      try {
        if (!transactionId) {
          throw new Error("Transaction ID is missing");
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
          router.push(`/paiementSuccess`);
        } else if (data.type === "pending") {
          router.push("/paiementFailure");
        } else if (data.type === "failed") {
          router.push("/paiementFailure");
        } else {
          router.push("/unknown-status");
        }
      } catch (error) {
        console.error("Error verifying transaction", error);
        return alert("Une erreur est subvenue");
      } finally {
        setLoading(false);
      }
    };

    if (transactionId) {
      verifyTransaction();
    }
  }, [transactionId, router]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return <div>Nous sommes entrain d&apos;éffectuer votre transaction...</div>;
}
