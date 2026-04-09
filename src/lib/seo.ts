type SeoMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
};

export const SITE_NAME = "RASA";
export const SITE_URL = "https://rasa.com";

const DEFAULT_OG_IMAGE = "/logo.png";

function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

export function buildSeoMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: SeoMetaInput) {
  const canonicalUrl = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(image);

  return [
    { title },
    { name: "description", content: description },
    {
      name: "robots",
      content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: imageUrl },
    { property: "og:image:alt", content: `${SITE_NAME} brand image` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: toAbsoluteUrl("/logo.png"),
  email: "consult@rasa.com",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export function toJsonLd(value: unknown) {
  return JSON.stringify(value);
}
