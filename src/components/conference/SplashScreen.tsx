import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoIessd from "@/assets/logo-iessd.png";

const SPLASH_DURATION_MS = 3800; // 3.8 seconds: matched with melody length for crisp auto-reveal

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const hasFinishedRef = useRef(false);

  useEffect(() => {
    // 1. Audio Playback: attempt instant automatic playback
    const audio = new Audio("/iessd-theme.wav");
    audio.preload = "auto";
    audio.volume = 0.8;
    audioElRef.current = audio;

    // Trigger instant playback
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // In case browser policy temporarily holds it, unfreeze on ANY natural interaction
        const tryPlay = () => {
          if (!hasFinishedRef.current && audioElRef.current) {
            audioElRef.current.play().catch(() => {});
          }
          cleanupListeners();
        };

        const cleanupListeners = () => {
          window.removeEventListener("pointerdown", tryPlay);
          window.removeEventListener("pointermove", tryPlay);
          window.removeEventListener("mousemove", tryPlay);
          window.removeEventListener("touchstart", tryPlay);
          window.removeEventListener("keydown", tryPlay);
          window.removeEventListener("scroll", tryPlay);
          window.removeEventListener("wheel", tryPlay);
        };

        window.addEventListener("pointerdown", tryPlay, { passive: true, once: true });
        window.addEventListener("pointermove", tryPlay, { passive: true, once: true });
        window.addEventListener("mousemove", tryPlay, { passive: true, once: true });
        window.addEventListener("touchstart", tryPlay, { passive: true, once: true });
        window.addEventListener("keydown", tryPlay, { passive: true, once: true });
        window.addEventListener("scroll", tryPlay, { passive: true, once: true });
        window.addEventListener("wheel", tryPlay, { passive: true, once: true });
      });
    }

    // 2. Progress loop: increments to 100% and then automatically finishes
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / SPLASH_DURATION_MS) * 100, 100);
      setProgress(Math.round(pct));

      if (pct >= 100) {
        clearInterval(interval);
        if (!hasFinishedRef.current) {
          hasFinishedRef.current = true;
          setTimeout(() => {
            onComplete();
          }, 300);
        }
      }
    }, 25);

    // Guaranteed fallback timer: closes preloader automatically if interval lags
    const fallbackTimer = setTimeout(() => {
      if (!hasFinishedRef.current) {
        hasFinishedRef.current = true;
        onComplete();
      }
    }, SPLASH_DURATION_MS + 400);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimer);
      if (audioElRef.current) {
        try {
          audioElRef.current.pause();
          audioElRef.current.currentTime = 0;
        } catch (_) {}
      }
    };
  }, [onComplete]);

  // Decorative nodes
  const nodes = [
    { id: 1, x: 12, y: 18, delay: 0.2, size: 4 },
    { id: 2, x: 28, y: 35, delay: 1.1, size: 3 },
    { id: 3, x: 42, y: 15, delay: 0.7, size: 5 },
    { id: 4, x: 75, y: 22, delay: 1.8, size: 4 },
    { id: 5, x: 88, y: 40, delay: 0.4, size: 3 },
    { id: 6, x: 82, y: 78, delay: 2.1, size: 5 },
    { id: 7, x: 65, y: 85, delay: 1.3, size: 4 },
    { id: 8, x: 30, y: 82, delay: 0.9, size: 3 },
    { id: 9, x: 15, y: 65, delay: 1.5, size: 5 },
    { id: 10, x: 50, y: 90, delay: 0.5, size: 4 },
  ];

  const circuits = [
    { id: 1, x1: 10, y1: 20, x2: 30, y2: 35, delay: 0.2 },
    { id: 2, x1: 30, y1: 35, x2: 45, y2: 25, delay: 0.8 },
    { id: 3, x1: 70, y1: 20, x2: 85, y2: 38, delay: 1.2 },
    { id: 4, x1: 85, y1: 38, x2: 80, y2: 75, delay: 0.5 },
    { id: 5, x1: 20, y1: 70, x2: 35, y2: 85, delay: 1.6 },
  ];

  const statusMessages = [
    "Initializing research modules...",
    "Connecting conference nodes...",
    "Loading technical tracks...",
    "Calibrating smart systems...",
    "Connecting to iessd26.com...",
    "Welcome to IESSD'26",
  ];
  const msgIndex = Math.min(Math.floor(progress / 18), statusMessages.length - 1);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden select-none pointer-events-auto"
        style={{ background: "hsl(var(--secondary))" }}
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Subtle animated background grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating circuit nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute rounded-full pointer-events-none"
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
              scale: [0, 1, 0.6, 1.2, 0.8],
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
              strokeWidth="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.35, 0.1] }}
              transition={{
                duration: 2.5,
                delay: c.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {/* Rotating hexagonal ring */}
        <motion.div
          className="absolute pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg width="500" height="500" viewBox="0 0 500 500" className="opacity-[0.08]">
            <polygon
              points="250,50 430,150 430,350 250,450 70,350 70,150"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="1.2"
            />
          </svg>
        </motion.div>

        {/* Counter-rotating dashed ring */}
        <motion.div
          className="absolute pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <svg width="600" height="600" viewBox="0 0 600 600" className="opacity-[0.05]">
            <polygon
              points="300,40 530,170 530,430 300,560 70,430 70,170"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              strokeDasharray="20 10"
            />
          </svg>
        </motion.div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center px-4 max-w-md text-center">
          {/* Logo with pulsating glow */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 110 }}
            className="relative mb-6"
          >
            <div className="absolute inset-0 rounded-full bg-accent/25 blur-2xl scale-150 animate-pulse" />
            <motion.div
              className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-accent/40 shadow-xl"
              animate={{
                boxShadow: [
                  "0 0 20px hsl(var(--accent) / 0.2)",
                  "0 0 45px hsl(var(--accent) / 0.45)",
                  "0 0 20px hsl(var(--accent) / 0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img
                src={logoIessd}
                alt="IESSD'26"
                className="w-full h-full object-contain bg-white p-2"
              />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight mb-2 text-white drop-shadow-md"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            IESSD'26
          </motion.h2>

          <motion.p
            className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-1 drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            International Conference Portal
          </motion.p>

          <motion.p
            className="text-[11px] md:text-xs mb-8 font-mono text-secondary-foreground/75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            4th & 5th December 2026 • SLIET, Longowal, Punjab
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            className="w-64 sm:w-80 md:w-96 h-2 rounded-full overflow-hidden relative shadow-inner"
            style={{ background: "hsla(215, 30%, 15%, 0.8)" }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              className="h-full rounded-full relative"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, hsl(var(--accent)), hsl(160, 90%, 65%), hsl(var(--accent)))",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            {/* Glowing tip indicator */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full blur-sm"
              style={{
                left: `${progress}%`,
                background: "hsl(var(--accent))",
              }}
            />
          </motion.div>

          {/* Status message */}
          <motion.p
            className="text-xs font-mono mt-4 text-emerald-400 font-medium"
            key={msgIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            [{String(progress).padStart(3, " ")}%] {statusMessages[msgIndex]}
          </motion.p>

          {/* Subtle animated sound spectrum waves */}
          <motion.div
            className="flex items-center gap-1 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
              <motion.span
                key={bar}
                className="w-1 bg-accent/80 rounded-full inline-block"
                animate={{ height: ["4px", `${8 + (bar % 4) * 6}px`, "4px"] }}
                transition={{
                  duration: 0.5 + (bar % 3) * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Futuristic bottom scanline */}
        <motion.div
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.4), transparent)",
          }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
