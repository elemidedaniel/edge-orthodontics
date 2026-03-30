import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Locations from './pages/Locations'
import {
  GettingStarted,
  Team,
  ClinicTour,
  Blog,
  Contact,
  ReferralForm,
} from './pages/OtherPages'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0 },
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Routes location={location}>
            <Route path="/"                element={<Home />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/services"        element={<Services />} />
            <Route path="/team"            element={<Team />} />
            <Route path="/clinic-tour"     element={<ClinicTour />} />
            <Route path="/locations"       element={<Locations />} />
            <Route path="/blog"            element={<Blog />} />
            <Route path="/contact"         element={<Contact />} />
            <Route path="/referral-form"   element={<ReferralForm />} />
          </Routes>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
