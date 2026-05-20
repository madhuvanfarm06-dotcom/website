import { Link } from 'react-router-dom';
import Page from '../components/Page.jsx';
import SEO from '../components/SEO.jsx';

export default function JournalArticle() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'On placing a house among trees that were already there.',
    image: 'https://www.sun-developers.com/img/aerial-19-mango-grove.jpg',
    author: { '@type': 'Person', name: 'Aarya Sasane' },
    publisher: {
      '@type': 'Organization',
      name: 'Madhuvan by Sun Developers',
      logo: { '@type': 'ImageObject', url: 'https://www.sun-developers.com/favicon.png' }
    },
    datePublished: '2026-10-01',
    dateModified: '2026-10-01',
    mainEntityOfPage: 'https://www.sun-developers.com/journal/among-the-trees',
    articleSection: 'On building'
  };
  return (
    <Page overPhoto>
      <SEO
        title="On placing a house among trees that were already there"
        description="We catalogued every tree on the property before drawing a single plot line. A long note on the argument between a development brief and the trees that came before it."
        keywords="sustainable land development, tree-first planning, plot layout around trees, Madhuvan journal"
        type="article"
        image="https://www.sun-developers.com/img/aerial-19-mango-grove.jpg"
        jsonLd={articleJsonLd}
      />
      <article>
        <header className="article-hero">
          <div className="article-hero__photo">
            <img src="/img/aerial-19-mango-grove.jpg" alt="" />
          </div>
          <div className="article-hero__inner">
            <div className="article-hero__crumbs">
              <Link to="/journal">Journal</Link>
              <span>/</span>
              <span className="article-hero__cat">On building</span>
            </div>
            <h1 className="article-hero__title">On placing a house among trees <em>that were already there.</em></h1>
            <div className="article-hero__meta">
              <span>By Aarya Sasane</span>
              <span>October 2026</span>
              <span>8 minute read</span>
            </div>
          </div>
        </header>

        <div className="article">
          <p className="lede">We catalogued every tree on the property before drawing a single plot line. What followed was an argument with our own desire to build everywhere at once.</p>

          <p className="dropcap">When we first walked the land in March 2022, the mango trees were beginning to flower. There were fourteen of them along the upper terrace, planted by Bhau Sasane's grandfather sometime around 1948. They were old, but not magnificent. Three of them had been pruned badly at some point in the eighties. Two were leaning. One was hollow at the base.</p>

          <p>None of this was visible from the satellite imagery our broker had sent us. The image showed a patch of mottled green on a hillside, surveyed and squared, with a notional plot grid drawn over it in red. Plot 1 here, Plot 2 here, Plot 3 here, the road there, the boundary wall along this line. The trees were not on the drawing.</p>

          <p>I think this is how most land is sold in India. Not as a place, but as a possibility — a clean rectangle waiting for a building. The trees, when they appear at all, appear in the brochure as renderings, after the fact, drawn in by the architect.</p>

          <h2>An <em>argument</em> with the brief</h2>

          <p>Our architect — Anand from Studio Sahyādri — gave us our first set of plans in August. They were good plans. The plot grid had been refined; the road wound more sympathetically along the contour; each parcel had a logical building envelope. The drawings were beautiful. We approved them.</p>

          <p>And then we went back to the land.</p>

          <p>The fourteen mangoes were now in fruit. Walking the upper terrace in our shoes, I realised that Plot A-03 — a 12,000 square foot parcel that the drawings had laid out neatly — would require us to cut down two of the mangoes and lop a third. The third was the leaning one. The other two were healthy.</p>

          <blockquote>"How long does it take to grow a mango tree?" my grandfather had once asked me, when I was a boy. "Twelve years to flower. Twenty to fruit well. Forty to be magnificent. We are not in the business of growing mango trees. We are in the business of leaving them alone."</blockquote>

          <p>We came back to Anand and asked him to redraw. He was patient, and a little exasperated. "You realise this will reduce the saleable area by about 8%?" he said. We said we did. He drew again.</p>

          <h2>Forty-two species, three hundred and eighty trees</h2>

          <p>Over the next four months we catalogued the entire property. Forty-two native species, three hundred and eighty individual trees with a trunk diameter of more than fifteen centimetres at chest height. Forty-eight of them were over thirty years old. Eight were over a hundred — three banyans, two peepals, one tamarind, and two mangoes whose age we could not determine but which Bhau Sasane's father had referred to, in his diary, as "the old ones."</p>

          <figure>
            <img src="/img/aerial-05-canopy.jpg" alt="A canopy of mango and tamarind, photographed from above." />
            <figcaption>The upper terrace, looking west, monsoon evening</figcaption>
          </figure>

          <p>Each tree was given a number, a GPS coordinate, a species identification, an estimated age, and a health rating. We hired a local botanist, Dr Sucheta Joshi, for two weeks. She walked the land with a clipboard and a measuring tape and a magnifying glass, and at the end of two weeks she handed us a spreadsheet.</p>

          <p>The spreadsheet became the master document. The plot lines were drawn around it. Where a heritage tree fell within a plot, we wrote a clause into the sale deed protecting it within its drip-line, in perpetuity. Where a mature tree could not be avoided, we adjusted the plot. In four cases, we removed the plot entirely.</p>

          <h2>What we lost, what we kept</h2>

          <p>The original drawings showed seventeen plots. The final plan shows fifteen. We lost two plots — about twenty thousand square feet of saleable land — to trees. At market rates, that is somewhere around two crore rupees we will not earn.</p>

          <p>We have been asked, more than once, whether this was worth it. The honest answer is that we don't know. We are not yet finished selling the fifteen, so we cannot tell you whether we have built something that the market rewards, or something it ignores. We can tell you that the families who have walked the land — and there have been thirty-six of them this year — have all, without exception, asked about the trees.</p>

          <p>Some of them asked because they wanted to be sure they could cut the trees down on their own plot, after purchase. Those families we did not sell to.</p>

          <p>Some of them asked because they had grown up in houses with mango trees in the courtyard, and they wanted to know if they could plan around the canopy. Those families we did sell to.</p>

          <h2>A <em>partial conclusion</em></h2>

          <p>Anand has a phrase for the design philosophy we have, more or less by accident, arrived at. He calls it "subtractive planning." You start with the whole site and you take things away — first the trees, then the slopes, then the seasonal streams, then the views, then the views <em>from</em> the views. What is left, after all the subtractions, is the buildable land.</p>

          <p>It is a slower way of working, and it produces less. But it produces, I think, a different kind of place. The houses at Madhuvan will sit between trees, not on top of cleared ground. They will look at the river through gaps in a canopy that is forty years older than they are. They will be, in a small but real way, guests on the land rather than its owners.</p>

          <p>Bhau Sasane visited last week. He stood on the upper terrace, near the leaning mango — the one we kept — and he was quiet for a long time. Then he said: "It still looks like the place." He said it the way one says something that did not need to be said.</p>

          <p style={{ fontFamily: 'var(--font-deva)', textAlign: 'center', color: 'var(--forest)', fontSize: '1.2rem', margin: '3rem 0 0' }}>· · ·</p>
        </div>

        <div className="article-byline">
          <div className="article-byline__avatar">A</div>
          <div>
            <div className="article-byline__name">Aarya Sasane</div>
            <p className="article-byline__role">Co-founder, Madhuvan. Writes occasionally about land, building, and the in-between.</p>
          </div>
        </div>

        <div className="article-cta">
          <span className="sec-head__eyebrow" style={{ color: 'var(--leaf)' }}>If this resonated</span>
          <h3>You might want to <em>walk the land</em> with us.</h3>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'rgba(250,246,238,0.85)', fontSize: '1.1rem', maxWidth: '42ch', margin: '0 0 1rem' }}>
            We host site visits one weekend a month. We meet you at the gate, walk the fifteen plots, and answer every question.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/visit" className="btn btn--bone btn--lg">Plan a visit →</Link>
            <Link to="/journal" className="btn btn--text" style={{ color: 'var(--bone)' }}>← All entries</Link>
          </div>
        </div>
      </article>
    </Page>
  );
}
