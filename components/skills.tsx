"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Globe, Server, Wrench, Users, Award, BookOpen, Code, Zap, Database, FileBadge, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { certifications } from "@/lib/certifications"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "text-blue-400",
      iconBg: "bg-blue-500/15",
      accent: "border-l-blue-500/60",
      skills: ["React", "Next.js", "TypeScript", "HTML / CSS", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "text-green-400",
      iconBg: "bg-green-500/15",
      accent: "border-l-green-500/60",
      skills: ["Node.js", "Python", "Java", "C# / C++", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Ferramentas",
      icon: <Wrench className="w-6 h-6" />,
      color: "text-purple-400",
      iconBg: "bg-purple-500/15",
      accent: "border-l-purple-500/60",
      skills: ["Git", "Photoshop", "Power BI", "Docker", "VS Code", "Figma"],
    },
  ]

  const complementarySkills = [
    {
      title: "Metodologias",
      icon: <Users className="w-5 h-5" />,
      color: "text-orange-400",
      iconBg: "bg-orange-500/15",
      skills: ["Scrum", "Kanban", "Agile", "TDD"],
    },
    {
      title: "Soft Skills",
      icon: <BookOpen className="w-5 h-5" />,
      color: "text-pink-400",
      iconBg: "bg-pink-500/15",
      skills: [
        "Comunicação",
        "Resolução de Problemas",
        "Trabalho em Equipe",
        "Gestão de Tempo",
        "Adaptabilidade",
      ],
    },
  ]

  const stats = [
    { label: "Projetos Concluídos", value: "10+", icon: <Code className="w-5 h-5" /> },
    { label: "Anos de Experiência", value: "2+", icon: <Zap className="w-5 h-5" /> },
    { label: "Tecnologias", value: "10+", icon: <Database className="w-5 h-5" /> },
    { label: "Certificações", value: "13", icon: <FileBadge className="w-5 h-5" /> },
  ]

  return (
    <section
      id="skills-section"
      aria-label="Competências técnicas e complementares"
      className="py-20 px-6 bg-background"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-gradient">Competências Técnicas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tecnologias e ferramentas que utilizo para desenvolver soluções eficientes
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-xl border border-border border-l-4 ${category.accent} bg-card p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 rounded-lg ${category.iconBg} ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${category.color}`}>{category.title}</h3>
                </div>

                <ul role="list" className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-muted rounded-lg px-3 py-2 text-sm text-foreground hover:bg-secondary transition-colors duration-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-gradient">Competências Complementares</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Práticas e habilidades de apoio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {complementarySkills.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-border bg-card p-4 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-1.5 rounded-md ${category.iconBg} ${category.color}`}>
                    {category.icon}
                  </div>
                  <h4 className={`text-base font-semibold ${category.color}`}>{category.title}</h4>
                </div>

                <ul role="list" className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-muted/60 rounded-md px-2.5 py-1 text-xs text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10 mt-20"
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-gradient">Certificações</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Cursos e certificações que comprovam minha trajetória
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {certifications.slice(0, 3).map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-primary font-medium bg-primary/10 px-2.5 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground leading-snug mb-1">{cert.title}</h4>
                <p className="text-sm text-primary mb-3">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground line-clamp-3">{cert.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/certificacoes">
                Ver todas as certificações
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="flex justify-center mb-2 text-primary">{stat.icon}</div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
