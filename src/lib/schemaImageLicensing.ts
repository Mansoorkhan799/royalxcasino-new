/** Site origin for absolute schema URLs */
export const SITE_ORIGIN = "https://royalxcasinopakistan.pk";

/** Schema.org Organization node reused as creator across ImageObjects */
export const IMAGE_CREATOR = {
  "@type": "Organization",
  name: "Royal X Casino",
  url: SITE_ORIGIN,
} as const;

/**
 * Full set of Schema.org ImageObject properties recommended by Google for
 * Image Metadata (Search Console: license, creator, acquireLicensePage,
 * copyrightNotice, creditText).
 */
export const imageObjectLicensing = {
  license: SITE_ORIGIN,
  creator: IMAGE_CREATOR,
  acquireLicensePage: `${SITE_ORIGIN}/contact-us-royal-x-casino-pakistan`,
  copyrightNotice: "© Royal X Casino. All rights reserved.",
  creditText: "Royal X Casino",
} as const;
