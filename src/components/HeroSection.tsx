
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-portfolio-black text-white overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-green/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-green/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h2 className="text-portfolio-green text-xl md:text-2xl font-medium mb-4">
            Hello, I'm a
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            UX/UI Designer &<br />
            <span className="text-portfolio-green">
              Future Full Stack Developer
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-portfolio-gray mb-8">
            Creating beautiful, functional, and user-centered digital experiences
            while constantly expanding my development skills.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              className="bg-portfolio-green hover:bg-portfolio-green/90 text-black font-medium px-8 py-6"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              variant="outline"
              className="border-portfolio-green text-portfolio-green hover:bg-portfolio-green/10 px-8 py-6"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-portfolio-gray hover:text-portfolio-green transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
