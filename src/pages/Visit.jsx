import { useState } from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/Page.jsx';

export default function Visit() {
  const [type, setType] = useState('visit');
  const [submitted, setSubmitted] = useState(false);

  const jumpToForm = (kind) => {
    setType(kind);
    setTimeout(() => {
      document.querySelector('#visit-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <Page overPhoto>
      <header className="page-head page-head--short">
        <div className="page-head__photo"><img src="/img/aerial-04-upper-terrace.jpg" alt="" /></div>
        <div className="page-head__inner">
          <span className="page-head__eyebrow">Visit &amp; stay</span>
          <h1 className="page-head__title">Walk the land. <em>Stay a night.</em></h1>
          <span className="page-head__deva">A short drive from Pune. A long way from elsewhere.</span>
        </div>
      </header>

      <section className="section">
        <div className="sec-head reveal">
          <span className="sec-head__eyebrow">Two ways to come</span>
          <h2 className="sec-head__title">A site visit, <em>or a longer stay.</em></h2>
        </div>

        <div className="visit-twocard reveal">
          <div className="visit-card">
            <div className="visit-card__num">01</div>
            <span className="visit-card__kicker">Site visit · Half-day</span>
            <h3 className="visit-card__title">A guided <em>walk</em> of the land.</h3>
            <p className="visit-card__lede">We host site visits one weekend a month. You arrive at 9 am, we meet you at the gate, and we walk all eleven plots together. Tea, water, time to ask everything.</p>
            <ul className="visit-card__list">
              <li><strong>Duration</strong><span>Three to four hours</span></li>
              <li><strong>Group size</strong><span>Up to four families per visit</span></li>
              <li><strong>What to bring</strong><span>Sturdy shoes. The slope is gentle but uneven.</span></li>
              <li><strong>Cost</strong><span>No charge. We cover lunch.</span></li>
            </ul>
            <div className="visit-card__cta">
              <button onClick={() => jumpToForm('visit')} className="btn btn--ghost">Request a site visit →</button>
            </div>
          </div>

          <div className="visit-card visit-card--ink" id="stay">
            <div className="visit-card__num">02</div>
            <span className="visit-card__kicker">Guest stay · Two nights</span>
            <h3 className="visit-card__title">Sleep in the <em>guest cottage</em>.</h3>
            <p className="visit-card__lede">We have built one small guest cottage on the upper terrace. Two bedrooms, a verandah, a kitchen we will stock for you. Two-night minimum.</p>
            <ul className="visit-card__list">
              <li><strong>Duration</strong><span>Two-night minimum, three preferred</span></li>
              <li><strong>Capacity</strong><span>Up to four adults, two children</span></li>
              <li><strong>Meals</strong><span>Breakfast and dinner with us; lunch on your own</span></li>
              <li><strong>Cost</strong><span>₹18,000 per night, including all meals</span></li>
            </ul>
            <div className="visit-card__cta">
              <button onClick={() => jumpToForm('stay')} className="btn btn--bone">Request a stay →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="visit-form">
        <div className="sec-head reveal">
          <span className="sec-head__eyebrow">Request a visit</span>
          <h2 className="sec-head__title">Tell us a little <em>about yourselves.</em></h2>
        </div>

        {submitted ? (
          <div className="reveal" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', padding: '4rem 2rem', background: 'var(--bone)' }}>
            <span className="deva" style={{ fontSize: '2rem', color: 'var(--forest)' }}>धन्यवाद</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '2rem', margin: '1rem 0', letterSpacing: '-0.02em' }}>Thank you.</h3>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--fg-soft)', maxWidth: '40ch', margin: '0 auto' }}>
              We have received your request. We reply to every enquiry within 48 hours, usually with a few questions of our own.
            </p>
          </div>
        ) : (
          <form className="visit-form reveal" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div className="visit-form__field">
              <label>What kind of visit?</label>
              <div className="visit-radio">
                <label><input type="radio" name="type" checked={type === 'visit'} onChange={() => setType('visit')} /> A site visit (half-day)</label>
                <label><input type="radio" name="type" checked={type === 'stay'}  onChange={() => setType('stay')}  /> A guest stay (two nights)</label>
              </div>
            </div>

            <div className="visit-form__row">
              <div className="visit-form__field">
                <label>Your name</label>
                <input type="text" placeholder="Sucheta &amp; Aniruddha Joshi" required />
              </div>
              <div className="visit-form__field">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
            </div>

            <div className="visit-form__row">
              <div className="visit-form__field">
                <label>Phone</label>
                <input type="tel" placeholder="+91 98XXX XXXXX" required />
              </div>
              <div className="visit-form__field">
                <label>Preferred month</label>
                <select defaultValue="October 2026">
                  <option>October 2026</option>
                  <option>November 2026</option>
                  <option>December 2026</option>
                  <option>January 2027</option>
                  <option>I'm flexible</option>
                </select>
              </div>
            </div>

            <div className="visit-form__row">
              <div className="visit-form__field">
                <label>How many people</label>
                <input type="text" placeholder="Two adults, one child" />
              </div>
              <div className="visit-form__field">
                <label>How did you find us</label>
                <input type="text" placeholder="A friend's recommendation, a magazine, a search…" />
              </div>
            </div>

            <div className="visit-form__field">
              <label>Anything you'd like us to know</label>
              <textarea placeholder="What you are looking for, what you are not, what season you love best, whether you have lived on a hillside before…" />
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', paddingTop: '1rem' }}>
              <button type="submit" className="btn btn--primary btn--lg">Send the request →</button>
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--fg-muted)', fontSize: '0.95rem' }}>We reply within 48 hours.</span>
            </div>
          </form>
        )}
      </section>

      <section className="section">
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          <span className="sec-head__eyebrow">Getting here</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em' }}>
            Ninety <em style={{ fontStyle: 'italic', color: 'var(--forest)', fontFamily: 'var(--font-serif)', fontWeight: 300 }}>minutes</em> from Pune.
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--fg-soft)', maxWidth: '48ch', lineHeight: 1.6, margin: 0 }}>
            West from Pune (Swargate) on the Bhor road. Sixty-two kilometres of which the last fifteen are slow and beautiful. We send precise directions and a pinned location once your visit is confirmed.
          </p>
          <Link to="/contact" className="btn btn--ghost" style={{ marginTop: '1rem' }}>Get in touch →</Link>
        </div>
      </section>
    </Page>
  );
}
