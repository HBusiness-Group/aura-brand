import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '@components/ui/PageTransition'
import FadeIn from '@components/ui/FadeIn'

const FAQ = [
  {
    q: 'Qual o prazo de entrega?',
    a: 'De 3 a 7 dias úteis para todo o Brasil. Entregas especiais em 24h disponíveis para São Paulo.',
  },
  {
    q: 'Como funciona a troca?',
    a: 'Trocas e devoluções em até 30 dias corridos. Peças sem uso, com etiquetas originais.',
  },
  {
    q: 'Vocês têm loja física?',
    a: 'Sim. Boutique conceito em Jardins, São Paulo. Atendimento mediante agendamento.',
  },
]

export default function Contact() {
  const [open, setOpen] = useState(null)
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageTransition>
      <div className="pt-24 md:pt-32">

        <section className="container-aura py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Left */}
            <div className="space-y-10">
              <FadeIn>
                <p className="label-section text-aura-champagne mb-4">Contato</p>
                <h1 className="font-display font-light text-5xl md:text-6xl text-aura-charcoal leading-none">
                  Fale com<br />a Aura.
                </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="space-y-4">
                  {[
                    { label: 'E-mail',    value: 'atendimento@aurabrand.com.br' },
                    { label: 'WhatsApp',  value: '+55 11 99999-0000'            },
                    { label: 'Boutique',  value: 'Rua Oscar Freire, 123 — Jardins, SP' },
                  ].map((info) => (
                    <div key={info.label} className="flex flex-col">
                      <span className="font-body font-light text-xs text-aura-champagne tracking-ultra uppercase">
                        {info.label}
                      </span>
                      <span className="font-body font-light text-sm text-aura-charcoal mt-1">
                        {info.value}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* FAQ */}
              <FadeIn delay={0.2}>
                <div className="pt-8 border-t border-aura-sand" id="faq">
                  <p className="label-section text-aura-charcoal mb-6">Perguntas Frequentes</p>
                  <div className="space-y-0">
                    {FAQ.map((item, i) => (
                      <div key={i} className="border-b border-aura-sand">
                        <button
                          onClick={() => setOpen(open === i ? null : i)}
                          className="w-full flex justify-between items-center py-4 text-left"
                        >
                          <span className="font-body font-light text-sm text-aura-charcoal">
                            {item.q}
                          </span>
                          <span className="text-aura-champagne transition-transform duration-300"
                            style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                            +
                          </span>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="font-body font-light text-xs text-aura-charcoal/50 pb-4 leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right — Form */}
            <FadeIn delay={0.1} direction="left">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-20">
                  <div className="w-12 h-px bg-aura-champagne mb-4" />
                  <p className="font-display font-light text-3xl text-aura-charcoal">Mensagem enviada.</p>
                  <p className="font-body font-light text-sm text-aura-charcoal/50">
                    Retornamos em até 24 horas úteis.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { id: 'name',    label: 'Nome',    type: 'text'  },
                    { id: 'email',   label: 'E-mail',  type: 'email' },
                    { id: 'subject', label: 'Assunto', type: 'text'  },
                  ].map((field) => (
                    <div key={field.id} className="flex flex-col gap-2">
                      <label
                        htmlFor={field.id}
                        className="font-body font-light text-xs text-aura-champagne tracking-ultra uppercase"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        required
                        className="border-b border-aura-sand bg-transparent py-3 font-body font-light text-sm text-aura-charcoal placeholder-aura-charcoal/20 focus:outline-none focus:border-aura-champagne transition-colors duration-300"
                        placeholder={`Seu ${field.label.toLowerCase()}`}
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="font-body font-light text-xs text-aura-champagne tracking-ultra uppercase"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="border-b border-aura-sand bg-transparent py-3 font-body font-light text-sm text-aura-charcoal placeholder-aura-charcoal/20 focus:outline-none focus:border-aura-champagne transition-colors duration-300 resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <button type="submit" className="btn-primary mt-4">
                    Enviar mensagem →
                  </button>
                </form>
              )}
            </FadeIn>

          </div>
        </section>

      </div>
    </PageTransition>
  )
}
