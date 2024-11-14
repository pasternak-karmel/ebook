"use client";
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
  const searchParams = useSearchParams();
  const PaymentId = searchParams.get("id");
  if(!PaymentId) return <div>Aucun article choisi trouvé</div>
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Finaliser votre achat
          </CardTitle>
          <CardDescription>
            Veuillez remplir les informations ci-dessous pour procéder au
            paiement.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PaymentForm type={PaymentId} />
        </CardContent>
      </Card>
    </div>
  );
}
