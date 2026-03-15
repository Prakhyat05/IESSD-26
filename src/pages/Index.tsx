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
import VenueSection from "@/components/conference/VenueSection";
import ContactSection from "@/components/conference/ContactSection";
import Footer from "@/components/conference/Footer";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <CallForPapers />
      <RegistrationSection />
      <CommitteeSection />
      <VenueSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
