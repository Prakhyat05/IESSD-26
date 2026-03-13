import { motion } from "framer-motion";
import { MapPin, Plane, Train, Car, Camera } from "lucide-react";

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
    <section id="venue" className="section-padding bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-2">Location</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Venue & Travel</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Venue Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <h3 className="font-heading font-bold text-foreground">SLIET, Longowal</h3>
                  <p className="text-foreground text-sm">Sant Longowal Institute of Engineering & Technology, Longowal-148106, Sangrur, Punjab, India (Deemed-to-be-University under MoE, Govt. of India)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Plane className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm">Nearest Airport</h4>
                  <p className="text-foreground text-sm">Chandigarh International Airport (~130 km)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Train className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm">Nearest Railway Stations</h4>
                  <p className="text-foreground text-sm">Sunam (~16 km), Sangrur (~18 km), Dhuri (~32 km)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Car className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm">Transport for Delegates</h4>
                  <p className="text-foreground text-sm">A pick-and-drop facility from Chandigarh Airport, along with local transportation, will be provided to foreign delegates upon request. Local transportation will also be arranged for Indian delegates.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tourism */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <Camera className="text-accent" size={20} /> Tourism Near the Venue
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {attractions.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-xl border border-border p-4 shadow-card hover:shadow-elevated transition-shadow"
                >
                  <h4 className="font-heading font-bold text-foreground text-sm">{a.name}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{a.desc}</p>
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
