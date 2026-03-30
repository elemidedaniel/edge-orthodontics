import { Link } from 'react-router-dom'
import edgelogo from '../assets/edgelogo.svg'

const locations = [
  { city: 'Lloydminster', addr: '2909 50 Ave, Lloydminster, SK S9V 0N7', phone: '306.825.8577', email: 'admin@edgeorthodontics.ca', hours: 'Mon – Thu, 8AM – 4PM' },
  { city: 'Martensville',  addr: '12 2nd St S, Martensville, SK S0K 2T0', phone: '306.934.4446', email: 'admin@edgeorthodontics.ca', hours: 'Mon – Fri, 7AM – 6PM (1PM Fri)' },
  { city: 'Camrose',       addr: '6708 48 Ave Unit 1030, Camrose, AB T4V 4S3', phone: '780.673.1143', email: 'camrose@edgeorthodontics.ca', hours: 'Wed – Thu, 8AM – 4PM' },
  { city: 'Cold Lake',     addr: '5101 46 Ave Unit 1005, Cold Lake, AB T9M 0C8', phone: '306.825.8577', email: 'admin@edgeorthodontics.ca', hours: 'Mon – Thu, 8AM – 4PM' },
]

const links = [
  { label: 'Home',           to: '/' },
  { label: 'Getting Started',to: '/getting-started' },
  { label: 'Services',       to: '/services' },
  { label: 'Meet the Team',  to: '/team' },
  { label: 'Clinic Tour',    to: '/clinic-tour' },
  { label: 'Blog',           to: '/blog' },
  { label: 'Contact Us',     to: '/contact' },
  { label: 'Referral Form',  to: '/referral-form' },
]

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/15">
      {/* CTA Banner */}
      <div className="bg-navy2 border-b border-gold/10 py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-label text-gold text-xs tracking-[0.3em] uppercase mb-4">Begin Your Journey</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-300 mb-6">
            Confident Smiles Start{' '}
            <em className="text-gold not-italic">Here</em>
          </h2>
          <p className="text-cream/50 font-body text-sm mb-8 max-w-md mx-auto">No referral needed. Book your free consultation at any of our four locations across Alberta and Saskatchewan.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/getting-started"
              className="bg-gold hover:bg-gold2 text-navy font-label font-700 text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
            >
              Book Free Consultation
            </Link>
            <Link to="/contact"
              className="border border-gold/40 hover:border-gold text-gold font-label text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-14">
          {locations.map(loc => (
            <div key={loc.city}>
              <div className="font-label text-gold text-[0.65rem] tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-gold/60" />
                {loc.city}
              </div>
              <p className="text-cream/40 font-body text-xs leading-relaxed mb-1">{loc.addr}</p>
              <a href={`tel:+1${loc.phone.replace(/\D/g,'')}`} className="text-gold font-label text-sm hover:text-gold2 transition-colors block mb-0.5">{loc.phone}</a>
              <a href={`mailto:${loc.email}`} className="text-cream/35 font-body text-xs hover:text-gold/60 transition-colors block mb-2">{loc.email}</a>
              <p className="text-cream/30 font-body text-xs">{loc.hours}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gold/10 pt-10 grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={edgelogo} alt="Edge Orthodontics" className="h-6 w-auto" />
            </Link>
            <p className="text-cream/30 font-body text-xs leading-relaxed max-w-xs">
              Specialized orthodontic care for families across Alberta and Saskatchewan. Invisalign, braces, and more. no referral needed.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-label text-gold/60 text-[0.6rem] tracking-[0.25em] uppercase mb-4">Quick Links</div>
            <div className="grid grid-cols-2 gap-1.5">
              {links.map(l => (
                <Link key={l.label} to={l.to}
                  className="text-cream/35 hover:text-gold font-body text-xs transition-colors"
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* No referral + tech logos */}
          <div>
            <div className="font-label text-gold/60 text-[0.6rem] tracking-[0.25em] uppercase mb-4">Technology Partners</div>
            <div className="flex flex-wrap gap-3">
              {['Invisalign', 'iTero', 'AO Ortho', 'Tanzo'].map(tech => (
                <span key={tech} className="border border-gold/20 text-gold/60 font-label text-[0.6rem] tracking-wider uppercase px-3 py-1.5">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="font-label text-gold/70 text-[0.65rem] tracking-widest uppercase">No Referral Needed</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-cream/20 font-body text-xs">© 2025 Edge Orthodontics. All rights reserved.</span>
          <div className="flex gap-5">
            {['Privacy Policy', 'Accessibility'].map(l => (
              <a key={l} href="#" className="text-cream/20 hover:text-gold/50 font-body text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
