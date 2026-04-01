import HeroSection from "@/components/HeroSection";
import UniformFinder from "@/components/UniformFinder";
import CategoryGrid from "@/components/CategoryGrid";

export default function Index() {
  return (
    <div>
      <HeroSection />

      {/* Uniform Finder */}
      <section className="container py-16">
        <UniformFinder />
      </section>

      <CategoryGrid />

      {/* Trust Section */}
      <section className="container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "🏪", title: "Trusted Since Years", desc: "Serving Rajula families with quality clothing" },
            { icon: "📱", title: "WhatsApp Orders", desc: "Order easily via WhatsApp from home" },
            { icon: "✅", title: "All Schools Covered", desc: "Uniforms for every school in Rajula" },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-2xl shadow-card p-6 text-center">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
