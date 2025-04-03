
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import InterestsSection from "@/components/InterestsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-black">
      <Header />
      <HeroSection name="Ryan Njoroge Nduati" />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
