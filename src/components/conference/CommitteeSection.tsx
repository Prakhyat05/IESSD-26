import { motion } from "framer-motion";
import { Crown, Users } from "lucide-react";

const leadership = [
  { role: "Chief Patron", name: "Prof. Mani Kant Paswan", title: "Director, SLIET", initials: "MKP" },
  { role: "Chairman", name: "Prof. Shankar Singh", title: "SLIET", initials: "SS" },
  { role: "Co-Chairman", name: "Prof. Jagtar Singh", title: "SLIET", initials: "JS" },
];

const trackTeams = [
  {
    track: "Track I – Smart Manufacturing",
    organizing: [
      { name: "Dr. Ankush Anand", initials: "AA" },
      { name: "Dr. Sehijpal Singh", initials: "SS" },
    ],
    joint: [
      { name: "Dr. Amandeep Singh", initials: "AS" },
      { name: "Dr. Kamaljit Singh", initials: "KS" },
    ],
  },
  {
    track: "Track II – Intelligent Robotics & Automation",
    organizing: [
      { name: "Dr. Lakhwinder Pal Singh", initials: "LS" },
      { name: "Dr. Rupinder Singh", initials: "RS" },
    ],
    joint: [
      { name: "Dr. Gurmeet Singh", initials: "GS" },
      { name: "Dr. Harpreet Singh", initials: "HS" },
    ],
  },
  {
    track: "Track III – Sustainable Civil Engineering",
    organizing: [
      { name: "Dr. Harvinder Singh", initials: "HS" },
      { name: "Dr. Madan Lal", initials: "ML" },
    ],
    joint: [
      { name: "Dr. Jagbir Singh", initials: "JS" },
      { name: "Dr. Pardeep Kumar", initials: "PK" },
    ],
  },
];

const MemberAvatar = ({ initials, name }: { initials: string; name: string }) => (
  <div className="flex items-center gap-3 py-2">
    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
      <span className="text-secondary-foreground font-heading font-bold text-sm">{initials}</span>
    </div>
    <span className="text-muted-foreground text-sm">{name}</span>
  </div>
);

const CommitteeSection = () => {
  return (
    <section className="section-padding bg-background">
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
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-heading font-bold text-lg">{p.initials}</span>
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
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">Organizing Secretaries</p>
                {t.organizing.map((n) => (
                  <MemberAvatar key={n.name} initials={n.initials} name={n.name} />
                ))}
              </div>
              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">Joint Secretaries</p>
                {t.joint.map((n) => (
                  <MemberAvatar key={n.name} initials={n.initials} name={n.name} />
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
