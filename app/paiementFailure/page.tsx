import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { XCircle } from "lucide-react"
import Link from "next/link"

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-red-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <XCircle className="w-16 h-16 text-red-500" />
          </div>
          <CardTitle className="text-2xl font-bold">Paiement échoué</CardTitle>
          <CardDescription>
            Nous sommes désolés, mais votre paiement n'a pas pu être traité.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Veuillez vérifier vos informations de paiement et réessayer.</p>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Link href="/payment">
            <Button variant="outline">Réessayer</Button>
          </Link>
          <Link href="/">
            <Button>Retour à l'accueil</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}