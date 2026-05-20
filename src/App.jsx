import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';

import Home from './pages/Home.jsx';

const TheLand = lazy(() => import('./pages/TheLand.jsx'));
const Plots = lazy(() => import('./pages/Plots.jsx'));
const Journal = lazy(() => import('./pages/Journal.jsx'));
const JournalArticle = lazy(() => import('./pages/JournalArticle.jsx'));
const Visit = lazy(() => import('./pages/Visit.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const FAQ = lazy(() => import('./pages/FAQ.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.fbq) window.fbq('track', 'PageView');
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/the-land" element={<TheLand />} />
          <Route path="/plots" element={<Plots />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/among-the-trees" element={<JournalArticle />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}
