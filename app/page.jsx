import Doctor from "@/components/Doctor";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Doctor />
    </main>
  );
}
