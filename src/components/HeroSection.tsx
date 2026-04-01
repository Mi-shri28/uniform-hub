import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ShoppingBag, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-store.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Bhavesh Cloth Store" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container relative py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="inline-block px-3 py-1 rounded-lg bg-primary/20 text-primary-foreground text-xs font-medium mb-4 backdrop-blur-sm">
            Rajula's Trusted Cloth Store
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
            Quality School Uniforms & Clothing
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-md">
            All major school uniforms available. Visit us in Rajula or order via WhatsApp.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/products?finder=true"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all"
            >
              <Search className="w-4 h-4" />
              Find Uniform
            </Link>
            <Link
              to="/products"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card/20 text-primary-foreground font-semibold text-sm backdrop-blur-sm hover:bg-card/30 active:scale-[0.98] transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              View Products
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card/20 text-primary-foreground font-semibold text-sm backdrop-blur-sm hover:bg-card/30 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
