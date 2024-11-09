import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Star, Download, Shield, Check, Play } from "lucide-react"

export default function LandingPage() {
  const [studentsCount, setStudentsCount] = useState(12546)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Transformez Votre Vie Numérique
            </h1>
            <p className="mb-8 max-w-md mx-auto text-xl text-gray-300">
              Découvrez nos produits digitaux premium pour atteindre vos objectifs plus rapidement et plus efficacement.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-white text-black hover:bg-gray-200" size="lg">
                Découvrir nos produits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black" size="lg">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <ArrowRight className="inline-block h-8 w-8 text-white animate-bounce" />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* Popular Products Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Nos produits les plus populaires
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Guide de productivité ultime",
                  description: "Boostez votre efficacité avec nos techniques éprouvées.",
                  price: "29.99€",
                  badge: "Bestseller"
                },
                {
                  title: "Cours de photographie digitale",
                  description: "Maîtrisez l'art de la photographie numérique comme un pro.",
                  price: "49.99€",
                  badge: "Nouveau"
                },
                {
                  title: "Pack de templates pour médias sociaux",
                  description: "Créez des posts accrocheurs en quelques clics.",
                  price: "19.99€",
                  badge: "Populaire"
                }
              ].map((product, index) => (
                <Card key={index} className="flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge>{product.badge}</Badge>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <Button>Acheter maintenant</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Ce que disent nos clients
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sophie L.",
                  avatar: "S",
                  testimonial: "Ces produits ont complètement transformé ma façon de travailler. Je suis beaucoup plus productive maintenant !",
                  rating: 5
                },
                {
                  name: "Thomas M.",
                  avatar: "T",
                  testimonial: "La qualité des contenus est exceptionnelle. Je recommande vivement à tous les entrepreneurs.",
                  rating: 5
                },
                {
                  name: "Emma R.",
                  avatar: "E",
                  testimonial: "Un excellent rapport qualité-prix. Ces outils m'ont fait gagner des heures de travail.",
                  rating: 4
                }
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{testimonial.name}</CardTitle>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">"{testimonial.testimonial}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Product Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <Badge className="text-lg px-3 py-1">Formation Phare</Badge>
                <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Maîtrisez la Création de Produits Digitaux
                </h2>
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
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span>{studentsCount} étudiants inscrits</span>
                </div>
              </div>
              <Card className="relative overflow-hidden">
                <CardHeader className="pb-0">
                  <CardTitle className="text-2xl">Aperçu du cours</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="aspect-video rounded-md overflow-hidden relative">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Aperçu du cours"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" className="rounded-full">
                        <Play className="w-6 h-6 mr-2" />
                        Regarder l'aperçu
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    {[
                      "Fondamentaux des produits digitaux",
                      "Recherche de marché et validation d'idées",
                      "Conception et prototypage",
                      "Développement et tests",
                      "Stratégies de lancement et de marketing",
                    ].map((module, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>{module}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-2xl font-bold">299€</div>
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                    S'inscrire maintenant
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Prêt à transformer votre vie numérique ?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                  Rejoignez des milliers de clients satisfaits et commencez votre voyage vers le succès dès aujourd'hui.
                </p>
              </div>
              <Button className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" size="lg">
                Commencer maintenant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. Tous droits réservés.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Conditions d'utilisation
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Politique de confidentialité
          </a>
        </nav>
      </footer>
    </div>
  )
}