
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Transparency", path: "/transparency" },
  { name: "Journal", path: "/journal" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-2xl font-medium tracking-tight relative"
        >
          <span className="relative z-10">Natura</span>
          <span className="absolute top-0 left-0 w-full h-full bg-primary/10 rounded-full scale-150 blur-xl -z-10 animate-pulse" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-2",
                location.pathname === link.path
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:content-['']"
                  : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button className="rounded-full">Shop Now</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-full"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 pt-20 pb-6 px-4 md:hidden overflow-y-auto transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-lg font-medium py-2 border-b border-border flex justify-between items-center",
                location.pathname === link.path
                  ? "text-primary border-primary"
                  : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto pt-6 flex flex-col gap-3">
            <Button variant="outline" size="lg" className="w-full justify-start">
              <ShoppingBag className="mr-2 h-5 w-5" />
              View Cart
            </Button>
            <Button size="lg" className="w-full">Shop Now</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
