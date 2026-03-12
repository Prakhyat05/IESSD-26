import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-2">About the Conference</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">IESSD'26</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">About the Conference</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The International Conference on Innovative Engineering Solutions for Sustainable Development (IESSD'26) brings together researchers, academicians, and industry professionals to explore cutting-edge engineering solutions that drive sustainable development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              IESSD'26 focuses on three pivotal domains — Smart Manufacturing, Intelligent Robotics & Automation, and Sustainable Civil Engineering — fostering interdisciplinary collaboration and knowledge exchange on a global stage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">About SLIET, Longowal</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sant Longowal Institute of Engineering and Technology (SLIET) is a centrally funded institute located in Longowal, Punjab. Spread across a sprawling 447-acre campus, SLIET is a premier institution known for its excellence in engineering education and research.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The institute offers a vibrant academic ecosystem with state-of-the-art laboratories, a central library, and modern amenities that support world-class research and innovation.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 mt-16"
        >
          {[
            { icon: BookOpen, label: "Research Papers", value: "3 Tracks" },
            { icon: GraduationCap, label: "Campus Area", value: "447 Acres" },
            { icon: Globe, label: "Conference Mode", value: "Hybrid" },
          ].map((item) => (
            <div key={item.label} className="bg-card rounded-xl p-6 text-center shadow-card border border-border">
              <item.icon className="mx-auto mb-3 text-accent" size={28} />
              <div className="font-heading font-bold text-xl text-foreground">{item.value}</div>
              <div className="text-muted-foreground text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
