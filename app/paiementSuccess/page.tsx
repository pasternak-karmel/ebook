import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl font-bold">Paiement réussi !</CardTitle>
          <CardDescription>
            Merci pour votre achat. Votre transaction a été traitée avec succès.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Un email de confirmation a été envoyé à votre adresse.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button>Retour à l'accueil</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}