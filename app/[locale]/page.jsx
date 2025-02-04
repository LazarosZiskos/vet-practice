import Doctor from "@/components/Doctor";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Questions from "@/components/Questions";
import Services from "@/components/Services";
import Space from "@/components/Space";
import Testimonials from "@/components/Testimonials";
import initTranslations from "../i18";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["Hero", "Services"];

export default async function Home({ params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      <main>
        <Hero />
        <Services />
        <Doctor />
        <Space />
        <Testimonials />
        <Questions />
      </main>
    </TranslationsProvider>
  );
}
