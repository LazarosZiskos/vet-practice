import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18"; // Import your translation init function

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Κτηνιατρείο Καρβάλη - Λίνα Ακακιάδου",
  description: "Κτηνιατρείο Λίνα Ακακιάδου - Υψηλές Υπηρεσίες Κτηνιατρείου",
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
