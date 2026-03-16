import { motion } from "framer-motion";
import { MapPin, Plane, Train, Car, Camera, Navigation, Map } from "lucide-react";

import imgChandigarh from "@/assets/tourism/chandigarh.jpg";
import imgAmritsar from "@/assets/tourism/amritsar.jpg";
import imgShimla from "@/assets/tourism/shimla.jpg";
import imgDelhi from "@/assets/tourism/delhi.jpg";
import imgDharamsala from "@/assets/tourism/dharamsala.jpg";
import imgManali from "@/assets/tourism/manali.jpg";
import imgAgra from "@/assets/tourism/agra.jpg";
import imgJaipur from "@/assets/tourism/jaipur.jpg";

const attractions = [
  { name: "Chandigarh", desc: "The City Beautiful – ~140 km", img: imgChandigarh },
  { name: "Amritsar", desc: "Golden Temple – ~205 km", img: imgAmritsar },
  { name: "Shimla", desc: "The Queen of the Hills – ~260 km", img: imgShimla },
  { name: "New Delhi", desc: "The National Capital – ~275 km", img: imgDelhi },
  { name: "Dharamsala", desc: "Second winter capital of HP – ~350 km", img: imgDharamsala },
  { name: "Manali", desc: "A gift of the Himalayas – ~410 km", img: imgManali },
  { name: "Agra", desc: "The City of Taj Mahal – ~470 km", img: imgAgra },
  { name: "Jaipur", desc: "The Pink City – ~480 km", img: imgJaipur },
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
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-xl border border-border shadow-card hover:shadow-elevated hover:border-accent/30 transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={a.img}
                      alt={a.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h4 className="font-heading font-bold text-white text-sm drop-shadow-lg">{a.name}</h4>
                      <p className="text-white/80 text-xs mt-0.5 drop-shadow">{a.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="font-heading font-bold text-lg text-foreground mb-6 flex items-center gap-2 justify-center">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Map className="text-accent" size={18} />
            </div>
            Find Us on the Map
          </h3>
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.8!2d75.9388!3d30.0094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910a890e2e1ffff%3A0x5e5c6f7e7e7e7e7e!2sSant%20Longowal%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SLIET Longowal Location"
              className="w-full"
            />
            <div className="p-4 flex items-center justify-between bg-muted/30">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <p className="text-foreground text-sm font-medium">
                  SLIET, Longowal, Sangrur, Punjab - 148106
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/dDVRzV9m2oDAfKvr6?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm font-semibold hover:underline flex items-center gap-1"
              >
                Open in Google Maps <span>↗</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
