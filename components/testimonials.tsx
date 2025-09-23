"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO",
      company: "TechStart",
      image: "/professional-woman-headshot.png",
      content:
        "Trabalhar com este desenvolvedor foi uma experiência excepcional. A qualidade do código e a atenção aos detalhes superaram nossas expectativas. Nosso projeto foi entregue no prazo e funcionou perfeitamente desde o primeiro dia.",
      rating: 5,
      project: "Plataforma E-commerce",
    },
    {
      name: "João Santos",
      role: "CTO",
      company: "InnovaCorp",
      image: "/professional-man-headshot.png",
      content:
        "Impressionante capacidade técnica e comunicação clara. Conseguiu transformar nossas ideias complexas em uma solução elegante e funcional. Definitivamente recomendaria para qualquer projeto de desenvolvimento web.",
      rating: 5,
      project: "Dashboard Analytics",
    },
    {
      name: "Ana Costa",
      role: "Product Manager",
      company: "DigitalFlow",
      image: "/professional-woman-headshot-business.png",
      content:
        "Profissional extremamente competente e proativo. Não apenas desenvolveu o que pedimos, mas também sugeriu melhorias que tornaram nosso produto muito mais robusto. Parceria de longo prazo garantida!",
      rating: 5,
      project: "App Mobile Híbrido",
    },
    {
      name: "Carlos Oliveira",
      role: "Founder",
      company: "StartupLab",
      image: "/professional-man-headshot-startup.jpg",
      content:
        "Desenvolvedor full-stack completo que entende tanto de frontend quanto backend. Criou uma arquitetura escalável que nos permitiu crescer rapidamente. Excelente investimento para nossa startup.",
      rating: 5,
      project: "Plataforma SaaS",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
            O que dizem sobre <span className="text-gradient">meu trabalho</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Feedback de clientes e parceiros que confiaram em meu trabalho
          </p>

          {/* Carrossel de testemunhos */}
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              {/* Quote icon */}
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full border border-primary/20">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Conteúdo do testemunho */}
              <div className="text-center space-y-6">
                <p className="text-lg lg:text-xl text-muted-foreground italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Informações do cliente */}
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-2 border-primary/20"
                  />
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-primary font-medium">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Projeto: {testimonials[currentIndex].project}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controles de navegação */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-primary/20 hover:bg-primary/10 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Indicadores */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-primary/20 hover:bg-primary/10 bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Grid de logos/empresas */}
          <div className="mt-16">
            <p className="text-center text-muted-foreground mb-8">Empresas que confiaram no meu trabalho</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center">
                  <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
                    <p className="font-semibold text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
