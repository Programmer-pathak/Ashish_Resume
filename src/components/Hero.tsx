import { ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-glow-pulse [animation-delay:1.5s]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(217 91% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60% / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto text-center max-w-4xl">
        {/* Avatar placeholder */}
        <div className="mx-auto mb-8 w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-primary/50 overflow-hidden bg-secondary flex items-center justify-center shadow-xl shadow-primary/20">
          <span className="text-5xl md:text-6xl font-bold gradient-text">AK</span>
        </div>

        <p className="text-primary text-sm md:text-base font-medium tracking-widest uppercase mb-4">
          Aspiring Data Scientist
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="gradient-text">Ashish Kumar</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          Machine Learning &amp; Data Analysis
        </p>
        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
          Pursuing MCA from Vignan University with a strong foundation in data science,
          machine learning, and Python.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#projects">
              View My Work <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <a
          href="#about"
          className="inline-block mt-16 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
