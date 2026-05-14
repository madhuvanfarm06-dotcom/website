import { useState } from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/Page.jsx';

/* Plot data — 11 parcels on the 14-acre site. Coordinates are 0–100 in the
   sitemap SVG viewBox. Update area/status/note from the real survey. */
const PLOTS = [
  { id: 'A-01', area: 9400,  aspect: 'East',       price: 'On request', status: 'available', x: 18, y: 28, w: 14, h: 18, note: 'Edge of the upper terrace, two banyan trees on the eastern boundary.' },
  { id: 'A-02', area: 8200,  aspect: 'South-east', price: 'On request', status: 'reserved',  x: 33, y: 25, w: 12, h: 16, note: 'Adjoining the common green; quietest plot on the upper slope.' },
  { id: 'A-03', area: 11000, aspect: 'South-east', price: 'On request', status: 'available', x: 46, y: 24, w: 14, h: 17, note: 'Three mature mango trees on the southern edge.' },
  { id: 'A-04', area: 12400, aspect: 'South-east', price: 'On request', status: 'available', x: 61, y: 26, w: 15, h: 18, note: 'Long views down to the river bend; a heritage tamarind in the centre.' },
  { id: 'A-05', area: 10200, aspect: 'South',      price: 'On request', status: 'available', x: 77, y: 30, w: 13, h: 17, note: 'Closest to the eastern entrance; gentle slope, easy build.' },
  { id: 'B-01', area: 14600, aspect: 'South',      price: 'On request', status: 'available', x: 22, y: 50, w: 16, h: 22, note: 'Below the upper road, with a seasonal stream along its western edge.' },
  { id: 'B-02', area: 18000, aspect: 'South',      price: 'On request', status: 'reserved',  x: 39, y: 50, w: 18, h: 24, note: 'The largest parcel — held by a founding family.' },
  { id: 'B-03', area: 11800, aspect: 'South-west', price: 'On request', status: 'available', x: 58, y: 51, w: 14, h: 21, note: 'Backs onto a stand of karanja and jamun.' },
  { id: 'B-04', area: 9800,  aspect: 'South-west', price: 'On request', status: 'available', x: 73, y: 53, w: 13, h: 19, note: 'River-facing; the closest plot to the water.' },
  { id: 'C-01', area: 12200, aspect: 'South',      price: 'On request', status: 'available', x: 30, y: 78, w: 16, h: 14, note: 'Lower terrace, river-facing, behind the percolation pond.' },
  { id: 'C-02', area: 10400, aspect: 'South',      price: 'On request', status: 'reserved',  x: 51, y: 79, w: 14, h: 13, note: "Held by the architect's family." },
];

const TREE_DOTS = [[6,6],[8,18],[12,24],[27,8],[42,13],[56,7],[72,9],[88,7],[91,30],[92,50],[91,78],[88,82],[40,36],[50,38],[62,40],[28,40],[20,62],[44,62],[58,68],[70,64]];

function PageHead() {
  return (
    <header className="page-head page-head--short">
      <div className="page-head__photo"><img src="/img/aerial-07-overhead-plot.jpg" alt="" /></div>
      <div className="page-head__inner">
        <span className="page-head__eyebrow">The plots</span>
        <h1 className="page-head__title">Eleven parcels. <em>A few still remain.</em></h1>
        <span className="page-head__deva">Survey No. 579 · Pasure</span>
      </div>
    </header>
  );
}

function SiteMap({ selected, setSelected }) {
  return (
    <div className="sitemap-canvas">
      <svg className="sitemap-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grass" width="3" height="3" patternUnits="userSpaceOnUse">
            <rect width="3" height="3" fill="#EDE6D7" />
            <circle cx="0.5" cy="0.5" r="0.2" fill="#D9CFB8" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100" height="100" fill="url(#grass)" />

        <path d="M -2 92 Q 12 88, 18 96 Q 25 100, 38 99 Q 55 98, 70 100 Q 80 100, 92 96 Q 102 92, 102 92" fill="none" stroke="#A3B8C8" strokeWidth="3" strokeLinecap="round" />
        <path d="M -2 92 Q 12 88, 18 96 Q 25 100, 38 99 Q 55 98, 70 100 Q 80 100, 92 96 Q 102 92, 102 92" fill="none" stroke="#C4D2DC" strokeWidth="6" strokeLinecap="round" opacity="0.6" />

        <path d="M 4 30 Q 1 50, 3 75 Q 5 88, 12 92" fill="none" stroke="#A3B8C8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 4 30 Q 1 50, 3 75 Q 5 88, 12 92" fill="none" stroke="#C4D2DC" strokeWidth="5" strokeLinecap="round" opacity="0.6" />

        <path d="M 96 30 Q 99 50, 97 75 Q 95 88, 88 92" fill="none" stroke="#A3B8C8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 96 30 Q 99 50, 97 75 Q 95 88, 88 92" fill="none" stroke="#C4D2DC" strokeWidth="5" strokeLinecap="round" opacity="0.6" />

        <path d="M 92 14 L 50 18 Q 40 19, 35 22 L 20 23 M 92 14 L 92 50 Q 92 65, 86 70 L 50 73 L 24 75" fill="none" stroke="#6B4226" strokeWidth="0.6" strokeDasharray="0.8 0.8" opacity="0.7" />

        <circle cx="14" cy="12" r="4" fill="#8FAE6E" opacity="0.4" />
        <circle cx="50" cy="10" r="3.5" fill="#8FAE6E" opacity="0.4" />
        <circle cx="84" cy="14" r="3" fill="#8FAE6E" opacity="0.4" />
        <circle cx="16" cy="40" r="3.5" fill="#8FAE6E" opacity="0.45" />
        <circle cx="13" cy="65" r="3" fill="#8FAE6E" opacity="0.45" />
        <circle cx="47" cy="68" r="2.5" fill="#8FAE6E" opacity="0.45" />
        <circle cx="80" cy="70" r="3" fill="#8FAE6E" opacity="0.45" />
        <circle cx="68" cy="44" r="2.5" fill="#8FAE6E" opacity="0.45" />

        {TREE_DOTS.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="0.6" fill="#3F5B33" opacity="0.55" />
        ))}

        <ellipse cx="20" cy="86" rx="5" ry="2.5" fill="#A3B8C8" opacity="0.6" />

        {PLOTS.map(p => {
          const isSelected = selected === p.id;
          const fillColor = p.status === 'available' ? '#3F5B33' : '#9B9388';
          const baseOp = p.status === 'available' ? 0.18 : 0.12;
          return (
            <g key={p.id}>
              <rect
                x={p.x} y={p.y} width={p.w} height={p.h}
                fill={fillColor}
                fillOpacity={isSelected ? 0.4 : baseOp}
                stroke={fillColor}
                strokeWidth={isSelected ? 0.6 : 0.3}
                style={{ cursor: 'pointer', transition: 'fill-opacity 200ms, stroke-width 200ms' }}
                onClick={() => setSelected(p.id)}
                onMouseEnter={(e) => e.target.setAttribute('fill-opacity', isSelected ? 0.4 : 0.3)}
                onMouseLeave={(e) => e.target.setAttribute('fill-opacity', isSelected ? 0.4 : baseOp)}
              />
              <text
                x={p.x + p.w / 2} y={p.y + p.h / 2 + 0.8}
                textAnchor="middle"
                fontFamily="Fraunces, serif"
                fontSize="2.2"
                fill={p.status === 'available' ? '#2D4124' : '#5B544A'}
                style={{ pointerEvents: 'none' }}
              >
                {p.id}
              </text>
            </g>
          );
        })}

        <g transform="translate(92, 90)">
          <line x1="0" y1="-3" x2="0" y2="3" stroke="#2A2824" strokeWidth="0.3" />
          <polygon points="0,-3.5 -1,-1.8 0,-2.3 1,-1.8" fill="#2A2824" />
          <text x="0" y="-4.5" fontSize="1.6" fontFamily="Inter" fill="#2A2824" textAnchor="middle">N</text>
        </g>
      </svg>

      <div className="sitemap-canvas__lbl sitemap-canvas__lbl--top">Bhor village &amp; the road →</div>
      <div className="sitemap-canvas__lbl sitemap-canvas__lbl--bottom">↓ Velvandi river</div>
      <div className="sitemap-canvas__lbl sitemap-canvas__lbl--left">River bend</div>
      <div className="sitemap-canvas__lbl sitemap-canvas__lbl--right">Village fields</div>
    </div>
  );
}

function PlotDetail({ id }) {
  const p = PLOTS.find(x => x.id === id);
  if (!p) {
    return (
      <div className="plot-detail plot-detail--empty">
        <span className="sec-head__eyebrow" style={{ margin: 0 }}>Detail</span>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--fg-muted)', margin: '1rem 0 0', maxWidth: '24ch' }}>
          Click a plot on the map to see its dimensions, aspect, and current status.
        </p>
      </div>
    );
  }
  return (
    <div className="plot-detail" key={p.id}>
      <div className="plot-detail__top">
        <span className="plot-detail__id">{p.id}</span>
        <span className={`plot-row__status plot-row__status--${p.status}`}>{p.status}</span>
      </div>
      <div className="plot-detail__photo">
        <span style={{ color: 'var(--fg-muted)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>Photograph forthcoming</span>
      </div>
      <div className="plot-detail__rows">
        <div><span>Area</span><strong>{p.area.toLocaleString()} sq.ft</strong></div>
        <div><span>Aspect</span><strong>{p.aspect}</strong></div>
        <div><span>Price</span><strong>{p.price}</strong></div>
      </div>
      <p className="plot-detail__note">{p.note}</p>
      <Link to={`/contact?plot=${p.id}`} className="btn btn--primary" style={{ marginTop: 'auto' }}>
        Enquire about {p.id} →
      </Link>
    </div>
  );
}

function PlotsExplorer() {
  const [selected, setSelected] = useState(null);
  return (
    <section className="section">
      <div className="sec-head">
        <span className="sec-head__eyebrow">Site plan · Survey No. 579</span>
        <h2 className="sec-head__title">Click a plot.</h2>
      </div>
      <div className="sitemap-grid">
        <SiteMap selected={selected} setSelected={setSelected} />
        <PlotDetail id={selected} />
      </div>
      <div className="sitemap-legend">
        <div><span className="leg leg--avail"></span><span>Available · 8 parcels</span></div>
        <div><span className="leg leg--res"></span><span>Reserved · 3 parcels</span></div>
        <div><span className="leg leg--road"></span><span>Internal road · 6 m gravel</span></div>
        <div><span className="leg leg--green"></span><span>Common green · preserved trees</span></div>
        <div><span className="leg leg--water"></span><span>Velvandi river · seasonal pond</span></div>
        <div style={{ marginLeft: 'auto' }}>
          <a href="/img/site-plan-pasure.pdf" target="_blank" rel="noreferrer" className="btn btn--text" style={{ color: 'var(--forest)', borderColor: 'var(--forest)' }}>
            Download surveyed PDF ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function PlotList() {
  return (
    <section className="section section--alt">
      <div className="sec-head reveal">
        <span className="sec-head__eyebrow">All eleven parcels</span>
        <h2 className="sec-head__title">A summary <em>table.</em></h2>
      </div>
      <div className="plot-table">
        <div className="plot-table__head">
          <span>Plot</span><span>Area</span><span>Aspect</span><span>Price</span><span>Status</span><span></span>
        </div>
        {PLOTS.map(p => (
          <div key={p.id} className={`plot-table__row plot-table__row--${p.status}`}>
            <span className="plot-table__id">{p.id}</span>
            <span>{p.area.toLocaleString()} sq.ft</span>
            <span>{p.aspect}</span>
            <span>{p.price}</span>
            <span><em className={`plot-row__status plot-row__status--${p.status}`}>{p.status}</em></span>
            <span style={{ textAlign: 'right' }}>
              {p.status === 'available' ? (
                <Link to={`/contact?plot=${p.id}`} className="plot-table__link">Enquire →</Link>
              ) : (
                <span style={{ color: 'var(--fg-muted)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>—</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Plots() {
  return (
    <Page overPhoto>
      <PageHead />
      <PlotsExplorer />
      <PlotList />
    </Page>
  );
}
