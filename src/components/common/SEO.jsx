import { Helmet } from "react-helmet-async";

const SITE_NAME = "Anmol Laboratories";
//const SITE_URL = "https://www.anmollaboratories.com"; // Replace with your actual domain
const SITE_URL = typeof window !== "undefined" ? window.location.origin : "";
export default function SEO({
  title,
  description,
  keywords = "",
  image = "/logo.png",
  url = "",
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const canonicalUrl = `${SITE_URL}${url}`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />

      <link rel="canonical" href={canonicalUrl} />

      <meta name="theme-color" content="#166534" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
    </Helmet>
  );
}
