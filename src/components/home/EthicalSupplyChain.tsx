
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Lock, Leaf, Factory, Ship, ArrowRight } from "lucide-react";

export function EthicalSupplyChain() {
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

  const supplyChainSteps = [
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Sustainable Sourcing",
      description: "Materials sourced from eco-friendly farms with zero deforestation impact.",
      delay: "delay-[0ms]",
    },
    {
      icon: <Factory className="h-8 w-8 text-primary" />,
      title: "Ethical Production",
      description: "Fair wages and safe working conditions in all manufacturing facilities.",
      delay: "delay-[200ms]",
    },
    {
      icon: <Ship className="h-8 w-8 text-primary" />,
      title: "Low-Impact Shipping",
      description: "Carbon-neutral transportation and plastic-free packaging.",
      delay: "delay-[400ms]",
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Blockchain Verification",
      description: "Guardian-IO technology verifies every step from material to finished product.",
      delay: "delay-[600ms]",
    },
  ];

  return (
    <section ref={containerRef} className="section-padding bg-muted/30">
      <div className="container-custom space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4 fade-item opacity-0">
            <CheckCircle className="mr-1 h-4 w-4" />
            Guardian-IO Verified
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight fade-item opacity-0">
            Our Transparent Supply Chain
          </h2>
          <p className="text-muted-foreground fade-item opacity-0">
            Every product comes with a complete digital history, ensuring ethical 
            standards from source to finished garment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supplyChainSteps.map((step, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl p-6 text-center space-y-4 fade-item opacity-0 ${step.delay} hover-card`}
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-medium font-serif">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="rounded-full fade-item opacity-0">
            Explore Our Transparency Platform
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
