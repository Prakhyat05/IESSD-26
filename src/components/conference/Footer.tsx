import { Link } from "react-router-dom";
import logo from "@/assets/iessd-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="IESSD'26" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-heading font-bold text-secondary-foreground text-lg">IESSD'26</p>
              <p className="text-secondary-foreground/60 text-sm">
                Innovative Engineering Solutions for Sustainable Development
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { label: "About", href: "/about" },
              { label: "Tracks", href: "/tracks" },
              { label: "Registration", href: "/registration" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-secondary-foreground/10 mt-8 pt-6 text-center">
          <p className="text-secondary-foreground/40 text-xs">
            © 2026 SLIET, Longowal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
