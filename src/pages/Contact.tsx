import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, getWhatsAppGeneralUrl } from "@/data/store-data";

export default function Contact() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Contact Us</h1>
      <p className="text-muted-foreground mb-8">Visit our store or reach us via WhatsApp</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Info Card */}
        <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Store Address</h3>
              <p className="text-sm text-muted-foreground">Near Bus Stand, Main Market, Rajula, Gujarat 365560</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-sm text-primary hover:underline">+91 98765 43210</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Store Hours</h3>
              <p className="text-sm text-muted-foreground">Monday – Saturday: 9:00 AM – 9:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday: 10:00 AM – 2:00 PM</p>
            </div>
          </div>

          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-12 bg-whatsapp text-whatsapp-foreground rounded-xl font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Map */}
        <div className="bg-card rounded-2xl shadow-card overflow-hidden min-h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29672.68!2d71.43!3d21.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958f5a7c1a1b3d7%3A0x5c3d3c6e8f5a2e0!2sRajula%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "300px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bhavesh Cloth Store Location"
          />
        </div>
      </div>
    </div>
  );
}
