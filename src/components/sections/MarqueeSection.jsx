import { motion } from 'framer-motion'

const items = [
  'Luxo Silencioso',
  '·',
  'Editorial Fashion',
  '·',
  'Autenticidade',
  '·',
  'Atelier Feminino',
  '·',
  'Sofisticação',
  '·',
  'Coleção 2026',
  '·',
]

export default function MarqueeSection() {
  return (
    <section className="py-6 bg-aura-black overflow-hidden border-y border-[#F8F6F2]/5">
      <div className="flex select-none">
        {[0, 1, 2].map((run) => (
          <motion.div
            key={run}
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="flex flex-shrink-0 items-center gap-8 pr-8"
          >
            {items.map((item, i) => (
              <span
                key={i}
                className={`whitespace-nowrap ${
                  item === '·'
                    ? 'text-aura-gold text-base leading-none'
                    : 'font-body font-light text-[0.6rem] tracking-ultra uppercase text-[#F8F6F2]/25'
                }`}
              >
                {item}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
