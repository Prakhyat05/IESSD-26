import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/sliet-campus.webp";
import logoSliet from "@/assets/logo-sliet.jpg";
import logoIei from "@/assets/logo-iei.jpeg";
import logoIessd from "@/assets/logo-iessd.png";
import logoIce from "@/assets/logo-ice.jpeg";
import logoAtmanirbhar from "@/assets/logo-atmanirbhar.png";

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="SLIET Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>

      <div className="container mx-auto text-center relative z-10 px-4 pt-20">
        {/* Logos row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 md:gap-8 mb-8 flex-wrap"
        >
          {[
            { src: logoSliet, alt: "SLIET Logo" },
            { src: logoIei, alt: "IEI Logo" },
            { src: logoIessd, alt: "IESSD'26 Logo" },
            { src: logoIce, alt: "ICE India Logo" },
            { src: logoAtmanirbhar, alt: "Atmanirbhar Bharat" },
          ].map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-16 md:h-20 lg:h-24 w-auto object-contain bg-white/90 rounded-lg p-1.5"
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-heading font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
            International Conference on
          </p>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight max-w-5xl mx-auto">
            Innovative Engineering Solutions for{" "}
            <span className="text-accent">Sustainable Development</span>
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
            <CalendarDays size={18} className="text-accent" /> 4th & 5th December 2026
          </span>
          <span className="flex items-center gap-2 text-sm md:text-base">
            <Monitor size={18} className="text-accent" /> Hybrid Mode
          </span>
          <span className="flex items-center gap-2 text-sm md:text-base">
            <MapPin size={18} className="text-accent" /> SLIET, Longowal, Punjab
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 border-0 text-accent-foreground font-semibold text-base px-8 shadow-lg">
            <a href="/registration">Register Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent/40 text-accent-foreground hover:bg-accent/10 font-semibold text-base px-8">
            <a href="/call-for-papers">Submit Paper</a>
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
              <div key={t.label} className="bg-secondary/60 backdrop-blur-sm rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px] border border-primary-foreground/10">
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
