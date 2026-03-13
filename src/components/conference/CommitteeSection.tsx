import { motion } from "framer-motion";
import { Crown, Users } from "lucide-react";

const leadership = [
  { role: "Chief Patron", name: "Prof. Mani Kant Paswan", title: "Director, SLIET", initials: "MKP" },
  { role: "Chairman", name: "Prof. Shankar Singh", title: "Head, Mechanical & Civil Engineering", initials: "SS" },
  { role: "Co-Chairman", name: "Prof. Jagtar Singh", title: "Department of Mechanical Engineering", initials: "JS" },
];

const organizingTeam = [
  { name: "Dr. Anil Kumar Singla", designation: "Associate Professor (ME)", initials: "AKS" },
  { name: "Dr. Anuj Bansal", designation: "Assistant Professor (ME)", initials: "AB" },
  { name: "Er. Jonny Singla", designation: "Assistant Professor (ME)", initials: "JS" },
  { name: "Er. Divesh Bharti", designation: "Assistant Professor (ME)", initials: "DB" },
  { name: "Prof. R. K. Saxena", designation: "Professor (ME)", initials: "RKS" },
  { name: "Dr. Sunil Kumar", designation: "Associate Professor (ME)", initials: "SK" },
  { name: "Dr. Vivek Kumar", designation: "Associate Professor (ME)", initials: "VK" },
  { name: "Dr. Rakesh Kumar", designation: "Associate Professor (ME)", initials: "RK" },
  { name: "Dr. Yogesh Verma", designation: "Assistant Professor (ME)", initials: "YV" },
  { name: "Dr. Shilpa Singla", designation: "Assistant Professor (Civil)", initials: "SS" },
];

const MemberCard = ({ name, designation, initials }: { name: string; designation: string; initials: string }) => (
  <div className="bg-card rounded-xl border border-border p-5 shadow-card hover:shadow-elevated transition-shadow text-center">
    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
      <span className="text-secondary-foreground font-heading font-bold text-sm">{initials}</span>
    </div>
    <h4 className="font-heading font-bold text-foreground text-sm">{name}</h4>
    <p className="text-muted-foreground text-xs mt-1">{designation}</p>
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
                <Crown className="text-accent" size={24} />
              </div>
              <p className="text-accent font-semibold text-xs tracking-widest uppercase">{p.role}</p>
              <h3 className="font-heading font-bold text-foreground mt-1">{p.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{p.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Organizing Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="font-heading font-bold text-xl text-foreground text-center mb-8 flex items-center justify-center gap-2">
            <Users className="text-accent" size={22} /> Organizing Team
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {organizingTeam.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <MemberCard name={m.name} designation={m.designation} initials={m.initials} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommitteeSection;
