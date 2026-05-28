import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { products } from '@data/products'

const gradients = [
  'from-[#E8DFD3] to-[#D4C9B8]',
  'from-[#EDE7DC] to-[#E8DFD3]',
  'from-[#D4C9B8] to-[#C6A16E]/20',
]

export default function FeaturedSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-[#F8F6F2]">
      <div className="container-aura">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-12 md:mb-16"
        >
          <div>
            <p className="font-body font-light text-[0.6rem] tracking-ultra uppercase text-aura-gold mb-3">
              Destaques
            </p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-aura-black leading-tight">
              Peças da Temporada
            </h2>
          </div>
          <a href="/collection" className="btn-ghost self-start md:self-auto">
            Ver tudo →
          </a>
        </motion.div>

        {/* Grid editorial — 3 colunas com offset no central */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {products.slice(0, 3).map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              inView={inView}
              gradient={gradients[i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index, inView, gradient }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
      className={`card-product group ${index === 1 ? 'md:mt-10' : ''}`}
    >
      <div className={`aspect-[3/4] bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1200 ease-silk group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full flex items-end p-5 transition-transform duration-1200 ease-silk group-hover:scale-[1.04]">
            <span className="font-display text-5xl font-light text-aura-black/8">A</span>
          </div>
        )}

        {product.isNew && (
          <div className="absolute top-4 left-4">
            <span className="font-body font-light text-[0.5rem] tracking-ultra uppercase bg-aura-black text-[#F8F6F2] px-2.5 py-1">
              Novo
            </span>
          </div>
        )}
      </div>

      <div className="pt-4 pb-2 space-y-0.5">
        <p className="font-body font-light text-[0.6rem] tracking-ultra uppercase text-aura-gold">
          {product.category}
        </p>
        <h3 className="font-display font-light text-lg md:text-xl text-aura-black leading-snug">
          {product.name}
        </h3>
        <p className="font-body font-light text-sm text-aura-black/45">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
        </p>
      </div>
    </motion.div>
  )
}
