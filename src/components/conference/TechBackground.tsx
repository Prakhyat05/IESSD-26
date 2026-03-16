import { motion } from "framer-motion";

/** Reusable technical background with circuit lines, dots, and hexagonal patterns */
const TechBackground = ({ variant = "default" }: { variant?: "default" | "alt" }) => {
  const isAlt = variant === "alt";

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Circuit trace lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <line x1="10%" y1="0" x2="10%" y2="100%" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="8 16" />
        <line x1="90%" y1="0" x2="90%" y2="100%" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="8 16" />
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="4 20" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="4 20" />
        {/* Junction dots */}
        <circle cx="10%" cy="30%" r="3" fill="hsl(var(--accent))" opacity="0.3" />
        <circle cx="90%" cy="30%" r="3" fill="hsl(var(--accent))" opacity="0.3" />
        <circle cx="10%" cy="70%" r="3" fill="hsl(var(--accent))" opacity="0.3" />
        <circle cx="90%" cy="70%" r="3" fill="hsl(var(--accent))" opacity="0.3" />
      </svg>

      {/* Hexagon decorations */}
      <svg className="absolute -top-10 -right-10 w-40 h-40 opacity-[0.04]" viewBox="0 0 100 100">
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
        <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" />
      </svg>
      <svg className="absolute -bottom-10 -left-10 w-32 h-32 opacity-[0.04]" viewBox="0 0 100 100">
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
      </svg>

      {/* Floating data particles */}
      {[
        { x: "15%", y: "25%", size: 4, delay: 0 },
        { x: "80%", y: "15%", size: 5, delay: 1.2 },
        { x: "60%", y: "75%", size: 3, delay: 2.4 },
        { x: "30%", y: "60%", size: 6, delay: 0.6 },
        { x: "45%", y: "40%", size: 4, delay: 1.8 },
        { x: "75%", y: "55%", size: 5, delay: 3.0 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${isAlt ? 'bg-primary/15' : 'bg-accent/15'}`}
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Corner brackets */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-accent/10 rounded-tl-sm" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-accent/10 rounded-tr-sm" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-accent/10 rounded-bl-sm" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-accent/10 rounded-br-sm" />
    </div>
  );
};

export default TechBackground;
