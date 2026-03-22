import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Globe, Cpu, Zap } from "lucide-react";
import deptBuilding from "@/assets/dept-building.jpeg";
import slietAdmin from "@/assets/sliet-admin.webp";
import TechBackground from "./TechBackground";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <TechBackground />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Cpu size={14} className="text-accent" />
            <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase">About</p>
          </motion.div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            IESSD<span className="text-accent">'26</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* About IESSD'26 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card mb-10 relative group hover:shadow-elevated transition-all duration-300"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l-2xl" />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Zap size={20} className="text-accent" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground">About IESSD'26</h3>
          </div>
          <p className="text-foreground leading-relaxed text-sm pl-[52px] mb-4">
            IESSD'26, a Multi-Track International Conference to be organized by Department of Mechanical Engineering and Department of Civil Engineering at Sant Longowal Institute of Engineering and Technology (SLIET), Longowal during December 4th & 5th, 2026. The aim of the conference is to provide an international podium to do extensive deliberations on latest development in the areas of Mechanical and Civil Engineering which will be useful to academia, Industry and society at large.
          </p>
          <div className="pl-[52px]">
            <a
              href="/IESSD26-Brochure.pdf"
              download
              className="inline-flex items-center gap-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              📄 Download Conference Brochure
            </a>
          </div>
        </motion.div>

        {/* About SLIET with image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border shadow-card mb-10 overflow-hidden hover:shadow-elevated transition-all duration-300"
        >
          <div className="relative h-56 md:h-72 overflow-hidden">
            <img src={slietAdmin} alt="SLIET Administrative Block" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <span className="bg-accent text-accent-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">
                EST. 1989
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8">
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
             <div className="mt-6 flex flex-wrap gap-4">
               <a
                 href="/IESSD26-Brochure.pdf"
                 download
                 className="inline-flex items-center gap-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
               >
                 📄 Download Conference Brochure
               </a>
               <a
                 href="/Post-Doctoral-Fellowship-2025-26.pdf"
                 download
                 className="inline-flex items-center gap-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
               >
                 📄 Post-Doctoral Fellowship (Visvesvaraya Scheme)
               </a>
             </div>
           </div>
         </motion.div>

        {/* About Departments with image */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border shadow-card overflow-hidden hover:shadow-elevated transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={deptBuilding} alt="Department of Mechanical and Civil Engineering" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">Department of Mechanical Engineering</h3>
              <p className="text-foreground leading-relaxed text-sm">
                The department of Mechanical Engineering is one of the largest departments of the Institute. The department offers Ph.D programme, two M.Tech. courses, one Integrated Masters in Mechanical Engineering, B.E. courses, and five Integrated Certificate Diploma courses (ICD), in various areas of Mechanical Engineering. It runs NBA accredited UG as well as PG programmes. The department has well equipped laboratories with state-of-the-art equipment, instrumentation and software.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300"
          >
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Department of Civil Engineering</h3>
            <p className="text-foreground leading-relaxed text-sm">
              The Department of Civil Engineering is committed to excellence in teaching and research across diverse fields of Civil Engineering. The department offers Integrated Certificate Diploma (ICD) and Undergraduate programmes, with a strong focus on innovation, sustainability, and industry-oriented learning. With well-equipped laboratories and experienced faculty members, the department strives to address real-world challenges in areas such as Structural Engineering, Geotechnical Engineering, Transportation Engineering, Environmental Engineering, Water Resources Engineering, and Construction Technology.
            </p>
          </motion.div>
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
          ].map((item, i) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card rounded-xl p-6 text-center shadow-card border border-border relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <item.icon className="mx-auto mb-3 text-accent relative z-10" size={28} />
              <div className="font-heading font-bold text-xl text-foreground relative z-10">{item.value}</div>
              <div className="text-foreground text-sm mt-1 relative z-10">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
