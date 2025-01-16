"use client"

import Image from 'next/image'
import { SectionTitle } from '../components/SectionTitle'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Separator } from '@/components/ui/separator'

import { FadeInComponent } from '../components/FadeInComponent'
import { FullSeparator } from '../components/FullSeparator'


const testimonials = [
  {
    name: "Marie Dupont",
    role: "Étudiante en 3ème année",
    quote: "IG2I m'a offert des opportunités incroyables pour développer mes compétences en informatique et en gestion de projet.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Thomas Martin",
    role: "Alumni, Promotion 2018",
    quote: "La formation polyvalente à IG2I m'a permis de rapidement m'adapter aux défis du monde professionnel en tant qu'ingénieur logiciel.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Dr. Sophie Leroy",
    role: "Professeure en Intelligence Artificielle",
    quote: "À IG2I, nous préparons nos étudiants à être à la pointe de l'innovation technologique, avec un focus sur l'IA et le machine learning.",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export function School() {
  return (
    <section className="relative overflow-hidden bg-background flex items-center justify-end flex-col" id="école">
        <SectionTitle 
          title="IG2I Centrale Lille" 
          subtitle="Une formation d'excellence en ingénierie informatique"
        />
        <FullSeparator />
      <div className="container px-4 md:px-6 border-l border-r border-border  py-8 ">

        <div className="flex flex-col md:flex-row gap-16 mb-16">
          <FadeInComponent className="w-full md:w-1/2 space-y-2">
              <h3 className="text-xl font-semibold">Présentation de l'école</h3>
              <Separator />
              <p className="text-muted-foreground pt-3">
                IG2I Centrale Lille est une école d'ingénieurs spécialisée en informatique et industrie, 
                offrant une formation de pointe sur 5 ans. Notre programme combine une solide base théorique 
                avec une approche pratique basée sur des projets concrets, préparant ainsi nos étudiants 
                aux défis technologiques du futur.
              </p>
              <p className="text-muted-foreground pt-2">
                Située au cœur de la région Hauts-de-France, notre école bénéficie de partenariats 
                étroits avec des entreprises leaders de l'industrie, offrant à nos étudiants des 
                opportunités uniques de stages et d'alternance tout au long de leur cursus.
              </p>
              <p className="text-muted-foreground pt-2">
                À IG2I, nous mettons l'accent sur l'innovation, la recherche et le développement personnel, 
                formant ainsi des ingénieurs polyvalents, créatifs et prêts à relever les défis du monde professionnel.
              </p>
          </FadeInComponent>

          <FadeInComponent className="w-full md:w-1/2" delay={200}>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Campus IG2I Centrale Lille"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-[400px]  bg-gray-200"
            />
          </FadeInComponent>
        </div>

        <div className="space-y-2">
          <FadeInComponent>

          <h3 className="text-xl font-semibold">Témoignages</h3>
          </FadeInComponent>
          <FadeInComponent>

            <Separator />
          </FadeInComponent>
          <FadeInComponent>

          <Card className="border-none shadow-none pt-3">
            <CardContent className="p-6">
              <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="p-4 text-center space-y-4">
                        <blockquote className="text-lg italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex flex-col items-center">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full mb-2 bg-gray-200"
                          />
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious variant="default" className='hidden md:flex' />
                <CarouselNext variant="default"  className='hidden md:flex' />
              </Carousel>
            </CardContent>
          </Card>
          </FadeInComponent>
        </div>
      </div>
    </section>
  )
}

