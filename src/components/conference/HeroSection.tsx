import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Monitor, ChevronDown, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/sliet-campus.webp";
import logoSliet from "@/assets/logo-sliet.jpg";
import logoIei from "@/assets/logo-iei.jpeg";
import logoIessd from "@/assets/logo-iessd.png";
import logoIce from "@/assets/logo-ice.jpeg";
import logoAtmanirbhar from "@/assets/logo-atmanirbhar.png";

const targetDate = new Date("2026-06-30T23:59:59").getTime();

/* Floating 3D-style geometric shapes */
const FloatingShape = ({ delay, x, y, size, shape }: { delay: number; x: string; y: string; size: number; shape: "hex" | "tri" | "diamond" }) => {
  const paths: Record<string, string> = {
    hex: "M50,5 L95,27.5 L95,72.5 L50,95 L5,72.5 L5,27.5 Z",
    tri: "M50,5 L95,90 L5,90 Z",
    diamond: "M50,5 L95,50 L50,95 L5,50 Z",
  };
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      animate={{ y: [0, -15, 0], rotate: [0, 180, 360], opacity: [0.06, 0.12, 0.06] }}
      transition={{ duration: 10 + delay, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100">
        <path d={paths[shape]} fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
      </svg>
    </motion.div>
  );
};

/* Data stream line animation */
const DataStream = ({ x, delay }: { x: string; delay: number }) => (
  <motion.div
    className="absolute w-px pointer-events-none"
    style={{ left: x, top: 0, height: "100%", background: `linear-gradient(180deg, transparent, hsl(var(--accent) / 0.15), transparent)` }}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.3, 0] }}
    transition={{ duration: 4, delay, repeat: Infinity }}
  >
    <motion.div
      className="w-1.5 h-1.5 rounded-full -translate-x-1/2"
      style={{ background: "hsl(var(--accent))" }}
      animate={{ top: ["-2%", "102%"] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
);

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
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="SLIET Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/88" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* 3D Floating shapes */}
      <FloatingShape delay={0} x="5%" y="15%" size={80} shape="hex" />
      <FloatingShape delay={2} x="90%" y="20%" size={60} shape="tri" />
      <FloatingShape delay={1} x="15%" y="70%" size={50} shape="diamond" />
      <FloatingShape delay={3} x="85%" y="65%" size={70} shape="hex" />
      <FloatingShape delay={1.5} x="50%" y="8%" size={40} shape="tri" />
      <FloatingShape delay={2.5} x="70%" y="80%" size={55} shape="diamond" />

      {/* Data streams */}
      <DataStream x="10%" delay={0} />
      <DataStream x="25%" delay={1.5} />
      <DataStream x="75%" delay={0.8} />
      <DataStream x="92%" delay={2} />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none"
        style={{ top: "15%", left: "5%" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-56 h-56 rounded-full bg-accent/8 blur-3xl pointer-events-none"
        style={{ bottom: "15%", right: "10%" }}
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-primary/10 blur-2xl pointer-events-none"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated corner brackets */}
      {[
        "top-20 left-6 border-t-2 border-l-2",
        "top-20 right-6 border-t-2 border-r-2",
        "bottom-6 left-6 border-b-2 border-l-2",
        "bottom-6 right-6 border-b-2 border-r-2",
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute w-16 h-16 border-accent/30 pointer-events-none ${cls}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
        />
      ))}

      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.2), transparent)" }}
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto text-center relative z-10 px-4 pt-20 pb-8">
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
            <motion.img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-16 md:h-20 lg:h-24 w-auto object-contain bg-white/90 rounded-lg p-1.5"
              whileHover={{ scale: 1.08, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </motion.div>

        {/* Title */}
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
            <span className="text-accent relative">
              Sustainable Development
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </h1>
          <p className="text-primary-foreground/60 font-heading text-2xl md:text-3xl font-bold mt-3">
            IESSD'26
          </p>
          <p className="text-primary-foreground/50 text-sm mt-1">(Hybrid Mode)</p>
        </motion.div>

        {/* Info pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 text-primary-foreground/80"
        >
          {[
            { icon: CalendarDays, text: "4th & 5th December 2026" },
            { icon: Monitor, text: "Hybrid Mode" },
            { icon: MapPin, text: "SLIET, Longowal, Punjab" },
          ].map((item) => (
            <motion.span
              key={item.text}
              className="flex items-center gap-2 text-sm md:text-base bg-primary-foreground/5 border border-primary-foreground/10 rounded-full px-4 py-2 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--accent) / 0.3)" }}
            >
              <item.icon size={18} className="text-accent" /> {item.text}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 border-0 text-accent-foreground font-semibold text-base px-8 shadow-lg shadow-accent/20 group">
            <a href="/registration">
              Register Now
              <motion.span className="ml-1 inline-block" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent/40 text-accent hover:bg-accent/10 font-semibold text-base px-8">
            <a href="/call-for-papers">Submit Paper</a>
          </Button>
        </motion.div>

        {/* Organized By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm rounded-xl px-6 py-4">
            <Building2 size={20} className="text-accent shrink-0" />
            <div className="text-left">
              <p className="text-primary-foreground/40 text-[10px] uppercase tracking-widest">Organized by</p>
              <p className="text-primary-foreground/90 text-sm md:text-base font-heading font-semibold">
                Department of Mechanical Engineering & Civil Engineering
              </p>
              <p className="text-primary-foreground/60 text-xs md:text-sm">
                Sant Longowal Institute of Engineering & Technology, Longowal-148106, Sangrur, Punjab, India
              </p>
              <p className="text-accent/70 text-[10px] italic mt-0.5">
                (Deemed-to-be-University under MoE, Govt. of India)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12"
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
            ].map((t, i) => (
              <motion.div
                key={t.label}
                className="bg-secondary/60 backdrop-blur-sm rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px] border border-accent/20 relative overflow-hidden group"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--accent) / 0.5)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground relative z-10">
                  {String(t.val).padStart(2, "0")}
                </div>
                <div className="text-primary-foreground/50 text-xs mt-1 relative z-10">{t.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} className="mx-auto text-primary-foreground/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
