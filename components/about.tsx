export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground text-pretty">
                Meu nome é Emerson Junior e sou apaixonado por tecnologia desde a infância. Cresci explorando o mundo dos games e me fascinei por entender como as coisas funcionam por trás das telas. Isso despertou meu interesse pela programação, onde encontrei uma forma de transformar ideias em soluções digitais.
              </p>

              <p className="text-lg text-muted-foreground text-pretty">
                Atualmente, estou focado em evoluir na área de desenvolvimento de software, aprendendo constantemente novas linguagens, técnicas e ferramentas. Meu objetivo é criar soluções criativas e eficientes, sempre com o propósito de resolver problemas reais e trazer inovação.
              </p>

              <p className="text-lg text-muted-foreground text-pretty">
                Acredito que o aprendizado contínuo é essencial para o crescimento profissional, e estou sempre em busca de novos desafios que me permitam aprimorar minhas habilidades. Para mim, tecnologia é mais do que uma profissão — é uma paixão que me motiva a continuar evoluindo.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Tecnologias que uso</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "Git",
                  "kotlin",
                  "java",
                  "PHP",
                  "C++",
                  "C#",
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
