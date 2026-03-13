import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

const trackContacts = [
  { track: "Track I", email: "iessd26.track1@sliet.ac.in" },
  { track: "Track II", email: "iessd26.track2@sliet.ac.in" },
  { track: "Track III", email: "iessd26.track3@sliet.ac.in" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-2">Get in Touch</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Contact Us</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-card text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
            <a href="mailto:iessd26@sliet.ac.in" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Mail size={20} className="text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Central Email</p>
                <p className="font-semibold text-sm">iessd26@sliet.ac.in</p>
              </div>
            </a>
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                <Phone size={20} className="text-emerald-glow" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-semibold text-sm">+91-XXXXX-XXXXX</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="font-heading font-bold text-foreground mb-4 flex items-center justify-center gap-2">
              <Send className="text-accent" size={18} /> Track-specific Contacts
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {trackContacts.map((c) => (
                <div key={c.track} className="bg-muted/50 rounded-xl p-4">
                  <p className="font-heading font-semibold text-foreground text-sm">{c.track}</p>
                  <a href={`mailto:${c.email}`} className="text-accent text-xs hover:underline break-all">{c.email}</a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
