"use client";

import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PaymentForm from "./payment-form";
import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Chargement des informations de paiement...</div>}>
      <PaymentPageContent />
    </Suspense>
  );
}

function PaymentPageContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("id");

  if (!paymentId) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Aucun article choisi trouvé</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Finaliser votre achat</CardTitle>
          <CardDescription>
            Veuillez remplir les informations ci-dessous pour procéder au paiement.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PaymentForm type={paymentId} />
        </CardContent>
      </Card>
    </div>
  );
}
