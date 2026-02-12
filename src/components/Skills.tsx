const skills = [
  { name: "Python", level: 85 },
  { name: "Machine Learning", level: 75 },
  { name: "Data Analysis", level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" data-animate className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Core competencies that power my data science journey.
        </p>

        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${skill.level}%`,
                    background: "linear-gradient(90deg, hsl(217 91% 60%), hsl(200 100% 70%))",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
