
export default async function sitemap() {
  const baseUrl = "https://www.ktiniatreio-karvali.gr";


  const locales = ["el", "en"];

  // --- STATIC ROUTES ---
  const staticRoutes = ["", "/about", "/services", "/contact"];

  const staticEntries = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.8,
    }))
  );

  // --- DYNAMIC ROUTES για /services/[id] ---
  // Αν δεν φορτώνεις services από API, τα γράφεις μόνος σου:
  const services = [
    "preventive-care",
    "lab-tests",
    "surgery",
    "dental-care",
    "pharmacy",
    "pathological-cases",
    "nutrition",
    "client-records",
    "travel"
  ];

  const serviceEntries = services.flatMap((service) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/services/${service}`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.8,
    }))
  );

  return [...staticEntries, ...serviceEntries];
}
