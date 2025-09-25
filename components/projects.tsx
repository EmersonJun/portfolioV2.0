"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "Pokedex",
      description:
        "Pokedex interativa fieta tom html, css e js ultilizando da pokeAPI para maior interatividade com o usuario.",
      image: "/Pokedex.png",
      technologies: ["Html", "CSS", "Js"],
      github: "https://github.com/EmersonJun/pokedex",
      live: "https://pokedex-project-ejun.netlify.app/",
    },
    {
      title: "Mario Run",
      image: "/MarioRun.png",
      description:
        "Web-based game inspired by the classic Mario. Developed with JavaScript, HTML, and CSS, focusing on smooth gameplay.",
      technologies: ["Html", "CSS", "Js"],
      github: "https://github.com/EmersonJun/mario",
      live: "https://mariorun-project-ejun.netlify.app/",
    },
    {
      title: "Relogio digital",
      description:
        "Pagina web que replica perfeitamente um relogio digital.",
      image: "/Relogio.png",
      technologies: ["Html", "CSS", "Js"],
      github: "https://github.com/EmersonJun/relogio-digital",
      live: "https://relogio-project-ejun.netlify.app/",
    },
    {
      title: "Conversor de moedas",
      description:
        "Sistema web que ultiliza de API para fazer a convercao de valores de dinheiro.",
      image: "/Conversor.png",
      technologies: ["Html", "CSS", "Js"],
      github: "https://github.com/EmersonJun/Conversor-De-Moedas",
      live: "https://conversor-project-ejun.netlify.app/",
    },
    {
      title: "Randomizador de numeros",
      image: "/Randomizador.png",
      description:
        "Randomizador de numeros feito com js html e css.",
      technologies: ["Html", "CSS", "Js"],
      github: "https://github.com/EmersonJun/randomizador-de-numeros",
      live: "https://randomizador-project-ejun.netlify.app/",
    },
    {
      title: "Pedra papel e tesoura",
      description:
        "Sistema web que replica o jogo de pedra papel e tesoura.",
      image: "/Jokenpo.png",
      technologies: ["Html", "CSS", "Js"],
      github: "https://github.com/EmersonJun/jokenp-",
      live: "https://jokenpo-project-ejun.netlify.app/",
    },
    {
      title: "Portifolio de edicao",
      description:
        "Portifolio de edicao de videos criado para treinar habilidades em programacao  .",
      image: "/Edicao.png",
      technologies: ["Html", "CSS", "Js"],
      github: "https://github.com/EmersonJun/Portifolio-Edicao",
      live: "https://portifolio-edicao.netlify.app",
    },
    {
      title: "API de Academia",
      image: "/Academia.png",
      description:
        "Api feita para cadastrar equipamentos de academia, listalos e fazer calculos de valores.",
      technologies: ["C#", "CSS"],
      github: "https://github.com/EmersonJun/ApiAcademy-main-End-main",
    },
    {
      title: "Portifolio de Design",
      description:
        "Portifolio de design basico feito para treino de programacao web.",
      image: "/design.png",
      technologies: ["Html", "CSS", "Js"],
      github: "https://github.com/VictorPisani/Portifolio-Design",
      live: "https://relogio-project-ejun.netlify.app/",
    },
    {
      title: "Cassino Virtual",
      description:
        "Cassino virtual feito para um trabalho final de semestre completamente em java.",
      image: "/",
      technologies: ["Java"],
      github: "https://github.com/EmersonJun/Trabalho-De-Java-2",
    },
  ]

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>

          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 mx-2">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>

                      <div className="p-4 space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>

                        <p className="text-muted-foreground text-pretty text-sm line-clamp-2">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-xs"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-1 h-3 w-3" />
                              Código
                            </a>
                          </Button>
                          {project.live && (
                          <Button
                            size="sm"
                            className="bg-primary text-primary-foreground hover:bg-accent text-xs"
                            asChild
                          >
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-1 h-3 w-3" />
                              Ver Projeto
                            </a>
                          </Button>
                        )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevProject}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border border-border text-foreground p-2 rounded-full transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border border-border text-foreground p-2 rounded-full transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentProjectIndex === index
                      ? "bg-primary scale-110"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
