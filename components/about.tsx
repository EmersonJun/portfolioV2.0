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
                My name is Emerson Junior and I have been passionate about technology since childhood. I grew up exploring the world of games and became fascinated by how things work behind the screens. This sparked my interest in programming, where I found a way to transform ideas into digital solutions.
              </p>

              <p className="text-lg text-muted-foreground text-pretty">
                Currently, I am focused on advancing in the field of software development, constantly learning new languages, techniques, and tools. My goal is to create creative and efficient solutions, always aiming to solve real problems and bring innovation..
              </p>

              <p className="text-lg text-muted-foreground text-pretty">
                I believe continuous learning is essential for professional growth, and I am always seeking new challenges that allow me to improve my skills. For me, technology is more than a profession — it is a passion that motivates me to keep evolving.
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
