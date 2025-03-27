
import { Hero } from "@/components/home/Hero";
import { EthicalSupplyChain } from "@/components/home/EthicalSupplyChain";
import { ImpactCounter } from "@/components/home/ImpactCounter";
import { CtaSection } from "@/components/home/CtaSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <EthicalSupplyChain />
        <ImpactCounter />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
