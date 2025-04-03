
import { Code, Palette, Database, Layout } from "lucide-react";

const SkillsSection = () => {
  // Skill categories with associated technologies
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-portfolio-green" size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      icon: <Code className="text-portfolio-green" size={24} />,
      skills: ["Java", "Django", "Laravel"],
    },
    {
      title: "Database",
      icon: <Database className="text-portfolio-green" size={24} />,
      skills: ["MySQL"],
    },
    {
      title: "Design",
      icon: <Palette className="text-portfolio-green" size={24} />,
      skills: ["UI/UX Design", "Wireframing", "Prototyping"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-portfolio-black/95">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">My Skills</h2>
        <p className="text-portfolio-gray text-lg max-w-2xl mx-auto text-center mb-12">
          A combination of design expertise and development skills that allows me
          to create end-to-end digital experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card group"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2 text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-portfolio-gray group-hover:text-portfolio-lightGray transition-colors flex items-center"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-portfolio-green mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skill meter section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "HTML", value: 90 },
              { name: "CSS", value: 85 },
              { name: "React", value: 80 },
              { name: "JavaScript", value: 75 },
              { name: "Java", value: 70 },
              { name: "Django", value: 65 },
              { name: "MySQL", value: 75 },
              { name: "Laravel", value: 60 },
            ].map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-portfolio-lightGray">{skill.name}</span>
                  <span className="text-portfolio-green">{skill.value}%</span>
                </div>
                <div className="w-full bg-portfolio-darkGray rounded-full h-2.5">
                  <div
                    className="bg-portfolio-green h-2.5 rounded-full"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
