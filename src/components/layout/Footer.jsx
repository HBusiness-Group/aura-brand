import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WHATSAPP  = 'https://wa.me/5592996036580'
const INSTAGRAM = 'https://www.instagram.com/aurabrand.am'

const navLinks = [
  { label: 'Coleção',  href: '/collection' },
  { label: 'História', href: '/story'      },
  { label: 'Contato',  href: '/contact'    },
]

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <footer ref={ref} className="bg-aura-black text-[#F8F6F2]">
      <div className="container-aura py-16 md:py-24">

        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-12 pb-12 border-b border-[#F8F6F2]/8"
        >
          {/* Brand + social */}
          <div className="space-y-6">
            <div>
              <p className="font-display text-5xl md:text-6xl font-light tracking-tight leading-none">
                AURA
              </p>
              <p className="font-body font-light text-[0.55rem] tracking-ultra uppercase text-aura-gold mt-1">
                Brand
              </p>
            </div>
            <p className="font-body font-light text-xs text-[#F8F6F2]/40 max-w-[220px] leading-relaxed">
              Peças versáteis para mulheres que vestem autenticidade.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-light text-[0.6rem] tracking-ultra uppercase text-[#F8F6F2]/35 hover:text-aura-gold transition-colors duration-300"
              >
                Instagram
              </a>
              <span className="w-px h-3 bg-[#F8F6F2]/15" />
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-light text-[0.6rem] tracking-ultra uppercase text-[#F8F6F2]/35 hover:text-aura-gold transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 md:max-w-[280px]">
            <p className="font-body font-light text-[0.6rem] tracking-ultra uppercase text-aura-gold">
              Newsletter
            </p>
            <p className="font-body font-light text-xs text-[#F8F6F2]/35 leading-relaxed">
              Receba em primeira mão nossas novas coleções.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 min-w-0 bg-transparent border border-[#F8F6F2]/12 px-4 py-3 text-[0.65rem] font-body font-light text-[#F8F6F2] placeholder-[#F8F6F2]/20 focus:outline-none focus:border-aura-gold transition-colors duration-300"
              />
              <button className="flex-shrink-0 px-5 bg-aura-gold text-aura-white text-xs font-body font-light hover:bg-aura-bronze transition-colors duration-400">
                →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[0.6rem] font-body font-light tracking-ultra uppercase text-[#F8F6F2]/30 hover:text-aura-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-6">
            {['Política de Privacidade', 'Trocas e Devoluções'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-[0.6rem] font-body font-light text-[#F8F6F2]/18 hover:text-[#F8F6F2]/40 transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start md:items-end gap-1">
            <p className="text-[0.6rem] font-body font-light text-[#F8F6F2]/15">
              © {new Date().getFullYear()} Aura Brand
            </p>
            <p className="text-[0.55rem] font-body font-light text-[#F8F6F2]/10">
              Desenvolvido por{' '}
              <a
                href="https://abracadabra.srv.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F8F6F2]/25 hover:text-aura-gold transition-colors duration-300"
              >
                AbraCadabra
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
