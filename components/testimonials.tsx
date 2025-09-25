"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const testimonials = [
    {
      name: "Taynara Mafra",
      role: "Estudande",
      company: "Universidade Positivo",
      image: "/Tay.png",
      content:
        "Trabalhar com o Emerson é muito bom. Ele é uma pessoa prestativa, sempre disposto a ajudar quem precisa. Além disso, é direto no que faz e não enrola, o que facilita muito o dia a dia. Ter alguém como ele na equipe torna o ambiente mais leve, organizado e produtivo.",
      rating: 5,
      project: "Projetos de Faculdade",
    },
    {
      name: "João Ribas",
      role: "Product Owner",
      company: "Assumtek",
      image: "/Joao.png",
      content:
        "Tive a oportunidade de trabalhar com o Emerson e essa experiência foi muito enriquecedora, pois ele sempre se mostrou colaborativo, disposto a apoiar os colegas e explicar processos de forma clara e paciente. Além de ser dedicado e esforçado, contribui para um ambiente de trabalho mais leve e descontraído, demonstrando honestidade, profissionalismo e sendo um colega de equipe em quem se pode confiar.",
      rating: 5,
      project: "Assumtek",
    },
    {
      name: "Guilherme Dias",
      role: "Product and Project Owner",
      company: "Assumtek",
      image: "/Gui.png",
      content:
        "Profissional extremamente competente e proativo. Não apenas desenvolveu o que pedimos, mas também sugeriu melhorias que tornaram nosso produto muito mais robusto. Parceria de longo prazo garantida!",
      rating: 5,
      project: "Assumtek",
    },
    {
      name: "Luiz Ricardo",
      role: "Testes",
      company: "Assumtek",
      image: "/Luiz.png",
      content:
        "Desenvolvedor full-stack completo que entende tanto de frontend quanto backend. Criou uma arquitetura escalável que nos permitiu crescer rapidamente. Excelente investimento para nossa startup.",
      rating: 5,
      project: "Assumtek",
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
