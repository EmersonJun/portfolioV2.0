export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
            Sobre <span className="text-gradient">Mim</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground text-pretty">
                Sou um desenvolvedor apaixonado por criar experiências digitais acessíveis e pixel-perfect que combinam
                design inteligente com engenharia robusta. Meu trabalho favorito está na interseção entre design e
                desenvolvimento, criando experiências que não apenas impressionam visualmente, mas são meticulosamente
                construídas para performance e usabilidade.
              </p>

              <p className="text-lg text-muted-foreground text-pretty">
                Atualmente, trabalho como Desenvolvedor Full Stack, especializando-me em acessibilidade. Contribuo para
                a criação e manutenção de componentes de UI que alimentam plataformas modernas, garantindo que nossos
                produtos atendam aos padrões de acessibilidade web e melhores práticas para oferecer uma experiência de
                usuário inclusiva.
              </p>

              <p className="text-lg text-muted-foreground text-pretty">
                No passado, tive a oportunidade de desenvolver software em uma variedade de configurações — desde
                agências de publicidade e grandes corporações até start-ups e pequenos estúdios de produtos digitais.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Tecnologias que uso</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "Tailwind CSS",
                  "Git",
                  "Docker",
                  "AWS",
                ].map((tech) => (
                  <div key={tech} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
