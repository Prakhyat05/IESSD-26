import { motion } from "framer-motion";
import { FileText, Mail, BookOpen } from "lucide-react";

const dates = [
  { event: "Extended Abstract Submission", date: "June 30, 2026" },
  { event: "Acceptance Notification of Extended Abstract", date: "July 31, 2026" },
  { event: "Submission of Full Paper", date: "September 30, 2026" },
  { event: "Revised Paper Submission", date: "October 30, 2026" },
  { event: "Conference Dates", date: "December 4–5, 2026" },
];

const trackEmails = [
  { track: "Track 1 – Innovations in Smart Manufacturing", email: "iessd26-T1@sliet.ac.in" },
  { track: "Track 2 – Intelligent Robotics & Automation", email: "iessd26-T2@sliet.ac.in" },
  { track: "Track 3 – Sustainability in Civil Engineering", email: "iessd26-T3@sliet.ac.in" },
];

const CallForPapers = () => {
  return (
    <section id="cfp" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-2">Submit Your Research</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Call for Papers</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Important Dates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <FileText className="text-accent" size={22} />
              Important Dates
            </h3>
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary text-secondary-foreground">
                    <th className="text-left px-6 py-4 font-semibold">Event</th>
                    <th className="text-left px-6 py-4 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {dates.map((d, i) => (
                    <tr key={d.event} className={`border-t border-border ${i % 2 === 0 ? "bg-muted/30" : "bg-card"}`}>
                      <td className="px-6 py-4 text-foreground font-medium">{d.event}</td>
                      <td className="px-6 py-4 text-accent font-semibold">{d.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  <div key={t.track} className="bg-muted/50 rounded-lg p-4">
                    <p className="text-foreground font-medium text-sm">{t.track}</p>
                    <a href={`mailto:${t.email}`} className="text-accent text-sm hover:underline">{t.email}</a>
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
