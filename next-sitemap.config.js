/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.ktiniatreio-karvali.gr/",

  generateRobotsTxt: true,

  changefreq: "weekly",

  priority: 0.8,

  sitemapSize: 5000,

  exclude: ["/admin/*", "/test/*", "/404", "/500"],

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },

  alternateRefs: [
    {
      href: "https://www.ktiniatreio-karvali.gr/",
      hreflang: "el",
    },
    {
      href: "https://www.ktiniatreio-karvali.gr/en",
      hreflang: "en",
    },
  ],
};
