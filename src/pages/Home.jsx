import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import dryoung from '../assets/dryoung.jpg'
import braces from '../assets/braces.jpg'
import guide from '../assets/guide.jpg'
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
    <section className="relative min-h-screen overflow-hidden bg-navy flex flex-col">

      {/* ── Full-bleed split background ── */}
      <div className="absolute inset-0 z-0 flex">
        {/* Left panel — adult / professional tone */}
        <div className="relative w-full lg:w-1/2 h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581391524274-b90c7bab3a7a?w=1000&q=85&auto=format&fit=crop&crop=faces"
            alt="Adult Invisalign patient smiling confidently"
            className="w-full h-full object-cover object-center scale-105"
            style={{ animation: 'subtleZoom 14s ease-in-out infinite alternate' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50" />
        </div>
        {/* Right panel — youth / teen energy */}
        <div className="relative hidden lg:block w-1/2 h-full overflow-hidden">
          <img
            src={consult}
            alt="Teen with bright confident smile"
            className="w-full h-full object-cover object-center scale-105"
            style={{ animation: 'subtleZoom 14s ease-in-out infinite alternate-reverse' }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-navy/90 via-navy/55 to-navy/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
        </div>
      </div>

      {/* ── Animated zoom keyframe ── */}
      <style>{`
        @keyframes subtleZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.12); }
        }
      `}</style>

      {/* ── Decorative elements ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full z-10 hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(211,185,102,0.35) 30%, rgba(211,185,102,0.15) 70%, transparent 100%)' }}
      />
      <div className="absolute top-6 left-6 w-14 h-14 border-l border-t border-gold/30 z-20 pointer-events-none" />
      <div className="absolute top-6 right-6 w-14 h-14 border-r border-t border-gold/30 z-20 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-14 h-14 border-l border-b border-gold/20 z-20 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-14 h-14 border-r border-b border-gold/20 z-20 pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-10 pt-8 pb-32">

        {/* Locations label */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-gold" />
          <span className="font-label text-gold text-[0.6rem] tracking-[0.4em] uppercase">
            Lloydminster · Martensville · Camrose · Cold Lake
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-0 items-center">

          {/* Left — adult message */}
          <div className="lg:pr-12">
            <motion.h1 {...fadeUp(0.1)}
              className="font-display font-300 text-cream leading-[0.95] mb-0"
              style={{ fontSize: 'clamp(3.8rem, 7.5vw, 6.8rem)' }}
            >
              Your Best<br />
              <em className="gold-shimmer not-italic font-500">Smile</em><br />
              <span className="font-300">Awaits.</span>
            </motion.h1>

            <motion.div {...fadeUp(0.18)} className="flex items-center gap-4 my-7">
              <div className="h-px flex-1 max-w-[60px] bg-gold/40" />
              <span className="font-label text-cream/40 text-[0.6rem] tracking-widest uppercase">Invisalign · Braces · Kids · Teens · Adults</span>
            </motion.div>

            <motion.p {...fadeUp(0.22)}
              className="font-body text-cream/55 text-[1.05rem] leading-relaxed mb-8 max-w-md"
            >
              Whether you're an adult finally doing it for yourself, a teen ready for change, or a parent helping your child — Edge Orthodontics is the specialist team built for all of you.
            </motion.p>

            {/* Trust badges */}
            <motion.div {...fadeUp(0.27)} className="flex flex-wrap gap-3 mb-9">
              {[
                { icon: '✦', text: 'No Referral Needed' },
                { icon: '✦', text: 'Free Consultation' },
                { icon: '✦', text: 'Specialist Care' },
              ].map(b => (
                <span key={b.text}
                  className="flex items-center gap-2 border border-gold/25 bg-gold/5 text-gold font-label text-[0.6rem] tracking-widest uppercase px-3.5 py-2"
                >
                  <span className="text-[0.5rem]">{b.icon}</span>
                  {b.text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.32)} className="flex flex-wrap gap-4">
              <Link to="/getting-started"
                className="group relative bg-gold hover:bg-gold2 text-navy font-label font-700 text-[0.7rem] tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10">Book Free Consultation</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              </Link>
              <Link to="/services"
                className="border border-cream/20 hover:border-gold text-cream/65 hover:text-gold font-label text-[0.7rem] tracking-widest uppercase px-8 py-4 transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Right — audience cards (desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col gap-4 pl-10"
          >
            {[
              {
                emoji: '🧑‍💼',
                title: 'Adults',
                sub: 'Invisalign clear aligners',
                desc: 'Discreet, comfortable treatment that fits your professional life.',
                color: 'border-gold/30 hover:border-gold/60',
              },
              {
                emoji: '🧒',
                title: 'Teens',
                sub: 'Invisalign Teen & braces',
                desc: 'Built for the teen lifestyle — sports, selfies, and everything in between.',
                color: 'border-cream/10 hover:border-gold/40',
              },
              {
                emoji: '👧',
                title: 'Kids',
                sub: 'Early orthodontic treatment',
                desc: 'Catching bite issues early makes treatment shorter and results last longer.',
                color: 'border-cream/10 hover:border-gold/40',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex items-start gap-5 bg-navy2/70 backdrop-blur-sm border ${card.color} px-6 py-5 transition-all duration-400 hover:bg-navy2/90 cursor-default`}
              >
                <div className="text-3xl mt-0.5 group-hover:scale-110 transition-transform duration-300">{card.emoji}</div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="font-display text-xl text-cream group-hover:text-gold transition-colors duration-300">{card.title}</span>
                    <span className="font-label text-gold/50 text-[0.58rem] tracking-widest uppercase border border-gold/20 px-2 py-0.5">{card.sub}</span>
                  </div>
                  <p className="font-body text-cream/40 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Mini stat strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-6 pt-2 pl-1"
            >
              {[
                { val: '4',    label: 'Locations' },
                { val: 'Free', label: 'Consultation' },
                { val: '0',    label: 'Referrals Needed' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl text-gold font-300">{s.val}</div>
                  <div className="font-label text-cream/30 text-[0.55rem] tracking-widest uppercase mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom location bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="relative z-20 border-t border-gold/15 bg-navy/80 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1 sm:gap-0">
            {[
              { city: 'Lloydminster', phone: '306.825.8577', tel: '+13068258577' },
              { city: 'Martensville',  phone: '306.934.4446', tel: '+13069344446' },
              { city: 'Camrose',       phone: '780.673.1143', tel: '+17806731143' },
              { city: 'Cold Lake',     phone: '306.825.8577', tel: '+13068258577' },
            ].map((loc, i) => (
              <div key={loc.city} className="flex items-center">
                <a href={`tel:${loc.tel}`}
                  className="flex items-center gap-2 px-3 sm:px-4 py-1 group hover:bg-gold/8 transition-colors rounded"
                >
                  <span className="font-label text-cream/40 group-hover:text-gold text-[0.6rem] tracking-widest uppercase transition-colors">{loc.city}</span>
                  <span className="font-label text-gold/70 group-hover:text-gold text-[0.65rem] transition-colors">{loc.phone}</span>
                </a>
                {i < 3 && <span className="text-gold/20 text-xs hidden sm:block">·</span>}
              </div>
            ))}
          </div>
          <Link to="/getting-started"
            className="shrink-0 flex items-center gap-2 font-label text-[0.62rem] tracking-widest uppercase text-gold border border-gold/30 hover:border-gold hover:bg-gold/10 px-5 py-2 transition-all duration-300"
          >
            Book Now
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent"
        />
        <span className="font-label text-gold/30 text-[0.5rem] tracking-[0.35em] uppercase">Scroll</span>
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
    img: guide,
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
