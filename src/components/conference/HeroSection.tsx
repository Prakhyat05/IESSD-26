import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const targetDate = new Date("2026-06-30T23:59:59").getTime();

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, targetDate - now);
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-emerald-glow/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-emerald-glow/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-emerald-glow/10 animate-float" />
      </div>

      <div className="container mx-auto text-center relative z-10 px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-emerald-glow font-heading font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
            International Conference on
          </p>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight max-w-5xl mx-auto">
            Innovative Engineering Solutions for{" "}
            <span className="gradient-text">Sustainable Development</span>
          </h1>
          <p className="text-primary-foreground/60 font-heading text-2xl md:text-3xl font-bold mt-3">
            IESSD'26
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-primary-foreground/80"
        >
          <span className="flex items-center gap-2 text-sm md:text-base">
            <CalendarDays size={18} className="text-emerald-glow" /> 4th & 5th December 2026
          </span>
          <span className="flex items-center gap-2 text-sm md:text-base">
            <Monitor size={18} className="text-emerald-glow" /> Hybrid Mode
          </span>
          <span className="flex items-center gap-2 text-sm md:text-base">
            <MapPin size={18} className="text-emerald-glow" /> SLIET, Longowal, Punjab
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <Button asChild size="lg" className="gradient-accent border-0 text-primary-foreground font-semibold text-base px-8 shadow-elevated hover:opacity-90">
            <a href="#registration">Register Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-emerald-glow/30 text-primary-foreground hover:bg-emerald-glow/10 font-semibold text-base px-8">
            <a href="#cfp">Submit Paper</a>
          </Button>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <p className="text-primary-foreground/50 text-xs uppercase tracking-widest mb-4">
            Abstract Submission Deadline
          </p>
          <div className="flex justify-center gap-3 md:gap-6">
            {[
              { val: timeLeft.days, label: "Days" },
              { val: timeLeft.hours, label: "Hours" },
              { val: timeLeft.minutes, label: "Min" },
              { val: timeLeft.seconds, label: "Sec" },
            ].map((t) => (
              <div key={t.label} className="glass rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px] bg-white/5 border-white/10">
                <div className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground">
                  {String(t.val).padStart(2, "0")}
                </div>
                <div className="text-primary-foreground/50 text-xs mt-1">{t.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
