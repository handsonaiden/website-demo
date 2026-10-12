import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CmsPage from './components/CmsPage'
import AnnouncementBanner from './components/AnnouncementBanner'
import StandardHome from './pages/StandardHome'
import StandardAbout from './pages/StandardAbout'
import StandardAcademics from './pages/StandardAcademics'
import StandardStaff from './pages/StandardStaff'
import StandardNews from './pages/StandardNews'
import StandardEvents from './pages/StandardEvents'
import StandardGallery from './pages/StandardGallery'
import StandardDownloads from './pages/StandardDownloads'
import StandardContact from './pages/StandardContact'
import BasicHome from './pages/BasicHome'
import BasicAbout from './pages/BasicAbout'
import BasicContact from './pages/BasicContact'
import BasicAdmissions from './pages/BasicAdmissions'
import BasicGallery from './pages/BasicGallery'
import PremiumHome from './pages/PremiumHome'
import PremiumAbout from './pages/PremiumAbout'
import PremiumAcademics from './pages/PremiumAcademics'
import PremiumStaff from './pages/PremiumStaff'
import PremiumNews from './pages/PremiumNews'
import PremiumEvents from './pages/PremiumEvents'
import PremiumGallery from './pages/PremiumGallery'
import PremiumDownloads from './pages/PremiumDownloads'
import PremiumContact from './pages/PremiumContact'
import PremiumTestimonials from './pages/PremiumTestimonials'
import StarterPricing from './pages/Starter'
import StandardPricing from './pages/Standard'
import PremiumPricing from './pages/Premium'
import NotFound from './pages/NotFound'

function tierFor(pathname) {
  if (pathname.startsWith('/basic')) return 'basic'
  if (pathname.startsWith('/premium')) return 'premium'
  return 'standard'
}

function RouteEffects() {
  const { pathname } = useLocation()

  // Document title from the current route.
  useEffect(() => {
    const section = pathname.split('/').filter(Boolean).at(-1) || 'School website demo'
    const title = section.replace(/-/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase())
    document.title = `${title} | SchoolWeb`
  }, [pathname])

  // Every tier keeps its own identity through a single theme attribute.
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-tier', tierFor(pathname))
  }, [pathname])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  // Reveal sections and cards as they enter the viewport.
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.schoolweb-page > section, .schoolweb-surface, .schoolweb-feature-panel, .cms-page-content'
    )

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach(node => node.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )

    targets.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/standard" replace />} />
          {/* Basic (Starter) package demo site */}
          <Route path="/basic" element={<BasicHome />} />
          <Route path="/basic/about" element={<BasicAbout />} />
          <Route path="/basic/admissions" element={<BasicAdmissions />} />
          <Route path="/basic/contact" element={<BasicContact />} />
          <Route path="/basic/gallery" element={<BasicGallery />} />

          {/* Standard package demo site */}
          <Route path="/standard" element={<><AnnouncementBanner /><CmsPage slug="standard" fallback={<StandardHome />} /></>} />
          <Route path="/standard/about" element={<CmsPage slug="standard-about" fallback={<StandardAbout />} />} />
          <Route path="/standard/academics" element={<CmsPage slug="standard-academics" fallback={<StandardAcademics />} />} />
          <Route path="/standard/staff" element={<CmsPage slug="standard-staff" fallback={<StandardStaff />} />} />
          <Route path="/standard/news" element={<StandardNews />} />
          <Route path="/standard/events" element={<StandardEvents />} />
          <Route path="/standard/gallery" element={<CmsPage slug="standard-gallery" fallback={<StandardGallery />} />} />
          <Route path="/standard/downloads" element={<CmsPage slug="standard-downloads" fallback={<StandardDownloads />} />} />
          <Route path="/standard/contact" element={<CmsPage slug="standard-contact" fallback={<StandardContact />} />} />

          {/* Premium package demo site */}
          <Route path="/premium" element={<PremiumHome />} />
          <Route path="/premium/testimonials" element={<PremiumTestimonials />} />
          <Route path="/premium/about" element={<PremiumAbout />} />
          <Route path="/premium/academics" element={<PremiumAcademics />} />
          <Route path="/premium/staff" element={<PremiumStaff />} />
          <Route path="/premium/news" element={<PremiumNews />} />
          <Route path="/premium/events" element={<PremiumEvents />} />
          <Route path="/premium/gallery" element={<PremiumGallery />} />
          <Route path="/premium/downloads" element={<PremiumDownloads />} />
          <Route path="/premium/contact" element={<PremiumContact />} />

          {/* Pricing pages */}
          <Route path="/basic/pricing" element={<StarterPricing />} />
          <Route path="/standard/pricing" element={<StandardPricing />} />
          <Route path="/premium/pricing" element={<PremiumPricing />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
