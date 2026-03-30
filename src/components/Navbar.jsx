import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import edgelogo from '../assets/edgelogo.svg'

const navLinks = [
  { label: 'Home',          to: '/' },
  { label: 'Getting Started', to: '/getting-started' },
  { label: 'Services',      to: '/services' },
  { label: 'Meet the Team', to: '/team' },
  { label: 'Clinic Tour',   to: '/clinic-tour' },
  { label: 'Locations',     to: '/locations', hasDropdown: true },
  { label: 'Blog',          to: '/blog' },
  { label: 'Contact',       to: '/contact' },
]

const locationLinks = [
  { label: 'Lloydminster', to: '/locations#lloydminster' },
  { label: 'Martensville',  to: '/locations#martensville' },
  { label: 'Camrose',       to: '/locations#camrose' },
  { label: 'Cold Lake',     to: '/locations#cold-lake' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [open, setOpen]           = useState(false)
  const [locOpen, setLocOpen]     = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); setLocOpen(false) }, [location])

  const isActive = (to) => location.pathname === to

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy border-b border-gold/10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            {[
              { city: 'Lloydminster', phone: '306.825.8577' },
              { city: 'Martensville',  phone: '306.934.4446' },
              { city: 'Camrose',       phone: '780.673.1143' },
              { city: 'Cold Lake',     phone: '306.825.8577' },
            ].map(loc => (
              <span key={loc.city} className="flex items-center gap-1.5 text-xs font-label">
                <span className="text-gold/60">{loc.city}</span>
                <span className="text-gold/30">·</span>
                <a href={`tel:+1${loc.phone.replace(/\D/g,'')}`} className="text-gold hover:text-gold2 transition-colors font-medium tracking-wide">
                  {loc.phone}
                </a>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs font-label text-gold/60 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-pulse" />
            No Referral Needed
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy/98 backdrop-blur-xl border-b border-gold/15 shadow-xl shadow-black/40'
            : 'bg-navy/90 backdrop-blur-md border-b border-gold/8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={edgelogo} alt="Edge Orthodontics" className="h-10 w-auto" />

          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map(link => (
              link.hasDropdown ? (
                <div key={link.label} className="relative"
                  onMouseEnter={() => setLocOpen(true)}
                  onMouseLeave={() => setLocOpen(false)}
                >
                  <button className={`flex items-center gap-1 font-label text-[0.7rem] tracking-widest uppercase px-3 py-2 rounded transition-colors duration-200 ${
                    location.pathname === '/locations' ? 'text-gold' : 'text-cream/60 hover:text-gold'
                  }`}>
                    {link.label}
                    <svg className={`w-3 h-3 transition-transform duration-200 ${locOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </button>
                  <AnimatePresence>
                    {locOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 bg-navy2 border border-gold/20 rounded min-w-[180px] overflow-hidden shadow-2xl shadow-black/50"
                      >
                        {locationLinks.map(loc => (
                          <Link key={loc.label} to={loc.to}
                            className="flex items-center gap-3 px-5 py-3 hover:bg-gold/10 text-cream/70 hover:text-gold font-label text-[0.7rem] tracking-widest uppercase transition-colors border-b border-gold/10 last:border-0"
                          >
                            <span className="w-1 h-1 rounded-full bg-gold/50" />
                            {loc.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.label} to={link.to}
                  className={`font-label text-[0.7rem] tracking-widest uppercase px-3 py-2 rounded transition-colors duration-200 ${
                    isActive(link.to) ? 'text-gold' : 'text-cream/60 hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA + mobile */}
          <div className="flex items-center gap-4">
            <Link to="/getting-started"
              className="hidden lg:block font-label text-[0.68rem] tracking-widest uppercase bg-gold hover:bg-gold2 text-navy font-700 px-5 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-px"
            >
              Book Consultation
            </Link>
            <Link to="/referral-form"
              className="hidden lg:block font-label text-[0.68rem] tracking-widest uppercase border border-gold/40 hover:border-gold text-gold px-4 py-2.5 transition-all duration-300"
            >
              Referral Form
            </Link>

            {/* Burger */}
            <button onClick={() => setOpen(o => !o)} className="xl:hidden p-1.5 flex flex-col gap-[5px]" aria-label="Menu">
              <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-gold origin-center" />
              <motion.span animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }} className="block w-6 h-px bg-gold" />
              <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-gold origin-center" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-0 z-40 bg-navy flex flex-col pt-28 px-8 pb-10 overflow-y-auto"
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={link.to} onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-gold/10 font-display text-2xl text-cream/80 hover:text-gold transition-colors"
                >
                  {link.label}
                  <svg className="w-4 h-4 text-gold/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
                </Link>
              </motion.div>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Link to="/getting-started" onClick={() => setOpen(false)}
                className="bg-gold text-navy font-label font-700 text-xs tracking-widest uppercase text-center py-4"
              >
                Book Consultation
              </Link>
              <Link to="/referral-form" onClick={() => setOpen(false)}
                className="border border-gold/40 text-gold font-label font-500 text-xs tracking-widest uppercase text-center py-4"
              >
                Referral Form
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
