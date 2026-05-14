import Page from '../components/Page.jsx';

function PageHead() {
  return (
    <header className="page-head">
      <div className="page-head__photo"><img src="/img/aerial-08-river-curve.jpg" alt="" /></div>
      <div className="page-head__inner">
        <span className="page-head__eyebrow">The land</span>
        <h1 className="page-head__title">Fourteen acres, <em>held in a bend.</em></h1>
        <span className="page-head__deva">पासुरे · Pasure village, Bhor taluka</span>
      </div>
    </header>
  );
}

function Geography() {
  return (
    <section className="section">
      <div className="twocol twocol--offset">
        <div className="reveal">
          <span className="sec-head__eyebrow">Geography</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '1rem 0 1.5rem', fontVariationSettings: '"opsz" 80' }}>
            Where the Sahyadris fold into the <em style={{ color: 'var(--forest)', fontFamily: 'var(--font-serif)', fontWeight: 300 }}>Krishna basin.</em>
          </h2>
        </div>
        <div className="reveal" style={{ transitionDelay: '120ms' }}>
          <p className="lead" style={{ marginBottom: '1.5rem' }}>The land sits at 720 metres on a south-east facing slope in Pasure village, in Bhor taluka, on the eastern flank of the Sahyadris. The Velvandi river — a tributary of the Krishna — bends around the property on three sides.</p>
          <p>Sixty-two kilometres west by road from Swargate, Pune. Ninety minutes in light traffic. The last fifteen kilometres are slow and quiet, through fields and tamarind groves. The village is small — three hundred households — and old, mentioned in revenue records from the early eighteenth century.</p>
          <p>The land itself is a single contiguous parcel, Survey No. 579, plotted from a larger family holding. We bought it in 2022 from the Sasane family, who had farmed it for four generations.</p>
        </div>
      </div>

      <div className="factrow reveal" style={{ marginTop: '5rem' }}>
        <div className="fact"><div className="fact__num">01</div><div className="fact__val">14 acres</div><div className="fact__lbl">Total land</div></div>
        <div className="fact"><div className="fact__num">02</div><div className="fact__val">720 m</div><div className="fact__lbl">Elevation above sea level</div></div>
        <div className="fact"><div className="fact__num">03</div><div className="fact__val">62 km</div><div className="fact__lbl">From Pune (Swargate)</div></div>
        <div className="fact"><div className="fact__num">04</div><div className="fact__val">2,000 mm</div><div className="fact__lbl">Annual rainfall</div></div>
      </div>
    </section>
  );
}

function Geology() {
  return (
    <section className="section section--alt">
      <div className="twocol twocol--offset" style={{ gridTemplateColumns: '7fr 5fr' }}>
        <div className="reveal">
          <span className="sec-head__eyebrow">Geology</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.1, margin: '1rem 0 1.5rem', letterSpacing: '-0.02em', fontVariationSettings: '"opsz" 80' }}>
            Basalt, <em style={{ color: 'var(--forest)', fontFamily: 'var(--font-serif)', fontWeight: 300 }}>laterite, lava-rock.</em>
          </h2>
          <p>The Sahyadris are old volcanic rock — Deccan Trap basalt, laid down in successive flows sixty-six million years ago. Drive west from Pune and you will see the layers in every cliff: dark grey basalt at the base, weathered red-brown laterite above, an iron-rich crust where the rock has lain in monsoons for ten thousand years.</p>
          <p>At Madhuvan, the topsoil is fifty centimetres of dark, water-holding loam — the result of basalt slowly weathering under a few hundred monsoons. Below it, fractured basalt to about three metres, then mother-rock. We are building dry-stacked retaining walls from basalt quarried forty kilometres east; the stones are heavy, dense, and dark.</p>
          <p>Each plot has been tested for percolation, soil-bearing capacity, and water yield. We keep the reports on file.</p>
        </div>
        <div className="reveal" style={{ transitionDelay: '120ms' }}>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
              <img src="/img/aerial-13-stream.jpg" alt="The seasonal stream, eastern edge" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span className="caption">Topsoil 50 cm, fractured basalt to 3 m</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Vegetation() {
  const trees = [
    { name: 'Mango',                 local: 'आंबा · āmbā',     species: 'Mangifera indica',    count: 18 },
    { name: 'Tamarind',              local: 'चिंच · chinch',     species: 'Tamarindus indica',   count: 12 },
    { name: 'Jamun',                 local: 'जांभूळ · jāmbhul', species: 'Syzygium cumini',     count: 9  },
    { name: 'Karanja',               local: 'करंज · karanj',     species: 'Pongamia pinnata',    count: 31 },
    { name: 'Banyan',                local: 'वड · vad',         species: 'Ficus benghalensis',  count: 2  },
    { name: 'Peepal',                local: 'पिंपळ · pimpaḷ',    species: 'Ficus religiosa',     count: 4  },
    { name: 'Indian beech',          local: '—',                 species: 'Millettia pinnata',   count: 7  },
    { name: 'Flame of the forest',   local: 'पळस · paḷas',       species: 'Butea monosperma',    count: 14 },
  ];
  return (
    <section className="section">
      <div className="sec-head reveal">
        <span className="sec-head__eyebrow">Vegetation</span>
        <h2 className="sec-head__title">Forty-two species. <em>A partial catalogue.</em></h2>
      </div>
      <p className="reveal" style={{ maxWidth: '56ch', marginLeft: '8.33%', marginBottom: '4rem' }}>The land carries 380 mature trees of forty-two native species. We catalogued each one before plotting. The plot lines were then drawn around the trees, not through them. Eight further trees, listed below, are heritage-class — over a century old — and protected from any future construction within their drip-line.</p>
      <div className="trees-table reveal">
        <div className="trees-table__head">
          <span>Common</span><span>Local</span><span>Species</span><span style={{ textAlign: 'right' }}>Count</span>
        </div>
        {trees.map(t => (
          <div key={t.name} className="trees-table__row">
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}>{t.name}</span>
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--fg-soft)' }}>{t.local}</span>
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--fg-soft)', fontSize: '0.95rem' }}>{t.species}</span>
            <span style={{ fontFamily: 'var(--font-display)', textAlign: 'right', color: 'var(--forest)' }}>{t.count}</span>
          </div>
        ))}
        <div className="trees-table__foot">
          <span style={{ fontStyle: 'italic', color: 'var(--fg-muted)', fontFamily: 'var(--font-serif)' }}>+ 34 further species, including 8 heritage-class trees</span>
        </div>
      </div>
    </section>
  );
}

function Water() {
  return (
    <section className="section section--ink">
      <div className="twocol twocol--offset">
        <div className="reveal">
          <span className="sec-head__eyebrow" style={{ color: 'var(--leaf)' }}>Water</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.1, margin: '1rem 0 1.5rem', color: 'var(--bone)', letterSpacing: '-0.02em', fontVariationSettings: '"opsz" 80' }}>
            The land <em style={{ color: '#C7DAB0', fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontWeight: 300 }}>holds its rain.</em>
          </h2>
        </div>
        <div className="reveal" style={{ transitionDelay: '120ms' }}>
          <p style={{ color: 'rgba(250,246,238,0.85)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Two thousand millimetres a year, between June and September, in monsoons that turn the whole valley green.</p>
          <p>The Velvandi river holds the land on three sides. Two seasonal streams cross the property; both feed into a small percolation pond we have built on the eastern edge. Borewell tests in March 2026 yielded 8,000 litres an hour at thirty metres — well above the village average, and a sign of how well the land receives its own rain.</p>
          <p>Every plot has rooftop rainwater harvesting built in. Recharge pits are required at every house. Treated greywater feeds the gardens; black water is composted on site.</p>
        </div>
      </div>
    </section>
  );
}

export default function TheLand() {
  return (
    <Page overPhoto>
      <PageHead />
      <Geography />
      <Geology />
      <Vegetation />
      <Water />
    </Page>
  );
}
