import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import dryoung from '../assets/dryoung.jpg'
import vs from '../assets/vs.png'

/* ─── GETTING STARTED ─── */
const steps = [
  { num: '01', title: 'Book Your Free Consultation', body: 'Call any location or use our online form. No referral required — just reach out and we\'ll get you scheduled, often within the week.' },
  { num: '02', title: 'Your First Visit', body: 'We\'ll take digital x-rays and an iTero 3D scan of your teeth. Dr. Young will review everything and answer all your questions — no pressure.' },
  { num: '03', title: 'Your Custom Treatment Plan', body: 'We\'ll present a personalized plan including timeline, costs, and financing options. You choose what works best for you and your family.' },
  { num: '04', title: 'Begin Your Smile Journey', body: 'Once you\'re ready to start, we\'ll fit your first set of aligners or place your braces. Your Edge team will guide you every step of the way.' },
]

export function GettingStarted() {
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const inputCls = "w-full bg-navy border border-gold/20 focus:border-gold text-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-300 placeholder:text-cream/20"
  const labelCls = "font-label text-gold/60 text-[0.6rem] tracking-widest uppercase block mb-1.5"

  return (
    <div className="bg-navy min-h-screen">
      <div className="bg-navy2 border-b border-gold/10 py-20 px-6 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-label text-gold text-[0.65rem] tracking-[0.35em] uppercase mb-4 flex items-center justify-center gap-3"
        >
          <span className="w-6 h-px bg-gold" /> No Referral Needed <span className="w-6 h-px bg-gold" />
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display font-300 text-cream"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Getting Started<br /><em className="text-gold not-italic">is Easy</em>
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16" ref={ref}>
        {/* Steps */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-gold/8 mb-16">
          {steps.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="bg-navy p-8"
            >
              <div className="font-display text-5xl text-gold/20 font-300 mb-5">{s.num}</div>
              <h3 className="font-display text-xl text-cream font-400 mb-3">{s.title}</h3>
              <p className="font-body text-cream/40 text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Consultation form */}
        <div className="grid lg:grid-cols-2 gap-14">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}>
            <div className="font-label text-gold text-[0.65rem] tracking-[0.3em] uppercase mb-4 flex items-center gap-3"><span className="w-6 h-px bg-gold" /> Book Consultation</div>
            <h2 className="font-display text-4xl text-cream font-300 mb-5">Ready to Start Your<br /><em className="text-gold not-italic">Smile Journey?</em></h2>
            <p className="font-body text-cream/40 text-sm leading-relaxed mb-7">Fill out the form and we\'ll contact you within one business day to schedule your free consultation at the location most convenient for you.</p>
            <div className="space-y-4">
              {[
                { icon: '📍', title: 'Lloydminster — 306.825.8577' },
                { icon: '📍', title: 'Martensville — 306.934.4446' },
                { icon: '📍', title: 'Camrose — 780.673.1143' },
                { icon: '📍', title: 'Cold Lake — 306.825.8577' },
              ].map(loc => (
                <div key={loc.title} className="flex items-center gap-3 font-body text-cream/40 text-sm">
                  <span className="text-gold text-xs">{loc.icon}</span>
                  {loc.title}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 }}
            className="border border-gold/15 p-8"
          >
            {!submitted ? (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className={labelCls}>First Name</label><input className={inputCls} placeholder="Jane" /></div>
                  <div><label className={labelCls}>Last Name</label><input className={inputCls} placeholder="Smith" /></div>
                </div>
                <div><label className={labelCls}>Phone Number</label><input type="tel" className={inputCls} placeholder="306.000.0000" /></div>
                <div><label className={labelCls}>Email</label><input type="email" className={inputCls} placeholder="jane@email.com" /></div>
                <div>
                  <label className={labelCls}>Preferred Location</label>
                  <select className={inputCls} style={{ appearance: 'none' }}>
                    <option value="">Select a location</option>
                    <option>Lloydminster</option>
                    <option>Martensville</option>
                    <option>Camrose</option>
                    <option>Cold Lake</option>
                    <option>No preference</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Patient Type</label>
                  <select className={inputCls} style={{ appearance: 'none' }}>
                    <option value="">Select one</option>
                    <option>Myself (Adult)</option>
                    <option>My Child</option>
                    <option>Teen</option>
                  </select>
                </div>
                <div><label className={labelCls}>Additional Notes</label><textarea className={`${inputCls} h-24 resize-none`} placeholder="Anything else we should know?" /></div>
                <button type="submit"
                  className="w-full bg-gold hover:bg-gold2 text-navy font-label font-700 text-[0.7rem] tracking-widest uppercase py-4 transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
                >
                  Request Consultation
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                <div className="w-14 h-14 border border-gold/40 flex items-center justify-center mx-auto mb-5 text-gold text-2xl">✦</div>
                <h3 className="font-display text-3xl text-cream font-300 mb-3">Request Received</h3>
                <p className="font-body text-cream/40 text-sm max-w-xs mx-auto">We\'ll reach out within one business day to confirm your consultation. We can\'t wait to meet you.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/* ─── TEAM ─── */
export function Team() {
  return (
    <div className="bg-navy min-h-screen">
      <div className="bg-navy2 border-b border-gold/10 py-20 px-6 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-label text-gold text-[0.65rem] tracking-[0.35em] uppercase mb-4 flex items-center justify-center gap-3"
        >
          <span className="w-6 h-px bg-gold" /> The People Behind Your Smile <span className="w-6 h-px bg-gold" />
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display font-300 text-cream"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Meet the <em className="text-gold not-italic">Team</em>
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Dr. Young — featured */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-0 border border-gold/20 mb-10 overflow-hidden"
        >
          <div className="relative h-[480px] overflow-hidden">
            <img src={dryoung} alt="Dr. Fraser Young" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/40" />
          </div>
          <div className="bg-navy2 p-10 lg:p-14 flex flex-col justify-center">
            <div className="font-label text-gold/50 text-[0.6rem] tracking-[0.3em] uppercase mb-2">Orthodontist · Founder</div>
            <h2 className="font-display text-4xl text-cream font-300 mb-1">Dr. Fraser Young</h2>
            <div className="w-10 h-px bg-gold mb-6" />
            <p className="font-body text-cream/50 leading-relaxed mb-5 text-sm">
              Dr. Young was born and raised in Lloydminster, Saskatchewan — and is honoured to have the opportunity to return to his hometown to provide specialty orthodontic care to the community he grew up in.
            </p>
            <p className="font-body text-cream/50 leading-relaxed mb-8 text-sm">
              With advanced specialty training in orthodontics and a passion for patient-centred care, Dr. Young leads the Edge team with warmth, precision, and a genuine commitment to life-changing results.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Specialty Orthodontics', 'Invisalign Certified', 'iTero', 'AO Ortho'].map(t => (
                <span key={t} className="border border-gold/20 text-gold/60 font-label text-[0.58rem] tracking-wider uppercase px-3 py-1.5">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Support team note */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="border border-gold/10 bg-navy2/40 p-10 text-center"
        >
          <div className="font-label text-gold text-[0.6rem] tracking-widest uppercase mb-3">Our Team</div>
          <h3 className="font-display text-3xl text-cream font-300 mb-4">Supported by an Exceptional Team</h3>
          <p className="font-body text-cream/40 text-sm max-w-2xl mx-auto leading-relaxed mb-8">
            Behind every great smile is a team of dedicated orthodontic assistants, treatment coordinators, and patient experience specialists. At Edge, every member of our team is selected for their skill, warmth, and genuine care for patients.
          </p>
          <Link to="/getting-started"
            className="inline-block bg-gold hover:bg-gold2 text-navy font-label font-700 text-[0.7rem] tracking-widest uppercase px-8 py-4 transition-all duration-300"
          >
            Meet Us in Person — Book Free Consult
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

/* ─── CLINIC TOUR ─── */
const tourImages = [
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop', cap: 'Modern Treatment Rooms' },
  { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop', cap: 'Digital Imaging Suite' },
  { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80&auto=format&fit=crop', cap: 'Welcoming Reception' },
  { src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80&auto=format&fit=crop', cap: 'Patient Consultation Area' },
  { src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80&auto=format&fit=crop', cap: 'Children\'s Waiting Area' },
  { src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80&auto=format&fit=crop', cap: 'Sterilization & Safety' },
]

export function ClinicTour() {
  return (
    <div className="bg-navy min-h-screen">
      <div className="bg-navy2 border-b border-gold/10 py-20 px-6 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-label text-gold text-[0.65rem] tracking-[0.35em] uppercase mb-4 flex items-center justify-center gap-3"
        >
          <span className="w-6 h-px bg-gold" /> Step Inside <span className="w-6 h-px bg-gold" />
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display font-300 text-cream"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Clinic <em className="text-gold not-italic">Tour</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="font-body text-cream/40 text-sm mt-5 max-w-md mx-auto"
        >
          Modern facilities. Comfortable environments. Advanced technology. See what makes an Edge clinic different.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tourImages.map((img, i) => (
            <motion.div key={img.cap}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="group overflow-hidden border border-gold/10 hover:border-gold/30 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={img.src} alt={img.cap} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-4 left-4 font-label text-cream/80 text-[0.65rem] tracking-widest uppercase">{img.cap}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-cream/35 text-sm mb-6 max-w-md mx-auto">The best way to experience an Edge clinic is in person. Book a free consultation and we\'ll show you around.</p>
          <Link to="/getting-started"
            className="inline-block bg-gold hover:bg-gold2 text-navy font-label font-700 text-[0.7rem] tracking-widest uppercase px-8 py-4 transition-all duration-300"
          >
            Book Free Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

/* ─── BLOG ─── */
const posts = [
  { title: 'Invisalign vs Braces: Which Is Right for You?', date: 'March 2025', tag: 'Treatment', img: vs, excerpt: 'A straightforward guide to understanding the pros, cons, and ideal candidates for each treatment option.' },
  { title: 'What to Expect at Your First Orthodontic Appointment', date: 'February 2025', tag: 'Tips', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop', excerpt: 'First visit anxiety is normal. Here\'s exactly what happens during your free Edge consultation, step by step.' },
  { title: 'Early Orthodontic Treatment: Why Age 7 Matters', date: 'January 2025', tag: 'Families', img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80&auto=format&fit=crop', excerpt: 'The American Association of Orthodontists recommends children be evaluated by age 7. Here\'s why this window matters.' },
  { title: 'How to Care for Your Retainer (And Why It Matters)', date: 'December 2024', tag: 'Aftercare', img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80&auto=format&fit=crop', excerpt: 'Your retainer is what keeps your results permanent. Tips for cleaning, storing, and knowing when to replace it.' },
]

export function Blog() {
  return (
    <div className="bg-navy min-h-screen">
      <div className="bg-navy2 border-b border-gold/10 py-20 px-6 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-label text-gold text-[0.65rem] tracking-[0.35em] uppercase mb-4 flex items-center justify-center gap-3"
        >
          <span className="w-6 h-px bg-gold" /> Orthodontic Tips <span className="w-6 h-px bg-gold" />
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display font-300 text-cream"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          The Edge <em className="text-gold not-italic">Blog</em>
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <motion.article key={post.title}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="group border border-gold/10 hover:border-gold/30 transition-all duration-400 cursor-pointer"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover opacity-55 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
                <div className="absolute top-4 left-4 bg-navy2/80 border border-gold/25 text-gold font-label text-[0.58rem] tracking-widest uppercase px-3 py-1">{post.tag}</div>
              </div>
              <div className="p-7">
                <div className="font-label text-cream/30 text-[0.58rem] tracking-widest uppercase mb-3">{post.date}</div>
                <h3 className="font-display text-xl text-cream font-400 mb-3 group-hover:text-gold transition-colors duration-300">{post.title}</h3>
                <p className="font-body text-cream/40 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── CONTACT ─── */
export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const inputCls = "w-full bg-navy border border-gold/20 focus:border-gold text-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-300 placeholder:text-cream/20"
  const labelCls = "font-label text-gold/60 text-[0.6rem] tracking-widest uppercase block mb-1.5"

  return (
    <div className="bg-navy min-h-screen">
      <div className="bg-navy2 border-b border-gold/10 py-20 px-6 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-label text-gold text-[0.65rem] tracking-[0.35em] uppercase mb-4 flex items-center justify-center gap-3"
        >
          <span className="w-6 h-px bg-gold" /> Get In Touch <span className="w-6 h-px bg-gold" />
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display font-300 text-cream"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Contact <em className="text-gold not-italic">Us</em>
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14">
        {/* Info */}
        <div>
          <div className="font-label text-gold text-[0.65rem] tracking-[0.3em] uppercase mb-5 flex items-center gap-3"><span className="w-6 h-px bg-gold" /> All Locations</div>
          <div className="space-y-5">
            {[
              { city: 'Lloydminster', phone: '306.825.8577', tel: '+13068258577', email: 'admin@edgeorthodontics.ca' },
              { city: 'Martensville',  phone: '306.934.4446', tel: '+13069344446', email: 'admin@edgeorthodontics.ca' },
              { city: 'Camrose',       phone: '780.673.1143', tel: '+17806731143', email: 'camrose@edgeorthodontics.ca' },
              { city: 'Cold Lake',     phone: '306.825.8577', tel: '+13068258577', email: 'admin@edgeorthodontics.ca' },
            ].map(loc => (
              <div key={loc.city} className="border border-gold/12 hover:border-gold/30 p-5 transition-colors group">
                <div className="font-display text-xl text-cream group-hover:text-gold transition-colors mb-2">{loc.city}</div>
                <a href={loc.tel} className="font-label text-gold text-sm block hover:text-gold2 transition-colors mb-0.5">{loc.phone}</a>
                <a href={`mailto:${loc.email}`} className="font-body text-cream/35 text-xs hover:text-gold/50 transition-colors">{loc.email}</a>
              </div>
            ))}
          </div>
          <div className="mt-7 border border-gold/12 p-5">
            <div className="font-label text-gold/60 text-[0.6rem] tracking-widest uppercase mb-2">General Inquiries</div>
            <a href="mailto:admin@edgeorthodontics.ca" className="font-body text-cream/50 text-sm hover:text-gold transition-colors">admin@edgeorthodontics.ca</a>
          </div>
        </div>

        {/* Form */}
        <div className="border border-gold/15 p-8">
          {!submitted ? (
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
              <h3 className="font-display text-2xl text-cream font-300 mb-5">Send Us a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className={labelCls}>First Name</label><input className={inputCls} placeholder="Jane" /></div>
                <div><label className={labelCls}>Last Name</label><input className={inputCls} placeholder="Smith" /></div>
              </div>
              <div><label className={labelCls}>Email</label><input type="email" className={inputCls} placeholder="jane@email.com" /></div>
              <div><label className={labelCls}>Phone</label><input type="tel" className={inputCls} placeholder="306.000.0000" /></div>
              <div>
                <label className={labelCls}>Location</label>
                <select className={inputCls} style={{ appearance: 'none' }}>
                  <option value="">Select a location</option>
                  <option>Lloydminster</option><option>Martensville</option><option>Camrose</option><option>Cold Lake</option>
                </select>
              </div>
              <div><label className={labelCls}>Message</label><textarea className={`${inputCls} h-28 resize-none`} placeholder="How can we help?" /></div>
              <button type="submit" className="w-full bg-gold hover:bg-gold2 text-navy font-label font-700 text-[0.7rem] tracking-widest uppercase py-4 transition-all duration-300 hover:shadow-xl hover:shadow-gold/20">
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center py-16">
              <div className="w-14 h-14 border border-gold/40 flex items-center justify-center mx-auto mb-5 text-gold text-2xl">✦</div>
              <h3 className="font-display text-3xl text-cream font-300 mb-3">Message Sent</h3>
              <p className="font-body text-cream/40 text-sm max-w-xs mx-auto">We'll get back to you within one business day.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── REFERRAL FORM ─── */
export function ReferralForm() {
  const [submitted, setSubmitted] = useState(false)
  const inputCls = "w-full bg-navy border border-gold/20 focus:border-gold text-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-300 placeholder:text-cream/20"
  const labelCls = "font-label text-gold/60 text-[0.6rem] tracking-widest uppercase block mb-1.5"

  return (
    <div className="bg-navy min-h-screen">
      <div className="bg-navy2 border-b border-gold/10 py-20 px-6 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-label text-gold text-[0.65rem] tracking-[0.35em] uppercase mb-4 flex items-center justify-center gap-3"
        >
          <span className="w-6 h-px bg-gold" /> For Dental Professionals <span className="w-6 h-px bg-gold" />
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display font-300 text-cream"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Referral <em className="text-gold not-italic">Form</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="font-body text-cream/40 text-sm mt-5 max-w-md mx-auto"
        >
          Referring a patient to Edge Orthodontics? Fill out the form below and we'll take it from there.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {!submitted ? (
          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            onSubmit={e => { e.preventDefault(); setSubmitted(true) }}
            className="border border-gold/15 p-8 md:p-12 space-y-5"
          >
            <h2 className="font-display text-2xl text-cream font-300 mb-2">Referring Dentist Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className={labelCls}>Dentist Name</label><input className={inputCls} placeholder="Dr. Jane Smith" /></div>
              <div><label className={labelCls}>Practice Name</label><input className={inputCls} placeholder="Smith Family Dental" /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className={labelCls}>Phone</label><input type="tel" className={inputCls} placeholder="306.000.0000" /></div>
              <div><label className={labelCls}>Email</label><input type="email" className={inputCls} placeholder="drsmith@email.com" /></div>
            </div>
            <div className="pt-4 border-t border-gold/10">
              <h2 className="font-display text-2xl text-cream font-300 mb-5">Patient Information</h2>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className={labelCls}>Patient First Name</label><input className={inputCls} placeholder="Jane" /></div>
                  <div><label className={labelCls}>Patient Last Name</label><input className={inputCls} placeholder="Doe" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className={labelCls}>Date of Birth</label><input type="date" className={inputCls} /></div>
                  <div><label className={labelCls}>Phone</label><input type="tel" className={inputCls} placeholder="306.000.0000" /></div>
                </div>
                <div>
                  <label className={labelCls}>Preferred Edge Location</label>
                  <select className={inputCls} style={{ appearance: 'none' }}>
                    <option value="">Select location</option>
                    <option>Lloydminster</option><option>Martensville</option><option>Camrose</option><option>Cold Lake</option>
                  </select>
                </div>
                <div><label className={labelCls}>Reason for Referral / Notes</label><textarea className={`${inputCls} h-32 resize-none`} placeholder="Crowding, crossbite, spacing, etc." /></div>
              </div>
            </div>
            <button type="submit" className="w-full bg-gold hover:bg-gold2 text-navy font-label font-700 text-[0.7rem] tracking-widest uppercase py-4 transition-all duration-300 hover:shadow-xl hover:shadow-gold/20">
              Submit Referral
            </button>
          </motion.form>
        ) : (
          <div className="text-center py-20 border border-gold/15">
            <div className="w-14 h-14 border border-gold/40 flex items-center justify-center mx-auto mb-5 text-gold text-2xl">✦</div>
            <h3 className="font-display text-3xl text-cream font-300 mb-3">Referral Received</h3>
            <p className="font-body text-cream/40 text-sm max-w-xs mx-auto">Thank you for referring your patient to Edge Orthodontics. We'll be in touch within one business day.</p>
          </div>
        )}
      </div>
    </div>
  )
}
