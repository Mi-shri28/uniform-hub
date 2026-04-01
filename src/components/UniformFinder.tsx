import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { schools, getUniformItems, getWhatsAppUrl, type UniformItem } from "@/data/store-data";

export default function UniformFinder() {
  const [schoolId, setSchoolId] = useState("");
  const [grade, setGrade] = useState("");
  const [results, setResults] = useState<UniformItem[]>([]);
  const [searched, setSearched] = useState(false);

  const selectedSchool = schools.find((s) => s.id === schoolId);

  const handleSearch = () => {
    if (!schoolId || !grade) return;
    const items = getUniformItems(schoolId, grade);
    setResults(items);
    setSearched(true);
  };

  return (
    <section className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Search className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Find Your School Uniform</h2>
            <p className="text-sm text-muted-foreground">Select school and class to see requirements</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Select School</label>
            <select
              value={schoolId}
              onChange={(e) => { setSchoolId(e.target.value); setGrade(""); setSearched(false); }}
              className="w-full h-12 px-4 rounded-xl bg-secondary border-none ring-1 ring-border focus:ring-2 focus:ring-primary transition-all outline-none text-foreground"
            >
              <option value="">Choose School...</option>
              {schools.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Select Class</label>
            <select
              value={grade}
              onChange={(e) => { setGrade(e.target.value); setSearched(false); }}
              disabled={!schoolId}
              className="w-full h-12 px-4 rounded-xl bg-secondary border-none ring-1 ring-border focus:ring-2 focus:ring-primary transition-all outline-none text-foreground disabled:opacity-50"
            >
              <option value="">Choose Class...</option>
              {selectedSchool?.grades.map((g) => (
                <option key={g} value={g}>Class {g}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleSearch}
          disabled={!schoolId || !grade}
          className="w-full h-12 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          View Requirements
        </button>
      </div>

      {/* Results */}
      <AnimatePresence>
        {searched && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mt-6 space-y-3"
          >
            {results.length > 0 ? (
              <>
                <h3 className="text-sm font-semibold text-muted-foreground px-1">
                  {selectedSchool?.name} — Class {grade} Requirements
                </h3>
                {results.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-2xl shadow-card p-4 flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.sizes.map((s) => (
                          <span key={s} className="px-2.5 py-1 rounded-lg bg-secondary text-xs font-medium text-secondary-foreground tabular-nums">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                      <span className="text-lg font-bold text-foreground tabular-nums">₹{item.price}</span>
                      <a
                        href={getWhatsAppUrl(item.name, item.sizes[0])}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-whatsapp text-whatsapp-foreground text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all whitespace-nowrap"
                      >
                        Order on WhatsApp
                      </a>
                    </div>
                  </motion.div>
                ))}
              </>
            ) : (
              <div className="bg-card rounded-2xl shadow-card p-8 text-center">
                <p className="text-muted-foreground">No specific requirements found for this combination. Please visit the store or contact us on WhatsApp for details.</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
