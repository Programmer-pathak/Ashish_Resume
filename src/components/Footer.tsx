import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50">
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, transparent, hsl(217 91% 60%), hsl(200 100% 70%), transparent)" }}
      />
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ashish Kumar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/ashish-kumar-045808301"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Programmer-pathak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
