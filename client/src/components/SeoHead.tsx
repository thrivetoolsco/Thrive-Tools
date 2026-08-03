import { Helmet } from "react-helmet-async";

const SITE_NAME = "Thrive Tools";
const SITE_URL = "https://thrivetools.co";
const DEFAULT_OG_IMAGE = "https://thrivetools.co/logo.webp";
const DEFAULT_OG_IMAGE_ALT = "Thrive Tools – wellness and biohacking by Eden Laraki";

function resolveAbsoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: "website" | "article";
  datePublished?: string;
  noSuffix?: boolean;
  image?: string;
  imageAlt?: string;
}

export default function SeoHead({
  title,
  description,
  canonical,
  ogType = "website",
  datePublished,
  noSuffix = false,
  image,
  imageAlt,
}: SeoProps) {
  const fullTitle = noSuffix || title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

  const ogImage = image ? resolveAbsoluteUrl(image) : DEFAULT_OG_IMAGE;
  const ogImageAlt = imageAlt ?? DEFAULT_OG_IMAGE_ALT;

  const schema =
    ogType === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description,
          image: ogImage,
          datePublished: datePublished ?? "2026-01-01",
          dateModified: datePublished ?? "2026-01-01",
          author: {
            "@type": "Person",
            name: "Eden Laraki",
            url: `${SITE_URL}/about`,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.webp` },
          },
          ...(canonicalUrl && { url: canonicalUrl, mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl } }),
        }
      : ogType === "website" && canonical === "/"
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/logo.webp`,
              sameAs: [
                "https://www.instagram.com/thrivetools.co/",
                "https://www.threads.com/@thrivetools.co",
              ],
            },
            {
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
            },
          ],
        }
      : {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: fullTitle,
          description,
          ...(canonicalUrl && { url: canonicalUrl }),
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
        };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content={SITE_NAME} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@thrivetools_co" />
      <meta name="twitter:creator" content="@thrivetools_co" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
