import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function EditorialSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-aura-white overflow-hidden">
      <div className="container-aura">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-aura-beige overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-aura-beige via-[#E0D6C8] to-[#D4C9B8] flex items-center justify-center">
                <span className="font-display text-8xl font-light text-aura-black/8">A</span>
              </div>
            </div>
            {/* Frame decorativo */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-aura-gold/25 -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-7"
          >
            <div>
              <p className="font-body font-light text-[0.6rem] tracking-ultra uppercase text-aura-gold mb-4">
                Editorial
              </p>
              <h2 className="font-display font-light text-4xl md:text-5xl xl:text-6xl text-aura-black leading-tight">
                A arte do<br />
                <em className="not-italic text-aura-gold">detalhe invisível</em>
              </h2>
            </div>

            <div className="w-10 h-px bg-aura-gold" />

            <p className="font-body font-light text-sm text-aura-black/50 leading-relaxed max-w-sm">
              Cada costura, cada tecido, cada silhueta — escolhidos com intenção.
              Não para impressionar, mas para expressar. A Aura acredita que o verdadeiro
              luxo não precisa gritar.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-2">
              {[
                { number: '180+', label: 'Peças por coleção' },
                { number: '12',   label: 'Anos de atelier'   },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl font-light text-aura-black">{stat.number}</p>
                  <p className="font-body font-light text-xs text-aura-black/35 tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <a href="/story" className="btn-outline inline-flex">
              Conheça a história
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
