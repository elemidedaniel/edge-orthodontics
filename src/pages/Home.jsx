import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import dryoung from '../assets/dryoung.jpg'
import braces from '../assets/braces.jpg'
import Invisalign from '../assets/invisalign.jpg'
import treat from '../assets/treat.jpg'
import consult from '../assets/consult.jpg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
})

const inViewFade = (ref, delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: ref ? { opacity: 1, y: 0 } : {},
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
})

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src= {consult}
          alt=""
          className="w-full h-full object-cover object-center opacity-20"
        />
        {/* Rich gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/50 to-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
      </div>

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-[42%] w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent pointer-events-none hidden lg:block" />

      {/* Decorative corner */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-gold/25 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold/25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-gold" />
            <span className="font-label text-gold text-[0.65rem] tracking-[0.35em] uppercase">
              Lloydminster · Martensville · Camrose · Cold Lake
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 {...fadeUp(0.1)}
            className="font-display font-300 text-cream leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
          >
            Confident
            <br />
            <em className="gold-shimmer not-italic font-400">Smiles</em>
            <br />
            <span className="font-300">Start Here.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)}
            className="font-body text-cream/55 text-lg leading-relaxed mb-10 max-w-xl"
          >
            Edge Orthodontics provides specialized care for kids, teens, and adults across Alberta and Saskatchewan — through Invisalign, braces, and personalized treatment plans crafted just for you.
          </motion.p>

          {/* No referral pill */}
          <motion.div {...fadeUp(0.25)} className="flex items-center gap-2 mb-8">
            <span className="flex items-center gap-2 border border-gold/30 text-gold font-label text-[0.65rem] tracking-widest uppercase px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              No Referral Needed
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
            <Link to="/getting-started"
              className="bg-gold hover:bg-gold2 text-navy font-label font-700 text-[0.7rem] tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-0.5"
            >
              Book Free Consultation
            </Link>
            <Link to="/services"
              className="border border-cream/20 hover:border-gold text-cream/70 hover:text-gold font-label text-[0.7rem] tracking-widest uppercase px-8 py-4 transition-all duration-300"
            >
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Floating location cards — bottom right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-col gap-2 absolute right-8 bottom-20"
        >
          {[
            { city: 'Lloydminster', prov: 'SK', phone: '306.825.8577' },
            { city: 'Martensville',  prov: 'SK', phone: '306.934.4446' },
            { city: 'Camrose',       prov: 'AB', phone: '780.673.1143' },
            { city: 'Cold Lake',     prov: 'AB', phone: '306.825.8577' },
          ].map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.08 }}
              className="flex items-center gap-4 bg-navy2/80 backdrop-blur border border-gold/20 px-5 py-3 hover:border-gold/40 transition-colors group"
            >
              <div>
                <div className="font-label text-cream/80 text-[0.65rem] tracking-widest uppercase group-hover:text-gold transition-colors">{loc.city} <span className="text-gold/50">{loc.prov}</span></div>
                <div className="font-label text-gold text-xs mt-0.5">{loc.phone}</div>
              </div>
              <svg className="w-3.5 h-3.5 text-gold/30 group-hover:text-gold/60 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent"
        />
        <span className="font-label text-gold/40 text-[0.55rem] tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}

/* ─── About strip ─── */
function AboutStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section ref={ref} className="bg-navy2 py-20 px-6 border-y border-gold/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-px bg-gold/10">
        {[
          { num: '4', label: 'Clinic Locations', sub: 'SK & AB' },
          { num: '100%', label: 'Customized Treatment', sub: 'Every patient, every time' },
          { num: '0', label: 'Referrals Required', sub: 'Walk in, book online, or call' },
        ].map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
            className="bg-navy2 px-10 py-10 text-center"
          >
            <div className="font-display text-5xl text-gold font-300 mb-2">{s.num}</div>
            <div className="font-label text-cream/80 text-xs tracking-widest uppercase mb-1">{s.label}</div>
            <div className="font-body text-cream/35 text-xs">{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ─── Services preview ─── */
const services = [
  {
    title: 'Invisalign®',
    sub: 'Adults & Teens',
    img: Invisalign,
    desc: 'Clear aligners that fit your life — discreet, removable, and effective for all ages.',
    to: '/services',
  },
  {
    title: 'Traditional Braces',
    sub: 'All Ages',
    img: braces,
    desc: 'Proven, precise, and powerful. Modern brackets for beautiful results.',
    to: '/services',
  },
  {
    title: 'Early Treatment',
    sub: 'Phase I Ortho',
    img: treat,
    desc: 'Catching issues early leads to easier, shorter treatment later.',
    to: '/services',
  },
]

function ServicesPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section ref={ref} className="bg-navy py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="font-label text-gold text-[0.65rem] tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
            >
              <span className="w-6 h-px bg-gold" /> Our Services
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
              className="font-display font-300 text-cream"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              100% Customized<br /><em className="text-gold not-italic">Treatment Plans</em>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            <Link to="/services" className="font-label text-[0.65rem] tracking-widest uppercase border border-gold/30 hover:border-gold text-gold px-6 py-3 transition-all duration-300">
              View All Services →
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12 }}
              className="group relative overflow-hidden bg-navy2 border border-gold/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy2 via-navy2/50 to-transparent" />
                <div className="absolute top-4 right-4 font-label text-gold/60 text-[0.6rem] tracking-widest uppercase border border-gold/20 px-2.5 py-1">{s.sub}</div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-cream font-400 mb-2 group-hover:text-gold transition-colors duration-300">{s.title}</h3>
                <p className="font-body text-cream/45 text-sm leading-relaxed mb-5">{s.desc}</p>
                <Link to={s.to} className="font-label text-gold text-[0.65rem] tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all duration-300">
                  Learn More
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Dr. Young ─── */
function DrYoung() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section ref={ref} className="bg-navy2 py-24 px-6 lg:px-8 border-y border-gold/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-full h-full border border-gold/15" />
          <div className="relative overflow-hidden">
            <img
              src={dryoung}
              alt="Dr. Fraser Young"
              className="w-full h-[500px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy2/60 to-transparent" />
            {/* Name overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-label text-gold text-[0.6rem] tracking-[0.3em] uppercase mb-1">Orthodontist</div>
              <div className="font-display text-3xl text-cream font-300">Dr. Fraser Young</div>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="font-label text-gold text-[0.65rem] tracking-[0.3em] uppercase mb-5 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-gold" /> Meet the Doctor
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="font-display font-300 text-cream mb-6"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
          >
            Rooted in the Community,<br /><em className="text-gold not-italic">Trained to Transform.</em>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="font-body text-cream/50 leading-relaxed mb-6 text-base"
          >
            Dr. Young was born and raised in Lloydminster, Saskatchewan, and is honoured to return to his hometown to bring specialty orthodontic care to the community he grew up in. After years of advanced training, he founded Edge Orthodontics with one goal: to give every patient a smile that changes how they feel about themselves.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }}
            className="font-body text-cream/50 leading-relaxed mb-8 text-base"
          >
            From your first consultation to the day your braces come off, Dr. Young and his team are with you every step of the way, making each visit comfortable, efficient, and genuinely rewarding.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
            <Link to="/team"
              className="inline-flex items-center gap-3 font-label text-[0.65rem] tracking-widest uppercase text-gold border border-gold/30 hover:border-gold hover:bg-gold/5 px-7 py-3.5 transition-all duration-300"
            >
              Meet Dr. Young
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Why Edge ─── */
const why = [
  { icon: '✦', title: 'Specialist Care', body: 'Dr. Young is a trained orthodontic specialist — not a general dentist offering ortho on the side.' },
  { icon: '✦', title: 'Advanced Technology', body: 'iTero digital scanning, Invisalign, AO Ortho, and Tanzo for precise, comfortable treatment.' },
  { icon: '✦', title: 'No Referral Needed', body: 'Walk in, call, or book online. We make it easy to start your smile journey today.' },
  { icon: '✦', title: 'Family Friendly', body: 'We treat patients of all ages — from early Phase I treatment to adult Invisalign.' },
  { icon: '✦', title: '4 Convenient Locations', body: 'Lloydminster, Martensville, Camrose, and Cold Lake — we come to you.' },
  { icon: '✦', title: 'Personalized Plans', body: 'Every treatment is 100% customized to your anatomy, lifestyle, and goals.' },
]

function WhyEdge() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section ref={ref} className="bg-navy py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="font-label text-gold text-[0.65rem] tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3"
          >
            <span className="w-6 h-px bg-gold" /> Why Choose Us <span className="w-6 h-px bg-gold" />
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="font-display font-300 text-cream"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
          >
            The <em className="text-gold not-italic">Edge</em> Difference
          </motion.h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/8">
          {why.map((w, i) => (
            <motion.div key={w.title}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }}
              className="bg-navy p-8 group hover:bg-navy2 transition-colors duration-300"
            >
              <div className="text-gold text-lg mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">{w.icon}</div>
              <h3 className="font-display text-xl text-cream font-400 mb-3 group-hover:text-gold transition-colors duration-300">{w.title}</h3>
              <p className="font-body text-cream/40 text-sm leading-relaxed">{w.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Tech logos ─── */
function TechBar() {
  return (
    <section className="bg-navy2 border-y border-gold/10 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-label text-gold/40 text-[0.6rem] tracking-[0.3em] uppercase text-center mb-7">Technology Partners</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {['Invisalign®', 'iTero Scanner', 'AO Ortho', 'Tanzo'].map(t => (
            <div key={t} className="border border-gold/20 hover:border-gold/40 text-gold/50 hover:text-gold/70 font-label text-[0.65rem] tracking-widest uppercase px-6 py-3 transition-all duration-300">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Locations preview ─── */
function LocationsPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section ref={ref} className="bg-navy py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="font-label text-gold text-[0.65rem] tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3"
          >
            <span className="w-6 h-px bg-gold" /> Find Us <span className="w-6 h-px bg-gold" />
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="font-display font-300 text-cream"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
          >
            Four Locations Across<br /><em className="text-gold not-italic">Alberta & Saskatchewan</em>
          </motion.h2>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {[
            { city: 'Lloydminster', prov: 'SK', addr: '2909 50 Ave', phone: '306.825.8577', hours: 'Mon–Thu 8AM–4PM', id: 'lloydminster' },
            { city: 'Martensville',  prov: 'SK', addr: '12 2nd St S', phone: '306.934.4446', hours: 'Mon–Fri 7AM–6PM', id: 'martensville' },
            { city: 'Camrose',       prov: 'AB', addr: '6708 48 Ave Unit 1030', phone: '780.673.1143', hours: 'Wed–Thu 8AM–4PM', id: 'camrose' },
            { city: 'Cold Lake',     prov: 'AB', addr: '5101 46 Ave Unit 1005', phone: '306.825.8577', hours: 'Mon–Thu 8AM–4PM', id: 'cold-lake' },
          ].map((loc, i) => (
            <motion.div key={loc.city}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.09 }}
              className="group border border-gold/15 hover:border-gold/40 p-7 transition-all duration-400 hover:bg-navy2"
            >
              <div className="font-label text-gold/50 text-[0.6rem] tracking-widest uppercase mb-1">{loc.prov}</div>
              <h3 className="font-display text-2xl text-cream group-hover:text-gold transition-colors duration-300 mb-4">{loc.city}</h3>
              <div className="space-y-2 mb-5">
                <p className="font-body text-cream/40 text-xs">{loc.addr}</p>
                <a href={`tel:+1${loc.phone.replace(/\D/g,'')}`} className="font-label text-gold text-sm block hover:text-gold2 transition-colors">{loc.phone}</a>
                <p className="font-body text-cream/30 text-xs">{loc.hours}</p>
              </div>
              <Link to={`/locations#${loc.id}`}
                className="font-label text-[0.6rem] tracking-widest uppercase text-gold/60 hover:text-gold flex items-center gap-2 hover:gap-3 transition-all duration-300"
              >
                View Location →
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link to="/locations" className="font-label text-[0.65rem] tracking-widest uppercase bg-gold hover:bg-gold2 text-navy font-700 px-8 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-gold/20">
            View All Locations & Maps
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <ServicesPreview />
      <DrYoung />
      <WhyEdge />
      <TechBar />
      <LocationsPreview />
    </>
  )
}
