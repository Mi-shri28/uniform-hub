import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import uniformImg from "@/assets/uniform-display.jpg";
import winterImg from "@/assets/winter-wear.jpg";
import blanketImg from "@/assets/blankets.jpg";
import mensImg from "@/assets/mens-clothing.jpg";

const categories = [
  { id: "uniforms", name: "School Uniforms", image: uniformImg, description: "All school uniforms in one place" },
  { id: "winter", name: "Winter Wear", image: winterImg, description: "Sweaters, jackets & more" },
  { id: "blankets", name: "Blankets", image: blanketImg, description: "Cozy blankets for every season" },
  { id: "mens", name: "Men's Clothing", image: mensImg, description: "Kurtas, shirts & casuals" },
];

export default function CategoryGrid() {
  return (
    <section className="container py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Shop by Category</h2>
        <p className="text-muted-foreground">Browse our complete collection</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={`/products?category=${cat.id}`}
              className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-sm">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cat.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
