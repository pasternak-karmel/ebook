"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Award, Check, Clock, Star, Users } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useRef, useState } from 'react'

export default function ProductPage() {
  const searchParams = useSearchParams();
  const PaymentId = searchParams.get("id");

  const router = useRouter();

  const [progress] = useState(13)
  const productsRef = useRef<HTMLDivElement>(null)

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleBookClick = () => {
    console.log(PaymentId);
    router.push(`/paiement?id=${PaymentId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <Badge className="text-lg px-3 py-1">Meilleures ventes</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Maîtrisez la Création de Produits Digitaux
            </h1>
            <p className="text-xl text-muted-foreground">
              Transformez vos idées en produits digitaux lucratifs avec notre formation complète et interactive.
            </p>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="font-medium">4.9</span>
              <span className="text-muted-foreground">(2,945 avis)</span>
            </div>
            <div className="flex items-center space-x-4">
              <Users className="w-5 h-5 text-blue-500" />
              <span>12,546 étudiants inscrits</span>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="w-5 h-5 text-green-500" />
              <span>40 heures de contenu</span>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="w-5 h-5 text-purple-500" />
              <span>Certificat d&apos;achèvement</span>
            </div>
          </div>
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl">Aperçu du cours</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="aspect-video rounded-md overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Couverture du produit"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progression</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-2xl font-bold">299€</div>
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              onClick={handleBookClick}
              >
                Acheter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="contenu" className="mt-16">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="contenu">Contenu du cours</TabsTrigger>
            <TabsTrigger value="temoignages">Témoignages</TabsTrigger>
            <TabsTrigger value="instructeur">Instructeur</TabsTrigger>
          </TabsList>
          <TabsContent value="contenu" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Modules de formation</CardTitle>
                <CardDescription>
                  Explorez notre programme complet pour maîtriser la création de produits digitaux
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {[
                  "Fondamentaux des produits digitaux",
                  "Recherche de marché et validation d'idées",
                  "Conception et prototypage",
                  "Développement et tests",
                  "Stratégies de lancement et de marketing",
                  "Optimisation et croissance",
                ].map((module, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{module}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="temoignages" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sophie L.",
                  role: "Entrepreneure digitale",
                  content: "Cette formation a transformé ma façon de créer des produits digitaux. Je suis maintenant confiante pour lancer mes propres projets !",
                },
                {
                  name: "Thomas M.",
                  role: "Designer UX/UI",
                  content: "Le contenu est incroyablement complet et à jour. J'ai appris des techniques que j'utilise quotidiennement dans mon travail.",
                },
                {
                  name: "Emma R.",
                  role: "Marketeur digital",
                  content: "Les stratégies de lancement enseignées dans ce cours m'ont permis de tripler mes ventes dès mon premier produit !",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="instructeur" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Alex Dupont</CardTitle>
                <CardDescription>Expert en produits digitaux & Entrepreneur</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Alex Dupont"
                    className="rounded-full w-24 h-24 object-cover"
                  />
                  <div>
                    <p className="text-muted-foreground">
                      Alex Dupont est un entrepreneur à succès et un expert reconnu dans le domaine des produits digitaux. 
                      Avec plus de 15 ans d&apos;expérience, il a lancé plusieurs startups prospères et conseillé de nombreuses entreprises Fortune 500.
                    </p>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <span>Étudiants formés</span>
                    <span className="font-bold">50,000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Produits lancés</span>
                    <span className="font-bold">25+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Note moyenne des cours</span>
                    <span className="font-bold">4.9/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à transformer vos idées en produits digitaux à succès ?</h2>
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white" onClick={scrollToProducts}>
            Découvrez nos produits
            <ArrowRight className="w-5 h-5 ml-2 animate-bounce" />
          </Button>
        </div>

        <div ref={productsRef} className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos produits les plus populaires</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Maîtrise du Design UX/UI",
                price: "249€",
                image: "/placeholder.svg?height=200&width=300",
                description: "Apprenez à créer des interfaces utilisateur intuitives et esthétiques."
              },
              {
                title: "Growth Hacking Avancé",
                price: "299€",
                image: "/placeholder.svg?height=200&width=300",
                description: "Découvrez les techniques de croissance rapide pour votre startup."
              },
              {
                title: "Développement Full Stack",
                price: "399€",
                image: "/placeholder.svg?height=200&width=300",
                description: "Devenez un développeur polyvalent capable de créer des applications web complètes."
              }
            ].map((product, index) => (
              <Card key={index}>
                <CardHeader>
                  <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md" />
                  <CardTitle className="mt-4">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <Button>Acheter</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}