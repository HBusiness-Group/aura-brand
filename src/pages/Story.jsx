import PageTransition from '@components/ui/PageTransition'
import FadeIn from '@components/ui/FadeIn'

const milestones = [
  { year: '2014', text: 'Fundação do atelier em São Paulo. Primeiras 12 peças.' },
  { year: '2017', text: 'Primeira coleção completa. Reconhecimento editorial.' },
  { year: '2020', text: 'Expansão para o digital. Nova identidade visual.' },
  { year: '2024', text: 'Boutique conceito. Luxo silencioso como manifesto.' },
  { year: '2026', text: 'Coleção Inverno — a nossa mais íntima até hoje.' },
]

export default function Story() {
  return (
    <PageTransition>
      <div className="pt-24 md:pt-32">

        {/* Hero texto */}
        <section className="container-aura py-20 md:py-28 max-w-4xl">
          <FadeIn>
            <p className="label-section text-aura-champagne mb-4">Nossa História</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display font-light text-5xl md:text-7xl xl:text-8xl text-aura-charcoal leading-none mb-10">
              Uma marca<br />
              <em className="not-italic text-aura-champagne">nascida do silêncio.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body font-light text-base text-aura-charcoal/60 max-w-lg leading-relaxed">
              Aura nasceu de uma convicção: que as mulheres mais sofisticadas não precisam gritar.
              Elas falam através da textura, do corte, da intenção por trás de cada detalhe.
            </p>
          </FadeIn>
        </section>

        {/* Linha do tempo */}
        <section className="bg-aura-charcoal py-24 md:py-32" id="atelier">
          <div className="container-aura">
            <FadeIn>
              <p className="label-luxury text-aura-champagne mb-16">Cronologia</p>
            </FadeIn>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.1}>
                  <div className="flex gap-8 md:gap-16 items-start py-8 border-b border-aura-linen/10 last:border-b-0">
                    <span className="font-display text-4xl font-light text-aura-champagne w-24 flex-shrink-0">
                      {m.year}
                    </span>
                    <p className="font-body font-light text-sm text-aura-linen/60 pt-3 leading-relaxed">
                      {m.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Sustentabilidade */}
        <section className="container-aura py-24 md:py-32 max-w-3xl" id="sustentabilidade">
          <FadeIn>
            <p className="label-section text-aura-champagne mb-4">Compromisso</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-aura-charcoal leading-tight mb-8">
              Moda com consciência.
            </h2>
            <p className="font-body font-light text-sm text-aura-charcoal/60 leading-relaxed">
              Produção em pequenas séries. Tecidos certificados. Fornecedores locais.
              Luxo que não custa ao planeta o que nos custou criar.
            </p>
          </FadeIn>
        </section>

      </div>
    </PageTransition>
  )
}
