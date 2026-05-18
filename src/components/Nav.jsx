import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const LINKS = [
  { to: '/',             label: 'Home' },
  { to: '/the-land',     label: 'The Land' },
  { to: '/plots',        label: 'Plots' },
  { to: '/gallery',      label: 'Gallery' },
  { to: '/journal',      label: 'Journal' },
  { to: '/visit',        label: 'Visit' },
  { to: '/faq',          label: 'FAQ' },
];

export default function Nav({ overPhoto = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--solid' : ''} ${overPhoto ? 'nav--over-photo' : ''}`}>
        <Link to="/" className="nav__brand" aria-label="Madhuvan — home">
          <img className="nav__logo" src="/img/madhuvan-logo.png" alt="Madhuvan" />
        </Link>

        <div className="nav__links">
          {LINKS.slice(1).map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav__link ${isActive ? 'is-current' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav__link nav__cta">Enquire ↗</Link>
        </div>

        <button className={`nav__burger ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`nav-drawer ${open ? 'is-open' : ''}`}>
        {LINKS.map(l => (
          <Link key={l.to} to={l.to}>{l.label}</Link>
        ))}
        <Link to="/contact">Enquire ↗</Link>
        <span className="nav-drawer__deva">मधुवन</span>
      </div>
    </>
  );
}
