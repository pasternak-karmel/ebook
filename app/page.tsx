"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Check, Play, Shield, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function BookLandingPage() {
  const router = useRouter();
  const [studentsCount] = useState(12546);
  const featuredBooksRef = useRef<HTMLDivElement>(null);

  const scrollToFeaturedBooks = () => {
    featuredBooksRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookClick = (id: number) => {
    console.log(id);
    router.push(`/produit?id=${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Découvrez Nos Formations
            </h1>
            <p className="mb-8 max-w-md mx-auto text-xl text-gray-300">
              Plongez dans des mondes des affaires et devenez un entrepreneur
              aguerri avec notre sélection de formations.
            </p>
            <Button
              className="bg-white text-black hover:bg-gray-200"
              size="lg"
              onClick={scrollToFeaturedBooks}
            >
              Découvrir nos formations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section
        ref={featuredBooksRef}
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Nos formations
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                title: "Formation complète en Facebook ads",
                cover: "/fbAds.webp?height=400&width=300",
                rating: 4.5,
              },
              {
                id: 2,
                title: "Maitriser l'importation",

                cover: "/importation.png?height=400&width=300",
                rating: 4.8,
              },
              {
                id: 3,
                title: "Formation complète Canva + 100 templates réutilisables",

                cover: "/Image-Canva.jpg?height=400&width=300",
                rating: 4.6,
              },
              {
                id: 4,
                title: "Devenir millionnaire avec CHAP-GPT",

                cover: "/millionChatgpt.png?height=400&width=300",
                rating: 4.6,
              },
              {
                id: 5,
                title: "Reussir dans le Trading du Forex",

                cover: "/trading.jpg?height=400&width=300",
                rating: 4.6,
              },
              {
                id: 6,
                title: "Maitriser Word- Excel et PowerPoint",

                cover: "/WEP.jpg?height=400&width=300",
                rating: 4.9,
              },
              {
                id: 7,
                title: "Créez rapidement votre site avec Wordpress",

                cover: "/wordpress.png?height=400&width=300",
                rating: 4.9,
              },
            ].map((book, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2">{book.title}</CardTitle>
                  <p className="text-sm text-gray-500 mb-2"></p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(book.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {book.rating}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => handleBookClick(index)}
                  >
                    Consulter
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <Badge className="text-lg px-3 py-1">Formation Phare</Badge>
                <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Pack de 22 formations 
                </h2>
                <p className="text-xl text-muted-foreground">
                  Faîtes vous assez de revenu grâce à cet ensemble
                </p>
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
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
                    <Image
                      width={100}
                      height={100}
                      src="/pack22.jpeg?height=400&width=600"
                      alt="Aperçu du cours"
                      className="object-cover w-full h-full"
                    />
                    
                  </div>
                  <div className="grid gap-2">
                    {[
                      "Améliorer ta concentration 🧠 : Augmente ton efficacité au quotidien !",
                      "Maîtriser l'anglais 🇬🇧 : Deviens fluent de A à Z !",
                      "Apprendre le mixage audio* 🎧 : Crée des sons professionnels en un rien de temps !",
                      "Automatiser tes tâches sur ChatGPT 🤖 : Optimise ton temps avec l'IA la plus puissante !",
                      "Importer des produits d'Alibaba* 📦 : Domine le commerce Chine-Afrique",
                      "Réussir sur ComeUp 💼 : Deviens un pro du freelancing !",
                      "Créer des images avec Midjourney 🖼️ : Libère ta créativité avec l'IA pour des visuels uniques !",
                      "Lancer un e-commerce qui cartonne 🛒 : Monte ton business en ligne rentable !",
                      "Créer une boutique Shopify de A 🏪 : Domine Shopify et vends tes produits !",
                      "Apprendre à programmer👨‍💻 : Deviens développeur en un clin d'œil !",
                      "Maîtriser Excel VBA 📊 : Automatiser les tâches en un rien de temps !",
                      "Gérer les publicités Facebook 📣 : Génère des ventes grâce à la publicité ciblée !",
                      "Réussir en affiliation💰 : Apprends à gagner de l'argent avec l'affiliation !",
                      "Monter des vidéos pro 🎥 : Maîtrise Adobe Premiere Pro et DaVinci Resolve pour des vidéos de qualité !",
                      "Créer un site WordPress🖥️ : Mets en ligne ton propre site en quelques clics !",
                      "Investir en bourse📈 : Fais fructifier ton argent intelligemment !",
                      "Maîtriser Google Analytics 📊 : Analyse tes performances comme un pro !",
                      "Devenir expert en Print On Demand 👕 : Crée et vends tes designs sans stock !",
                      "Publicité sur les réseaux sociaux 📱 : Apprends à toucher une large audience !",
                      "Formation trading📉 : Maîtrise les marchés financiers pour générer des profits !",
                      "Formation mindset Barry 🧠 : Développe un mental d'acier pour atteindre tes objectifs !",
                    ].map((module, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>{module}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-2xl font-bold">3000 FCFA</div>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  >
                    Acheter maintenant
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
            Rejoignez notre communauté d&apos; entrepreneurs passionnés et générez vos premiers revenus passifs.
          </p>
          <Button className="bg-white text-primary hover:bg-gray-200" size="lg">
            Découvrir nos formations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">
            © 2024 CBCShop. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
