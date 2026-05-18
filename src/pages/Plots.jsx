import Page from '../components/Page.jsx';

function PageHead() {
  return (
    <header className="page-head page-head--short">
      <div className="page-head__photo"><img src="/img/aerial-07-overhead-plot.jpg" alt="" /></div>
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
  return (
    <Page overPhoto>
      <PageHead />
      <SiteLayout />
    </Page>
  );
}
