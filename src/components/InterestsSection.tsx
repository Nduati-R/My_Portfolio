
import { Lightbulb, Code, Palette, Monitor, Database, Globe } from "lucide-react";

const InterestsSection = () => {
  // Interests data
  const interests = [
    {
      title: "UI/UX Design",
      icon: <Palette size={32} className="text-portfolio-green" />,
      description:
        "Creating intuitive interfaces that combine aesthetic appeal with functional design that enhances user experience.",
    },
    {
      title: "Frontend Development",
      icon: <Monitor size={32} className="text-portfolio-green" />,
      description:
        "Building responsive, interactive web applications using modern frameworks and libraries like React.",
    },
    {
      title: "Backend Systems",
      icon: <Database size={32} className="text-portfolio-green" />,
      description:
        "Developing robust server-side applications and APIs using Django and Laravel frameworks.",
    },
    {
      title: "Emerging Technologies",
      icon: <Lightbulb size={32} className="text-portfolio-green" />,
      description:
        "Exploring new technologies, frameworks, and methodologies that push the boundaries of web development.",
    },
    {
      title: "Clean Code",
      icon: <Code size={32} className="text-portfolio-green" />,
      description:
        "Writing maintainable, efficient code with a focus on best practices and design patterns.",
    },
    {
      title: "Web Accessibility",
      icon: <Globe size={32} className="text-portfolio-green" />,
      description:
        "Ensuring digital products are accessible to all users, including those with disabilities.",
    },
  ];

  return (
    <section id="interests" className="py-24 bg-portfolio-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">My Interests</h2>
        <p className="text-portfolio-gray text-lg max-w-2xl mx-auto text-center mb-12">
          Areas of technology and development that fascinate me and drive my
          continuous learning and growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="p-6 bg-portfolio-darkGray rounded-lg border border-portfolio-green/20 hover:border-portfolio-green/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{interest.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {interest.title}
              </h3>
              <p className="text-portfolio-gray">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
