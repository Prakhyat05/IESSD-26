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
  return (
    <>
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
