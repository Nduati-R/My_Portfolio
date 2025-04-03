
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-portfolio-black border-t border-portfolio-green/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-portfolio-gray">
              &copy; {new Date().getFullYear()} UX/UI Designer & Developer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="bg-portfolio-darkGray hover:bg-portfolio-green/20 p-2 rounded-full text-portfolio-green transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
