import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Call for Papers", href: "#cfp" },
  { label: "Registration", href: "#registration" },
  { label: "Committee", href: "#committee" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-elevated" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#home" className={`font-heading font-bold text-lg md:text-xl transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          IESSD'26
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 ${
                scrolled ? "text-foreground" : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="ml-3 gradient-accent border-0 text-primary-foreground font-semibold shadow-card hover:opacity-90">
            <a href="#registration">Register Now</a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass border-t border-border">
          <nav className="container mx-auto py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-foreground rounded-md hover:bg-primary/10"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 gradient-accent border-0 text-primary-foreground font-semibold">
              <a href="#registration" onClick={() => setOpen(false)}>Register Now</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
