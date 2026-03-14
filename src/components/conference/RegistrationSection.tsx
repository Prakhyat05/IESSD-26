import { motion } from "framer-motion";
import { IndianRupee, Globe, CreditCard, CheckCircle, Home, Globe2, Sparkles } from "lucide-react";

const indianPricing = [
  { category: "Student / Post Doc", attendee: "₹500", presenter: "₹1,000" },
  { category: "Academic / NGO", attendee: "₹1,000", presenter: "₹2,000" },
  { category: "Industry", attendee: "₹1,500", presenter: "₹3,000" },
];

const intlPricing = [
  { category: "Student / Post Doc", attendee: "$25", presenter: "$50" },
  { category: "Academic / NGO", attendee: "$50", presenter: "$100" },
  { category: "Industry", attendee: "$100", presenter: "$150" },
];

const inclusions = [
  "Registration Kit & Conference Proceedings",
  "Breakfast, Lunch, Dinner & Tea/Refreshments",
  "Certificate of Participation",
];

const bankDetails = [
  ["Account Name", "IESSD 26"],
  ["Account Number", "5956018595"],
  ["Bank", "Central Bank of India, SLIET, Longowal, Sangrur, Punjab - 148106"],
  ["Swift Code", "CBININBB"],
  ["IFSC Code", "CBIN0283105"],
  ["MIRC Code", "148016003"],
  ["Branch Code", "83105"],
  ["UPI ID", "3105202603090000@cbin"],
];

const PricingTable = ({
  title,
  icon: Icon,
  data,
}: {
  title: string;
  icon: React.ElementType;
  data: typeof indianPricing;
}) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
        <Icon className="text-accent" size={18} />
      </div>
      {title}
    </h3>
    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-secondary text-secondary-foreground">
            <th className="text-left px-5 py-3 font-semibold">Category</th>
            <th className="text-center px-5 py-3 font-semibold">Attendee</th>
            <th className="text-center px-5 py-3 font-semibold">Presenter</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={r.category} className={`border-t border-border ${i % 2 === 0 ? "bg-muted/30" : "bg-card"} hover:bg-accent/5 transition-colors`}>
              <td className="px-5 py-4 text-foreground font-medium">{r.category}</td>
              <td className="px-5 py-4 text-center text-foreground font-semibold">{r.attendee}</td>
              <td className="px-5 py-4 text-center text-accent font-bold">{r.presenter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

const RegistrationSection = () => {
  return (
    <section id="registration" className="section-padding bg-muted/50 relative overflow-hidden">
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
            <Sparkles size={14} className="text-accent" />
            <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase">Join Us</p>
          </motion.div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Registration & <span className="text-accent">Payment</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Pricing Tables */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <PricingTable title="Indian Participants (INR)" icon={IndianRupee} data={indianPricing} />
          <PricingTable title="International Participants (USD)" icon={Globe} data={intlPricing} />
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent/10 border border-accent/20 rounded-2xl p-6 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
          <p className="text-foreground text-sm leading-relaxed pl-4">
            <strong>Note:</strong> Each registration permits the presentation of one paper only. Authors wishing to present additional papers may do so by paying an additional 50% of the registration fee for each extra paper. The registration fee covers the registration kit, a copy of the conference proceedings, breakfast, lunch, dinner, and tea/refreshments during the conference sessions.
          </p>
        </motion.div>

        {/* Payment, Inclusions, Accommodation, Visa */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300">
            <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <CreditCard className="text-accent" size={18} />
              </div>
              Mode of Payment
            </h3>
            <p className="text-foreground text-sm mb-4 leading-relaxed">
              Participants are requested to deposit registration fee through bank transfer only (preferably through their own Bank Account) and send the online transaction details to the organizers.
            </p>
            <div className="space-y-2 text-sm">
              {bankDetails.map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:justify-between bg-muted/50 rounded-lg px-4 py-3 gap-1 hover:bg-muted/80 transition-colors">
                  <span className="text-foreground text-xs uppercase tracking-wide">{label}</span>
                  <span className="text-foreground font-semibold font-mono text-xs sm:text-sm break-all">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300">
              <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="text-accent" size={18} />
                </div>
                Registration Includes
              </h3>
              <ul className="space-y-3">
                {inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={12} className="text-accent-foreground" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300">
              <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Home className="text-accent" size={18} />
                </div>
                Accommodation
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                The registration fee includes accommodation for student delegates (Indian and foreign) within the institute campus, provided on a first-come, first-served basis, subject to availability, and a prior intimation at least 15 days before the commencement of the conference. Limited on-campus accommodation for other delegates may be available on a payment basis. Hotel accommodation at nominal rates is available in nearby towns such as Sangrur, Barnala, Sunam, and Dhuri.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300">
              <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Globe2 className="text-accent" size={18} />
                </div>
                Visa Requirements
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                Overseas delegates who require an India Visa for participation are requested to contact the organizer in advance for guidance and an invitation letter.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Transport note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent/10 border border-accent/20 rounded-2xl p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
          <p className="text-foreground text-sm leading-relaxed pl-4">
            <strong>🚗 Transport:</strong> A pick-and-drop facility from Chandigarh Airport, along with local transportation, will be provided to foreign delegates upon request. Local transportation will also be arranged for Indian delegates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationSection;
