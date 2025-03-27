
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useRef, useEffect } from "react";

const About = () => {
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
              <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight fade-item opacity-0">
                Our Mission
              </h1>
              <p className="text-xl text-muted-foreground fade-item opacity-0">
                We're on a mission to transform the fashion industry by creating beautiful, 
                luxury garments that protect wildlife and preserve our planet.
              </p>
            </div>
          </div>
        </section>

        {/* Story section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-2 fade-item opacity-0">
                  Our Story
                </div>
                <h2 className="text-3xl font-serif font-medium tracking-tight fade-item opacity-0">
                  From Wildlife Conservation to Ethical Fashion
                </h2>
                <p className="text-muted-foreground fade-item opacity-0">
                  Natura was born from a passionate commitment to wildlife conservation. 
                  Our founder, after witnessing the devastating effects of illegal wildlife trade 
                  and habitat destruction, set out to create a brand that would directly address 
                  these issues through the power of conscious consumerism.
                </p>
                <p className="text-muted-foreground fade-item opacity-0">
                  By partnering with Guardian-IO technology, we've created a transparent supply 
                  chain that ensures every material is ethically sourced and every worker is 
                  fairly compensated.
                </p>
                <div className="pt-4 fade-item opacity-0">
                  <Button className="rounded-full">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative order-1 lg:order-2 fade-item opacity-0">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                    alt="Sustainable fashion production" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-background rounded-lg p-4 shadow-lg max-w-xs">
                  <p className="text-sm font-medium">
                    "Our goal is to make sustainability not just an option, but the standard in luxury fashion."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Natura Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-2 fade-item opacity-0">
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight fade-item opacity-0">
                What We Stand For
              </h2>
              <p className="text-muted-foreground fade-item opacity-0">
                Our core values guide everything we do, from design to production to community engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Transparency",
                  description: "We believe you deserve to know exactly where your clothes come from and how they're made.",
                },
                {
                  title: "Conservation",
                  description: "Every product directly contributes to wildlife protection and habitat preservation efforts.",
                },
                {
                  title: "Innovation",
                  description: "We constantly explore new sustainable materials and ethical production methods.",
                },
                {
                  title: "Quality",
                  description: "We create pieces that last, reducing the environmental impact of fast fashion.",
                },
                {
                  title: "Community",
                  description: "We support the artisans and communities that bring our designs to life.",
                },
                {
                  title: "Education",
                  description: "We share knowledge about sustainable practices and wildlife conservation.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 space-y-4 fade-item opacity-0"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-medium font-serif">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 text-center bg-primary/5">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight fade-item opacity-0">
                  Join Our Journey
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto fade-item opacity-0">
                  Discover our latest collections and see how we're making a difference in wildlife conservation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 fade-item opacity-0">
                  <Button className="rounded-full">
                    Shop Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    Explore Impact
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
