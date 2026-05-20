import { Link } from 'react-router-dom';
import Page from '../components/Page.jsx';
import SEO from '../components/SEO.jsx';

const ENTRIES = [
  { date: 'October 2026', read: '8 min', category: 'On building',
    title: 'On placing a house among trees that were already there.',
    excerpt: 'We catalogued every tree on the property before drawing a single plot line. What followed was an argument with our own desire to build everywhere at once.',
    slug: 'among-the-trees', featured: true,
    img: '/img/aerial-19-mango-grove.jpg' },
  { date: 'August 2026', read: '6 min', category: 'On the land',
    title: 'What two thousand millimetres of rain does to a hillside.',
    excerpt: 'The first monsoon after we bought the land. A note on terracing, percolation pits, and what one watershed taught us about another.',
    slug: 'among-the-trees',
    img: '/img/aerial-14-pond.jpg' },
  { date: 'June 2026', read: '12 min', category: 'Catalogue',
    title: 'Forty-two species: a partial catalogue of the trees.',
    excerpt: 'Names in English, Marathi, and Latin; counts; ages; the heritage trees we are protecting. A working document, updated each season.',
    slug: 'among-the-trees',
    img: '/img/aerial-12-trees.jpg' },
  { date: 'April 2026', read: '5 min', category: 'On building',
    title: 'Why we are using lime, not cement.',
    excerpt: 'Lime breathes. Lime ages. Lime, when it cracks, asks to be repaired by hand. A short note on a slow material.',
    slug: 'among-the-trees',
    img: '/img/aerial-23-late-light.jpg' },
  { date: 'February 2026', read: '9 min', category: 'Letters',
    title: 'A letter to those who are deciding, slowly.',
    excerpt: 'We have met thirty-six families this year. Four have bought. The others we still write to, sometimes.',
    slug: 'among-the-trees',
    img: '/img/aerial-21-evening.jpg' },
  { date: 'December 2025', read: '7 min', category: 'Stories',
    title: 'The Sasane family, and the four generations before us.',
    excerpt: 'Before Madhuvan was Madhuvan, this land grew jowar and tur dal for the Sasane family. We sat with Bhau Sasane in his courtyard, and he told us about his grandfather.',
    slug: 'among-the-trees',
    img: '/img/aerial-15-village.jpg' },
];

function PageHead() {
  return (
    <header className="page-head page-head--short">
      <div className="page-head__photo"><img src="/img/aerial-22-golden-hour.jpg" alt="Golden hour over the Madhuvan land — aerial photograph" loading="eager" /></div>
      <div className="page-head__inner">
        <span className="page-head__eyebrow">Journal</span>
        <h1 className="page-head__title">Notes from <em>the land.</em></h1>
        <span className="page-head__deva">A working journal, updated each season</span>
      </div>
    </header>
  );
}

function Featured() {
  const f = ENTRIES.find(e => e.featured);
  return (
    <section className="section">
      <Link to={`/journal/${f.slug}`} className="featured reveal">
        <div className="featured__photo"><img src={f.img} alt="" /></div>
        <div className="featured__body">
          <span className="featured__eyebrow">Latest · {f.category}</span>
          <h2 className="featured__title">{f.title}</h2>
          <p className="featured__excerpt">{f.excerpt}</p>
          <div className="featured__meta">
            <span>{f.date}</span><span>·</span><span>{f.read} read</span>
          </div>
          <span className="featured__more">Read the entry <span>→</span></span>
        </div>
      </Link>
    </section>
  );
}

function Archive() {
  const rest = ENTRIES.filter(e => !e.featured);
  return (
    <section className="section section--alt">
      <div className="sec-head reveal">
        <span className="sec-head__eyebrow">Archive</span>
        <h2 className="sec-head__title">Earlier entries.</h2>
      </div>
      <div className="archive">
        {rest.map((e, i) => (
          <Link key={i} to={`/journal/${e.slug}`} className="archive__row reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <span className="archive__date">{e.date}</span>
            <div className="archive__main">
              <span className="archive__cat">{e.category}</span>
              <h3 className="archive__title">{e.title}</h3>
              <p className="archive__excerpt">{e.excerpt}</p>
            </div>
            <span className="archive__read">{e.read}<br /><em>read</em></span>
            <span className="archive__arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Subscribe() {
  return (
    <section className="section section--ink">
      <div style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
        <span className="sec-head__eyebrow" style={{ color: 'var(--leaf)' }}>One letter, every season</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, color: 'var(--bone)', margin: 0, letterSpacing: '-0.02em', fontVariationSettings: '"opsz" 80' }}>
          We write four letters <em style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontWeight: 300, color: '#C7DAB0' }}>a year.</em>
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'rgba(250,246,238,0.85)', lineHeight: 1.6, maxWidth: '40ch', margin: 0 }}>
          One per monsoon, one per harvest. Notes from the land, plot updates, and the occasional photograph. No marketing.
        </p>
        <form
          style={{ display: 'flex', gap: 0, alignItems: 'stretch', maxWidth: '440px', width: '100%', borderBottom: '1px solid rgba(250,246,238,0.4)', marginTop: '1rem' }}
          onSubmit={(e) => { e.preventDefault(); alert('Thank you. We will write to you next season.'); }}
        >
          <input
            type="email" placeholder="your@email.com" required
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', padding: '0.85rem 0', color: 'var(--bone)', fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontStyle: 'italic' }}
          />
          <button type="submit" className="btn btn--text" style={{ color: 'var(--leaf)', borderBottomColor: 'var(--leaf)' }}>Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default function Journal() {
  return (
    <Page overPhoto>
      <SEO
        title="Journal · Notes from the land"
        description="A working journal from Madhuvan — on placing houses among existing trees, on monsoons and hillsides, on the forty-two species we have catalogued, on lime instead of cement. Updated each season."
        keywords="Madhuvan journal, land development journal, Bhor land notes, Sun Developers writing, sustainable land development Maharashtra"
        type="article"
        image="https://www.sun-developers.com/img/aerial-22-golden-hour.jpg"
      />
      <PageHead />
      <Featured />
      <Archive />
      <Subscribe />
    </Page>
  );
}
