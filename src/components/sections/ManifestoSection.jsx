import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const lines = [
  'Não é sobre mostrar.',
  'É sobre saber.',
  'Saber quem você é,',
  'e deixar que cada peça',
  'conte essa história — em silêncio.',
]

export default function ManifestoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="section-padding bg-aura-black overflow-hidden">
      <div className="container-aura">
        <div className="max-w-3xl mx-auto text-center space-y-6">

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-10 h-px bg-aura-gold mx-auto origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body font-light text-[0.6rem] tracking-ultra uppercase text-aura-gold"
          >
            Manifesto
          </motion.p>

          <div className="space-y-2 pt-4">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                className={`font-display font-light leading-snug ${
                  i < 2
                    ? 'text-3xl md:text-5xl xl:text-6xl text-[#F8F6F2]'
                    : 'text-xl md:text-3xl xl:text-4xl text-[#F8F6F2]/35'
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
            className="w-10 h-px bg-aura-gold mx-auto origin-right"
          />
        </div>
      </div>
    </section>
  )
}
