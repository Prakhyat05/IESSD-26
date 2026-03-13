import { motion } from "framer-motion";
import { IndianRupee, Globe, CreditCard, CheckCircle } from "lucide-react";

const indianPricing = [
  { category: "Student / Post Doc", early: "₹3,000", regular: "₹4,000" },
  { category: "Academic / NGO", early: "₹5,000", regular: "₹6,000" },
  { category: "Industry", early: "₹8,000", regular: "₹10,000" },
];

const intlPricing = [
  { category: "Student / Post Doc", early: "$150", regular: "$200" },
  { category: "Academic / NGO", early: "$250", regular: "$300" },
  { category: "Industry", early: "$350", regular: "$400" },
];

const inclusions = [
  "Conference Kit & Proceedings",
  "All Meals (Lunch, Dinner & Tea)",
  "Accommodation for Students (First-come basis)",
  "Certificate of Participation",
];

const RegistrationSection = () => {
  return (
    <section id="registration" className="section-padding bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-2">Join Us</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Registration & Payment</h2>
        </motion.div>

        {/* Pricing Tables */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Indian */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <IndianRupee className="text-accent" size={20} /> Indian Participants (INR)
            </h3>
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
              <table className="w-full text-sm">
                <thead>
                     <tr className="bg-secondary text-secondary-foreground">
                    <th className="text-left px-5 py-3 font-semibold">Category</th>
                    <th className="text-center px-5 py-3 font-semibold">Early Bird</th>
                    <th className="text-center px-5 py-3 font-semibold">Regular</th>
                  </tr>
                </thead>
                <tbody>
                  {indianPricing.map((r, i) => (
                    <tr key={r.category} className={`border-t border-border ${i % 2 === 0 ? "bg-muted/30" : "bg-card"}`}>
                      <td className="px-5 py-4 text-foreground font-medium">{r.category}</td>
                      <td className="px-5 py-4 text-center text-accent font-bold">{r.early}</td>
                      <td className="px-5 py-4 text-center text-muted-foreground">{r.regular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* International */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <Globe className="text-accent" size={20} /> International Participants (USD)
            </h3>
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary text-secondary-foreground">
                    <th className="text-left px-5 py-3 font-semibold">Category</th>
                    <th className="text-center px-5 py-3 font-semibold">Early Bird</th>
                    <th className="text-center px-5 py-3 font-semibold">Regular</th>
                  </tr>
                </thead>
                <tbody>
                  {intlPricing.map((r, i) => (
                    <tr key={r.category} className={`border-t border-border ${i % 2 === 0 ? "bg-muted/30" : "bg-card"}`}>
                      <td className="px-5 py-4 text-foreground font-medium">{r.category}</td>
                      <td className="px-5 py-4 text-center text-accent font-bold">{r.early}</td>
                      <td className="px-5 py-4 text-center text-muted-foreground">{r.regular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Payment & Inclusions */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card">
            <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <CreditCard className="text-accent" size={20} /> Payment Details
            </h3>
            <div className="space-y-3 text-sm">
              {[
                ["Account Name", "IESSD 26"],
                ["Bank", "Central Bank of India"],
                ["IFSC Code", "CBIN0283105"],
                ["UPI ID", "3105202603090000@cbin"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between bg-muted/50 rounded-lg px-4 py-3">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="text-foreground font-semibold font-mono">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card">
            <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <CheckCircle className="text-accent" size={20} /> Registration Includes
            </h3>
            <ul className="space-y-3">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={12} className="text-primary-foreground" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
