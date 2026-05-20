import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

import './styles/colors_and_type.css';
import './styles/site.css';
import './styles/home.css';
import './styles/the-land.css';
import './styles/plots.css';
import './styles/journal.css';
import './styles/article.css';
import './styles/visit.css';
import './styles/gallery.css';
import './styles/contact.css';
import './styles/faq.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
