import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Linkedin, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerAsset from "@/assets/prakhyat-prakhar.jpg";

const DeveloperCredit = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-label="Website credit" className="px-4 py-14 md:py-20">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
        className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-border bg-card shadow-card"
      >
        <div className="grid items-center md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex flex-col items-center gap-6 p-7 text-center sm:flex-row sm:text-left md:p-10">
            <motion.img
              src={developerAsset}
              alt="Prakhyat Prakhar"
              loading="lazy"
              width={1024}
              height={1024}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.035 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="h-28 w-28 shrink-0 rounded-full border-4 border-background object-cover object-top shadow-elevated md:h-32 md:w-32"
            />
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Website credit
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
                Prakhyat Prakhar
              </h2>
              <p className="mt-1 text-sm text-foreground">
                Designed &amp; developed for IESSD’26
              </p>
              <motion.div
                initial={prefersReducedMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.65, delay: 0.15 }}
                className="mx-auto mt-4 h-1 w-16 origin-left rounded-full bg-accent sm:mx-0"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 border-t border-border p-5 md:h-full md:border-l md:border-t-0 md:px-8">
            <Button asChild variant="outline" className="gap-2">
              <a
                href="https://prakhyatprakhar.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Prakhyat Prakhar's portfolio website in a new tab"
              >
                <Globe aria-hidden="true" size={16} />
                Portfolio
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a
                href="https://github.com/Prakhyat05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Prakhyat Prakhar's GitHub profile in a new tab"
              >
                <Github aria-hidden="true" size={16} />
                GitHub
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a
                href="https://www.linkedin.com/in/prakhyat-prakhar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Prakhyat Prakhar’s LinkedIn profile in a new tab"
              >
                <Linkedin aria-hidden="true" size={16} />
                LinkedIn
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DeveloperCredit;
