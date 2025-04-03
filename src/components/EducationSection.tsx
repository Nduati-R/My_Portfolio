
import { FileDown, GraduationCap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const EducationSection = () => {
  // Education history
  const education = [
    {
      degree: "Bachelor in Informatics and Computer science",
      institution: "Strathmore University",
      period: "Jul 2022 - Jul 2026",
      description:
        "Computer Science student at Strathmore University with a passion for technology and innovation. Skilled in UX/UI design, web development, and full-stack solutions, I am eager to learn and apply my knowledge to create impactful digital experiences.",
      activities: "Activities and societies: IET Strathmore",
      skills: "Skills: Web Development · Software Development · Android Development"
    },
    {
      degree: "Certificate",
      institution: "Mang'u High School",
      period: "Feb 2018 - Mar 2022",
      description:
        "Completed my High School education at Mang'u High school",
    },
  ];

  return (
    <section id="education" className="py-24 bg-portfolio-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Education</h2>
        <p className="text-portfolio-gray text-lg max-w-2xl mx-auto text-center mb-12">
          My academic journey and continuous learning path that has shaped my
          skills and expertise.
        </p>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative border-l-2 border-portfolio-green/30 pl-8 ml-4">
            {education.map((item, index) => (
              <div
                key={index}
                className="mb-12 relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[42px] p-2 bg-portfolio-darkGray rounded-full border-2 border-portfolio-green">
                  <GraduationCap size={20} className="text-portfolio-green" />
                </div>

                <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                <div className="flex items-center text-portfolio-green my-1">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                </div>
                <h4 className="text-lg text-portfolio-lightGray mb-2">
                  {item.institution}
                </h4>
                <p className="text-portfolio-gray">{item.description}</p>
                
                {item.activities && (
                  <p className="text-portfolio-gray mt-2">{item.activities}</p>
                )}
                
                {item.skills && (
                  <p className="text-portfolio-gray mt-2">{item.skills}</p>
                )}
              </div>
            ))}
          </div>

          {/* CV Download */}
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-portfolio-green text-portfolio-green hover:bg-portfolio-green/10"
            >
              <FileDown size={18} className="mr-2" />
              Download CV
            </Button>
            <p className="text-portfolio-gray mt-2 text-sm">
              Get a complete overview of my experience and qualifications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
