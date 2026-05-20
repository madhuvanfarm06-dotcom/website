import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE = {
  url: 'https://www.sun-developers.com',
  name: 'Madhuvan by Sun Developers',
  defaultImage: 'https://www.sun-developers.com/img/aerial-01-river-bend.jpg',
};

export default function SEO({
  title,
  description,
  image,
  type = 'website',
  keywords,
  jsonLd,
  noindex = false,
}) {
  const { pathname } = useLocation();
  const url = `${SITE.url}${pathname === '/' ? '/' : pathname}`;
  const fullTitle = title ? `${title} · ${SITE.name}` : SITE.name;
  const img = image || SITE.defaultImage;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
