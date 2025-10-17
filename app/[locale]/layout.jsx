import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18"; // Import your translation init function

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  metadataBase: new URL("https://vet-practice.vercel.app"),
  title: {
    default: "Κτηνιατρείο Νέα Καρβάλη, Καβάλα – Λίνα Ακακιάδου",
    template: "%s | Λίνα Ακακιάδου",
  },
  description:
    "Η Λίνα Ακακιάδου παρέχει πλήρη κτηνιατρική φροντίδα στη Νέα Καρβάλη & Καβάλα: εμβολιασμοί, μικροτσίπ, διαγνωστικός έλεγχος, grooming.",
  applicationName: "Κτηνιατρείο Λίνας Ακακιάδου",
  keywords: [
    "κτηνίατρος",
    "κτηνιατρείο",
    "Νέα Καρβάλη",
    "Καβάλα",
    "εμβολιασμοί",
    "μικροτσίπ",
    "εξετάσεις",
    "επεμβάσεις",
    "φαρμακείο",
    "ταξίδια",
    "δίαιτες",
    "παθολογικά",
  ],
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://vet-practice.vercel.app",
    title: "Κτηνίατρος Νέα Καρβάλη, Καβάλα – Λίνα Ακακιάδου",
    description:
      "Κτηνιατρείο ζώων συντροφιάς στη Νέα Καρβάλη. Εξυπηρετούμε όλη την Καβάλα.",
    siteName: "Κτηνιατρείο Λίνας Ακακιάδου",
  },
  alternates: {
    canonical: "https://vet-practice.vercel.app",
    languages: {
      el: "https://vet-practice.vercel.app",
      en: "https://vet-practice.vercel.app/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

// const i18nNamespaces = ["Footer"];

async function Layout({ children, params: { locale } }) {
  // Fetch translations for the current locale
  const { resources } = await initTranslations(locale, [
    "Common",
    "Aboutpage",
    "Contactpage",
    "Servicepage",
  ]);

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <TranslationsProvider
          locale={locale}
          resources={resources}
          namespaces={["Common"]}
        >
          <Navbar />
          {children}
          <ScrollButton />
          <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
}

export default Layout; // Wrap layout with appWithTranslation
