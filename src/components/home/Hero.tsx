
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Define hero image objects with light and dark variants
const heroImages = [
  {
    light: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=2070&auto=format&fit=crop",
    dark: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=2058&auto=format&fit=crop",
    alt: "Sustainable fashion with natural fabric",
  },
  {
    light: "https://images.unsplash.com/photo-1575986767340-5d17ae0de1d9?q=80&w=2033&auto=format&fit=crop",
    dark: "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?q=80&w=2070&auto=format&fit=crop",
    alt: "Wildlife in natural habitat",
  },
  {
    light: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop",
    dark: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2222&auto=format&fit=crop",
    alt: "Eco-friendly fashion production",
  },
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Check theme on component mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const isDark = document.documentElement.classList.contains("dark");
          setTheme(isDark ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  // Preload images
  useEffect(() => {
    const images = heroImages.flatMap((img) => [img.light, img.dark]);
    let loadedCount = 0;
    
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoading(false);
        }
      };
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center hero-gradient pt-20">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background image with parallax effect */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${theme === "dark" ? image.dark : image.light})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
          </div>
        ))}

        {/* Loading shimmer effect */}
        {loading && (
          <div className="absolute inset-0 bg-background animate-pulse">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent animate-shimmer" />
          </div>
        )}
      </div>

      <div className="container-custom relative z-10 mt-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight animate-fade-in">
            Wear the Change. Save Wildlife.
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in animation-delay-200">
            Luxury fashion with purpose. Every piece tells a story of conservation, 
            ethical production, and sustainable innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in animation-delay-400">
            <Button size="lg" className="rounded-full">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Our Mission
            </Button>
          </div>
        </div>

        {/* Image carousel indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? "w-8 bg-primary"
                  : "bg-foreground/20 hover:bg-foreground/40"
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
