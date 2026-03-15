import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoIessd from "@/assets/logo-iessd.png";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");
  const audioRef = useRef<AudioContext | null>(null);
  const [audioStarted, setAudioStarted] = useState(false);

  // Ambient melody using Web Audio API
  const playMelody = () => {
    if (audioStarted) return;
    setAudioStarted(true);
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioRef.current = ctx;

      const playNote = (freq: number, start: number, dur: number, vol = 0.08) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
        
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(2000, ctx.currentTime + start);
        
        gain.gain.setValueAtTime(0, ctx.currentTime + start);
        gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + start + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + dur);
        
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + start);
        osc.stop(ctx.currentTime + start + dur);
      };

      // Ethereal ascending melody - C major pentatonic with reverb feel
      const notes = [
        { freq: 523.25, start: 0, dur: 0.8 },    // C5
        { freq: 659.25, start: 0.3, dur: 0.8 },   // E5
        { freq: 783.99, start: 0.6, dur: 1.0 },   // G5
        { freq: 880.00, start: 1.0, dur: 1.0 },   // A5
        { freq: 1046.50, start: 1.4, dur: 1.2 },  // C6
        { freq: 783.99, start: 1.8, dur: 0.8 },   // G5
        { freq: 1174.66, start: 2.2, dur: 1.5 },  // D6
        { freq: 1046.50, start: 2.6, dur: 1.5 },  // C6
      ];

      // Pad/drone layer
      const padNotes = [
        { freq: 261.63, start: 0, dur: 3.5, vol: 0.04 },   // C4
        { freq: 329.63, start: 0.5, dur: 3.0, vol: 0.03 },  // E4
        { freq: 392.00, start: 1.0, dur: 3.0, vol: 0.03 },  // G4
      ];

      notes.forEach(n => playNote(n.freq, n.start, n.dur));
      padNotes.forEach(n => playNote(n.freq, n.start, n.dur, n.vol));
    } catch (e) {
      console.log("Audio not available");
    }
  };

  useEffect(() => {
    // Auto-start melody attempt
    playMelody();

    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating progress
        const increment = p < 30 ? 2 : p < 60 ? 3 : p < 90 ? 4 : 2;
        return Math.min(p + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100 && phase === "loading") {
      setTimeout(() => setPhase("reveal"), 300);
      setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 1200);
    }
  }, [progress, phase, onComplete]);

  // Hex grid nodes
  const nodes = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    size: 2 + Math.random() * 4,
  }));

  // Circuit lines
  const circuits = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x1: Math.random() * 100,
    y1: Math.random() * 100,
    x2: Math.random() * 100,
    y2: Math.random() * 100,
    delay: Math.random() * 1.5,
  }));

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden cursor-pointer"
          style={{ background: "hsl(var(--secondary))" }}
          onClick={playMelody}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          {/* Floating circuit nodes */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute rounded-full"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: node.size,
                height: node.size,
                background: "hsl(var(--accent))",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.6, 0.2, 0.8, 0.3],
                scale: [0, 1, 0.5, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Animated circuit lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {circuits.map((c) => (
              <motion.line
                key={c.id}
                x1={`${c.x1}%`}
                y1={`${c.y1}%`}
                x2={`${c.x2}%`}
                y2={`${c.y2}%`}
                stroke="hsl(var(--accent))"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.3, 0.1] }}
                transition={{
                  duration: 2,
                  delay: c.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>

          {/* Rotating hexagonal ring */}
          <motion.div
            className="absolute"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg width="500" height="500" viewBox="0 0 500 500" className="opacity-[0.08]">
              <polygon
                points="250,50 430,150 430,350 250,450 70,350 70,150"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          {/* Counter-rotating ring */}
          <motion.div
            className="absolute"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <svg width="600" height="600" viewBox="0 0 600 600" className="opacity-[0.05]">
              <polygon
                points="300,40 530,170 530,430 300,560 70,430 70,170"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="0.8"
                strokeDasharray="20 10"
              />
            </svg>
          </motion.div>

          {/* Pulsing concentric circles */}
          {[180, 220, 260].map((r, i) => (
            <motion.div
              key={r}
              className="absolute rounded-full border border-accent/10"
              style={{ width: r * 2, height: r * 2 }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo with glow */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="relative mb-8"
            >
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-150" />
              <motion.div
                className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-accent/40 shadow-lg"
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(var(--accent) / 0.2)",
                    "0 0 40px hsl(var(--accent) / 0.4)",
                    "0 0 20px hsl(var(--accent) / 0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <img src={logoIessd} alt="IESSD'26" className="w-full h-full object-contain bg-white p-2" />
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              IESSD'26
            </motion.h2>

            <motion.p
              className="text-accent text-xs tracking-[0.3em] uppercase mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Initializing Conference Portal
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="w-64 md:w-80 h-1 rounded-full overflow-hidden relative"
              style={{ background: "hsl(var(--secondary) / 0.5)" }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div
                className="h-full rounded-full relative"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, hsl(var(--accent)), hsl(var(--accent) / 0.6), hsl(var(--accent)))",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              {/* Glow at progress tip */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full blur-sm"
                style={{
                  left: `${progress}%`,
                  background: "hsl(var(--accent))",
                }}
              />
            </motion.div>

            {/* Progress percentage */}
            <motion.p
              className="text-primary-foreground/40 text-xs font-mono mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {progress}% — Loading modules...
            </motion.p>

            {/* Scanning lines */}
            <motion.div
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1 }}
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-0.5 rounded-full"
                  style={{ background: "hsl(var(--accent))" }}
                  animate={{
                    height: [4, 12 + Math.random() * 16, 4],
                  }}
                  transition={{
                    duration: 0.5 + Math.random() * 0.5,
                    delay: i * 0.05,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Scan line effect */}
          <motion.div
            className="absolute left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3), transparent)" }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
