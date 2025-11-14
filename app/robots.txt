export default function robots() {
  const baseUrl = "https://www.ktiniatreio-karvali.gr";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
