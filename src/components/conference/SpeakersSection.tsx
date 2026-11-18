import { motion } from "framer-motion";
import { Mic, Globe, Flag, Users } from "lucide-react";
import TechBackground from "./TechBackground";

import javaidButtAsset from "@/assets/speakers/javaid-butt.jpg";
import christianPagliaAsset from "@/assets/speakers/christian-paglia.jpeg.jpeg";
import navin from "@/assets/speakers/navin.jpg";
import navneet from "@/assets/speakers/navneet.jpg";
import ramana from "@/assets/speakers/ramana.jpg";
import pushparaj from "@/assets/speakers/pushparaj.jpg";
import deepak from "@/assets/speakers/deepak.jpg";
import sena from "@/assets/speakers/sena.jpg";
import premPal from "@/assets/speakers/prem-pal.jpg";
import surendra from "@/assets/speakers/surendra.jpg";
import amitKumarHaldarAsset from "@/assets/speakers/amit-kumar-haldar.jpeg";
import christianGriffithsAsset from "@/assets/speakers/christian-griffiths.jpeg";
import premPalUpdatedAsset from "@/assets/speakers/prem-pal-bansal-updated.jpg.asset.json";
import surenderUpdatedAsset from "@/assets/speakers/surender-singh-updated.jpg.asset.json";

type Speaker = {
  name: string;
  affiliation: string;
  email?: string;
  talk: string;
  image: string;
  scope: "International" | "National";
};

type Member = { name: string; affiliation: string; email?: string };

type Track = {
  id: string;
  title: string;
  speakers: Speaker[];
  international: Member[];
  national: Member[];
};

const tracks: Track[] = [
  {
    id: "track-1",
    title: "Track 1 — Innovations in Smart Manufacturing",
    speakers: [
      {
        name: "Prof. Javaid Butt",
        affiliation:
          "Professor of Additive and Sustainable Manufacturing, College of Creative Arts, Technology, and Engineering, Bucks New University, Buckinghamshire, High Wycombe, UK",
        email: "Javaid.Butt@bnu.ac.uk",
        talk: "Digital Twin for Additive Manufacturing: Predicting Part Quality with Multi-Physics Simulation and Machine Learning",
        image: javaidButtAsset,
        scope: "International",
      },
      {
        name: "Dr. Amit Kumar Haldar",
        affiliation: "Department of Mechanical and Automobile Engineering, Technological University of the Shannon, Ireland",
        email: "amit.haldar@tus.ie",
        talk: "Materials Innovation, Advanced Manufacturing and the Future of Sustainable Hydrogen Storage Technologies",
        image: amitKumarHaldarAsset,
        scope: "International",
      },
      {
        name: "Dr. Navin Kumar",
        affiliation: "Professor, Department of Mechanical Engineering, IIT Ropar, India",
        email: "nkumar@iitrpr.ac.in",
        talk: "Assessment Tools and Devices for Biomedical Applications",
        image: navin,
        scope: "National",
      },
      {
        name: "Dr. Navneet Khanna",
        affiliation:
          "Associate Professor, Mechanical & Aero-space Engineering, IITRAM, Ahmedabad, India",
        email: "navneetkhanna@iitram.ac.in",
        talk: "Sustainability, Lifecycle Analysis and Deep Learning AI in Manufacturing",
        image: navneet,
        scope: "National",
      },
    ],
    international: [
      { name: "Prof. Javaid Butt", affiliation: "College of Creative Arts, Technology & Engineering, Bucks New University, UK", email: "Javaid.Butt@bnu.ac.uk" },
      { name: "Dr. Álisson Rocha Machado", affiliation: "Pontifícia Universidade Católica do Paraná, Brazil", email: "alisson.rocha@pucpr.br" },
      { name: "Dr. Alper Uysal", affiliation: "Yıldız Technical University, Turkey", email: "auysal@yildiz.edu.tr" },
      { name: "Dr. Suresh Palanisamy", affiliation: "Swinburne University of Technology, Australia", email: "spalanisamy@swin.edu.au" },
      { name: "Dr. Manoj Gupta", affiliation: "National University of Singapore, Singapore", email: "mpegm@nus.edu.sg" },
      { name: "Dr. Sagar Nikam", affiliation: "School of Computing, Eng & Intel. Sys, United Kingdom", email: "s.nikam@ulster.ac.uk" },
      { name: "Dr. Kapil Gupta", affiliation: "University of Johannesburg, South Africa", email: "kgupta@uj.ac.za" },
      { name: "Dr. Tuhin Mukherjee", affiliation: "Iowa State University, USA", email: "tuhinm@iastate.edu" },
    ],
    national: [
      { name: "Dr. Uday Shanker Dixit", affiliation: "IIT Guwahati", email: "uday@iitg.ac.in" },
      { name: "Dr. Suryakumar S.", affiliation: "IIT Hyderabad", email: "ssurya@mae.iith.ac.in" },
      { name: "Dr. Somashekara", affiliation: "IIT Dharwad", email: "somashekara@iitdh.ac.in" },
      { name: "Dr. Mamilla Ravi Sankar", affiliation: "IIT Tirupati", email: "evmrs@iittp.ac.in" },
      { name: "Prof. Harpreet Singh", affiliation: "IIT Ropar, Punjab", email: "harpreetsingh@iitrpr.ac.in" },
      { name: "Dr. Navin Kumar", affiliation: "IIT Ropar, Punjab", email: "nkumar@iitrpr.ac.in" },
      { name: "Prof. Rupinder Singh", affiliation: "NITTTR, Chandigarh", email: "rupindersingh@nitttrchd.ac.in" },
      { name: "Dr. Vishal Sharma", affiliation: "NIT Jalandhar", email: "sharmavs@nitj.ac.in" },
      { name: "Dr. Shiva S.", affiliation: "IIT Jammu", email: "shiva.sekar@iitjammu.ac.in" },
      { name: "Dr. Puneet Tandon", affiliation: "IIITDM Jabalpur", email: "ptandon@iiitdmj.ac.in" },
      { name: "Dr. Harshit Dave", affiliation: "NIT Surat (SVNIT)", email: "hkd@med.svnit.ac.in" },
      { name: "Dr. Din Bandhu", affiliation: "Galgotias University, Greater Noida", email: "din.bandhu@galgotiasuniversity.edu.in" },
      { name: "Dr. Navneet Khanna", affiliation: "IITRAM, Ahmedabad", email: "navneetkhanna@iitram.ac.in" },
    ],
  },
  {
    id: "track-2",
    title: "Track 2 — Intelligent Robotics & Automation for Sustainable Systems",
    speakers: [
      {
        name: "Dr. Christian Griffiths",
        affiliation: "Department of Mechanical Engineering, Swansea University, Swansea, U.K.",
        email: "c.a.griffiths@swansea.ac.uk",
        talk: "Industry 5.0 and Cobots",
        image: christianGriffithsAsset,
        scope: "International",
      },
      {
        name: "Dr. Ramana Vinjamuri",
        affiliation:
          "Associate Professor, Computer Science & Electrical Engineering, University of Maryland, Baltimore County, USA",
        email: "rvinjam1@umbc.edu",
        talk: "Synergy-Based Brain-Machine Interfaces for Human-Robot Collaboration and Neuroadaptive Technologies",
        image: deepak,
        scope: "International",
      },
      {
        name: "Prof. Pushparaj Mani Pathak",
        affiliation: "Department of Mechanical & Industrial Engineering, IIT Roorkee, India",
        email: "pushparaj.pathak@me.iitr.ac.in",
        talk: "Humanoid Robots for Hospitals",
        image: pushparaj,
        scope: "National",
      },
      {
        name: "Prof. Deepak Sharma",
        affiliation: "Department of Mechanical Engineering, IIT Guwahati, India",
        email: "dsharma@iitg.ac.in",
        talk: "Optimization Using Evolutionary Algorithms and Applications",
        image: ramana,
        scope: "National",
      },
    ],
    international: [
      { name: "Prof. Ramana Vinjamuri", affiliation: "University of Maryland, Baltimore County, USA", email: "rvinjam1@umbc.edu" },
      { name: "Prof. Xiao-Zhi Gao", affiliation: "University of Eastern Finland, Finland", email: "xiao.z.gao@gmail.com" },
      { name: "Prof. Lagouge Tartibu", affiliation: "University of Johannesburg, South Africa", email: "ltartibu@uj.ac.za" },
      { name: "Dr. Vimal Kumar", affiliation: "Chaoyang University of Technology, Taiwan", email: "vimalkr@gm.cyut.edu.tw" },
    ],
    national: [
      { name: "Prof. Pushparaj Mani Pathak", affiliation: "IIT Roorkee", email: "pushparaj.pathak@me.iitr.ac.in" },
      { name: "Prof. Deepak Sharma", affiliation: "IIT Guwahati", email: "dsharma@iitg.ac.in" },
      { name: "Prof. Ravinder Kr. Duvedi", affiliation: "Thapar Institute of Engineering & Technology, Patiala", email: "rduvedi@thapar.edu" },
      { name: "Prof. Vijay Kumar Gupta", affiliation: "PDPM IIITDM, Jabalpur", email: "vkgupta@iiitdmj.ac.in" },
      { name: "Prof. Joseph Anand Vaz", affiliation: "Dr. B. R. Ambedkar NIT, Jalandhar", email: "anandvaz@nitj.ac.in" },
      { name: "Prof. Mohammed Suhaib", affiliation: "Jamia Millia Islamia, New Delhi", email: "msuhaib@jmi.ac.in" },
      { name: "Dr. Ravi Kumar Mandava", affiliation: "IIITDM Kurnool, Andhra Pradesh", email: "ravikumar1013@iiitk.ac.in" },
      { name: "Mr. Aditya Marathe", affiliation: "CEO & Founder, NUGENIX ROBOTICS, Ichalkaranji, Maharashtra" },
    ],
  },
  {
    id: "track-3",
    title: "Track 3 — Innovations and Sustainability in Civil Engineering",
    speakers: [
      {
        name: "Dr. Sena TAYFUR",
        affiliation: "Department of Civil Engineering, Ege University, Bornova, Izmir, Turkey",
        email: "sena.tayfur@ege.edu.tr",
        talk: "Reliable Monitoring and Diagnosis: Non-Destructive Testing for Sustainable Civil Infrastructure",
        image: sena,
        scope: "International",
      },
      {
        name: "Dr. Christian Paglia",
        affiliation:
          "Department of Environment Constructions and Design, University of Applied Sciences and Arts of Southern Switzerland",
        email: "christian.paglia@supsi.ch",
        talk: "Sustainability of Cement-Based Materials and Future Challenges",
        image: christianPagliaAsset,
        scope: "International",
      },
      {
        name: "Prof. Prem Pal Bansal",
        affiliation: "Department of Civil Engineering, Thapar Institute of Engineering & Technology (TIET), Patiala (Pb.), India",
        email: "ppbansal@thapar.edu",
        talk: "Retrofitting of Structures",
        image: surendra,
        scope: "National",
      },
      {
        name: "Dr. Surender Singh",
        affiliation: "Department of Civil Engineering, Indian Institute of Technology Madras, India",
        email: "surender@iitm.ac.in",
        talk: "Rethinking Construction Material: Pathways to a Circular and Low Carbon Future",
        image: premPal,
        scope: "National",
      },
    ],
    international: [
      { name: "Dr. Sena TAYFUR", affiliation: "Ege University, Bornova, Izmir, Turkey", email: "sena.tayfur@ege.edu.tr" },
      { name: "Prof. Dr. Ivanka Netinger Grubeša", affiliation: "University North, Varaždin, Croatia" },
      { name: "Dr. Raju Sharma", affiliation: "University of Sherbrooke, Quebec, Canada", email: "Raju.Sharma@USherbrooke.ca" },
      { name: "Prof. Aruz Petcherdchoo", affiliation: "King Mongkut’s University of Technology, North Bangkok, Thailand", email: "aruz.p@eng.kmutnb.ac.th" },
      { name: "Dr. Ekbordin Winijkul", affiliation: "Dean, Faculty of Civil and Environmental Engineering, AIT, Bangkok, Thailand" },
      { name: "Prof. Atorod Azizinamini", affiliation: "Florida International University, USA", email: "aazizina@fiu.edu" },
      { name: "Prof. Piti Sukontasukkul", affiliation: "King Mongkut’s University of Technology, North Bangkok, Thailand" },
    ],
    national: [
      { name: "Dr. Prem Pal Bansal", affiliation: "Thapar Institute of Engineering & Technology, Patiala", email: "ppbansal@thapar.edu" },
      { name: "Dr. Shweta Goyal", affiliation: "Thapar Institute of Engineering & Technology, Patiala", email: "Shwetagoyal727@gmail.com" },
      { name: "Dr. Surendra Singh", affiliation: "IIT Madras", email: "surender@iitm.ac.in" },
      { name: "Dr. Deepak Swami", affiliation: "IIT Jodhpur", email: "dsswami@iitj.ac.in" },
      { name: "Dr. Dericks Praise Shukla", affiliation: "IIT Mandi", email: "dericks@iitmandi.ac.in" },
      { name: "Dr. Sagar Rohidas Chavan", affiliation: "IIT Ropar", email: "sagar@iitpr.ac.in" },
      { name: "Dr. Rajinder Ghai", affiliation: "Drainage cum Mining and Geology, Water Resource Department, Patiala" },
      { name: "Prof. Sanjiv Kumar Aggarwal", affiliation: "Maharaja Ranjit Singh Punjab Technical University, Bathinda" },
    ],
  },
];

const SpeakerCard = ({ s, i }: { s: Speaker; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.08 }}
    className="bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-all overflow-hidden group"
  >
    <div className="relative aspect-square overflow-hidden bg-muted">
      <img
        src={s.image}
        alt={s.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-3 left-3">
        <span
          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            s.scope === "International"
              ? "bg-accent text-accent-foreground"
              : "bg-secondary text-secondary-foreground"
          }`}
        >
          {s.scope === "International" ? <Globe size={10} /> : <Flag size={10} />}
          {s.scope}
        </span>
      </div>
    </div>
    <div className="p-5">
      <h4 className="font-heading font-bold text-foreground text-base leading-snug mb-1.5">
        {s.name}
      </h4>
      <p className="text-muted-foreground text-xs leading-relaxed mb-2">{s.affiliation}</p>
      {s.email && (
        <a
          href={`mailto:${s.email}`}
          className="text-accent text-xs font-mono hover:underline break-all"
        >
          {s.email}
        </a>
      )}
      <div className="mt-4 border-t border-border pt-3">
        <p className="text-foreground text-xs font-semibold mb-1">Expert Talk</p>
        <p className="text-foreground text-xs leading-relaxed">{s.talk}</p>
      </div>
    </div>
  </motion.div>
);

const TacList = ({ title, members, icon: Icon }: { title: string; members: Member[]; icon: typeof Globe }) => (
  <div>
    <h4 className="font-heading font-bold text-foreground text-base mb-3 flex items-center gap-2">
      <Icon className="text-accent" size={18} />
      {title}
    </h4>
    <ul className="space-y-2">
      {members.map((m) => (
        <li
          key={m.name + m.affiliation}
          className="bg-muted/40 rounded-lg p-3 border border-border text-sm"
        >
          <p className="font-semibold text-foreground">{m.name}</p>
          <p className="text-muted-foreground text-xs leading-relaxed">{m.affiliation}</p>
          {m.email && (
            <a href={`mailto:${m.email}`} className="text-accent text-xs font-mono hover:underline break-all">
              {m.email}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const SpeakersSection = () => {
  return (
    <section id="speakers" className="section-padding bg-background relative overflow-hidden">
      <TechBackground />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
            <Mic size={14} className="text-accent" />
            <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase">
              Keynote & Invited Speakers
            </p>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Distinguished <span className="text-accent">Speakers</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Eminent international and national experts joining IESSD'26 across all three technical tracks,
            along with their Technical Advisory Committee members.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="space-y-20">
          {tracks.map((t) => (
            <div key={t.id} id={t.id}>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading font-bold text-xl md:text-2xl text-foreground mb-6 pb-3 border-b border-border"
              >
                {t.title}
              </motion.h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {t.speakers.map((s, i) => (
                  <SpeakerCard key={s.name} s={s} i={i} />
                ))}
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card">
                <div className="flex items-center gap-2 mb-5">
                  <Users className="text-accent" size={20} />
                  <h4 className="font-heading font-bold text-foreground text-lg">
                    Technical Advisory Committee
                  </h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <TacList title="International Advisory Committee" members={t.international} icon={Globe} />
                  <TacList title="National Advisory Committee" members={t.national} icon={Flag} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
