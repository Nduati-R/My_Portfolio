
import { FileDown, GraduationCap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const EducationSection = () => {
  // Education history
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Tech University",
      period: "2018 - 2022",
      description:
        "Focused on UI/UX design principles and full-stack development. Graduated with honors.",
    },
    {
      degree: "UX/UI Design Certification",
      institution: "Design Academy",
      period: "2022 - 2023",
      description:
        "Intensive program covering user research, wireframing, prototyping, and modern design systems.",
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
