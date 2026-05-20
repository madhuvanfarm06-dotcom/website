import { useState } from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/Page.jsx';
import SEO from '../components/SEO.jsx';
import { SOCIAL_LINKS, SocialIcon } from '../components/Footer.jsx';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyoSBgl1SbmfsunIsUxMd15zTh3Y3AG8k9wpgG9-HehG3I_TBjd95lGmMxxyuyxyxo/exec";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "I am interested in a plot",
    message: "",
    source: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      if (window.fbq) {
        window.fbq('track', 'Lead', { content_name: formData.subject });
      }
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Page>
      <SEO
        title="Contact · Enquire about a plot at Madhuvan"
        description="Write to Sun Developers to begin a conversation about a plot at Madhuvan. We meet every interested family ourselves, walk the land together, and only sell when both sides are sure."
        keywords="contact Sun Developers, enquire Madhuvan plot, buy plot near Pune, plot enquiry Bhor"
      />
      <header className="page-head">
        <div className="page-head__inner">
          <span className="page-head__eyebrow">Contact</span>
          <h1 className="page-head__title">Write to <em>us.</em></h1>
          <span className="page-head__deva">संवाद · Saṁvāda — a conversation</span>
        </div>
        <p className="page-head__lede">
          Buying a plot at Madhuvan begins with a long, unhurried conversation. The form below is the easiest way in. The numbers and addresses below work too, when you would rather speak.
        </p>
      </header>

      <section className="section">
        <div className="contact-grid">
          <aside className="contact-aside reveal">
            <div className="contact-block">
              <span className="contact-block__label">Email</span>
              <h3 className="contact-block__primary"><a href="mailto:hello@madhuvan.land">hello@madhuvan.land</a></h3>
              <p className="contact-block__sub">For everything: enquiries, visits, conversations, second thoughts. We read every message ourselves.</p>
            </div>

            <div className="contact-block">
              <span className="contact-block__label">Phone</span>
              <h3 className="contact-block__primary">+917028722258</h3>
              <p className="contact-block__sub">If you would rather speak, please leave a message. We don't always pick up — we are usually on the land.</p>
            </div>

            <div className="contact-block">
              <span className="contact-block__label">When we reply</span>
              <div className="contact-block__hours">
                <div><strong>Mon – Fri</strong><span>Within 24 hours</span></div>
                <div><strong>Sat – Sun</strong><span>By Monday morning</span></div>
                <div><strong>Monsoon</strong><span>The internet is unreliable. Please be patient.</span></div>
              </div>
            </div>

            <div className="contact-block">
              <span className="contact-block__label">Find us on</span>
              <div className="contact-social">
                {SOCIAL_LINKS.map(s => (
                  <a key={s.icon} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
                    <SocialIcon name={s.icon} />
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-block">
              <span className="contact-block__label">The two of us</span>
              <div className="contact-people">
                <div className="person">
                  <div className="person__avatar">A</div>
                  <div>
                    <h4 className="person__name">Anand Kulkarni</h4>
                    <span className="person__role">Founder · Land &amp; visits</span>
                    <a className="person__email" href="mailto:anand@madhuvan.land">anand@madhuvan.land</a>
                  </div>
                </div>
                <div className="person">
                  <div className="person__avatar">A</div>
                  <div>
                    <h4 className="person__name">Aarya Kulkarni</h4>
                    <span className="person__role">Founder · Architecture &amp; journal</span>
                    <a className="person__email" href="mailto:aarya@madhuvan.land">aarya@madhuvan.land</a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {submitted ? (
            <div className="contact-form reveal" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <span className="deva" style={{ fontSize: '2rem', color: 'var(--forest)', display: 'block', marginBottom: '1rem' }}>धन्यवाद</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '2rem', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Thank you for writing.</h3>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--fg-soft)', maxWidth: '40ch', margin: '0 auto' }}>
                We have your message. One of us will reply within 48 hours, usually with a few questions of our own — that's how a conversation begins here.
              </p>
            </div>
          ) : (
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div>
                <span className="contact-block__label" style={{ display: 'block', marginBottom: '0.5rem' }}>The form</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '1.8rem', lineHeight: 1.2, margin: '0 0 0.5rem', letterSpacing: '-0.01em' }}>
                  A few details, if you don't mind.
                </h3>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--fg-soft)', fontSize: '1rem', margin: 0, lineHeight: 1.55 }}>
                  Nothing is required. The more you tell us now, the more useful our reply will be.
                </p>
              </div>

              <div className="cf-row">
                <div className="cf-field"><label>Your name</label><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your good name" /></div>
                <div className="cf-field"><label>Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required /></div>
              </div>

              <div className="cf-row">
                <div className="cf-field"><label>Phone (optional)</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 …" /></div>
                <div className="cf-field">
                  <label>What is this about?</label>
                  <select name="subject" value={formData.subject} onChange={handleChange}>
                    <option>I am interested in a plot</option>
                    <option>I'd like to arrange a site visit</option>
                    <option>A question about the architecture</option>
                    <option>The journal / a press enquiry</option>
                    <option>Something else</option>
                  </select>
                </div>
              </div>

              <div className="cf-field">
                <label>Tell us a little about yourselves</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Where you live now, what drew you to Madhuvan, what you imagine doing here, the season you love best, anything you want us to know." />
              </div>

              <div className="cf-field">
                <label>How did you find us</label>
                <input type="text" name="source" value={formData.source} onChange={handleChange} placeholder="A friend, a magazine, a search, a journal we wrote in…" />
              </div>

              {error && (
                <p style={{ color: '#b00020', fontFamily: 'var(--font-serif)', fontStyle: 'italic', margin: 0 }}>{error}</p>
              )}

              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--rule)' }}>
                <button type="submit" className="btn btn--primary btn--lg" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send the message →'}
                </button>
                <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--fg-muted)', fontSize: '0.95rem' }}>We reply within 48 hours.</span>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="contact-banner">
        <h3>Some things are better answered <em>before</em> you write.</h3>
        <Link to="/faq" className="btn btn--bone">Read the FAQ →</Link>
      </section>
    </Page>
  );
}
