import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import { useReveal } from '../hooks/useReveal.js';

/**
 * Page shell — handles Nav, Footer, and reveal-on-scroll wiring.
 * Pass overPhoto when the page begins with a full-bleed photo header so
 * the nav initially renders in pale-on-dark colors.
 */
export default function Page({ overPhoto = false, children }) {
  useReveal();
  return (
    <>
      <Nav overPhoto={overPhoto} />
      {children}
      <Footer />
    </>
  );
}
