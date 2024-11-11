"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Play, Shield, Star } from "lucide-react"
import { useRef, useState } from "react"

export default function BookLandingPage() {
  const [studentsCount] = useState(12546)
  const featuredBooksRef = useRef(null)

  const scrollToFeaturedBooks = () => {
    featuredBooksRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Découvrez Nos Formations
            </h1>
            <p className="mb-8 max-w-md mx-auto text-xl text-gray-300">
              Plongez dans des mondes des affaires et devenez un entrepreneur aguerri avec notre sélection de formations. 
            </p>
            <Button 
              className="bg-white text-black hover:bg-gray-200" 
              size="lg"
              onClick={scrollToFeaturedBooks}
            >
              Nos formations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section ref={featuredBooksRef} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
           Nos formations
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{
                title: "L'Odyssée des Rêves",
                cover: "/placeholder.svg?height=400&width=300",
                rating: 4.5
              },
              {
                title: "Le Secret des Étoiles",
               
                cover: "/placeholder.svg?height=400&width=300",
                rating: 4.8
              },
              {
                title: "La Symphonie du Silence",
                
                cover: "/placeholder.svg?height=400&width=300",
                rating: 4.6
              }
            ].map((book, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <img src={book.cover} alt={book.title} className="w-full h-64 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2">{book.title}</CardTitle>
                  <p className="text-sm text-gray-500 mb-2"></p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{book.rating}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Acheter</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Featured Product Section */}
       <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                          Regarder l&apos;aperçu
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
                      S&apos;inscrire maintenant
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Prêt à Commencer Votre Prochaine Aventure ?
          </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl mb-8">
            Rejoignez notre communauté de lecteurs passionnés et découvrez des histoires qui vous transporteront.
          </p>
          <Button className="bg-white text-primary hover:bg-gray-200" size="lg">
            S&apos;inscrire maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">
            © 2024 Notre Librairie. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}