import { motion } from "framer-motion";
import { Cog, Bot, Building2 } from "lucide-react";

const tracks = [
  {
    icon: Cog,
    title: "Track 1",
    name: "Innovations in Smart Manufacturing",
    topics: [
      "Smart Materials and their Manufacturing",
      "Material Recycling",
      "Characterization",
      "AI and ML in Manufacturing",
      "Additive Manufacturing",
      "Nanomaterials and Composites in Manufacturing",
      "Manufacturing Processes",
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
      "Climate-Resilient Infrastructures",
      "Automation, Robotics, AI Smart Systems in Civil Engineering",
      "Water Resources, Environmental and Waste Management Innovations",
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
      "Innovations in Urban Planning",
      "Smart Transportation and Mobility Solutions",
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Tracks of IESSD'26</h2>
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
                <track.icon size={24} className="text-accent-foreground" />
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
