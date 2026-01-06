import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "W-Blog - Blog/News Web",
    description: "A web to provide user with daily information",
    image: "/projects/ProjectPWL.jpeg",
    tags: ["Laravel", "MySQL"],
    githubUrl: "https://github.com/refaelsiagian/Tubes-Blog",
  },
  {
    id: 2,
    title: "Cashier Web - Sinar Jaya Baru",
    description: "A cashier app managing a electronic shop.",
    image: "/projects/ProjectMSBD.jpeg",
    tags: ["Laravel", "MySQL"],
    githubUrl: "https://github.com/coderdestroyer/kasirSJB-Fix",
  },
  {
    id: 3,
    title: "Clinic Web - Schon Clinic",
    description:
      "A website to see Schon Clinic's profile and make reservation.",
    image: "/projects/ProjectIMK.jpeg",
    tags: ["Laravel", "Tailwind", "MySQL"],
    githubUrl: "https://github.com/coderdestroyer/web-klinik",
  },
  {
    id: 4,
    title: "Volunite - Volunteer Mobile App",
    description:
      "Full-featured volunteer platform with user authentication and input validation.",
    image: "/projects/ProjectPM.jpeg",
    tags: ["Flutter", "Laravel", "MySQL"],
    githubUrl: "https://github.com/Mayadi21/volunite",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id} // Sebaiknya gunakan id unik daripada key index
              className={`group bg-card rounded-lg overflow-hidden shadow-xs card-hover ${
                // Logika: Jika ini elemen ke-4 (index 3) DAN total data ada 4
                // Maka pada layar besar (lg), mulai dari kolom ke-2 (tengah)
                index === 3 && projects.length === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/coderdestroyer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};