import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppGeneralUrl } from "@/data/store-data";

export default function WhatsAppFloat() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={getWhatsAppGeneralUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-5 py-3.5 rounded-full shadow-xl font-semibold text-sm"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Chat with Bhavesh Bhai</span>
    </motion.a>
  );
}
