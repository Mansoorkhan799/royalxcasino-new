import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://royalxcasinopakistan.pk';

  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{
      loc: string;
      title: string;
      caption: string;
    }>;
  };

  /** Matches live App Router routes (blog removed; download URL redirects to /). */
  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: new Date().toISOString(),
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/royal-x-casino.webp',
          title: 'Royal X Casino - Official App Icon and Brand Image',
          caption:
            "Royal X Casino - Pakistan's #1 card game app. Play Teen Patti, Rummy, Dragon vs Tiger. Download Royal X Casino APK for Android.",
        },
        {
          loc: '/royal-x-casino-logo.webp',
          title: 'Royal X Casino Official Logo',
          caption: "Official Royal X Casino logo - Pakistan's premier card gaming platform",
        },
      ],
    },
    {
      url: '/how-to-register-on-royal-x-casino',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.85,
    },
    {
      url: '/how-to-login-on-royal-x-casino',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.85,
    },
    {
      url: '/how-to-deposit-money-from-royal-x-casino',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
    },
    {
      url: '/how-to-withdraw-money-from-royal-x-casino',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
    },
    {
      url: '/royal-x-casino-for-pc',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/royal-x-casino.webp',
          title: 'Royal X Casino for PC',
          caption: 'Play Royal X Casino on PC using Android Emulator',
        },
      ],
    },
    {
      url: '/royal-x-casino-for-ios',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/royal-x-casino.webp',
          title: 'Royal X Casino for iOS',
          caption: 'Play Royal X Casino on iPhone and iPad',
        },
      ],
    },
    {
      url: '/about-us-royal-x-casino-pakistan',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/royal-x-casino.webp',
          title: 'About Royal X Casino',
          caption: 'Learn about Royal X Casino gaming platform',
        },
      ],
    },
    {
      url: '/contact-us-royal-x-casino-pakistan',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7,
    },
    {
      url: '/privacy',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6,
    },
    {
      url: '/disclaimer',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${mainPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${(page.images ?? [])
      .map(
        (img) => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
      )
      .join('')}
  </url>
  `
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
