import { Helmet } from "react-helmet";
import logo from "../img/semi-logo.png";

interface MetaProps {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string;
  canonical?: string;
  locale?: string; // Language and region, e.g., "en_US"
}

export const addMetaData = ({
  title = "StreamFlo | Wholesale Chemical Distributor in Nigeria",
  description = "StreamFlo is Nigeria's leading wholesale distributor of high-quality chemicals for diverse industries. We provide reliable supply, expert support, competitive pricing, and a comprehensive product range to meet all your needs.",
  path = "",
  keywords = "StreamFlo, chemicals distributor, Nigeria chemicals, wholesale chemicals, industrial chemicals, chemical supply Nigeria, high-quality chemicals, Lagos chemicals, expert chemical support",
  locale = "en_NG",
}: MetaProps) => {
  const canonical = `${process.env.REACT_APP_WEB_URL}/${path}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StreamFlo",
    url: canonical,
    logo: logo,
    description: description,
    sameAs: [
      "https://www.facebook.com/streamflo",
      "https://www.twitter.com/streamflo",
      "https://www.instagram.com/streamflo",
    ],
  };

  return (
    <Helmet>
      {/* Primary Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Metadata */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      <meta property="og:site_name" content="StreamFlo" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:site" content="@StreamFlo" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
