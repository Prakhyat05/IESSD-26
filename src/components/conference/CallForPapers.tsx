import { motion } from "framer-motion";
import { FileText, Mail, BookOpen, Clock, ArrowRight, CheckCircle, Send, Edit, Search, Award } from "lucide-react";
import TechBackground from "./TechBackground";
import conferenceHall from "@/assets/conference-hall.jpg";

const dates = [
  { event: "Extended Abstract Submission", date: "June 30, 2026", active: true },
  { event: "Acceptance Notification of Extended Abstract", date: "July 31, 2026" },
  { event: "Submission of Full Paper", date: "September 30, 2026" },
  { event: "Revised Paper Submission", date: "October 30, 2026" },
  { event: "Conference Dates", date: "December 4–5, 2026", highlight: true },
];

const trackEmails = [
  { track: "Track 1 – Innovations in Smart Manufacturing", email: "iessd26-T1@sliet.ac.in" },
  { track: "Track 2 – Intelligent Robotics & Automation", email: "iessd26-T2@sliet.ac.in" },
  { track: "Track 3 – Sustainability in Civil Engineering", email: "iessd26-T3@sliet.ac.in" },
];

const flowSteps = [
  { icon: Edit, title: "Prepare Abstract", desc: "Write your extended abstract following the conference template and guidelines" },
  { icon: Send, title: "Submit via Email", desc: "Email your manuscript (PDF) to the respective track email address" },
  { icon: Search, title: "Peer Review", desc: "Your paper undergoes rigorous peer review by the technical committee" },
  { icon: CheckCircle, title: "Acceptance", desc: "Receive notification of acceptance with reviewer feedback" },
  { icon: FileText, title: "Submit Full Paper", desc: "Revise and submit the full-length paper incorporating reviewer comments" },
  { icon: Award, title: "Present & Publish", desc: "Present at IESSD'26 and get published in reputed journals" },
];

const CallForPapers = () => {
  return (
    <section id="cfp" className="section-padding bg-background relative overflow-hidden">
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
            <FileText size={14} className="text-accent" />
            <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase">Submit Your Research</p>
          </motion.div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Call for <span className="text-accent">Papers</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Conference Hall Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 rounded-2xl overflow-hidden border border-border shadow-card relative"
        >
          <div className="relative h-64 md:h-80">
            <img src={conferenceHall} alt="Conference presentation hall" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/50 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 md:p-12">
              <div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-secondary-foreground mb-2">Share Your Research</h3>
                <p className="text-secondary-foreground/80 text-sm md:text-base max-w-md">
                  Present your innovative findings at IESSD'26 and contribute to the future of engineering and sustainable development.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Submission Process Flowchart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h3 className="font-heading font-bold text-xl text-foreground mb-8 text-center">
            Submission <span className="text-accent">Process</span>
          </h3>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-3 relative z-10">
              {flowSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-3">
                    <div className="w-16 h-16 rounded-2xl bg-card border-2 border-accent/30 flex items-center justify-center shadow-card group-hover:border-accent group-hover:shadow-elevated transition-all duration-300">
                      <step.icon size={24} className="text-accent" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  {/* Arrow between steps (mobile) */}
                  <h4 className="font-heading font-bold text-foreground text-sm mb-1">{step.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Important Dates - Timeline style */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <Clock className="text-accent" size={22} />
              Important Dates
            </h3>
            <div className="space-y-0">
              {dates.map((d, i) => (
                <motion.div
                  key={d.event}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full shrink-0 mt-1.5 ${d.highlight ? 'bg-accent ring-4 ring-accent/20' : d.active ? 'bg-accent' : 'bg-border'}`} />
                    {i < dates.length - 1 && <div className="w-px flex-1 bg-border" />}
                  </div>
                  <div className={`pb-6 ${i === dates.length - 1 ? 'pb-0' : ''}`}>
                    <p className="text-foreground font-medium text-sm">{d.event}</p>
                    <p className={`text-sm mt-0.5 font-semibold text-accent`}>{d.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Submission Guide */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <Mail className="text-accent" size={22} />
              Submission of Papers
            </h3>
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card space-y-4">
              <p className="text-foreground leading-relaxed text-sm">
                Authors can submit full length paper by email to the respective track. While submitting manuscript, appropriate format must be followed. Manuscript must be submitted in <strong>PDF format</strong>. Guidelines for manuscripts preparation will be available on the website.
              </p>
              <div className="space-y-3">
                {trackEmails.map((t) => (
                  <div key={t.track} className="bg-muted/50 rounded-lg p-4 border border-border hover:border-accent/30 transition-colors group">
                    <p className="text-foreground font-medium text-sm flex items-center gap-2">
                      <ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {t.track}
                    </p>
                    <a href={`mailto:${t.email}`} className="text-accent text-sm hover:underline font-mono">{t.email}</a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Publication Opportunity - Standalone Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="relative bg-gradient-to-br from-accent/10 via-card to-accent/5 rounded-2xl border-2 border-accent/30 p-8 md:p-10 shadow-elevated overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <BookOpen size={24} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                  Publication <span className="text-accent">Opportunity</span>
                </h3>
              </div>
              <div className="w-16 h-1 bg-accent rounded-full mb-6" />
              <p className="text-foreground leading-relaxed text-base md:text-lg mb-4">
                There will be <strong className="text-accent">Scopus Index publication opportunities</strong> for all submitted manuscripts which will be presented at IESSD'26. These opportunities are designed to enhance the visibility and impact of your research within the global academic community.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Immediately after the conference, the authors of the presented papers will be invited to submit their full-length papers as per the publication format of <strong className="text-foreground">Springer Book Series (Conference Proceedings)</strong> or <strong className="text-foreground">IOP Science Conference Series publication</strong>, etc. The papers will be accepted for publication after the peer review process.
              </p>
              <div className="mt-6 pt-6 border-t border-accent/20">
                <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                  The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallForPapers;
