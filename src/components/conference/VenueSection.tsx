import { motion } from "framer-motion";
import { MapPin, Plane, Train, Car, Camera, Navigation } from "lucide-react";

const attractions = [
  { name: "Chandigarh", desc: "The City Beautiful – ~140 km" },
  { name: "Amritsar", desc: "Golden Temple – ~205 km" },
  { name: "Shimla", desc: "The Queen of the Hills – ~260 km" },
  { name: "New Delhi", desc: "The National Capital – ~275 km" },
  { name: "Dharamsala", desc: "Second winter capital of Himachal Pradesh – ~350 km" },
  { name: "Manali", desc: "A gift of the Himalayas – ~410 km" },
  { name: "Agra", desc: "The City of Taj Mahal – ~470 km" },
  { name: "Jaipur", desc: "The Pink City – ~480 km" },
];

const VenueSection = () => {
  return (
    <section id="venue" className="section-padding bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Navigation size={14} className="text-accent" />
            <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase">Location</p>
          </motion.div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Venue & <span className="text-accent">Travel</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Venue Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card space-y-6 hover:shadow-elevated transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              {[
                { icon: MapPin, title: "SLIET, Longowal", desc: "Sant Longowal Institute of Engineering & Technology, Longowal-148106, Sangrur, Punjab, India (Deemed-to-be-University under MoE, Govt. of India)" },
                { icon: Plane, title: "Nearest Airport", desc: "Chandigarh International Airport (~130 km)" },
                { icon: Train, title: "Nearest Railway Stations", desc: "Sunam (~16 km), Sangrur (~18 km), Dhuri (~32 km)" },
                { icon: Car, title: "Transport for Delegates", desc: "A pick-and-drop facility from Chandigarh Airport, along with local transportation, will be provided to foreign delegates upon request. Local transportation will also be arranged for Indian delegates." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-foreground text-sm mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tourism */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Camera className="text-accent" size={18} />
              </div>
              Tourism Near the Venue
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {attractions.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="bg-card rounded-xl border border-border p-4 shadow-card hover:shadow-elevated hover:border-accent/30 transition-all duration-300 group"
                >
                  <h4 className="font-heading font-bold text-foreground text-sm group-hover:text-accent transition-colors">{a.name}</h4>
                  <p className="text-foreground text-xs mt-1">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
