import { Link } from "react-router-dom";
import logo from "@/assets/iessd-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-4 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="IESSD'26" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-heading font-bold text-secondary-foreground text-lg">IESSD'26</p>
              <p className="text-secondary-foreground/80 text-sm">
                Innovative Engineering Solutions for Sustainable Development
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { label: "About", href: "/about" },
              { label: "Tracks", href: "/tracks" },
              { label: "Registration", href: "/registration" },
              { label: "Committee", href: "/committee" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="text-secondary-foreground/80 hover:text-accent transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-secondary-foreground/15 mt-8 pt-6 text-center">
          <p className="text-secondary-foreground/60 text-xs">
            Organized by Sant Longowal Institute of Engineering & Technology, Longowal-148106, Sangrur, Punjab, India (Deemed-to-be-University under MoE, Govt. of India)
          </p>
          <p className="text-secondary-foreground/50 text-xs mt-2">
            © 2026 SLIET, Longowal. All rights reserved.
          </p>
          <p className="text-secondary-foreground/50 text-xs mt-4 max-w-3xl mx-auto leading-relaxed">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
