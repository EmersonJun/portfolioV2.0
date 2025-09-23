"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <div className={`space-y-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-primary/20 bg-card">
                <img src="/professional-headshot.png" alt="Foto do perfil" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance">Emerson Junior</h1>
                <h2 className="text-xl lg:text-2xl text-primary font-medium">Desenvolvedor Full Stack</h2>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg text-pretty">
              Construo experiências digitais acessíveis e pixel-perfect que combinam design inteligente com engenharia
              robusta. Especializado em criar interfaces que não apenas impressionam visualmente, mas são
              meticulosamente desenvolvidas para performance e usabilidade.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-primary-foreground hover:bg-accent"
              >
                Ver Projetos
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Entrar em Contato
              </Button>
            </div>

            {/* Links sociais */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:seu@email.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Área visual/código */}
          <div className={`${mounted ? "animate-fade-in-up" : "opacity-0"} lg:delay-200`}>
            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="ml-4 text-muted-foreground">portfolio.tsx</span>
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span> ={" "}
                  {`{`}
                </div>
                <div className="ml-4">
                  <span className="text-green-400">name</span>: <span className="text-orange-300">'Seu Nome'</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">role</span>:{" "}
                  <span className="text-orange-300">'Full Stack Developer'</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">skills</span>: [
                </div>
                <div className="ml-8">
                  <span className="text-orange-300">'React'</span>, <span className="text-orange-300">'Next.js'</span>,{" "}
                  <span className="text-orange-300">'TypeScript'</span>,
                </div>
                <div className="ml-8">
                  <span className="text-orange-300">'Node.js'</span>, <span className="text-orange-300">'Python'</span>,{" "}
                  <span className="text-orange-300">'PostgreSQL'</span>
                </div>
                <div className="ml-4">],</div>
                <div className="ml-4">
                  <span className="text-green-400">passion</span>:{" "}
                  <span className="text-orange-300">'Criar soluções inovadoras'</span>
                </div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
