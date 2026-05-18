import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './pages/Home.jsx';
import TheLand from './pages/TheLand.jsx';
import Plots from './pages/Plots.jsx';
import Journal from './pages/Journal.jsx';
import JournalArticle from './pages/JournalArticle.jsx';
import Visit from './pages/Visit.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import FAQ from './pages/FAQ.jsx';

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
    </>
  );
}
