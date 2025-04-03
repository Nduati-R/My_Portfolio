
import { ExternalLink, Github, Folder } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const ProjectsSection = () => {
  // Projects data
  const projects = [
    {
      title: "E-commerce UI Redesign",
      description: "A complete UI/UX overhaul for an e-commerce platform, focusing on improved user flow and conversion optimization.",
      technologies: ["Figma", "React", "CSS"],
      link: "#",
      repo: "#",
      imageType: "ecommerce",
    },
    {
      title: "Task Management App",
      description: "Full-stack task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Django", "MySQL"],
      link: "#",
      repo: "#",
      imageType: "task",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing UI/UX and development skills with a focus on modern design principles.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      repo: "#",
      imageType: "portfolio",
    },
    {
      title: "Healthcare Dashboard",
      description: "Interactive dashboard for healthcare providers to monitor patient data and treatment progress.",
      technologies: ["React", "Laravel", "MySQL"],
      link: "#",
      repo: "#",
      imageType: "dashboard",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-portfolio-black/95">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">My Projects</h2>
        <p className="text-portfolio-gray text-lg max-w-2xl mx-auto text-center mb-12">
          A selection of my recent work that demonstrates my design and
          development capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-portfolio-darkGray border border-portfolio-green/20 overflow-hidden group hover:border-portfolio-green/40 transition-all duration-300"
            >
              {/* Project image placeholder */}
              <div className="aspect-video bg-portfolio-black/50 flex items-center justify-center overflow-hidden">
                <div className="text-portfolio-green/30 transform scale-150 opacity-20 group-hover:opacity-30 transition-opacity">
                  {project.imageType === "ecommerce" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  ) : project.imageType === "task" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
                  ) : project.imageType === "portfolio" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  )}
                </div>
              </div>

              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <Folder className="text-portfolio-green" size={20} />
                </div>
              </CardHeader>

              <CardContent className="p-4 pt-2">
                <p className="text-portfolio-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-portfolio-black px-2 py-1 rounded text-portfolio-green"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex justify-end gap-3">
                <a
                  href={project.repo}
                  className="text-portfolio-gray hover:text-portfolio-green transition-colors"
                  aria-label="View Github repository"
                >
                  <Github size={18} />
                </a>
                <a
                  href={project.link}
                  className="text-portfolio-gray hover:text-portfolio-green transition-colors"
                  aria-label="Visit live project"
                >
                  <ExternalLink size={18} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
