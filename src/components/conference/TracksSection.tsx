import { motion } from "framer-motion";
import { Cog, Bot, Building2, ArrowRight } from "lucide-react";
import TechBackground from "./TechBackground";

const tracks = [
  {
    icon: Cog,
    title: "Track 1",
    name: "Innovations in Smart Manufacturing",
    topics: [
      "Smart Materials and their Manufacturing",
      "Material Recycling and Characterization",
      "AI and ML in Manufacturing",
      "Additive Manufacturing",
      "Nanomaterials and Composites in Manufacturing Processes",
      "Environmental Impact Assessment in Manufacturing Processes",
      "Optimization in Manufacturing Processes",
      "Surface Engineering Science and Technology",
      "Impact of Post Processing on Manufactured Components",
      "Life Cycle Assessment of Manufacturing Processes",
    ],
  },
  {
    icon: Bot,
    title: "Track 2",
    name: "Intelligent Robotics & Automation for Sustainable Systems",
    topics: [
      "Intelligent Automation in Manufacturing System",
      "Autonomous Robots & Robotic Systems",
      "AI & Machine Learning Engineering",
      "Intelligent Control & Optimization",
      "Perception, Computer Vision & Sensor Fusion",
      "Modeling & Simulation of Sustainable Systems",
      "Automatic Digitization",
      "Quantum Technology",
      "Innovation in Electric Vehicles",
      "Advances in Drone Technology",
    ],
  },
  {
    icon: Building2,
    title: "Track 3",
    name: "Sustainability in Civil Engineering",
    topics: [
      "Sustainable Construction Materials",
      "Smart Construction Techniques",
      "Energy-Efficient System and Renewable Technologies",
      "Climate-Resilient Infrastructures",
      "Innovations in Urban Planning",
      "Automation, Robotics, AI Smart Systems in Civil Engineering",
      "Smart Transportation and Mobility Solutions",
      "Water Resources, Environmental and Waste Management Innovations",
      "Structural Health Monitoring and Maintenance",
      "Engineering Education and Policy for Sustainable Development",
    ],
  },
];

const TracksSection = () => {
  return (
    <section id="tracks" className="section-padding bg-muted/50 relative overflow-hidden">
      <TechBackground variant="alt" />

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
            <Cog size={14} className="text-accent" />
            <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase">Thematic Areas</p>
          </motion.div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Tracks of IESSD<span className="text-accent">'26</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <track.icon size={26} className="text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <p className="text-accent font-semibold text-xs tracking-widest uppercase">{track.title}</p>
              <h3 className="font-heading font-bold text-lg text-foreground mt-1 mb-5">{track.name}</h3>
              <ul className="space-y-2.5">
                {track.topics.map((t) => (
                  <li key={t} className="text-foreground text-sm flex items-start gap-2.5 group/item">
                    <ArrowRight size={14} className="text-accent mt-0.5 shrink-0 opacity-50 group-hover/item:opacity-100 transition-opacity" />
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
