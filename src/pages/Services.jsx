import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import braces from '../assets/braces.jpg'
import invisalign from '../assets/invisalign.jpg'
import treat from '../assets/treat.jpg'
import retainer from '../assets/retainer.jpg'
import consult from '../assets/consult.jpg'
import adult from '../assets/adult.jpg'

const services = [
  {
    title: 'Invisalign® for Adults',
    img: adult,
    desc: 'Virtually invisible clear aligners designed for the adult lifestyle. Removable for eating, brushing, and special occasions.',
    features: ['Custom-fit clear trays', 'Removable & comfortable', 'Average 12–18 month treatment', 'Digital treatment preview with iTero'],
    href: '/getting-started',
  },
  {
    title: 'Invisalign® for Teens',
    img: invisalign,
    desc: 'All the power of Invisalign, designed for the teen experience — with compliance indicators and extra aligners included.',
    features: ['Compliance indicators', 'Replacement aligners included', 'Sports & activities friendly', 'No food restrictions'],
    href: '/getting-started',
  },
  {
    title: 'Traditional Braces',
    img: braces,
    desc: 'Modern metal or ceramic brackets with advanced wire technology. Highly effective for complex cases and precise bite correction.',
    features: ['Metal or clear ceramic brackets', 'Excellent for complex cases', 'Proven decades-long track record', 'Affordable payment plans'],
    href: '/getting-started',
  },
  {
    title: 'Early Orthodontic Treatment',
    img: treat,
    desc: 'Phase I treatment for children aged 7–10. Catching bite and jaw problems early makes later treatment shorter and simpler.',
    features: ['Best starting age: 7–10', 'Guides jaw & bite development', 'Reduces need for extractions', 'Shorter Phase II treatment later'],
    href: '/getting-started',
  },
  {
    title: 'Retainers & Retention',
    img: retainer,
    desc: 'Keeping your smile perfect after treatment. Fixed and removable retainer options to protect your investment.',
    features: ['Fixed or removable options', 'Night-time wear only', 'Replacement retainers available', 'Lifetime smile protection'],
    href: '/getting-started',
  },
  {
    title: 'Free Consultation',
    img: consult,
    desc: 'Your first step. We\'ll take digital records, discuss your goals, and recommend the best treatment — completely free of charge.',
    features: ['Digital x-rays & iTero scan', 'No-pressure conversation', 'Custom treatment proposal', 'Flexible financing options'],
    href: '/getting-started',
    highlight: true,
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div className="bg-navy min-h-screen">
      {/* Header */}
      <div className="bg-navy2 border-b border-gold/10 py-20 px-6 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-label text-gold text-[0.65rem] tracking-[0.35em] uppercase mb-4 flex items-center justify-center gap-3"
        >
          <span className="w-6 h-px bg-gold" /> What We Offer <span className="w-6 h-px bg-gold" />
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display font-300 text-cream"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Orthodontic Services<br /><em className="text-gold not-italic">Tailored to You</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="font-body text-cream/40 text-sm mt-5 max-w-xl mx-auto"
        >
          Every treatment at Edge is 100% customized. We use the latest technology and take the time to understand your goals before recommending anything.
        </motion.p>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-6 py-16" ref={ref}>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.09 }}
              className={`group border transition-all duration-500 hover:-translate-y-1 ${
                s.highlight
                  ? 'border-gold/40 bg-navy2/80 hover:border-gold'
                  : 'border-gold/12 hover:border-gold/35'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
                {s.highlight && (
                  <div className="absolute top-4 left-4 bg-gold text-navy font-label text-[0.6rem] tracking-widest uppercase px-3 py-1">
                    Start Here
                  </div>
                )}
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-cream font-400 mb-3 group-hover:text-gold transition-colors duration-300">{s.title}</h3>
                <p className="font-body text-cream/40 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="space-y-1.5 mb-6">
                  {s.features.map(f => (
                    <div key={f} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-gold/60" />
                      <span className="font-body text-cream/45 text-xs">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to={s.href}
                  className={`font-label text-[0.65rem] tracking-widest uppercase flex items-center gap-2 transition-all duration-300 hover:gap-4 ${
                    s.highlight ? 'text-navy bg-gold hover:bg-gold2 px-5 py-2.5 justify-center' : 'text-gold'
                  }`}
                >
                  {s.highlight ? 'Book Free Consultation' : 'Learn More →'}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech note */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}
          className="mt-12 border border-gold/15 bg-navy2/50 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex-1">
            <div className="font-label text-gold text-[0.6rem] tracking-widest uppercase mb-3 flex items-center gap-2"><span className="w-4 h-px bg-gold" /> Advanced Technology</div>
            <h3 className="font-display text-2xl text-cream font-300 mb-3">We Use the Latest Tools for the Best Results</h3>
            <p className="font-body text-cream/40 text-sm leading-relaxed">
              Our clinics are equipped with iTero digital scanners, Invisalign technology, AO Ortho bracket systems, and Tanzo — giving Dr. Young the precision to deliver results that last a lifetime.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:w-64 shrink-0">
            {['Invisalign®', 'iTero Scanner', 'AO Ortho', 'Tanzo'].map(t => (
              <span key={t} className="border border-gold/25 text-gold/60 font-label text-[0.6rem] tracking-wider uppercase px-4 py-2">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
