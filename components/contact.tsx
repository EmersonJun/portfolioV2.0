"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>

          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
            Se você gostaria de discutir um projeto ou apenas dizer oi, estou sempre disposto a conversar.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de contato */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:Emersonnjunior2006@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Emersonnjunior2006@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Telefone</p>
                      <a 
                        href="tel:+5541987283543"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +55 (41) 98728-3543
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Localização</p>
                      <p className="text-muted-foreground">Curitiba - PR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <form 
                action="https://formsubmit.co/emersonnjunior2006@gmail.com" 
                method="POST" 
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {/* ===== CONFIGURAÇÕES DO FORMSUBMIT ===== */}
                
                {/* Assunto do email */}
                <input type="hidden" name="_subject" value="Nova mensagem do portfólio!" />
                
                {/* Desabilitar captcha */}
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Template de tabela (mais organizado) */}
                <input type="hidden" name="_template" value="table" />
                
                {/* Página de redirecionamento após envio */}
                <input type="hidden" name="_next" value="https://emersonjun.netlify.app/obrigado.html" />
                
                {/* Campo honeypot anti-spam (escondido) */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                {/* Desabilitar autoresposta padrão */}
                <input type="hidden" name="_autoresponse" value="Obrigado pelo contato! Responderei em breve." />

                {/* ===== CAMPOS DO FORMULÁRIO ===== */}
                
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    required
                    minLength={2}
                    maxLength={100}
                    disabled={isSubmitting}
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    required
                    disabled={isSubmitting}
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Seu telefone (opcional)"
                    disabled={isSubmitting}
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem"
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={5}
                    disabled={isSubmitting}
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-accent"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}