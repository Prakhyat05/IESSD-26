import { motion } from "framer-motion";
import { Cog, Bot, Building2 } from "lucide-react";

const tracks = [
  {
    icon: Cog,
    title: "Track I",
    name: "Smart Manufacturing",
    topics: [
      "Advanced Manufacturing Processes",
      "Additive Manufacturing / 3D Printing",
      "Sustainable & Green Manufacturing",
      "Industry 4.0 & Smart Factories",
      "Digital Twin & Simulation",
      "Advanced Materials & Composites",
      "Precision Engineering & Metrology",
      "Supply Chain & Lean Manufacturing",
      "CAD/CAM/CAE & CNC Technologies",
      "Energy-efficient Manufacturing",
    ],
  },
  {
    icon: Bot,
    title: "Track II",
    name: "Intelligent Robotics & Automation",
    topics: [
      "Industrial Robotics & Cobots",
      "Autonomous Systems & Drones",
      "AI & Machine Learning in Automation",
      "IoT-enabled Smart Systems",
      "Computer Vision & Image Processing",
      "Sensor Technologies & Embedded Systems",
      "Cyber-Physical Systems",
      "Human-Robot Interaction",
      "Soft Robotics & Bio-inspired Systems",
      "Automation in Agriculture & Healthcare",
    ],
  },
  {
    icon: Building2,
    title: "Track III",
    name: "Sustainable Civil Engineering",
    topics: [
      "Green Building Materials & Construction",
      "Sustainable Urban Planning",
      "Water Resources & Environmental Eng.",
      "Geotechnical Engineering for Sustainability",
      "Structural Health Monitoring",
      "Renewable Energy in Civil Infrastructure",
      "Transportation Engineering & Smart Mobility",
      "Waste Management & Circular Economy",
      "Climate Resilient Infrastructure",
      "BIM & Digital Construction",
    ],
  },
];

const TracksSection = () => {
  return (
    <section id="tracks" className="section-padding bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-2">Thematic Areas</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Conference Tracks</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border hover:shadow-elevated transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <track.icon size={24} className="text-primary-foreground" />
              </div>
              <p className="text-accent font-semibold text-xs tracking-widest uppercase">{track.title}</p>
              <h3 className="font-heading font-bold text-lg text-foreground mt-1 mb-4">{track.name}</h3>
              <ul className="space-y-2">
                {track.topics.map((t) => (
                  <li key={t} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
