/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://vet-practice.vercel.app",

  generateRobotsTxt: true,

  changefreq: "weekly",

  priority: 0.8,

  sitemapSize: 5000,

  exclude: ["/admin/*", "/test/*", "/404", "/500"],

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://vet-practice.vercel.app/sitemap.xml"],
  },

  alternateRefs: [
    {
      href: "https://vet-practice.vercel.app/",
      hreflang: "el",
    },
    {
      href: "https://vet-practice.vercel.app/en",
      hreflang: "en",
    },
  ],
};
