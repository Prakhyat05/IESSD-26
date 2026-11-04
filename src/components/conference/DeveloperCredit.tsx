import { motion } from "framer-motion";
import { Sparkles, Code2 } from "lucide-react";
import developerAsset from "@/assets/prakhyat-prakhar.jpg.asset.json";

const DeveloperCredit = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Soft ambient glow behind the card */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsla(160, 60%, 45%, 0.18) 0%, transparent 65%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-2xl mx-auto"
      >
        {/* Gradient border wrapper */}
        <div
          className="rounded-3xl p-[2px]"
          style={{
            background: "linear-gradient(135deg, hsl(160, 65%, 45%), hsla(210, 70%, 55%, 0.35), hsl(160, 65%, 45%))",
            boxShadow: "0 20px 60px -20px hsla(160, 70%, 40%, 0.45)",
          }}
        >
          <div
            className="rounded-3xl backdrop-blur-md px-6 py-10 md:px-12"
            style={{
              background: "linear-gradient(160deg, hsla(215, 40%, 12%, 0.92), hsla(215, 45%, 16%, 0.88))",
            }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
              {/* Photo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative shrink-0"
              >
                <div
                  className="absolute -inset-1.5 rounded-full blur-sm"
                  style={{ background: "linear-gradient(135deg, hsl(160, 65%, 50%), hsl(210, 70%, 60%))" }}
                />
                <img
                  src={developerAsset.url}
                  alt="Prakhyat Prakhar"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="relative w-32 h-32 md:w-36 md:h-36 rounded-full object-cover object-top border-2"
                  style={{ borderColor: "hsla(215, 40%, 12%, 0.9)" }}
                />
                <span
                  className="absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{ background: "hsl(160, 60%, 45%)", borderColor: "hsla(215, 40%, 12%, 0.95)" }}
                >
                  <Sparkles className="w-3 h-3" style={{ color: "white" }} />
                </span>
              </motion.div>

              {/* Text */}
              <div className="min-w-0">
                <div
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-semibold mb-3 px-3 py-1 rounded-full"
                  style={{
                    color: "hsl(160, 60%, 55%)",
                    background: "hsla(160, 60%, 45%, 0.12)",
                    border: "1px solid hsla(160, 60%, 50%, 0.3)",
                  }}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  Crafted with dedication
                </div>
                <p className="text-sm md:text-base" style={{ color: "hsl(0, 0%, 75%)" }}>
                  Designed &amp; Developed by
                </p>
                <h3
                  className="font-heading text-2xl md:text-3xl font-bold mt-1 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(120deg, hsl(160, 65%, 55%), hsl(200, 75%, 65%))",
                  }}
                >
                  Prakhyat Prakhar
                </h3>
                <div
                  className="mt-4 h-px w-32 mx-auto sm:mx-0"
                  style={{ background: "linear-gradient(90deg, hsla(160, 65%, 50%, 0.7), transparent)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DeveloperCredit;
