
import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag, Filter, CheckCircle, ArrowRight } from "lucide-react";

// Sample product data
const products = [
  {
    id: 1,
    name: "Organic Cotton Blazer",
    category: "Apparel",
    price: 289,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
    sustainabilityScore: 92,
    isNew: true,
  },
  {
    id: 2,
    name: "Bamboo Wrap Dress",
    category: "Apparel",
    price: 175,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop",
    sustainabilityScore: 88,
    isNew: true,
  },
  {
    id: 3,
    name: "Recycled Ocean Plastic Tote",
    category: "Accessories",
    price: 95,
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=2057&auto=format&fit=crop",
    sustainabilityScore: 95,
    isNew: false,
  },
  {
    id: 4,
    name: "Hemp Canvas Jacket",
    category: "Apparel",
    price: 225,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=1974&auto=format&fit=crop",
    sustainabilityScore: 90,
    isNew: false,
  },
  {
    id: 5,
    name: "Vegan Leather Belt",
    category: "Accessories",
    price: 68,
    image: "https://images.unsplash.com/photo-1611740801993-5f3129bacf2d?q=80&w=1974&auto=format&fit=crop",
    sustainabilityScore: 87,
    isNew: false,
  },
  {
    id: 6,
    name: "Tencel Blend Shirt",
    category: "Apparel",
    price: 110,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1974&auto=format&fit=crop",
    sustainabilityScore: 93,
    isNew: true,
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
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

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main ref={containerRef} className="flex-grow pt-20">
        {/* Hero section */}
        <section className="py-16 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight fade-item opacity-0">
                Shop Collection
              </h1>
              <p className="text-xl text-muted-foreground fade-item opacity-0">
                Explore our range of ethically produced, wildlife-friendly fashion pieces.
              </p>
            </div>
          </div>
        </section>

        {/* Products section */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Search and filter */}
            <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-center fade-item opacity-0">
              <div className="flex items-center space-x-2 w-full md:w-auto">
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search products..." 
                    className="pl-10 rounded-full w-full" 
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="rounded-full text-sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Button>
                <Button 
                  variant={selectedCategory === "Apparel" ? "default" : "outline"}
                  className="rounded-full text-sm"
                  onClick={() => setSelectedCategory("Apparel")}
                >
                  Apparel
                </Button>
                <Button 
                  variant={selectedCategory === "Accessories" ? "default" : "outline"}
                  className="rounded-full text-sm"
                  onClick={() => setSelectedCategory("Accessories")}
                >
                  Accessories
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="group relative rounded-xl overflow-hidden hover-card fade-item opacity-0"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium rounded-full px-2 py-1">
                      New Arrival
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-background/0 p-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="font-medium text-lg truncate">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-serif font-medium">${product.price}</div>
                        <div className="flex items-center text-xs text-primary">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          <span>{product.sustainabilityScore}% Eco-Score</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/5 backdrop-blur-sm">
                    <div className="flex gap-2">
                      <Button size="sm" className="rounded-full">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full">
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* More products CTA */}
            <div className="text-center mt-16 fade-item opacity-0">
              <Button variant="outline" className="rounded-full">
                Load More Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured collection */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-2 fade-item opacity-0">
                Featured Collection
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight fade-item opacity-0">
                African Wildlife Series
              </h2>
              <p className="text-muted-foreground fade-item opacity-0">
                Our latest collection directly supports anti-poaching initiatives across African wildlife reserves.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[21/9] fade-item opacity-0">
              <img 
                src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop" 
                alt="African Wildlife Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent flex items-center">
                <div className="p-8 md:p-12 max-w-lg">
                  <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">
                    Limited Edition Pieces
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Each garment features hand-painted designs inspired by endangered species, 
                    with 20% of proceeds going directly to conservation efforts.
                  </p>
                  <Button className="rounded-full">
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
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

export default Shop;
