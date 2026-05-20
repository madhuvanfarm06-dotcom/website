import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/Page.jsx';
import SEO from '../components/SEO.jsx';

/* 24 aerial frames from the May 2026 drone survey, plus a few sketches. */
const PHOTOS = [
  { src: '/img/aerial-01-river-bend.jpg',    caption: 'The land in a bend of the river',                  date: 'May 2026', tag: 'aerial', size: 'lg-2x2' },
  { src: '/img/aerial-22-golden-hour.jpg',   caption: 'Golden hour, looking south-west',                  date: 'May 2026', tag: 'aerial', size: 'w' },
  { src: '/img/aerial-04-upper-terrace.jpg', caption: 'The upper terrace from above',                     date: 'May 2026', tag: 'aerial', size: 't' },
  { src: '/img/aerial-05-canopy.jpg',        caption: 'A canopy of mango and tamarind',                   date: 'May 2026', tag: 'land',   size: 'm' },
  { src: '/img/aerial-08-river-curve.jpg',   caption: 'The Velvandi, holding three sides',                date: 'May 2026', tag: 'aerial', size: 'm' },
  { src: '/img/aerial-19-mango-grove.jpg',   caption: 'The old mango grove, upper terrace',               date: 'May 2026', tag: 'land',   size: 's' },
  { src: '/img/aerial-13-stream.jpg',        caption: 'The seasonal stream, eastern edge',                date: 'May 2026', tag: 'land',   size: 's' },
  { src: '/img/aerial-23-late-light.jpg',    caption: 'Late afternoon light along the slope',             date: 'May 2026', tag: 'aerial', size: 'w' },
  { src: '/img/aerial-07-overhead-plot.jpg', caption: 'Overhead — the plot grid, eased onto the contour',  date: 'May 2026', tag: 'aerial', size: 'm' },
  { src: '/img/aerial-14-pond.jpg',          caption: 'The percolation pond, recently full',              date: 'May 2026', tag: 'land',   size: 'm' },
  { src: '/img/aerial-20-banyan.jpg',        caption: 'A heritage banyan on the boundary',                date: 'May 2026', tag: 'land',   size: 's' },
  { src: '/img/aerial-09-low-altitude.jpg',  caption: 'Low altitude over the upper terrace',              date: 'May 2026', tag: 'aerial', size: 's' },
  { src: '/img/aerial-02-valley-wide.jpg',   caption: 'The valley, wide',                                 date: 'May 2026', tag: 'aerial', size: 'w' },
  { src: '/img/aerial-10-monsoon-green.jpg', caption: 'Pre-monsoon green',                                date: 'May 2026', tag: 'land',   size: 't' },
  { src: '/img/aerial-15-village.jpg',       caption: 'Wadgaon Khurd, in the distance',                   date: 'May 2026', tag: 'aerial', size: 'm' },
  { src: '/img/aerial-06-slope.jpg',         caption: 'The south-east slope',                             date: 'May 2026', tag: 'aerial', size: 's' },
  { src: '/img/aerial-18-tamarind.jpg',      caption: 'A heritage tamarind, centre of A-04',              date: 'May 2026', tag: 'land',   size: 's' },
  { src: '/img/aerial-11-fields.jpg',        caption: 'Village fields beyond the boundary',               date: 'May 2026', tag: 'aerial', size: 'm' },
  { src: '/img/aerial-16-from-south.jpg',    caption: 'The site, from the south',                         date: 'May 2026', tag: 'aerial', size: 'm' },
  { src: '/img/aerial-12-trees.jpg',         caption: 'The 380, photographed from above',                 date: 'May 2026', tag: 'land',   size: 'm' },
  { src: '/img/aerial-17-from-east.jpg',     caption: 'From the east, late morning',                      date: 'May 2026', tag: 'aerial', size: 's' },
  { src: '/img/aerial-21-evening.jpg',       caption: 'Evening, the slope in shadow',                     date: 'May 2026', tag: 'aerial', size: 's' },
  { src: '/img/aerial-03-valley-east.jpg',   caption: 'East across the valley',                           date: 'May 2026', tag: 'aerial', size: 'w' },
  { src: '/img/aerial-24-dusk.jpg',          caption: 'Dusk, returning the camera',                       date: 'May 2026', tag: 'aerial', size: 't' },
  { src: '/img/house-sunset.png',            caption: 'A first sketch of the house, against sunset',      date: 'October 2026', tag: 'house', size: 'w' },
  { src: '/img/entrance-evening.png',        caption: 'The entrance, monsoon evening',                    date: 'July 2026', tag: 'house', size: 't' },
  { src: '/img/river-bend.jpg',              caption: 'A frame of the bend, from the journal',            date: 'May 2026', tag: 'aerial', size: 'm' },
];

const TABS = [
  { id: 'all',    label: 'All' },
  { id: 'aerial', label: 'From the air' },
  { id: 'land',   label: 'On the land' },
  { id: 'house',  label: 'The House' },
];

export default function Gallery() {
  const [tab, setTab] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = PHOTOS.filter(p => tab === 'all' || p.tag === tab);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox(i => Math.min(i + 1, filtered.length - 1));
      if (e.key === 'ArrowLeft')  setLightbox(i => Math.max(i - 1, 0));
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox, filtered.length]);

  const counts = TABS.reduce((a, t) => {
    a[t.id] = t.id === 'all' ? PHOTOS.length : PHOTOS.filter(p => p.tag === t.id).length;
    return a;
  }, {});

  return (
    <Page overPhoto>
      <SEO
        title="Gallery · Aerial photographs of Madhuvan"
        description="24 aerial frames from the May 2026 drone survey of Madhuvan — the river, the canopy, the slope, the village. By Sun Developers."
        keywords="Madhuvan photos, aerial photography Pune plots, drone survey Bhor, plot photographs"
        image="https://www.sun-developers.com/img/aerial-22-golden-hour.jpg"
      />
      <header className="page-head page-head--short">
        <div className="page-head__photo"><img src="/img/aerial-01-river-bend.jpg" alt="Madhuvan held in a bend of the Velvandi river — aerial photograph, May 2026" loading="eager" /></div>
        <div className="page-head__inner">
          <span className="page-head__eyebrow">Gallery</span>
          <h1 className="page-head__title">Photographs of <em>the place.</em></h1>
          <span className="page-head__deva">A drone survey, May 2026 · 24 frames</span>
        </div>
      </header>

      <section style={{ padding: '5rem 0 6rem' }}>
        <div className="gal-tabs">
          {TABS.map(t => (
            <button key={t.id} className={`gal-tab ${tab === t.id ? 'is-active' : ''}`} onClick={() => setTab(t.id)}>
              {t.label}<span className="gal-tab__count">/ {counts[t.id]}</span>
            </button>
          ))}
        </div>

        <div className="gallery">
          {filtered.map((p, i) => (
            <div key={p.src} className={`gal-item gal-item--${p.size}`} style={{ animationDelay: `${i * 40}ms` }} onClick={() => setLightbox(i)}>
              <img src={p.src} alt={p.caption} />
              <div className="gal-item__caption">
                <span>{p.caption}</span>
                <span>{p.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem', padding: '0 var(--gutter)' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--fg-muted)', fontSize: '1.05rem', maxWidth: '48ch', margin: '0 auto 1.5rem' }}>
            The drone survey was made on a single afternoon in May 2026. We are adding ground-level photographs through the year — one walk per season.
          </p>
          <Link to="/journal" className="btn btn--ghost">Read the journal →</Link>
        </div>
      </section>

      {lightbox !== null && filtered[lightbox] && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={(e) => { e.stopPropagation(); setLightbox(null); }}>Close ×</button>
          {lightbox > 0 && (
            <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}>← Prev</button>
          )}
          {lightbox < filtered.length - 1 && (
            <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}>Next →</button>
          )}
          <img src={filtered[lightbox].src} alt="" className="lightbox__img" onClick={(e) => e.stopPropagation()} />
          <div className="lightbox__caption">
            <span>{filtered[lightbox].caption}</span>
            <span>{filtered[lightbox].date} · {lightbox + 1} of {filtered.length}</span>
          </div>
        </div>
      )}
    </Page>
  );
}
