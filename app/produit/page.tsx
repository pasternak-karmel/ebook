"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Award, Check, Clock, Star, Users } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useRef } from "react";

const products: {
  [key: number]: {
    title: string;
    cover: string;
    rating: number;
    price: string;
    description: string;
    modules: string[];
  };
} = {
  1: {
    title: "Formation complète en Facebook ads",
    cover: "/fbAds.webp",
    rating: 4.5,
    price: "1500 FCFA",
    description:
      "Maîtrisez les publicités Facebook pour booster votre business en ligne.",
    modules: [
      "Introduction aux Facebook Ads",
      "Création de campagnes efficaces",
      "Ciblage avancé",
      "Optimisation des performances",
      "Analyse et reporting",
    ],
  },
  2: {
    title: "Maitriser l'importation",
    cover: "/importation.png",
    rating: 4.8,
    price: "1500 FCFA",
    description:
      "Apprenez les secrets de l'importation pour développer votre entreprise.",
    modules: [
      "Bases de l'importation",
      "Recherche de fournisseurs",
      "Négociation et contrats",
      "Logistique et douanes",
      "Gestion des risques",
    ],
  },
  3: {
    title: "Formation complète Canva + 100 templates réutilisables",
    cover: "/Image-Canva.jpg",
    rating: 4.6,
    price: "1500 FCFA",
    description:
      "Devenez un expert en design graphique avec Canva et nos templates exclusifs.",
    modules: [
      "Prise en main de Canva",
      "Création de designs professionnels",
      "Utilisation avancée des templates",
      "Branding et cohérence visuelle",
      "Optimisation pour les réseaux sociaux",
    ],
  },
  4: {
    title: "Devenir millionnaire avec CHAT-GPT",
    cover: "/millionChatgpt.png",
    rating: 4.6,
    price: "1500 FCFA",
    description:
      "Exploitez le potentiel de l'IA pour générer des revenus passifs.",
    modules: [
      "Introduction à ChatGPT",
      "Création de contenu avec l'IA",
      "Automatisation des tâches",
      "Développement de produits IA",
      "Stratégies de monétisation",
    ],
  },
  5: {
    title: "Reussir dans le Trading du Forex",
    cover: "/trading.jpg",
    rating: 4.6,
    price: "1500 FCFA",
    description:
      "Maîtrisez les techniques de trading Forex pour réussir sur les marchés financiers.",
    modules: [
      "Fondamentaux du Forex",
      "Analyse technique et fondamentale",
      "Gestion des risques",
      "Psychologie du trading",
      "Stratégies avancées",
    ],
  },
  6: {
    title: "Maitriser Word- Excel et PowerPoint",
    cover: "/WEP.jpg",
    rating: 4.9,
    price: "1500 FCFA",
    description:
      "Devenez un expert de la suite Microsoft Office pour booster votre productivité.",
    modules: [
      "Word avancé",
      "Excel pour l'analyse de données",
      "Présentations PowerPoint percutantes",
      "Automatisation avec VBA",
      "Intégration des outils Office",
    ],
  },
  7: {
    title: "Créez rapidement votre site avec Wordpress",
    cover: "/wordpress.png",
    rating: 4.9,
    price: "1500 FCFA",
    description:
      "Apprenez à créer et gérer un site web professionnel avec WordPress.",
    modules: [
      "Installation et configuration",
      "Choix et personnalisation de thèmes",
      "Création de contenu",
      "Plugins essentiels",
      "SEO et performance",
    ],
  },
  8: {
    title: "Pack de 22 formations",
    cover: "/pack22.jpeg",
    rating: 4.9,
    price: "3500 FCFA",
    description:
      "Un pack complet de 22 formations pour devenir un entrepreneur polyvalent.",
    modules: [
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
    ],
  },
};

export default function ProduitPage() {
  return (
    <Suspense fallback={<div>Chargement des informations de la page...</div>}>
      <ProductPage />
    </Suspense>
  );
}

function ProductPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = Number(searchParams.get("id"));

  const productsRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookClick = () => {
    router.push(`/paiement?id=${productId}`);
  };
  const handleHomePage = () => {
    router.push(`/`);
  };

  const product = products[productId] || products[1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <Button
              size="lg"
              className="bg-black text-white"
              onClick={handleHomePage}
            >
              Retour
            </Button>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              {product.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {product.description}
            </p>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-300 text-gray-300"
                  }`}
                />
              ))}
              <span className="font-medium">{product.rating}</span>
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
                <Image
                  src={product.cover}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-2xl font-bold">{product.price}</div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
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
                  Explorez notre programme complet pour maîtriser{" "}
                  {product.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {product.modules.map((produit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{produit}</span>
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
                  content:
                    "Cette formation a transformé ma façon de créer des produits digitaux. Je suis maintenant confiante pour lancer mes propres projets !",
                },
                {
                  name: "Thomas M.",
                  role: "Designer UX/UI",
                  content:
                    "Le contenu est incroyablement complet et à jour. J'ai appris des techniques que j'utilise quotidiennement dans mon travail.",
                },
                {
                  name: "Emma R.",
                  role: "Marketeur digital",
                  content:
                    "Les stratégies de lancement enseignées dans ce cours m'ont permis de tripler mes ventes dès mon premier produit !",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {testimonial.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="instructeur" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Alex Dupont</CardTitle>
                <CardDescription>
                  Expert en produits digitaux & Entrepreneur
                </CardDescription>
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
                      Alex Dupont est un entrepreneur à succès et un expert
                      reconnu dans le domaine des produits digitaux. Avec plus
                      de 15 ans d&apos;expérience, il a lancé plusieurs startups
                      prospères et conseillé de nombreuses entreprises Fortune
                      500.
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
          <h2 className="text-3xl font-bold mb-4">
            Prêt à transformer vos idées en produits digitaux à succès ?
          </h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
            onClick={scrollToProducts}
          >
            Découvrez nos produits
            <ArrowRight className="w-5 h-5 ml-2 animate-bounce" />
          </Button>
        </div>

        <div ref={productsRef} className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Nos produits les plus populaires
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(products)
              .slice(0, 3)
              .map(([id, product]) => (
                <Card key={id}>
                  <CardHeader>
                    <Image
                      src={product.cover}
                      alt={product.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <CardTitle className="mt-4">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {product.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <Button onClick={() => router.push(`/produit?id=${id}`)}>
                      Acheter
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
