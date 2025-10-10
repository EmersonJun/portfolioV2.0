"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState("")

  // Configurar URL de redirecionamento
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}${window.location.pathname}?submitted=true#contact`
      console.log('Redirect URL:', url)
      setRedirectUrl(url)
    }
  }, [])

  // Verificar se voltou do FormSubmit com sucesso
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      console.log('Checking URL params:', urlParams.get('submitted'))
      
      if (urlParams.get('submitted') === 'true') {
        console.log('Success! Showing message')
        setShowSuccess(true)
        setIsSubmitting(false)
        
        // Limpar o parâmetro da URL após um pequeno delay
        setTimeout(() => {
          window.history.replaceState({}, '', window.location.pathname + '#contact')
        }, 100)
        
        // Esconder mensagem após 5 segundos
        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      }
    }
  }, [])

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

          {/* Mensagem de Sucesso */}
          {showSuccess && (
            <div className="mb-8 p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex items-center gap-3 text-green-600 dark:text-green-400">
                <CheckCircle className="h-6 w-6" />
                <div>
                  <p className="font-semibold text-lg">Mensagem enviada com sucesso! ✨</p>
                  <p className="text-sm text-green-600/80 dark:text-green-400/80">
                    Obrigado pelo contato! Responderei em breve.
                  </p>
                </div>
              </div>
            </div>
          )}

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
                {/* Configurações do FormSubmit */}
                <input type="hidden" name="_subject" value="Nova mensagem do portfólio!" />
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Redirecionar de volta para a mesma página com parâmetro */}
                {redirectUrl && <input type="hidden" name="_next" value={redirectUrl} />}
                
                {/* Anti-spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    required
                    minLength={2}
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
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem"
                    required
                    minLength={10}
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