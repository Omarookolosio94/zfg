import { Helmet } from "react-helmet";
import logo from "../img/zfg.png";

interface MetaProps {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string;
  canonical?: string;
  locale?: string; // Language and region, e.g., "en_CA"
}

export const addMetaData = ({
  title = "Zorg Financial Group | Comprehensive Financial Solutions in Canada",
  description = "Zorg Financial Group is your trusted partner in wealth management, investment advisory, corporate financing, and insurance services. We provide tailored financial solutions to help you achieve your goals.",
  path = "",
  keywords = "Zorg Financial Group, financial services Canada, wealth management, investment advisory, corporate financing, insurance services, financial solutions, Canada finance, Toronto financial experts",
  locale = "en_CA",
}: MetaProps) => {
  const canonical = `${process.env.REACT_APP_WEB_URL}/${path}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zorg Financial Group",
    url: canonical,
    logo: logo,
    description: description,
    sameAs: [
      "https://www.facebook.com/zorgfinancial",
      "https://www.twitter.com/zorgfinancial",
      "https://www.instagram.com/zorgfinancial",
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
      <meta property="og:site_name" content="Zorg Financial Group" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:site" content="@ZorgFinancial" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
