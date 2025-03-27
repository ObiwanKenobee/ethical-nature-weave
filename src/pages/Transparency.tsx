
import { useRef, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Shield, ArrowRight } from "lucide-react";

const Transparency = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = containerRef.current?.querySelectorAll(".fade-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main ref={containerRef} className="flex-grow pt-20">
        {/* Hero section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-2 fade-item opacity-0">
                <Shield className="mr-1 h-4 w-4" />
                Guardian-IO Verified
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight fade-item opacity-0">
                Full Supply Chain Transparency
              </h1>
              <p className="text-xl text-muted-foreground fade-item opacity-0">
                We believe you have the right to know exactly where your clothes come from, 
                who made them, and the impact they have on our planet.
              </p>
            </div>
          </div>
        </section>

        {/* Technology section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-2 fade-item opacity-0">
                  Guardian-IO Technology
                </div>
                <h2 className="text-3xl font-serif font-medium tracking-tight fade-item opacity-0">
                  Blockchain-Verified Supply Chain
                </h2>
                <p className="text-muted-foreground fade-item opacity-0">
                  We've partnered with Guardian-IO to implement a revolutionary blockchain-based 
                  system that tracks and verifies every step of our production process. From raw 
                  material sourcing to finished product, every transaction is permanently recorded.
                </p>
                <p className="text-muted-foreground fade-item opacity-0">
                  This technology ensures that our claims about ethical production and wildlife 
                  conservation are backed by immutable evidence, not just promises.
                </p>
                <div className="pt-4 fade-item opacity-0">
                  <Button className="rounded-full">
                    How It Works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden fade-item opacity-0">
                <div className="aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=2070&auto=format&fit=crop" 
                    alt="Blockchain technology visualization" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-sm">
                      Every Natura product has a unique digital certificate that can be verified on the blockchain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supply chain visualization */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight fade-item opacity-0">
                Our Supply Chain Journey
              </h2>
              <p className="text-muted-foreground fade-item opacity-0">
                Follow the journey of our products from source to finished garment.
              </p>
            </div>

            <div className="relative">
              {/* Timeline visualization */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

              <div className="space-y-12 relative z-10">
                {[
                  {
                    title: "Sustainable Material Sourcing",
                    location: "Multiple Locations, Globally",
                    description: "We source organic cotton from India, recycled ocean plastic from Indonesia, and sustainable bamboo from China. All suppliers are certified by independent sustainability organizations.",
                    image: "https://images.unsplash.com/photo-1610015441345-4ea3e2278e68?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    title: "Ethical Manufacturing",
                    location: "Portugal & Vietnam",
                    description: "Our garments are produced in certified factories that ensure fair wages, safe working conditions, and environmental standards. Each facility undergoes regular third-party audits.",
                    image: "https://images.unsplash.com/photo-1619087983523-7efc7adcc75c?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    title: "Low-Impact Transportation",
                    location: "Global Routes",
                    description: "We prioritize sea freight over air shipping and optimize our routes to minimize carbon emissions. All unavoidable transportation emissions are offset through certified carbon projects.",
                    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    title: "Quality Control & Verification",
                    location: "Distribution Centers",
                    description: "Before reaching customers, each product undergoes rigorous quality checks and receives its Guardian-IO blockchain certificate, which can be accessed via a QR code on the garment's tag.",
                    image: "https://images.unsplash.com/photo-1576613109753-27804239b205?q=80&w=2070&auto=format&fit=crop",
                  },
                ].map((step, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center fade-item opacity-0">
                    <div className={`order-2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                      <div className="glass-card rounded-xl overflow-hidden">
                        <div className="aspect-[16/9]">
                          <img 
                            src={step.image} 
                            alt={step.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={`space-y-4 order-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-4 border-background">
                            <div className="w-3 h-3 rounded-full bg-primary" />
                          </div>
                          <div className="absolute top-0 left-0 w-10 h-10 rounded-full bg-primary/20 animate-ping opacity-50" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-medium font-serif">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.location}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground pl-14">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Verification tool preview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 text-center bg-primary/5">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight fade-item opacity-0">
                  Verify Your Purchase
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto fade-item opacity-0">
                  Each Natura product comes with a unique QR code that lets you trace its complete journey 
                  through our ethical supply chain.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 fade-item opacity-0">
                  <Button className="rounded-full">
                    Access Verification Tool
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    View Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
              <h2 className="text-3xl font-serif font-medium tracking-tight fade-item opacity-0">
                Our Certifications
              </h2>
              <p className="text-muted-foreground fade-item opacity-0">
                We hold ourselves to the highest standards, verified by leading industry certifications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Global Organic Textile Standard",
                  description: "Certifies that our organic materials meet strict ecological and social criteria.",
                },
                {
                  name: "Fair Trade Certified",
                  description: "Ensures fair wages and safe working conditions throughout our supply chain.",
                },
                {
                  name: "B Corporation",
                  description: "Recognizes our commitment to social and environmental performance.",
                },
                {
                  name: "Climate Neutral Certified",
                  description: "Verifies that we've achieved net-zero carbon emissions across our operations.",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 text-center space-y-4 fade-item opacity-0"
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium font-serif">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Transparency;
