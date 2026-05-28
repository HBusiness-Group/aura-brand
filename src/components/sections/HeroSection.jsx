import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import heroImage from '@assets/models/hero-main.png'

const WHATSAPP = 'https://wa.me/5592996036580'

export default function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  const rawY      = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const parallaxY = useSpring(rawY, { stiffness: 60, damping: 22 })
  const opacity   = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const scale     = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-end"
    >
      {/* Imagem principal com parallax */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: parallaxY, scale }}
      >
        <img
          src={heroImage}
          alt="Aura Brand — Coleção Principal"
          className="w-full h-[115%] object-cover object-top"
        />
      </motion.div>

      {/* Overlay cinematográfico elegante — preserva protagonismo das modelos */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/30 via-transparent to-transparent" />

      {/* Grain sutil */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Conteúdo */}
      <motion.div
        className="relative z-10 container-aura w-full pb-12 md:pb-20 xl:pb-28"
        style={{ opacity }}
      >
        {/* Label coleção */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6 md:mb-8"
        >
          <span className="w-6 h-px bg-aura-gold" />
          <span className="font-body font-light text-[0.6rem] tracking-ultra uppercase text-aura-gold">
            Nova Coleção — 2026
          </span>
        </motion.div>

        {/* Headline principal — exata do CLAUDE.md */}
        <div className="overflow-hidden mb-4 md:mb-5">
          <motion.h1
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-[#F8F6F2] leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 8.5vw, 8rem)' }}
          >
            A elegância<br />
            <em className="not-italic text-aura-gold">começa</em>{' '}
            na presença.
          </motion.h1>
        </div>

        {/* Subheadline — exata do CLAUDE.md */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-body font-light text-sm md:text-base text-[#F8F6F2]/65 max-w-xs md:max-w-sm leading-relaxed mb-10 md:mb-12"
        >
          Peças versáteis para mulheres que vestem autenticidade.
        </motion.p>

        {/* CTAs — exatos do CLAUDE.md */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <a
            href="/collection"
            className="btn-primary"
          >
            Explorar coleção
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline border-[#F8F6F2]/50 text-[#F8F6F2] hover:bg-[#F8F6F2] hover:text-aura-black"
          >
            Atendimento exclusivo
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 right-5 md:right-10 flex flex-col items-center gap-3"
      >
        <span
          className="font-body font-light text-[0.55rem] tracking-ultra uppercase text-[#F8F6F2]/30"
          style={{ writingMode: 'vertical-rl' }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-aura-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
