import { Brain, BarChart3, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "ML Model Development",
    description: "Custom machine learning model creation tailored to your data and business goals.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis Workflows",
    description: "End-to-end data analysis pipelines for actionable insights and reporting.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecasting solutions that leverage historical data to predict future trends.",
  },
];

const Services = () => {
  return (
    <section id="services" data-animate className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          What I can help you build.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
