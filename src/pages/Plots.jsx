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
        <img className="aerial-canvas__photo" src="/img/plot-layout-aerial.jpg" alt="Aerial site plan of Madhuvan with plot boundaries" />
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
        title="Plots for Sale · 15 NA Plots near Pune"
        description="The Madhuvan site plan — 15 NA plots (7,800 to 18,000 sq.ft.) on 8 acres in Pasure, Bhor, 62 km from Pune. River-front, gated, clear title. Eleven plots currently available."
        keywords="NA plots for sale Pune, plots for sale in Bhor, plots Pasure, residential plots near Pune, farmhouse plots Maharashtra, river-front plots Pune, gated plots Sun Developers"
        image="https://www.sun-developers.com/img/plot-layout-aerial.jpg"
        jsonLd={plotsJsonLd}
      />
      <PageHead />
      <SiteLayout />
    </Page>
  );
}
