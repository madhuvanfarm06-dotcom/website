import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <div className="footer__brand-latin">Madhuvan</div>
          <div className="footer__brand-deva">मधुवन · वसा</div>
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
          <Link to="/visit#stay">Guest stay</Link>
          <Link to="/contact">Enquire</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="footer__col">
          <h5>Get in touch</h5>
          <a href="mailto:hello@madhuvan.in">hello@madhuvan.in</a>
          <a href="tel:+912012345678">+91 20 1234 5678</a>
          <p style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.95rem',
            color: 'var(--stone-light)', margin: '0.75rem 0 0', maxWidth: '24ch', lineHeight: 1.5,
          }}>
            Pasure village, Bhor taluka,<br />
            Pune district, Maharashtra 412206
          </p>
        </div>
      </div>
      <div className="footer__base">
        <span>© Madhuvan {new Date().getFullYear()}. All rights reserved.</span>
        <span>Survey No. 579 · RERA P52100099999</span>
      </div>
    </footer>
  );
}
