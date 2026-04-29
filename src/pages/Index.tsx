import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/conference/SplashScreen";
import Navbar from "@/components/conference/Navbar";
import HeroSection from "@/components/conference/HeroSection";
import AboutSection from "@/components/conference/AboutSection";
import TracksSection from "@/components/conference/TracksSection";
import CallForPapers from "@/components/conference/CallForPapers";
import RegistrationSection from "@/components/conference/RegistrationSection";
import CommitteeSection from "@/components/conference/CommitteeSection";
import SpeakersSection from "@/components/conference/SpeakersSection";
import VenueSection from "@/components/conference/VenueSection";
import ContactSection from "@/components/conference/ContactSection";
import Footer from "@/components/conference/Footer";

const Index = () => {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("iessd_splash_shown");
  });

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen
            onComplete={() => {
              sessionStorage.setItem("iessd_splash_shown", "1");
              setShowSplash(false);
            }}
          />
        )}
      </AnimatePresence>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <CallForPapers />
      <RegistrationSection />
      <SpeakersSection />
      <CommitteeSection />
      <VenueSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
