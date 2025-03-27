
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
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
    <section
      ref={containerRef}
      className="section-padding bg-primary/5 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight fade-item opacity-0">
              Join Our Movement
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto fade-item opacity-0">
              Be the first to know about new collections, sustainability initiatives, and exclusive events. 
              Subscribe to our newsletter and become part of the change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2 fade-item opacity-0">
              <Input 
                placeholder="Your email address" 
                type="email" 
                className="rounded-full" 
              />
              <Button className="rounded-full">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground fade-item opacity-0">
              By subscribing, you agree to our Privacy Policy and consent to receive updates 
              from Natura. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
