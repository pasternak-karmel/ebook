import { PaymentForm } from "./payment-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentPage() {
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
          <PaymentForm amount={49.99} />
        </CardContent>
      </Card>
    </div>
  )
}