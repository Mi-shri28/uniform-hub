import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products, productCategories } from "@/data/store-data";
import ProductCard from "@/components/ProductCard";
import UniformFinder from "@/components/UniformFinder";

export default function Products() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const showFinder = searchParams.get("finder") === "true";

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Our Products</h1>
      <p className="text-muted-foreground mb-8">Browse our complete collection or find your school uniform below</p>

      {/* Uniform Finder toggle */}
      {showFinder && (
        <div className="mb-10">
          <UniformFinder />
        </div>
      )}

      {!showFinder && (
        <button
          onClick={() => {
            const params = new URLSearchParams(window.location.search);
            params.set("finder", "true");
            window.history.replaceState({}, "", `?${params.toString()}`);
            window.location.reload();
          }}
          className="mb-8 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all"
        >
          🔍 Open Uniform Finder
        </button>
      )}

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-muted"
          }`}
        >
          All Products
        </button>
        {productCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
