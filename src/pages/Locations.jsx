import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const locations = [
  {
    id: 'lloydminster',
    city: 'Lloydminster',
    prov: 'Saskatchewan',
    address: '2909 50 Ave, Lloydminster, SK S9V 0N7',
    phone: '306.825.8577',
    tel: '+13068258577',
    email: 'admin@edgeorthodontics.ca',
    hours: [
      ['Monday',    '8:00 AM – 4:00 PM'],
      ['Tuesday',   '8:00 AM – 4:00 PM'],
      ['Wednesday', '8:00 AM – 4:00 PM'],
      ['Thursday',  '8:00 AM – 4:00 PM'],
      ['Friday',    'Closed'],
      ['Saturday',  'Closed'],
      ['Sunday',    'Closed'],
    ],
    mapSrc: 'https://maps.google.com/maps?q=2909+50+Ave,+Lloydminster,+SK+S9V+0N7&t=m&z=15&output=embed&iwloc=near',
    mapLink: 'https://goo.gl/maps/Z42xzKSYgXhAbdfH9',
    note: 'Our flagship location — where it all started.',
  },
  {
    id: 'martensville',
    city: 'Martensville',
    prov: 'Saskatchewan',
    address: '12 2nd St S, Martensville, SK S0K 2T0',
    phone: '306.934.4446',
    tel: '+13069344446',
    email: 'admin@edgeorthodontics.ca',
    hours: [
      ['Monday',    '7:00 AM – 6:00 PM'],
      ['Tuesday',   '7:00 AM – 6:00 PM'],
      ['Wednesday', '7:00 AM – 6:00 PM'],
      ['Thursday',  '7:00 AM – 6:00 PM'],
      ['Friday',    '7:00 AM – 1:00 PM'],
      ['Saturday',  'Closed'],
      ['Sunday',    'Closed'],
    ],
    mapSrc: 'https://maps.google.com/maps?q=12+2nd+St+S,+Martensville,+SK+S0K+2T0&t=m&z=15&output=embed&iwloc=near',
    mapLink: 'https://goo.gl/maps/GgKeZ92rCWayS3iz7',
    note: 'Newest location — now open with extended hours.',
    isNew: true,
  },
  {
    id: 'camrose',
    city: 'Camrose',
    prov: 'Alberta',
    address: '6708 48 Ave Unit 1030, Camrose, AB T4V 4S3',
    phone: '780.673.1143',
    tel: '+17806731143',
    email: 'camrose@edgeorthodontics.ca',
    hours: [
      ['Monday',    'Closed'],
      ['Tuesday',   'Closed'],
      ['Wednesday', '8:00 AM – 4:00 PM'],
      ['Thursday',  '8:00 AM – 4:00 PM'],
      ['Friday',    'Closed'],
      ['Saturday',  'Closed'],
      ['Sunday',    'Closed'],
    ],
    mapSrc: 'https://maps.google.com/maps?q=6708+48+Ave+Unit+1030,+Camrose,+AB+T4V+4S3&t=m&z=15&output=embed&iwloc=near',
    mapLink: 'https://www.google.com/maps/place/Edge+Orthodontics+Camrose',
    note: 'Serving central Alberta every week.',
  },
  {
    id: 'cold-lake',
    city: 'Cold Lake',
    prov: 'Alberta',
    address: '5101 46 Ave Unit 1005, Cold Lake, AB T9M 0C8',
    phone: '306.825.8577',
    tel: '+13068258577',
    email: 'admin@edgeorthodontics.ca',
    hours: [
      ['Monday',    '8:00 AM – 4:00 PM'],
      ['Tuesday',   '8:00 AM – 4:00 PM'],
      ['Wednesday', '8:00 AM – 4:00 PM'],
      ['Thursday',  '8:00 AM – 4:00 PM'],
      ['Friday',    'Closed'],
      ['Saturday',  'Closed'],
      ['Sunday',    'Closed'],
    ],
    mapSrc: 'https://maps.google.com/maps?q=5101+46+Ave,+Cold+Lake,+AB+T9M+0C8&t=m&z=15&output=embed&iwloc=near',
    mapLink: 'https://maps.google.com/?q=5101+46+Ave,+Cold+Lake,+AB',
    note: 'Northern Alberta\'s orthodontic destination.',
  },
]

function LocationCard({ loc, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (window.location.hash === `#${loc.id}`) {
      setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200)
    }
  }, [loc.id])

  return (
    <motion.div
      ref={ref}
      id={loc.id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="border border-gold/15 hover:border-gold/30 transition-colors duration-500 scroll-mt-32"
    >
      {/* Header */}
      <div className="bg-navy2 px-8 py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold/10">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="font-label text-gold/50 text-[0.6rem] tracking-widest uppercase">{loc.prov}</span>
            {loc.isNew && (
              <span className="bg-gold/20 text-gold font-label text-[0.55rem] tracking-widest uppercase px-2.5 py-1">New Location</span>
            )}
          </div>
          <h2 className="font-display text-3xl text-cream font-300">{loc.city}</h2>
          {loc.note && <p className="font-body text-cream/35 text-xs mt-1">{loc.note}</p>}
        </div>
        <div className="flex gap-3">
          <a href={loc.tel}
            className="bg-gold hover:bg-gold2 text-navy font-label text-[0.65rem] tracking-widest uppercase px-5 py-3 transition-all duration-300"
          >
            Call Now
          </a>
          <Link to="/getting-started"
            className="border border-gold/30 hover:border-gold text-gold font-label text-[0.65rem] tracking-widest uppercase px-5 py-3 transition-all duration-300"
          >
            Book
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* Info panel */}
        <div className="p-8 space-y-7 border-b lg:border-b-0 lg:border-r border-gold/10">
          {/* Contact */}
          <div>
            <div className="font-label text-gold/50 text-[0.6rem] tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-3 h-px bg-gold/40" /> Contact
            </div>
            <div className="space-y-2">
              <a href={loc.tel} className="flex items-center gap-3 group">
                <div className="w-8 h-8 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <svg className="w-3.5 h-3.5 text-gold" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                </div>
                <span className="font-label text-gold text-sm group-hover:text-gold2 transition-colors">{loc.phone}</span>
              </a>
              <a href={`mailto:${loc.email}`} className="flex items-center gap-3 group">
                <div className="w-8 h-8 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <svg className="w-3.5 h-3.5 text-gold" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <span className="font-body text-cream/50 text-xs group-hover:text-gold/60 transition-colors">{loc.email}</span>
              </a>
              <a href={loc.mapLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <div className="w-8 h-8 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <svg className="w-3.5 h-3.5 text-gold" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <span className="font-body text-cream/50 text-xs group-hover:text-gold/60 transition-colors">{loc.address}</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="font-label text-gold/50 text-[0.6rem] tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-3 h-px bg-gold/40" /> Office Hours
            </div>
            <div className="space-y-1.5">
              {loc.hours.map(([day, time]) => {
                const closed = time === 'Closed'
                return (
                  <div key={day} className="flex items-center justify-between py-1 border-b border-gold/5 last:border-0">
                    <span className="font-body text-cream/40 text-xs w-24">{day}</span>
                    <span className={`font-label text-xs tracking-wide ${closed ? 'text-cream/20' : 'text-gold/80'}`}>
                      {time}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="relative h-80 lg:h-auto min-h-[320px] overflow-hidden">
          <iframe
            src={loc.mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.7) brightness(0.85)' }}
            allowFullScreen
            loading="lazy"
            title={`Map of ${loc.city}`}
            className="absolute inset-0 w-full h-full"
          />
          {/* Gold border overlay */}
          <div className="absolute inset-0 pointer-events-none border border-gold/10" />
          {/* Get directions button */}
          <a href={loc.mapLink} target="_blank" rel="noreferrer"
            className="absolute bottom-4 right-4 bg-navy/90 backdrop-blur border border-gold/30 text-gold font-label text-[0.6rem] tracking-widest uppercase px-4 py-2.5 hover:bg-gold/10 transition-colors"
          >
            Get Directions ↗
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Locations() {
  return (
    <div className="bg-navy min-h-screen">
      {/* Page header */}
      <div className="bg-navy2 border-b border-gold/10 py-20 px-6 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-label text-gold text-[0.65rem] tracking-[0.35em] uppercase mb-4 flex items-center justify-center gap-3"
        >
          <span className="w-6 h-px bg-gold" /> Find Us <span className="w-6 h-px bg-gold" />
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display font-300 text-cream"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Four Locations Across<br />
          <em className="text-gold not-italic">Alberta & Saskatchewan</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="font-body text-cream/40 text-sm mt-5 max-w-lg mx-auto"
        >
          No referral needed at any location. Book a free consultation and start your smile journey today.
        </motion.p>

        {/* Jump links */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {locations.map(loc => (
            <a key={loc.id} href={`#${loc.id}`}
              className="font-label text-[0.65rem] tracking-widest uppercase border border-gold/25 hover:border-gold text-gold/70 hover:text-gold px-5 py-2.5 transition-all duration-300"
            >
              {loc.city}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Location cards */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        {locations.map((loc, i) => (
          <LocationCard key={loc.id} loc={loc} i={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-gold/10 py-16 px-6 text-center">
        <h3 className="font-display text-3xl text-cream font-300 mb-4">
          Ready to Visit Us?
        </h3>
        <p className="font-body text-cream/40 text-sm mb-7 max-w-sm mx-auto">
          Call any location directly or book your free consultation online. We can't wait to meet you.
        </p>
        <Link to="/getting-started"
          className="inline-block bg-gold hover:bg-gold2 text-navy font-label font-700 text-[0.7rem] tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
        >
          Book Free Consultation
        </Link>
      </div>
    </div>
  )
}
