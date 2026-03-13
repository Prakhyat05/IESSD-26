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
          <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-2">About</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">IESSD'26</h2>
        </motion.div>

        {/* About IESSD'26 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card mb-10"
        >
          <h3 className="font-heading font-bold text-xl text-foreground mb-4">About IESSD'26</h3>
          <p className="text-foreground leading-relaxed text-sm">
            IESSD'26, a Multi-Track International Conference to be organized by Department of Mechanical Engineering and Department of Civil Engineering at Sant Longowal Institute of Engineering and Technology (SLIET), Longowal during December 4–5, 2026. The aim of the conference is to provide an international podium to do extensive deliberations on latest development in the areas of Mechanical and Civil Engineering which will be useful to academia, Industry and society at large.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* About SLIET */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card"
          >
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">About SLIET</h3>
            <p className="text-foreground leading-relaxed mb-4 text-sm">
              Sant Longowal Institute of Engineering and Technology (SLIET) is a centrally funded technical institute (Deemed-to-be-University) established by the Ministry of Education (formerly MHRD), Government of India, with the aim of achieving technological excellence through innovation.
            </p>
            <p className="text-foreground leading-relaxed mb-4 text-sm">
              The institute caters to the technical manpower requirements at various levels by adopting a modular system of imparting technical education, with emphasis on practical training in industry. It offers Integrated Certificate Diploma (ICD), B.E., M.Tech., M.Sc., MBA, and Ph.D. programmes in various disciplines of Science, Management, Engineering, and Technology.
            </p>
            <p className="text-foreground leading-relaxed text-sm">
              SLIET has a sprawling campus spread over 447 acres of land, situated on the outskirts of Longowal, approximately 8 km from the Sangrur–Barnala Highway. The nearest railway stations are Sangrur (18 km), Sunam (16 km), and Dhuri (32 km), while the nearest airport is Chandigarh (approximately 130 km).
            </p>
          </motion.div>

          {/* About Departments */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card"
            >
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">Department of Mechanical Engineering</h3>
              <p className="text-foreground leading-relaxed text-sm">
                The department of Mechanical Engineering is one of the largest departments of the Institute. The department offers Ph.D programme, two M.Tech. courses, one Integrated Masters in Mechanical Engineering, B.E. courses, and five Integrated Certificate Diploma courses (ICD), in various areas of Mechanical Engineering. It runs NBA accredited UG as well as PG programmes. The department has well equipped laboratories with state-of-the-art equipment, instrumentation and software.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card"
            >
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">Department of Civil Engineering</h3>
              <p className="text-foreground leading-relaxed text-sm">
                The Department of Civil Engineering is committed to excellence in teaching and research across diverse fields of Civil Engineering. The department offers Integrated Certificate Diploma (ICD) and Undergraduate programmes, with a strong focus on innovation, sustainability, and industry-oriented learning. With well-equipped laboratories and experienced faculty members, the department strives to address real-world challenges in areas such as Structural Engineering, Geotechnical Engineering, Transportation Engineering, Environmental Engineering, Water Resources Engineering, and Construction Technology.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-6"
        >
          {[
            { icon: BookOpen, label: "Research Tracks", value: "3 Tracks" },
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
