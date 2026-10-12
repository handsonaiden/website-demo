import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = {
  basic: [
    { name: 'Home', path: '/basic' },
    { name: 'About', path: '/basic/about' },
    { name: 'Admissions', path: '/basic/admissions' },
    { name: 'Gallery', path: '/basic/gallery' },
    { name: 'Contact', path: '/basic/contact' },
    { name: 'Pricing', path: '/basic/pricing' },
  ],
  standard: [
    { name: 'Home', path: '/standard' },
    { name: 'About', path: '/standard/about' },
    { name: 'Academics', path: '/standard/academics' },
    { name: 'Staff', path: '/standard/staff' },
    { name: 'News', path: '/standard/news' },
    { name: 'Events', path: '/standard/events' },
    { name: 'Gallery', path: '/standard/gallery' },
    { name: 'Downloads', path: '/standard/downloads' },
    { name: 'Contact', path: '/standard/contact' },
    { name: 'Pricing', path: '/standard/pricing' },
  ],
  premium: [
    { name: 'Home', path: '/premium' },
    { name: 'About', path: '/premium/about' },
    { name: 'Testimonials', path: '/premium/testimonials' },
    { name: 'Academics', path: '/premium/academics' },
    { name: 'Staff', path: '/premium/staff' },
    { name: 'News', path: '/premium/news' },
    { name: 'Events', path: '/premium/events' },
    { name: 'Gallery', path: '/premium/gallery' },
    { name: 'Downloads', path: '/premium/downloads' },
    { name: 'Contact', path: '/premium/contact' },
    { name: 'Pricing', path: '/premium/pricing' },
  ],
}

function Navbar() {
  const { pathname } = useLocation()

  const packageType = pathname.startsWith('/premium')
    ? 'premium'
    : pathname.startsWith('/basic')
      ? 'basic'
      : 'standard'

  const currentLinks = navItems[packageType]

  return (
    <nav aria-label="Main navigation">
      <div className="schoolweb-nav-container">
        <Link to={`/${packageType}`} className="schoolweb-brand">
          <span className="schoolweb-brand-mark" aria-hidden="true">G</span>
          <span>Greenfield</span>
        </Link>

        <div className="schoolweb-nav-links">
          {currentLinks.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === `/${packageType}`}
              className="schoolweb-nav-link"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
