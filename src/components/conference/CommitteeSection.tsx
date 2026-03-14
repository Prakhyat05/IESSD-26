import { motion } from "framer-motion";
import { Crown, Users, Award } from "lucide-react";

// Real photos
import imgAnilSingla from "@/assets/committee/anil-singla.jpeg";
import imgSumitKumar from "@/assets/committee/sumit-kumar.jpeg";
import imgManiKantPaswan from "@/assets/committee/mani-kant-paswan.jpeg";
import imgShankarSingh from "@/assets/committee/shankar-singh.jpeg";
import imgSunilKumar from "@/assets/committee/sunil-kumar.jpeg";
import imgVivekKumar from "@/assets/committee/vivek-kumar.jpeg";
import imgIndrajSingh from "@/assets/committee/indraj-singh.jpeg";
import imgLalitAhuja from "@/assets/committee/lalit-ahuja.jpeg";
import imgAmandeepShahi from "@/assets/committee/amandeep-shahi.jpeg";

// Placeholder - replace with actual image imports when available
// Example: import imgSurinderSingh from "@/assets/committee/surinder-singh.jpeg";
// Then replace `null` below with the variable name.

const leadership = [
  { role: "Chief Patron", name: "Prof. Mani Kant Paswan", title: "Director, SLIET", photo: imgManiKantPaswan },
  { role: "Patron", name: "Prof. Surinder Singh", title: "Dean R&C, SLIET", photo: null as string | null },
  { role: "Patron", name: "Prof. Amandeep Singh Shahi", title: "Dean Academics, SLIET", photo: imgAmandeepShahi },
  { role: "Chairman", name: "Prof. Shankar Singh", title: "Head, Mechanical & Civil Engineering", photo: imgShankarSingh },
  { role: "Co-Chairman", name: "Prof. Jagtar Singh", title: "Department of Mechanical Engineering", photo: null as string | null },
];

interface TrackData {
  trackName: string;
  trackSubtitle: string;
  organizingSecretaries: { name: string; designation: string; photo: string | null }[];
  jointSecretaries: { name: string; designation: string; photo: string | null }[];
}

const tracks: TrackData[] = [
  {
    trackName: "Track-I (Mechanical)",
    trackSubtitle: "Innovations in Smart Manufacturing",
    organizingSecretaries: [
      { name: "Dr. Anil Kumar Singla", designation: "Associate Professor (ME)", photo: imgAnilSingla },
      { name: "Dr. Anuj Bansal", designation: "Assistant Professor (ME)", photo: null },
    ],
    jointSecretaries: [
      { name: "Er. Jonny Singla", designation: "Assistant Professor (ME)", photo: null },
      { name: "Er. Divesh Bharti", designation: "Assistant Professor (ME)", photo: null },
    ],
  },
  {
    trackName: "Track-II (Mechanical)",
    trackSubtitle: "Intelligent Robotics & Automation for Sustainable Systems",
    organizingSecretaries: [
      { name: "Prof. R. K. Saxena", designation: "Professor (ME)", photo: null },
      { name: "Dr. Sunil Kumar", designation: "Associate Professor (ME)", photo: imgSunilKumar },
    ],
    jointSecretaries: [
      { name: "Dr. Vivek Kumar", designation: "Associate Professor (ME)", photo: imgVivekKumar },
      { name: "Er. Lalit Ahuja", designation: "Assistant Professor (ME)", photo: imgLalitAhuja },
    ],
  },
  {
    trackName: "Track-III (Civil)",
    trackSubtitle: "Innovations and Sustainability in Civil Engineering",
    organizingSecretaries: [
      { name: "Prof. Indraj Singh", designation: "Professor (ME)", photo: imgIndrajSingh },
      { name: "Dr. Sumit Kumar", designation: "Assistant Professor (ME)", photo: imgSumitKumar },
    ],
    jointSecretaries: [
      { name: "Dr. Rakesh Kumar", designation: "Associate Professor (ME)", photo: null },
      { name: "Dr. Yogesh Verma", designation: "Assistant Professor (ME)", photo: null },
      { name: "Dr. Shilpa Singla", designation: "Assistant Professor (Civil)", photo: null },
    ],
  },
];

const MemberCard = ({ name, designation, photo, initials }: { name: string; designation: string; photo: string | null; initials: string }) => (
  <div className="bg-card rounded-xl border border-border p-5 shadow-card hover:shadow-elevated transition-shadow text-center">
    <div className="w-20 h-20 rounded-full mx-auto mb-3 overflow-hidden bg-secondary flex items-center justify-center">
      {photo ? (
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-secondary-foreground font-heading font-bold text-lg">{initials}</span>
      )}
    </div>
    <h4 className="font-heading font-bold text-foreground text-sm">{name}</h4>
    <p className="text-muted-foreground text-xs mt-1">{designation}</p>
  </div>
);

const getInitials = (name: string) => {
  const parts = name.replace(/^(Prof\.|Dr\.|Er\.) /, "").split(" ");
  return parts.map(p => p[0]).join("").toUpperCase();
};

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {leadership.map((p, i) => (
            <motion.div
              key={p.name + p.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 text-center shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-secondary flex items-center justify-center">
                {p.photo ? (
                  <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
                ) : (
                  <Crown className="text-accent" size={28} />
                )}
              </div>
              <p className="text-accent font-semibold text-xs tracking-widest uppercase">{p.role}</p>
              <h3 className="font-heading font-bold text-foreground mt-1">{p.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{p.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Tracks */}
        {tracks.map((track, ti) => (
          <motion.div
            key={track.trackName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ti * 0.1 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="font-heading font-bold text-xl text-foreground flex items-center justify-center gap-2">
                <Award className="text-accent" size={22} /> {track.trackName}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">{track.trackSubtitle}</p>
            </div>

            {/* Organizing Secretaries */}
            <p className="text-accent font-heading font-semibold text-xs tracking-widest uppercase text-center mb-4">Organizing Secretaries</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 max-w-3xl mx-auto">
              {track.organizingSecretaries.map((m) => (
                <MemberCard key={m.name} name={m.name} designation={m.designation} photo={m.photo} initials={getInitials(m.name)} />
              ))}
            </div>

            {/* Joint Secretaries */}
            <p className="text-accent font-heading font-semibold text-xs tracking-widest uppercase text-center mb-4">Joint Secretaries</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {track.jointSecretaries.map((m) => (
                <MemberCard key={m.name} name={m.name} designation={m.designation} photo={m.photo} initials={getInitials(m.name)} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CommitteeSection;
