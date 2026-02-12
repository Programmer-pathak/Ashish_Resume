import { GraduationCap, Code, Lightbulb } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Vignan University",
    period: "2025 – 2027",
    status: "Currently Pursuing",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Bhupendra Narayan University",
    period: "2020 – 2023",
    status: "Completed",
  },
];

const hobbies = [
  { icon: Lightbulb, label: "Adapting to new technologies" },
  { icon: Code, label: "Coding & problem solving" },
];

const About = () => {
  return (
    <section id="about" data-animate className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          A passionate data science enthusiast with a solid academic foundation and a drive
          to solve real-world problems through machine learning and analytics.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="glass-card p-5">
                  <p className="font-semibold text-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground">{edu.period}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {edu.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies & Interests */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Interests</h3>
            <div className="space-y-4">
              {hobbies.map((hobby) => (
                <div key={hobby.label} className="glass-card p-5 flex items-center gap-4">
                  <hobby.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{hobby.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
