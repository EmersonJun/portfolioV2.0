import { Calendar, MapPin, Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      period: "2024 — PRESENTE",
      role: "Desenvolvedor Full Stack Sênior",
      company: "TechCorp",
      location: "São Paulo, SP",
      description:
        "Construo e mantenho componentes críticos usados para construir o frontend da plataforma, trabalhando em toda a stack. Trabalho em estreita colaboração com equipes multifuncionais, incluindo desenvolvedores, designers e gerentes de produto, para implementar e defender as melhores práticas em acessibilidade web.",
      technologies: ["JavaScript", "TypeScript", "React", "Next.js"],
      achievements: [
        "Melhorou a performance da aplicação em 40%",
        "Liderou equipe de 5 desenvolvedores",
        "Implementou sistema de design usado por toda empresa",
      ],
    },
    {
      period: "2022 — 2024",
      role: "Desenvolvedor Frontend",
      company: "StartupXYZ",
      location: "Remote",
      description:
        "Desenvolvi interfaces de usuário responsivas e acessíveis para aplicações web modernas. Implementei sistemas de design e componentes reutilizáveis que melhoraram a consistência e eficiência do desenvolvimento.",
      technologies: ["React", "Vue.js", "Tailwind CSS", "Figma"],
      achievements: [
        "Reduziu tempo de desenvolvimento em 30%",
        "Criou biblioteca de componentes reutilizáveis",
        "Implementou testes automatizados",
      ],
    },
    {
      period: "2020 — 2022",
      role: "Desenvolvedor Junior",
      company: "AgencyABC",
      location: "Rio de Janeiro, RJ",
      description:
        "Trabalhei em projetos diversos para clientes de diferentes setores, desde landing pages até aplicações web complexas. Aprendi a trabalhar com prazos apertados e requisitos em constante mudança.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      achievements: [
        "Entregou mais de 50 projetos",
        "Manteve 98% de satisfação do cliente",
        "Aprendeu 5 novas tecnologias",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            <span className="text-gradient">Experiência</span>
          </h2>

          <div className="relative">
            {/* Linha vertical */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden lg:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative">
                  {/* Ponto na linha do tempo */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block group-hover:scale-125 transition-transform"></div>

                  <div className="lg:ml-20">
                    <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      {/* Header da experiência */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-primary font-mono">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              <span className="font-medium text-primary">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-pretty mb-6">{exp.description}</p>

                      {/* Conquistas */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Principais Conquistas:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tecnologias */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
