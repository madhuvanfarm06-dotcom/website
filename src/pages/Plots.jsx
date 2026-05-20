import Page from '../components/Page.jsx';
import SEO from '../components/SEO.jsx';

function PageHead() {
  return (
    <header className="page-head page-head--short">
      <div className="page-head__photo"><img src="/img/aerial-07-overhead-plot.jpg" alt="Overhead aerial view of the 15-plot layout at Madhuvan, near Pune" loading="eager" /></div>
      <div className="page-head__inner">
        <span className="page-head__eyebrow">The plots</span>
        <h1 className="page-head__title">Fifteen parcels. <em>A few still remain.</em></h1>
        <span className="page-head__deva">Survey No. 579 · Pasure</span>
      </div>
    </header>
  );
}

function SiteLayout() {
  return (
    <section className="section">
      <div className="sec-head">
        <span className="sec-head__eyebrow">Site plan · Survey No. 579</span>
        <h2 className="sec-head__title">The <em>layout.</em></h2>
      </div>
      <div className="aerial-canvas aerial-canvas--standalone">
        <img className="aerial-canvas__photo" src="/img/plot-layout-aerial.jpg" alt="Aerial site plan of Madhuvan farm house plots near Pune — 15 NA agricultural plots in Pasure, Bhor" loading="lazy" decoding="async" />
      </div>
    </section>
  );
}

function AboutPlots() {
  return (
    <section className="section section--alt">
      <div className="sec-head">
        <span className="sec-head__eyebrow">About the plots</span>
        <h2 className="sec-head__title">Farm house plots near <em>Pune.</em></h2>
      </div>
      <div className="twocol twocol--offset" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div>
          <p>Madhuvan, by <strong>Sun Developers</strong>, is a small-format farm house plot and agriculture land project on the south-east slope of the Sahyadris. Fifteen NA-converted farmhouse plots, sized between 7,800 and 18,000 square feet, on eight contiguous acres in Pasure village, Bhor taluka — sixty-two kilometres from Pune (Swargate).</p>
          <p>If you are looking for <strong>farm house plots near Pune</strong>, a weekend <strong>farmhouse</strong>, or <strong>agriculture land near Pune</strong> with clear title and immediate registration, Madhuvan is one of the few projects in the Bhor belt with all approvals in place. RERA registration, NA conversion, 7/12 in the company's name, and registered conveyance plot-by-plot.</p>
        </div>
        <div>
          <p>Each <strong>farmhouse plot</strong> has piped water from two functioning wells, three-phase metered electricity, six-metre internal murum roads, and at least one mature tree retained from the original land. We have catalogued forty-two native species — mango, tamarind, banyan, peepal — and drawn plot lines around them, not through them.</p>
          <p>The Velvandi river holds the property on three sides. The Sahyadris rise behind. Annual rainfall is two thousand millimetres. This is good <strong>farm land</strong> — basalt-derived loam, fifty centimetres deep, with a percolation pond and a seasonal stream.</p>
        </div>
      </div>
    </section>
  );
}

function PlotsFAQ() {
  const faqs = [
    { q: 'Where exactly are these farm house plots located?', a: 'Pasure village, Bhor taluka, Pune district. 62 km from Pune (Swargate), 90 minutes in light traffic. Survey No. 579.' },
    { q: 'Are these NA plots or agriculture land?', a: 'The land was originally agriculture land. We have completed NA (non-agricultural) conversion for residential and farm house use. You can register your plot immediately and begin construction.' },
    { q: 'What is the price range?', a: 'Plot prices depend on size, aspect, and view. Plots range 7,800 to 18,000 sq.ft. Please write or call Sun Developers for the current price list.' },
    { q: 'Is the project RERA-registered?', a: 'Yes. RERA registration number P52100099999. Title-search opinion and surveyor reports are available to serious enquirers.' },
    { q: 'Can I build a farm house immediately?', a: 'Yes. Internal roads, water, and electricity are in place. Construction can begin as soon as plans are approved by the gram panchayat. Average build time is 18–24 months.' },
  ];
  return (
    <section className="section">
      <div className="sec-head">
        <span className="sec-head__eyebrow">Common questions</span>
        <h2 className="sec-head__title">About these <em>farm house plots.</em></h2>
      </div>
      <div style={{ maxWidth: '780px', margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
        {faqs.map((f, i) => (
          <details key={i} style={{ borderBottom: '1px solid var(--stone-light)', paddingBottom: '1rem' }}>
            <summary style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', cursor: 'pointer', fontWeight: 500 }}>{f.q}</summary>
            <p style={{ marginTop: '0.75rem' }}>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function Plots() {
  const plotsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'NA Plots at Madhuvan, Pasure, Bhor',
    description: 'Fifteen NA plots ranging 7,800 to 18,000 sq.ft. on 8 acres in Pasure village, Bhor — 62 km from Pune. Clear title, gated, ready to register.',
    brand: { '@type': 'Brand', name: 'Sun Developers' },
    image: 'https://www.sun-developers.com/img/plot-layout-aerial.jpg',
    offers: {
      '@type': 'AggregateOffer',
      offerCount: 15,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      areaServed: 'Pune, Maharashtra, India'
    }
  };
  return (
    <Page overPhoto>
      <SEO
        title="Farm House Plots for Sale near Pune · 15 Plots at Madhuvan, Bhor"
        description="Farm house plots and agriculture land for sale near Pune by Sun Developers. 15 NA farmhouse plots (7,800–18,000 sq.ft.) on 8 acres at Madhuvan, Pasure, Bhor — 62 km from Pune. River-front, gated, RERA-registered."
        keywords="farm house plots near Pune, farmhouse plots for sale Pune, agriculture land for sale near Pune, farm land Pune, agricultural land Bhor, NA plots Pune, plots for sale Bhor, plots Pasure, river-front farmhouse plots, Sun Developers plots"
        image="https://www.sun-developers.com/img/plot-layout-aerial.jpg"
        jsonLd={plotsJsonLd}
      />
      <PageHead />
      <SiteLayout />
      <AboutPlots />
      <PlotsFAQ />
    </Page>
  );
}
