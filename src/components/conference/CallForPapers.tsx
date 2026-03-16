import { motion } from "framer-motion";
import { FileText, Mail, BookOpen, Clock, ArrowRight } from "lucide-react";
import TechBackground from "./TechBackground";

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

const CallForPapers = () => {
  return (
    <section id="cfp" className="section-padding bg-background relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

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
                    <p className={`text-sm mt-0.5 font-semibold ${d.highlight ? 'text-accent' : 'text-accent'}`}>{d.date}</p>
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
              <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                <p className="text-foreground text-sm font-medium flex items-center gap-2">
                  <BookOpen size={16} className="text-accent" /> Publication Opportunity
                </p>
                <p className="text-foreground text-sm mt-1">
                  All accepted and presented manuscripts will be published in reputed journals as per their relevancy. Name of journals will be announced soon.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
