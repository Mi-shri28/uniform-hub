import { useState } from "react";
import { type Product, getWhatsAppUrl } from "@/data/store-data";
import { MessageCircle } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");

  return (
    <div className="group bg-card rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-secondary mb-4 flex items-center justify-center">
        <span className="text-4xl">{
          product.category === "uniforms" ? "👔" :
          product.category === "winter" ? "🧥" :
          product.category === "blankets" ? "🛏️" : "👕"
        }</span>
      </div>

      <div className="space-y-1">
        <p className="text-xs font-medium text-primary uppercase tracking-wider">{product.category}</p>
        <h3 className="font-semibold text-foreground leading-tight">{product.name}</h3>
        {product.description && (
          <p className="text-xs text-muted-foreground">{product.description}</p>
        )}
        <p className="text-xl font-bold text-foreground tabular-nums">₹{product.price}</p>
      </div>

      {product.sizes && product.sizes.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-medium text-muted-foreground mb-1.5">Size</p>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors tabular-nums ${
                  selectedSize === s
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <a
        href={getWhatsAppUrl(product.name, selectedSize)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 w-full h-11 bg-foreground text-background rounded-xl font-medium text-sm hover:opacity-90 active:scale-[0.98] transition-all"
      >
        <MessageCircle className="w-4 h-4" />
        Order on WhatsApp
      </a>
    </div>
  );
}
