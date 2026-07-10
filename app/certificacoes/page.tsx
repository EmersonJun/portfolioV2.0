import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Award, ExternalLink } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { certifications } from "@/lib/certifications"

export const metadata: Metadata = {
  title: "Certificações | Emerson Junior",
  description: "Certificações e cursos concluídos por Emerson Junior.",
}

export default function CertificacoesPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gradient">
              {"<Dev />"}
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Minhas <span className="text-gradient">Certificações</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cursos e certificações que comprovam minha trajetória de aprendizado contínuo
            </p>
          </div>

          <ul
            role="list"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          >
            {certifications.map((cert) => (
              <li
                key={cert.title}
                className="flex flex-col bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2.5 py-1 rounded-full">
                      {cert.date}
                    </span>
                    {cert.hours && (
                      <span className="text-xs text-muted-foreground">{cert.hours}</span>
                    )}
                  </div>
                </div>

                <h2 className="text-base font-semibold text-foreground leading-snug mb-1">
                  {cert.title}
                </h2>
                <p className="text-sm text-primary mb-3">{cert.issuer}</p>
                <p className="text-muted-foreground text-xs mb-4 line-clamp-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-muted text-foreground text-[11px] rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 mt-4 text-xs font-medium text-primary border border-primary/40 rounded-lg py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Ver certificado
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
