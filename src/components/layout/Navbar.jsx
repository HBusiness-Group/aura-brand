import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import useScrollPosition from '@hooks/useScrollPosition'

const WHATSAPP  = 'https://wa.me/5592996036580'
const INSTAGRAM = 'https://www.instagram.com/aurabrand.am'

const links = [
  { label: 'Coleção',  href: '/collection' },
  { label: 'História', href: '/story'      },
  { label: 'Contato',  href: '/contact'    },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScrollPosition()
  const location = useLocation()
  const scrolled = scrollY > 60

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ease-luxury ${
          scrolled
            ? 'bg-[#F8F6F2]/96 backdrop-blur-sm border-b border-[#111111]/8'
            : 'bg-transparent'
        }`}
      >
        <div className="container-aura">
          <div className="flex items-center justify-between h-[64px] md:h-[72px]">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <motion.div
                whileHover={{ opacity: 0.65 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/logo/aura_brand.png"
                  alt="Aura Brand"
                  className="h-7 md:h-8 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'block'
                  }}
                />
                {/* wordmark fallback */}
                <div style={{ display: 'none' }}>
                  <span className={`font-display text-xl font-light tracking-[0.14em] block leading-none ${scrolled || menuOpen ? 'text-aura-black' : 'text-[#F8F6F2]'}`}>
                    AURA
                  </span>
                  <span className="font-body font-light text-[0.45rem] tracking-ultra uppercase text-aura-gold block">
                    Brand
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link ${
                    location.pathname === link.href
                      ? 'text-aura-gold'
                      : scrolled
                        ? 'text-aura-black hover:text-aura-gold'
                        : 'text-[#F8F6F2]/80 hover:text-[#F8F6F2]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-5">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:block nav-link ${scrolled ? 'text-aura-black hover:text-aura-gold' : 'text-[#F8F6F2]/80 hover:text-[#F8F6F2]'}`}
              >
                Atendimento
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-[5px] p-1"
                aria-label="Menu"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className={`w-5 h-px block origin-center ${menuOpen || scrolled ? 'bg-aura-black' : 'bg-[#F8F6F2]'}`}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`w-3 h-px block ${menuOpen || scrolled ? 'bg-aura-black' : 'bg-[#F8F6F2]'}`}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className={`w-5 h-px block origin-center ${menuOpen || scrolled ? 'bg-aura-black' : 'bg-[#F8F6F2]'}`}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#F8F6F2] flex flex-col justify-center items-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 mb-16">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.href}
                    className="font-display text-4xl font-light text-aura-black hover:text-aura-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Social no mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col items-center gap-4 absolute bottom-12"
            >
              <div className="flex items-center gap-6">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-light text-[0.6rem] tracking-ultra uppercase text-aura-gray hover:text-aura-gold transition-colors duration-300"
                >
                  Instagram
                </a>
                <span className="w-px h-3 bg-aura-gray/40" />
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-light text-[0.6rem] tracking-ultra uppercase text-aura-gray hover:text-aura-gold transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </div>
              <p className="font-body font-light text-[0.55rem] tracking-ultra uppercase text-aura-gray/40">
                Luxo silencioso
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
