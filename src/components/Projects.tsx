import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Weather Prediction System",
    description:
      "A machine learning project that predicts rainfall, temperature, and humidity using historical weather data. Built with TensorFlow for model training and evaluated with standard metrics.",
    tech: ["Python", "NumPy", "Pandas", "TensorFlow"],
    github: "https://github.com/Programmer-pathak",
  },
];

const Projects = () => {
  return (
    <section id="projects" data-animate className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Hands-on work showcasing my data science skills.
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.title} className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="bg-primary/10 text-primary border-0">
                    {t}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  View on GitHub <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
