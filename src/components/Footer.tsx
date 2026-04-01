import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/store-data";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BC</span>
              </div>
              <span className="font-bold">Bhavesh Cloth Store</span>
            </div>
            <p className="text-sm opacity-70 max-w-xs">
              Your trusted clothing store in Rajula. Quality school uniforms, winter wear, blankets, and men's clothing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/products" className="hover:opacity-100 transition-opacity">Products</Link>
              <Link to="/products?finder=true" className="hover:opacity-100 transition-opacity">Uniform Finder</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Visit Us</h3>
            <div className="space-y-3 text-sm opacity-70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Near Bus Stand, Main Market, Rajula, Gujarat 365560</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:opacity-100">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Mon–Sat: 9:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Bhavesh Cloth Store, Rajula. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
