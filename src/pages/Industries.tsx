import { Link } from "react-router-dom";
import { ArrowRight, Home, Building2, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const industries = [
  {
    icon: Home,
    name: "Residential",
    description: "Individual homes, villas, apartments, and housing societies",
    services: [
      "Land survey and site planning",
      "Architectural and interior design",
      "Home construction and renovation",
      "Garden and landscape development",
    ],
    projects: "200+ residential projects delivered",
  },
  {
    icon: Building2,
    name: "Commercial",
    description: "Offices, retail spaces, hospitality, and healthcare facilities",
    services: [
      "Commercial land assessment",
      "Workspace and retail interiors",
      "Commercial construction management",
      "Campus landscaping and maintenance",
    ],
    projects: "75+ commercial projects completed",
  },
  {
    icon: Landmark,
    name: "Infrastructure",
    description: "Government projects, institutions, and public infrastructure",
    services: [
      "Large-scale surveying and GIS",
      "Infrastructure planning consultancy",
      "Public building construction",
      "Urban greening and public spaces",
    ],
    projects: "50+ infrastructure projects executed",
  },
];

export default function Industries() {
  const heroSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider animate-fade-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              Industries
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold text-foreground animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Solutions for Every Sector
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Our integrated services adapt to the unique requirements of residential, commercial, and infrastructure projects. Whatever your sector, we have the expertise to deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="space-y-16">
            {industries.map((industry, index) => {
              const sectionRef = useScrollAnimation();
              return (
                <div
                  key={industry.name}
                  ref={sectionRef.ref}
                  className={cn(
                    "grid lg:grid-cols-2 gap-12 items-center",
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    index % 2 === 1 ? "lg:order-2" : "",
                    "scroll-slide-left",
                    sectionRef.isVisible && "visible"
                  )}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-105 group">
                        <industry.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h2 className="text-3xl font-display font-bold text-foreground">
                        {industry.name}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">{industry.description}</p>
                    <ul className="space-y-3 mb-6">
                      {industry.services.map((service, serviceIndex) => (
                        <li 
                          key={service} 
                          className={cn(
                            "flex items-center gap-3 text-foreground scroll-fade-up",
                            sectionRef.isVisible && "visible"
                          )}
                          style={{ transitionDelay: `${serviceIndex * 100 + 200}ms` }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-medium text-primary">{industry.projects}</p>
                  </div>
                  <div className={cn(
                    index % 2 === 1 ? "lg:order-1" : "",
                    "scroll-slide-right",
                    sectionRef.isVisible && "visible"
                  )}>
                    <div className="aspect-[4/3] rounded-2xl bg-sage flex items-center justify-center hover-lift transition-all duration-300 group">
                      <industry.icon className="h-24 w-24 text-primary/20 transition-all duration-300 group-hover:text-primary/40 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div 
          ref={ctaSection.ref}
          className={cn("container text-center scroll-scale-in", ctaSection.isVisible && "visible")}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Tell us about your requirements. We'll show you how our integrated approach can benefit your specific sector.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
