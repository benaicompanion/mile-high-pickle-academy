import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Philosophy from "@/components/Philosophy";
import Stats from "@/components/Stats";
import Facility from "@/components/Facility";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Programs />
      <Philosophy />
      <Facility />
      <FAQ />
      <Waitlist />
      <Footer />
    </main>
  );
}
