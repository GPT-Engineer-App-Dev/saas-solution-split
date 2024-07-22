import { useEffect } from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import QuotesCarousel from "./QuotesCarousel";
import ContactSection from "./ContactSection";

const Index = () => {
  useEffect(() => {
    const handleNavClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
    document.addEventListener('click', handleNavClick);
    return () => {
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <QuotesCarousel />
      <ContactSection />
    </div>
  );
};

export default Index;