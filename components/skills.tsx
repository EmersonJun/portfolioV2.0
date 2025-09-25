"use client"

import { useState, useEffect } from "react"
import { Code, Database, Wrench, Zap, Globe, Smartphone } from "lucide-react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("skills-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
      skills: [
        { name: "React", level: 30, icon: "⚛️" },
        { name: "Next.js", level: 30, icon: "▲" },
        { name: "TypeScript", level: 55, icon: "📘" },
        { name: "HTML / CSS", level: 92, icon: "🎨" },
      ],
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20",
      skills: [
        { name: "Node.js", level: 50, icon: "🟢" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "Java", level: 82, icon: "🐘" },
        { name: "C# / C++", level: 78, icon: "🍃" },
      ],
    },
    {
      title: "Ferramentas",
      icon: <Wrench className="w-6 h-6" />,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20",
      skills: [
        { name: "Git", level: 90, icon: "📚" },
        { name: "Photoshop", level: 85, icon: "🎯" },
        { name: "Power BI", level: 85, icon: "☁️" },
      ],
    },
  ]

  return (
    <section id="skills-section" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border ${category.borderColor} ${category.bgColor} p-8 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10`}
              >
                {/* Header da categoria */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={`p-3 rounded-xl ${category.bgColor} ${category.color} border ${category.borderColor}`}
                  >
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${category.color}`}>{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm font-mono text-muted-foreground">{skill.level}%</span>
                      </div>

                      {/* Barra de progresso animada */}
                      <div className="relative w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${
                            category.title === "Frontend"
                              ? "bg-blue-400"
                              : category.title === "Backend"
                                ? "bg-green-400"
                                : "bg-purple-400"
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${skillIndex * 200}ms`,
                          }}
                        />
                        {/* Efeito de brilho */}
                        <div
                          className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"
                          style={{
                            animationDelay: `${skillIndex * 200 + 1000}ms`,
                            animationDuration: "2s",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Efeito de fundo */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            ))}
          </div>

          {/* Estatísticas adicionais */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Projetos Concluídos", value: "10+", icon: <Code className="w-5 h-5" /> },
              { label: "Anos de Experiência", value: "2+", icon: <Zap className="w-5 h-5" /> },
              { label: "Tecnologias", value: "10+", icon: <Database className="w-5 h-5" /> },
              { label: "Clientes Satisfeitos", value: "1+", icon: <Smartphone className="w-5 h-5" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="flex justify-center mb-2 text-primary">{stat.icon}</div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
