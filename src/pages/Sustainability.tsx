import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Droplets, Sun, Recycle, TreePine, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const practices = [
  {
    icon: Leaf,
    title: "Green Building Materials",
    description: "We prioritize sustainable, locally-sourced materials that reduce environmental impact and improve indoor air quality.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Rainwater harvesting, efficient irrigation, and water recycling systems are integrated into our designs.",
  },
  {
    icon: Sun,
    title: "Energy Efficiency",
    description: "Passive design principles, optimal orientation, and energy-efficient systems reduce operational costs.",
  },
  {
    icon: Recycle,
    title: "Waste Management",
    description: "Construction waste is minimized through careful planning and recycling of materials wherever possible.",
  },
  {
    icon: TreePine,
    title: "Native Landscaping",
    description: "We use indigenous plants that require less water and maintenance while supporting local biodiversity.",
  },
  {
    icon: Wind,
    title: "Natural Ventilation",
    description: "Design strategies that maximize natural airflow reduce dependence on mechanical cooling.",
  },
];

export default function Sustainability() {
  const commitmentSection = useScrollAnimation();
  const practicesSection = useScrollAnimation();
  const impactSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-primary-foreground/60 uppercase tracking-wider animate-fade-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              Sustainability
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Building a Greener Future
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Sustainability isn't an add-on for us—it's fundamental to how we approach every project. From surveying to construction to landscaping, environmental responsibility guides our decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div 
            ref={commitmentSection.ref}
            className={cn("max-w-3xl mx-auto text-center scroll-fade-up", commitmentSection.isVisible && "visible")}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Commitment</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
              Responsible Development
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              India's rapid development brings immense opportunities—and responsibilities. We believe that growth and environmental stewardship can go hand in hand. Every project we undertake considers its impact on the local ecosystem, community, and future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div 
            ref={practicesSection.ref}
            className={cn("text-center max-w-2xl mx-auto mb-16 scroll-fade-up", practicesSection.isVisible && "visible")}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Practices</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
              How We Build Sustainably
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <div 
                key={practice.title} 
                className={cn(
                  "p-6 bg-card rounded-xl border border-border hover-lift group scroll-fade-up",
                  practicesSection.isVisible && "visible"
                )}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <practice.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{practice.title}</h3>
                <p className="text-muted-foreground text-sm">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 md:py-28 bg-slate text-background">
        <div className="container">
          <div ref={impactSection.ref} className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "30%", label: "Average water savings through our irrigation designs" },
              { value: "10,000+", label: "Native trees planted across our projects" },
              { value: "40%", label: "Construction waste diverted from landfills" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={cn("scroll-scale-in", impactSection.isVisible && "visible")}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl font-display font-bold text-accent">{stat.value}</div>
                <div className="mt-2 text-slate-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div 
            ref={ctaSection.ref}
            className={cn("max-w-3xl mx-auto text-center scroll-scale-in", ctaSection.isVisible && "visible")}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Build Sustainably with Us
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Whether you're planning a home, commercial project, or large development, we can help you achieve your goals while minimizing environmental impact.
            </p>
            <div className="mt-8">
              <Button variant="default" size="xl" asChild className="group">
                <Link to="/contact">
                  Start Your Green Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
