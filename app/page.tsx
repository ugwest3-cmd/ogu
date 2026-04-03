import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import TrustSection from "@/components/TrustSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <About />
      <TrustSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
