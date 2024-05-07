import Doctor from "@/components/Doctor";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Space from "@/components/Space";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Doctor />
      <Space />
    </main>
  );
}
