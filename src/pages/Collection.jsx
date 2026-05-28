import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '@components/ui/PageTransition'
import FadeIn from '@components/ui/FadeIn'
import { products, categories } from '@data/products'
import { formatCurrency } from '@utils/formatters'

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category.toLowerCase() === activeCategory)

  return (
    <PageTransition>
      <div className="pt-24 md:pt-32">

        {/* Header */}
        <section className="container-aura py-16 md:py-20">
          <FadeIn>
            <p className="label-section text-aura-champagne mb-4">Coleção</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display font-light text-5xl md:text-7xl text-aura-charcoal leading-none">
              Inverno 2026
            </h1>
          </FadeIn>
        </section>

        {/* Filter */}
        <div className="border-y border-aura-sand">
          <div className="container-aura">
            <div className="flex items-center gap-8 overflow-x-auto py-5 scrollbar-none">
              <button
                onClick={() => setActiveCategory('all')}
                className={`whitespace-nowrap nav-link pb-0.5 border-b transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'border-aura-charcoal text-aura-charcoal'
                    : 'border-transparent text-aura-charcoal/40 hover:text-aura-charcoal'
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.label.toLowerCase())}
                  className={`whitespace-nowrap nav-link pb-0.5 border-b transition-all duration-300 ${
                    activeCategory === cat.label.toLowerCase()
                      ? 'border-aura-charcoal text-aura-charcoal'
                      : 'border-transparent text-aura-charcoal/40 hover:text-aura-charcoal'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <section className="container-aura py-16">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-aura-sand overflow-hidden mb-3 relative">
                  <div className="w-full h-full bg-gradient-to-br from-aura-linen to-aura-sand flex items-center justify-center transition-transform duration-1200 ease-silk group-hover:scale-105">
                    <span className="font-display text-5xl font-light text-aura-charcoal/10">A</span>
                  </div>
                  {product.isNew && (
                    <span className="absolute top-3 left-3 label-luxury bg-aura-charcoal text-aura-ivory px-2 py-1 text-[0.55rem]">
                      Novo
                    </span>
                  )}
                </div>
                <div className="space-y-0.5">
                  <p className="font-body font-light text-[0.65rem] text-aura-champagne tracking-wide uppercase">
                    {product.category}
                  </p>
                  <p className="font-display font-light text-lg text-aura-charcoal">
                    {product.name}
                  </p>
                  <p className="font-body font-light text-sm text-aura-charcoal/50">
                    {formatCurrency(product.price)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </PageTransition>
  )
}
