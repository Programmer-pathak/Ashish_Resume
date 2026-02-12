import { Award } from "lucide-react";

const achievements = [
  {
    title: "Workshop on Python & Machine Learning",
    description: "Completed an intensive workshop covering Python fundamentals, data manipulation, and core ML algorithms.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" data-animate className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Achievements <span className="gradient-text">& Workshops</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Continuous learning and professional development.
        </p>

        <div className="space-y-4">
          {achievements.map((item) => (
            <div key={item.title} className="glass-card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
