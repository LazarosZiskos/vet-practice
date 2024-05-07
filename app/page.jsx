import Doctor from "@/components/Doctor";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Questions from "@/components/Questions";
import Services from "@/components/Services";
import Space from "@/components/Space";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Doctor />
      <Space />
      <Testimonials />
      <Questions />
    </main>
  );
}
