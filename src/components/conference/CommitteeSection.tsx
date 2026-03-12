import { motion } from "framer-motion";
import { Crown, Users } from "lucide-react";

const leadership = [
  { role: "Chief Patron", name: "Prof. Mani Kant Paswan", title: "Director, SLIET" },
  { role: "Chairman", name: "Prof. Shankar Singh", title: "SLIET" },
  { role: "Co-Chairman", name: "Prof. Jagtar Singh", title: "SLIET" },
];

const trackTeams = [
  {
    track: "Track I – Smart Manufacturing",
    organizing: ["Dr. Ankush Anand", "Dr. Sehijpal Singh"],
    joint: ["Dr. Amandeep Singh", "Dr. Kamaljit Singh"],
  },
  {
    track: "Track II – Intelligent Robotics & Automation",
    organizing: ["Dr. Lakhwinder Pal Singh", "Dr. Rupinder Singh"],
    joint: ["Dr. Gurmeet Singh", "Dr. Harpreet Singh"],
  },
  {
    track: "Track III – Sustainable Civil Engineering",
    organizing: ["Dr. Harvinder Singh", "Dr. Madan Lal"],
    joint: ["Dr. Jagbir Singh", "Dr. Pardeep Kumar"],
  },
];

const CommitteeSection = () => {
  return (
    <section id="committee" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-2">Leadership</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Organizing Committee</h2>
        </motion.div>

        {/* Leadership */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {leadership.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 text-center shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                <Crown className="text-emerald-glow" size={24} />
              </div>
              <p className="text-accent font-semibold text-xs tracking-widest uppercase">{p.role}</p>
              <h3 className="font-heading font-bold text-foreground mt-1">{p.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{p.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Track Teams */}
        <div className="grid md:grid-cols-3 gap-8">
          {trackTeams.map((t, i) => (
            <motion.div
              key={t.track}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-card"
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-accent" size={20} />
                <h3 className="font-heading font-bold text-sm text-foreground">{t.track}</h3>
              </div>
              <div className="mb-4">
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">Organizing Secretaries</p>
                {t.organizing.map((n) => (
                  <p key={n} className="text-muted-foreground text-sm">{n}</p>
                ))}
              </div>
              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">Joint Secretaries</p>
                {t.joint.map((n) => (
                  <p key={n} className="text-muted-foreground text-sm">{n}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
