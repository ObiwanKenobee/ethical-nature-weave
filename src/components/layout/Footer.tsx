
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Instagram, Twitter, Facebook, Linkedin, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Link to="/" className="font-serif text-2xl font-medium tracking-tight">
              Natura
            </Link>
            <p className="text-muted-foreground">
              Ethical fashion that preserves wildlife and empowers communities through transparent, 
              sustainable practices.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-lg">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/transparency" className="text-muted-foreground hover:text-primary transition-colors">Transparency</Link>
              </li>
              <li>
                <Link to="/journal" className="text-muted-foreground hover:text-primary transition-colors">Journal</Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-lg">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop/new-arrivals" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link to="/shop/collections" className="text-muted-foreground hover:text-primary transition-colors">Collections</Link>
              </li>
              <li>
                <Link to="/shop/sustainable-materials" className="text-muted-foreground hover:text-primary transition-colors">Sustainable Materials</Link>
              </li>
              <li>
                <Link to="/shop/accessories" className="text-muted-foreground hover:text-primary transition-colors">Accessories</Link>
              </li>
              <li>
                <Link to="/shop/sale" className="text-muted-foreground hover:text-primary transition-colors">Sale</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-medium text-lg">Join Our Movement</h4>
            <p className="text-muted-foreground">Subscribe for updates on new collections and conservation efforts.</p>
            <div className="flex gap-2">
              <Input placeholder="Email address" className="rounded-full" />
              <Button size="icon" className="rounded-full shrink-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Natura HQ, 123 Conservation Way, Sustainable Heights, NY 10001, USA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Natura. All rights reserved. Powered by Guardian-IO technology.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            <Link to="/sustainability" className="text-muted-foreground hover:text-primary transition-colors">Sustainability</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
