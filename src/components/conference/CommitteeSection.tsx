import { motion } from "framer-motion";
import { Crown, Users, Award, Shield, Cpu } from "lucide-react";
import TechBackground from "./TechBackground";

// Real photos
import imgAnilSingla from "@/assets/committee/anil-singla.jpeg";
import imgSumitKumar from "@/assets/committee/sumit-kumar.jpeg";
import imgManiKantPaswan from "@/assets/committee/mani-kant-paswan.jpeg";
import imgShankarSingh from "@/assets/committee/shankar-singh.jpeg";
import imgSunilKumar from "@/assets/committee/sunil-kumar.jpeg";
import imgVivekKumar from "@/assets/committee/vivek-kumar.jpg";
import imgIndrajSingh from "@/assets/committee/indraj-singh.jpeg";
import imgLalitAhuja from "@/assets/committee/lalit-ahuja.jpeg";
import imgAmandeepShahi from "@/assets/committee/amandeep-shahi.jpeg";

// Placeholder - replace with actual image imports when available
import imgSurinderSingh from "@/assets/committee/surinder-singh.png";
import imgJagtarSingh from "@/assets/committee/jagtar-singh.jpeg";
import imgAnujBansal from "@/assets/committee/anuj-bansal.jpeg";
import imgJonnySingla from "@/assets/committee/jonny-singla.jpeg";
import imgDiveshBharti from "@/assets/committee/divesh-bharti.jpeg";
import imgRKSaxena from "@/assets/committee/rk-saxena.jpeg";
import imgRakeshKumar from "@/assets/committee/rakesh-kumar.jpeg";
import imgYogeshVerma from "@/assets/committee/yogesh-verma.jpeg";
import imgShilpaSingla from "@/assets/committee/shilpa-singla.jpeg";

const chiefPatronData = { role: "Chief Patron", name: "Prof. Mani Kant Paswan", title: "Director, SLIET", photo: imgManiKantPaswan, tier: 1 };

const patrons = [
  { role: "Patron", name: "Prof. Amandeep Singh Shahi", title: "Dean Academics, SLIET", photo: imgAmandeepShahi, tier: 2 },
  { role: "Patron", name: "Prof. Surinder Singh", title: "Dean R&C, SLIET", photo: imgSurinderSingh, tier: 2 },
];

const chairmen = [
  { role: "Chairman", name: "Prof. Shankar Singh", title: "Head, Mechanical & Civil Engineering", photo: imgShankarSingh, tier: 2 },
  { role: "Co-Chairman", name: "Prof. Jagtar Singh", title: "Department of Mechanical Engineering", photo: imgJagtarSingh, tier: 2 },
];

interface TrackData {
  trackName: string;
  trackSubtitle: string;
  icon: React.ElementType;
  organizingSecretaries: { name: string; designation: string; photo: string | null }[];
  jointSecretaries: { name: string; designation: string; photo: string | null }[];
}

const tracks: TrackData[] = [
  {
    trackName: "Track-I (Mechanical)",
    trackSubtitle: "Innovations in Smart Manufacturing",
    icon: Cpu,
    organizingSecretaries: [
      { name: "Dr. Anil Kumar Singla", designation: "Associate Professor (ME)", photo: imgAnilSingla },
      { name: "Dr. Anuj Bansal", designation: "Assistant Professor (ME)", photo: imgAnujBansal },
    ],
    jointSecretaries: [
      { name: "Er. Jonny Singla", designation: "Assistant Professor (ME)", photo: imgJonnySingla },
      { name: "Er. Divesh Bharti", designation: "Assistant Professor (ME)", photo: imgDiveshBharti },
    ],
  },
  {
    trackName: "Track-II (Mechanical)",
    trackSubtitle: "Intelligent Robotics & Automation for Sustainable Systems",
    icon: Shield,
    organizingSecretaries: [
      { name: "Prof. R. K. Saxena", designation: "Professor (ME)", photo: imgRKSaxena },
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
    icon: Award,
    organizingSecretaries: [
      { name: "Prof. Indraj Singh", designation: "ME", photo: imgIndrajSingh },
      { name: "Dr. Rakesh Kumar", designation: "AsP (ME)", photo: imgRakeshKumar },
      { name: "Dr. Sumit Kumar", designation: "AP (ME)", photo: imgSumitKumar },
    ],
    jointSecretaries: [
      { name: "Dr. Yogesh Verma", designation: "AP (ME)", photo: imgYogeshVerma },
      { name: "Dr. Shilpa Singla", designation: "AP (Civil) Contractual", photo: imgShilpaSingla },
    ],
  },
];

const getInitials = (name: string) => {
  const parts = name.replace(/^(Prof\.|Dr\.|Er\.) /, "").split(" ");
  return parts.map(p => p[0]).join("").toUpperCase();
};

type LeaderMember = { role: string; name: string; title: string; photo: string; tier: number };

// Chief Patron — hero card
const ChiefPatronCard = ({ member }: { member: LeaderMember }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center mb-12"
  >
    <div className="relative">
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-accent shadow-lg relative z-10">
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <Crown className="text-accent" size={40} />
          </div>
        )}
      </div>
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-pulse-glow scale-110" />
    </div>
    <motion.div
      className="mt-5 text-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <span className="inline-block bg-accent text-accent-foreground text-xs font-heading font-bold px-4 py-1 rounded-full mb-2 tracking-wider uppercase">
        {member.role}
      </span>
      <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground">{member.name}</h3>
      <p className="text-foreground text-sm mt-1">{member.title}</p>
    </motion.div>
  </motion.div>
);

// Patron / Chairman cards — medium
const LeaderCard = ({ member, index }: { member: LeaderMember; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-card rounded-2xl border border-border p-6 text-center shadow-card hover:shadow-elevated transition-all duration-300 group relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto mb-4 overflow-hidden border-3 border-accent/30 group-hover:border-accent transition-colors duration-300">
      {member.photo ? (
        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-secondary flex items-center justify-center">
          <Crown className="text-accent" size={28} />
        </div>
      )}
    </div>
    <span className="inline-block bg-accent/10 text-accent text-xs font-heading font-bold px-3 py-1 rounded-full tracking-wider uppercase">
      {member.role}
    </span>
    <h3 className="font-heading font-bold text-foreground mt-2 text-base md:text-lg">{member.name}</h3>
    <p className="text-foreground text-sm mt-1">{member.title}</p>
  </motion.div>
);

// Track member card
const MemberCard = ({ name, designation, photo, roleLabel }: { name: string; designation: string; photo: string | null; roleLabel?: string }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-card rounded-xl border border-border p-5 shadow-card text-center group relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-3 overflow-hidden border-2 border-border group-hover:border-accent/40 transition-colors duration-300 relative z-10">
      {photo ? (
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-secondary flex items-center justify-center">
          <span className="text-secondary-foreground font-heading font-bold text-lg">{getInitials(name)}</span>
        </div>
      )}
    </div>
    {roleLabel && (
      <span className="inline-block text-accent text-[10px] font-heading font-bold tracking-wider uppercase mb-1 relative z-10">
        {roleLabel}
      </span>
    )}
    <h4 className="font-heading font-bold text-foreground text-sm relative z-10">{name}</h4>
    <p className="text-foreground text-xs mt-1 relative z-10">{designation}</p>
  </motion.div>
);

const CommitteeSection = () => {
  return (
    <section id="committee" className="section-padding bg-background relative overflow-hidden">
      <TechBackground />

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
            <Users size={14} className="text-accent" />
            <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase">Leadership</p>
          </motion.div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Organizing <span className="text-accent">Committee</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Row 1: Chief Patron */}
        <ChiefPatronCard member={chiefPatronData} />

        {/* Row 2: Patrons */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {patrons.map((p, i) => (
            <LeaderCard key={p.name + p.role} member={p} index={i} />
          ))}
        </div>

        {/* Row 3: Chairman & Co-Chairman */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-20">
          {chairmen.map((p, i) => (
            <LeaderCard key={p.name + p.role} member={p} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-border" />
          <span className="text-accent font-heading font-bold text-sm tracking-widest uppercase">Track Committees</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Tracks */}
        {tracks.map((track, ti) => (
          <motion.div
            key={track.trackName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ti * 0.1 }}
            className="mb-16 last:mb-0"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-5 py-2 mb-3">
                <track.icon size={18} />
                <h3 className="font-heading font-bold text-base">{track.trackName}</h3>
              </div>
              <p className="text-foreground text-sm">{track.trackSubtitle}</p>
            </div>

            {/* Organizing Secretaries */}
            <div className="mb-8">
              <p className="text-accent font-heading font-semibold text-xs tracking-widest uppercase text-center mb-5 flex items-center justify-center gap-2">
                <span className="w-8 h-px bg-accent/40" />
                Organizing Secretaries
                <span className="w-8 h-px bg-accent/40" />
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
                {track.organizingSecretaries.map((m) => (
                  <MemberCard key={m.name} name={m.name} designation={m.designation} photo={m.photo} roleLabel="Organizing Secretary" />
                ))}
              </div>
            </div>

            {/* Joint Secretaries */}
            <div>
              <p className="text-accent font-heading font-semibold text-xs tracking-widest uppercase text-center mb-5 flex items-center justify-center gap-2">
                <span className="w-8 h-px bg-accent/40" />
                Joint Secretaries
                <span className="w-8 h-px bg-accent/40" />
              </p>
              <div className={`flex flex-wrap justify-center gap-5 max-w-3xl mx-auto`}>
                {track.jointSecretaries.map((m) => (
                  <div key={m.name} className="w-[calc(50%-10px)] sm:w-[calc(33.333%-14px)]">
                    <MemberCard name={m.name} designation={m.designation} photo={m.photo} roleLabel="Joint Secretary" />
                  </div>
                ))}
              </div>
            </div>

            {/* Track divider */}
            {ti < tracks.length - 1 && (
              <div className="mt-12 flex justify-center">
                <div className="w-16 h-px bg-border" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CommitteeSection;
