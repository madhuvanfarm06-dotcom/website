import { Link } from 'react-router-dom';

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com/sun_developers_pune', icon: 'instagram' },
  { name: 'Facebook',  url: 'https://www.facebook.com/share/v/1b7ZsMNzji/',   icon: 'facebook'  },
  { name: 'YouTube',   url: 'https://youtu.be/n858JP3A4JI?si=w2QhXTWbDc2hTR3R', icon: 'youtube'   },
];

export function SocialIcon({ name }) {
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    );
  }
  if (name === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.7-1.6h1.6V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.5H7.7V14h2.7v8h3.1z" />
      </svg>
    );
  }
  if (name === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .4-4.8 26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z" />
      </svg>
    );
  }
  return null;
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <div className="footer__brand-latin">Madhuvan</div>
          <div className="footer__brand-deva">मधुवन मन माती आणि निसर्गाच नातं</div>
          <p className="footer__tag">
            Plots for a better tomorrow.<br />
            A small settlement of homes among the trees, in a bend of the river,
            sixty-two kilometres from Pune.
          </p>
        </div>
        <div className="footer__col">
          <h5>The land</h5>
          <Link to="/the-land">Geography</Link>
          <Link to="/plots">Plots</Link>
          <Link to="/gallery">Gallery</Link>
          <a href="/img/site-plan-pasure.pdf" target="_blank" rel="noreferrer">Site plan ↗</a>
        </div>
        <div className="footer__col">
          <h5>Visit</h5>
          <Link to="/visit">Plan a visit</Link>
          <Link to="/contact">Enquire</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="footer__col">
          <h5>Get in touch</h5>
          <a href="mailto:madhuvanfarm06@gmail.com">madhuvanfarm06@gmail.com</a>
          <a href="tel:+917028722258">+917028722258</a>
          <p style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.95rem',
            color: 'var(--stone-light)', margin: '0.75rem 0 0', maxWidth: '24ch', lineHeight: 1.5,
          }}>
            Pasure village, Bhor taluka,<br />
            Pune district, Maharashtra 412206
          </p>
          <div className="footer__social">
            {SOCIAL_LINKS.map(s => (
              <a key={s.icon} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__base">
        <span>© Madhuvan {new Date().getFullYear()}. All rights reserved.</span>
        <span>Survey No. 579 · RERA P52100099999</span>
      </div>
    </footer>
  );
}
