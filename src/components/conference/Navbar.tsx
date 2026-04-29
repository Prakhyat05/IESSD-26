import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/iessd-logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tracks", href: "/tracks" },
  { label: "Call for Papers", href: "/call-for-papers" },
  { label: "Registration", href: "/registration" },
  { label: "Speakers", href: "/speakers" },
  { label: "Committee", href: "/committee" },
  { label: "Venue", href: "/venue" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled || !isHome ? "text-foreground" : "text-primary-foreground";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="IESSD'26 Logo" className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover" />
          <span className={`font-heading font-bold text-base md:text-lg transition-colors ${textColor}`}>
            IESSD'26
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-1 flex-1 justify-end">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`px-2.5 py-2 text-[13px] font-semibold rounded-md whitespace-nowrap transition-all duration-200 hover:bg-accent/15 ${
                location.pathname === l.href
                  ? "text-accent bg-accent/10"
                  : scrolled || !isHome
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-emerald-100 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild className="ml-2 bg-accent hover:bg-accent/90 border-0 text-accent-foreground font-semibold shadow-card text-[13px] px-4 py-2 whitespace-nowrap">
            <Link to="/registration">Register</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`xl:hidden p-2 ${textColor}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <nav className="container mx-auto py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md hover:bg-accent/10 ${
                  location.pathname === l.href ? "text-accent font-semibold" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-accent hover:bg-accent/90 border-0 text-accent-foreground font-semibold">
              <Link to="/registration" onClick={() => setOpen(false)}>Register Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
