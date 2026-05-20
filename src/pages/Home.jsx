import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/Page.jsx';
import SEO from '../components/SEO.jsx';

/* HERO — cinematic full-bleed aerial with subtle parallax */
function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const photoTransform = `translateY(${scrollY * 0.35}px) scale(${1 + scrollY * 0.0003})`;
  const overlayOpacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section className="home-hero">
      <div className="home-hero__photo" style={{ transform: photoTransform }}>
        <img
          src="/img/aerial-01-river-bend.jpg"
          alt="Madhuvan, held in a bend of the river, with the Sahyadris in the distance"
          fetchpriority="high"
          decoding="async"
          width="1920"
          height="1440"
        />
      </div>
      <div className="home-hero__veil" />
      <div className="home-hero__inner" style={{ opacity: overlayOpacity }}>
        <div className="home-hero__top">
          <span className="home-hero__eyebrow">मधुवन · A settlement among the trees</span>
        </div>
        <div className="home-hero__center">
          <h1 className="home-hero__title">
            <span>A few houses,</span>
            <em>held by the river.</em>
          </h1>
        </div>
        <div className="home-hero__bottom">
          <div className="home-hero__loc">
            <div>
              <span className="home-hero__loc-label">Location</span>
              <span className="home-hero__loc-val">Pasure, Bhor &nbsp;·&nbsp; 62 km from Pune</span>
            </div>
            <div>
              <span className="home-hero__loc-label">Land</span>
              <span className="home-hero__loc-val">8 acres &nbsp;·&nbsp; 15 parcels</span>
            </div>
          </div>
          <div className="home-hero__cta">
            <Link to="/contact" className="btn btn--bone btn--lg">Enquire about a plot</Link>
            <Link to="/the-land" className="btn btn--text" style={{ color: 'var(--bone)' }}>Explore the land →</Link>
          </div>
        </div>
      </div>
      <div className="home-hero__scroll">
        <span>Scroll</span>
        <div className="home-hero__scroll-line" />
      </div>
    </section>
  );
}

/* INTRO */
function Intro() {
  return (
    <section className="section home-intro">
      <div className="home-intro__inner">
        <div className="home-intro__eyebrow reveal">
          <span className="deva">वसा</span>
          <span>vasā · the dwelling-place</span>
        </div>
        <p className="home-intro__lede reveal reveal--slow">
          Madhuvan, by <em>Sun Developers</em>, is eight acres of farm house
          plots and agriculture land in Pasure village, where the Sahyadris
          fold into the Krishna basin and a slow bend of the river holds the
          land on three sides. Fifteen farmhouse plots, sixty-two kilometres
          from Pune, on a south-east slope — placed among the trees that were
          already standing.
        </p>
        <p className="home-intro__lede home-intro__lede--small reveal reveal--slow">
          Not a development. Not a colony. A settlement, in the older sense
          of the word — slow, lived-in, unhurried.
        </p>
      </div>
    </section>
  );
}

/* PILLARS — three things to know */
function Pillars() {
  const items = [
    { kicker: '01', title: 'The place',    lede: 'Sixty-two kilometres from Pune, where the Sahyadris fold into the Krishna basin. South-east facing, held in a bend of the river.', link: '/the-land', linkLabel: 'Read about the land', img: '/img/aerial-08-river-curve.jpg', caption: 'The bend of the river · summer, 2026' },
    { kicker: '02', title: 'The plots',    lede: 'Fifteen parcels, sized 7,800 to 18,000 sq.ft., each shaped by the contour rather than against it. Eleven available, four reserved.', link: '/plots', linkLabel: 'See the site plan', img: '/img/aerial-07-overhead-plot.jpg', caption: 'Plot layout, May 2026' },
    { kicker: '03', title: 'The practice', lede: 'Dry-stacked basalt walls, lime plaster, country tile. Architecture by Studio Sahyādri. Landscape by Auroville Botanical Gardens.', link: '/journal', linkLabel: 'Read the journal', img: '/img/aerial-22-golden-hour.jpg', caption: 'Site, golden hour' },
  ];
  return (
    <section className="section section--alt home-pillars">
      <div className="sec-head reveal">
        <span className="sec-head__eyebrow">A short introduction</span>
        <h2 className="sec-head__title">Three things to <em>know.</em></h2>
      </div>
      <div className="pillars">
        {items.map((it, i) => (
          <article key={i} className="pillar reveal" style={{ transitionDelay: `${i * 120}ms` }}>
            <div className="pillar__photo"><img src={it.img} alt={it.caption} loading="lazy" /></div>
            <div className="pillar__body">
              <div className="pillar__num">{it.kicker}</div>
              <h3 className="pillar__title">{it.title}</h3>
              <p className="pillar__lede">{it.lede}</p>
              <Link to={it.link} className="pillar__link">{it.linkLabel} <span>→</span></Link>
            </div>
            <div className="pillar__caption">{it.caption}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* FILMSTRIP */
function Filmstrip() {
  return (
    <section className="filmstrip">
      <div className="filmstrip__photo">
        <img src="/img/aerial-23-late-light.jpg" alt="Late afternoon light over the slope" loading="lazy" decoding="async" />
      </div>
      <div className="filmstrip__caption">
        <span className="filmstrip__num">No. 01</span>
        <span className="filmstrip__txt">Late light along the slope, May 2026.</span>
      </div>
    </section>
  );
}

/* LAND PREVIEW */
function LandPreview() {
  return (
    <section className="section home-land">
      <div className="twocol twocol--offset">
        <div className="twocol__photo reveal">
          <img src="/img/aerial-05-canopy.jpg" alt="A canopy of mango and tamarind, from above" loading="lazy" decoding="async" />
          <span className="caption">A canopy of mango and tamarind</span>
        </div>
        <div className="twocol__body reveal" style={{ transitionDelay: '160ms' }}>
          <span className="sec-head__eyebrow" style={{ marginBottom: '1rem' }}>The land</span>
          <h2 className="home-land__title">A south-east slope, <em>held by the river</em>.</h2>
          <p>The land sits at 720 metres, on a south-east facing slope that drops gently toward a U-bend in the Velvandi river. Three sides are water. The fourth opens onto the village fields and, beyond them, the Bhor plateau and the spine of the Sahyadris.</p>
          <p>It rains here. Two thousand millimetres a year, from June to September, in monsoons that turn the whole valley green. The dry months are clear and cold; in January the temperature drops to seven or eight degrees at night.</p>
          <p>Forty-two species of native trees stand on the property. We have catalogued each one, and the plot lines were drawn around them.</p>
          <Link to="/the-land" className="btn btn--ghost" style={{ marginTop: '1.5rem' }}>Read about the land →</Link>
        </div>
      </div>
    </section>
  );
}

/* QUOTE */
function Quote() {
  return (
    <section className="section section--alt home-quote">
      <p className="bigquote reveal">
        “We did not want to develop the land.<br />We wanted to <em>live</em> on it,<br />and let it remain itself.”
        <span className="deva">— मधुवन</span>
      </p>
    </section>
  );
}

/* PLOTS PREVIEW */
function PlotsPreview() {
  const plots = [
    { id: 'A-04', area: '12,400 sq.ft', aspect: 'South-east', status: 'available' },
    { id: 'A-07', area: '8,800 sq.ft',  aspect: 'East',       status: 'available' },
    { id: 'B-02', area: '18,000 sq.ft', aspect: 'South',      status: 'reserved'  },
    { id: 'B-05', area: '10,200 sq.ft', aspect: 'South-east', status: 'available' },
  ];
  return (
    <section className="section home-plots">
      <div className="sec-head reveal">
        <span className="sec-head__eyebrow">Fifteen parcels · Eleven available</span>
        <h2 className="sec-head__title">A few <em>still remain.</em></h2>
      </div>
      <div className="plots-row reveal">
        {plots.map(p => (
          <Link key={p.id} to={`/plots#${p.id}`} className="plot-row">
            <span className="plot-row__id">{p.id}</span>
            <span className="plot-row__area">{p.area}</span>
            <span className="plot-row__aspect">{p.aspect}</span>
            <span className={`plot-row__status plot-row__status--${p.status}`}>{p.status}</span>
            <span className="plot-row__arrow">→</span>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
        <Link to="/plots" className="btn btn--ghost btn--lg">View the full site plan →</Link>
      </div>
    </section>
  );
}

/* JOURNAL PREVIEW */
function JournalPreview() {
  const entries = [
    { date: 'October 2026', title: 'On placing a house among trees that were already there.', read: '8 min' },
    { date: 'August 2026',  title: 'What two thousand millimetres of rain does to a hillside.', read: '6 min' },
    { date: 'June 2026',    title: 'Forty-two species: a partial catalogue of the trees.',     read: '12 min' },
  ];
  return (
    <section className="section section--ink home-journal">
      <div className="sec-head reveal">
        <span className="sec-head__eyebrow">Journal</span>
        <h2 className="sec-head__title">Notes from the <em>land.</em></h2>
      </div>
      <div className="journal-cards">
        {entries.map((e, i) => (
          <Link key={i} to="/journal/among-the-trees" className="journal-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
            <span className="journal-card__date">{e.date} · {e.read} read</span>
            <h3 className="journal-card__title">{e.title}</h3>
            <span className="journal-card__more">Read on <span>→</span></span>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
        <Link to="/journal" className="btn btn--bone">All journal entries →</Link>
      </div>
    </section>
  );
}

/* HOME ENQUIRE */
function HomeEnquire() {
  return (
    <section className="home-enquire">
      <div className="home-enquire__photo">
        <img src="/img/aerial-21-evening.jpg" alt="Madhuvan in evening light — closing view" loading="lazy" decoding="async" />
      </div>
      <div className="home-enquire__overlay">
        <span className="home-enquire__eyebrow">A closing word</span>
        <h2 className="home-enquire__title">
          Madhuvan is <em>not for everyone.</em><br />
          We hope, perhaps, it might be <em>for you.</em>
        </h2>
        <p className="home-enquire__body">
          We meet every interested family ourselves, walk the land together,
          and only sell when both sides are sure. There are no agents, no
          brochures, and no rush.
        </p>
        <div className="home-enquire__cta">
          <Link to="/contact" className="btn btn--bone btn--lg">Begin a conversation →</Link>
          <Link to="/visit" className="btn btn--text" style={{ color: 'var(--bone)' }}>Plan a site visit</Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.sun-developers.com/#webpage',
        url: 'https://www.sun-developers.com/',
        name: 'Madhuvan by Sun Developers — NA Plots near Pune',
        isPartOf: { '@id': 'https://www.sun-developers.com/#website' },
        about: { '@id': 'https://www.sun-developers.com/#realestate' },
        primaryImageOfPage: 'https://www.sun-developers.com/img/aerial-01-river-bend.jpg',
        inLanguage: 'en-IN'
      },
      {
        '@type': 'Place',
        name: 'Madhuvan',
        description: 'A small settlement of 15 NA plots on 8 acres in Pasure, Bhor — 62 km from Pune.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Survey No. 579, Pasure',
          addressLocality: 'Bhor',
          addressRegion: 'Maharashtra',
          postalCode: '412206',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 18.15,
          longitude: 73.85
        }
      }
    ]
  };
  return (
    <Page overPhoto>
      <SEO
        title="Madhuvan by Sun Developers · Farm House Plots & Agriculture Land near Pune"
        description="Sun Developers Pune — Madhuvan offers 15 farm house plots on 8 acres of agriculture land in Pasure, Bhor, 62 km from Pune. River-front farmhouse land in the Sahyadris. Clear title, RERA-registered, gated."
        keywords="Madhuvan, Sun Developers, Sun Developers Pune, farm house plots, farm house, farmhouse, farmhouse plots near Pune, agriculture land, agriculture land near Pune, agricultural land Pune, farm land Pune, NA plots Pune, plots in Bhor, weekend home Pune, second home Pune, Sahyadri farmhouse"
        image="https://www.sun-developers.com/img/aerial-01-river-bend.jpg"
        jsonLd={homeJsonLd}
      />
      <Hero />
      <Intro />
      <Pillars />
      <Filmstrip />
      <LandPreview />
      <Quote />
      <PlotsPreview />
      <JournalPreview />
      <HomeEnquire />
    </Page>
  );
}
