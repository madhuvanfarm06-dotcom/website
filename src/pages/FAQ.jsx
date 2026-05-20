import { useState } from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/Page.jsx';
import SEO from '../components/SEO.jsx';

const FAQ_SECTIONS = [
  {
    id: 'land',
    title: 'About the land',
    items: [
      {
        q: 'What is the size of each plot, and how many are there?',
        a: [
          'Fifteen plots in total. They range from 7,800 to 18,000 square feet — roughly a fifth to a third of an acre. Boundaries follow the contour, not a grid, so each plot has a slightly different shape.',
          'Every plot has clear approach, level building area, mature trees we have asked to be kept, and at least one corner that catches the long view down the valley.'
        ]
      },
      {
        q: 'Is the title clear?',
        a: ['Yes. We hold a single 7/12 in the company\'s name and convey title plot-by-plot through registered conveyance deeds. We have a full title-search opinion from a Pune advocate and a survey from a licensed surveyor. Both are available to serious enquirers.']
      },
      {
        q: 'What about water?',
        a: [
          'Two functioning wells on the upper terrace and a small percolation pond we have rebuilt. The aquifer is good — Bhor sits at the edge of the Sahyadri rain shadow, and our valley catches more rain than the plateau behind it.',
          'Each plot includes a piped water connection. Storage is on the buyer.'
        ]
      },
      {
        q: 'Roads, electricity, internet?',
        a: ['Internal roads are murum (compacted gravel), six metres wide, edged in basalt. The grid is here — three-phase metered supply at every plot. Reliable broadband from the Bhor exchange; mobile coverage is good on the upper plots, patchy on B-12.']
      },
    ]
  },
  {
    id: 'building',
    title: 'About building a house',
    items: [
      { q: 'Do we have to build through your studio?',
        a: [
          'No. You may engage any architect you wish. We do ask that the design pass our review — we are looking for things that respect the land, not for a particular style. We share our design principles in writing before you commit.',
          'About a third of buyers so far have asked us to do the design. About a third have brought their own architect. The rest are still thinking.'
        ] },
      { q: 'Are there any building restrictions?',
        a: ['Yes, three. A maximum footprint of 35% of the plot. A maximum height of two storeys, plus a stair-room. And no felling of any tree above 6 inches girth without our written consent. Beyond those, you are free.'] },
      { q: 'Roughly what does construction cost?',
        a: ['Our own studio works at roughly ₹4,500 to ₹6,500 per square foot all-in, depending on finish — basalt and lime are honest but not cheap. A 2,200 sqft house typically lands between ₹1.1 and ₹1.4 crore. Other architects may quote differently.'] },
      { q: 'How long does a house take?',
        a: ['Eighteen to twenty-four months from drawing to keys, monsoons included. We pause structural work in heavy rain (June through September), which extends most builds by a season.'] },
    ]
  },
  {
    id: 'living',
    title: 'About living here',
    items: [
      { q: 'Is this a primary home, a weekend home, or something in between?',
        a: ['All three. About half of our enquiries are from couples and small families looking to relocate from Pune or Bombay full-time. The rest plan a slow shift — weekends now, more later. Either is welcome. We are not building a holiday park.'] },
      { q: 'What is the village relationship like?',
        a: [
          'Wadgaon Khurd has been here for two centuries. We have spent four years in conversation with the gram panchayat and our immediate neighbours. We employ from the village wherever we can, we use the village school for our holiday camps, and we pay above the going labour rate.',
          'New residents are expected to do their own work of becoming neighbours. We will introduce you. The rest is on you.'
        ] },
      { q: 'Schools and healthcare?',
        a: ['Bhor town (15 km) has a good government hospital and several private clinics. The closest English-medium schools are in Pune; some families homeschool, some make the daily drive. We are not going to pretend it is a non-issue.'] },
      { q: 'Wild animals?',
        a: ['Yes. Leopards pass through occasionally — three sightings in the last four years. Sambar and barking deer are common. Snakes in monsoon. None of this is a problem if you do the obvious things: secure your kitchen waste, fence a kitchen garden, do not walk the perimeter at night without a torch.'] },
    ]
  },
  {
    id: 'process',
    title: 'About the process',
    items: [
      { q: 'How does buying actually work?',
        a: [
          'Step one is a conversation — usually over email, then a phone call. Step two is a site visit. Step three, if we are both still keen, is a fortnight to think.',
          'If you decide to proceed, we collect a 10% reservation. This is held in escrow and returned in full if either of us walks within 60 days. Conveyance follows once both parties are satisfied.'
        ] },
      { q: 'Why do you have a long process?',
        a: ['Because choosing your neighbours matters. We are deliberately small and we will be neighbours for decades. We want time to be sure, and we want you to have time too. Nobody benefits from a buyer who regrets it.'] },
      { q: 'Are prices negotiable?',
        a: ['Plot prices are not. They are set transparently by area and aspect, and they are the same for everyone. If you cannot quite reach the plot you want, please ask — we may be able to help with payment terms, or to suggest a different plot.'] },
      { q: 'Do you have any plots left?',
        a: ['As of this writing: yes, several. The Plots page shows live availability. We will not start a waitlist until we are sold out, which we expect by mid-2027.'] },
    ]
  },
];

function Question({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-q ${open ? 'is-open' : ''}`}>
      <button className="faq-q__btn" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-q__sign">+</span>
      </button>
      <div className="faq-q__body">
        <div className="faq-q__inner">
          {a.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_SECTIONS.flatMap(section =>
      section.items.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a.join(' ')
        }
      }))
    )
  };
  return (
    <Page>
      <SEO
        title="FAQ · Questions about plots, building, and living at Madhuvan"
        description="Frequently asked questions about Madhuvan — plot sizes, title, water, roads, electricity, building restrictions, costs, village relationship, and more. Honest answers from Sun Developers."
        keywords="Madhuvan FAQ, plots near Pune FAQ, NA plot questions, buying land Bhor, plot title questions"
        jsonLd={faqJsonLd}
      />
      <header className="page-head">
        <div className="page-head__inner">
          <span className="page-head__eyebrow">Frequently asked</span>
          <h1 className="page-head__title">The questions <em>everyone asks.</em></h1>
          <span className="page-head__deva">प्रश्नोत्तर · Praśnottara — questions and answers</span>
        </div>
        <p className="page-head__lede">We collected the questions visitors ask most often, and answered them as honestly as we can. If yours isn't here, please write — that's how this list grows.</p>
      </header>

      <section className="section">
        <div className="faq-layout">
          <aside className="faq-toc">
            <span className="faq-toc__label">Contents</span>
            {FAQ_SECTIONS.map((s, i) => (
              <a key={s.id} href={`#${s.id}`}>
                <span className="faq-toc__num">{String(i + 1).padStart(2, '0')}</span>
                <span>{s.title}</span>
              </a>
            ))}
          </aside>

          <div>
            {FAQ_SECTIONS.map((s, i) => (
              <section key={s.id} id={s.id} className="faq-section reveal">
                <div className="faq-section__head">
                  <span className="faq-section__num">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="faq-section__title">{s.title}</h2>
                </div>
                <div>
                  {s.items.map((it, j) => <Question key={j} q={it.q} a={it.a} />)}
                </div>
              </section>
            ))}

            <div className="reveal" style={{ padding: '3rem 2.5rem', background: 'var(--bone)', border: '1px solid var(--rule)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>Still wondering</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '1.6rem', lineHeight: 1.2, margin: 0, letterSpacing: '-0.02em' }}>
                Did we miss <em style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontWeight: 300, color: 'var(--forest)' }}>your</em> question?
              </h3>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--fg-soft)', margin: 0, lineHeight: 1.55, maxWidth: '48ch' }}>
                The list above grows from real conversations. If something is missing, please write — and your question may help the next family who asks.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Link to="/contact" className="btn btn--primary">Write to us →</Link>
                <Link to="/visit" className="btn btn--ghost">Or arrange a visit →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
