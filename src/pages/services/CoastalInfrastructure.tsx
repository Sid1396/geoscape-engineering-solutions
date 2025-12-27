import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const offerings = [
  "In-situ measurements and site surveys",
  "Coastal erosion assessment and monitoring",
  "Wave and tidal analysis",
  "Coastal structure design and modelling",
  "Port and harbor infrastructure development",
  "Beach nourishment and restoration",
  "Coastal protection structures",
  "Environmental impact assessment",
];

const benefits = [
  {
    title: "Expert Engineering",
    description: "Specialized knowledge in coastal dynamics and marine infrastructure design.",
  },
  {
    title: "Advanced Modelling",
    description: "State-of-the-art software for wave, tide, and sediment transport analysis.",
  },
  {
    title: "Sustainable Solutions",
    description: "Environmentally responsible designs that protect coastlines and ecosystems.",
  },
  {
    title: "Proven Experience",
    description: "Successfully completed coastal infrastructure projects across India's coastline.",
  },
];

export default function CoastalInfrastructure() {
  const overviewSection = useScrollAnimation();
  const whoSection = useScrollAnimation();
  const benefitsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <Link to="/services/coastal-infrastructure" className="text-sm font-medium text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors animate-fade-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              Services
            </Link>
            <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Coastal Infrastructure Development
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              In-situ measurements, modelling, and design for resilient coastal infrastructure. Protecting shorelines while enabling sustainable development along India's vast coastline.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div ref={overviewSection.ref} className="grid lg:grid-cols-2 gap-12">
            <div className={cn("scroll-slide-left", overviewSection.isVisible && "visible")}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Overview</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
                Building Resilient Coastal Infrastructure
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Coastal infrastructure development requires specialized expertise in marine engineering, coastal dynamics, and environmental considerations. Our team combines field measurements, advanced modelling, and innovative design to create structures that withstand coastal forces while protecting ecosystems.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From ports and harbors to coastal protection structures, we deliver solutions that balance development needs with environmental stewardship, ensuring long-term sustainability of India's coastal regions.
              </p>
            </div>
            <div className={cn("bg-sage rounded-xl p-8 scroll-slide-right hover-lift", overviewSection.isVisible && "visible")}>
              <h3 className="text-xl font-semibold text-foreground mb-6">What We Offer</h3>
              <div className="grid grid-cols-1 gap-3">
                {offerings.map((item, index) => (
                  <div 
                    key={item} 
                    className={cn(
                      "flex items-center gap-3 scroll-fade-up",
                      overviewSection.isVisible && "visible"
                    )}
                    style={{ transitionDelay: `${index * 50 + 200}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div 
            ref={whoSection.ref}
            className={cn("text-center max-w-2xl mx-auto mb-12 scroll-fade-up", whoSection.isVisible && "visible")}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Who It's For</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
              Serving Coastal Development Needs
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Port Authorities", description: "Port and harbor development, berth design, and marine terminal infrastructure." },
              { title: "Government Agencies", description: "Coastal protection projects, beach restoration, and public infrastructure development." },
              { title: "Private Developers", description: "Coastal resorts, marinas, and waterfront development projects." },
            ].map((item, index) => (
              <div 
                key={item.title}
                className={cn(
                  "p-6 bg-card rounded-xl border border-border hover-lift scroll-fade-up",
                  whoSection.isVisible && "visible"
                )}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div 
            ref={benefitsSection.ref}
            className={cn("text-center max-w-2xl mx-auto mb-12 scroll-fade-up", benefitsSection.isVisible && "visible")}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Benefits</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
              Why Choose Our Coastal Infrastructure Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className={cn("text-center scroll-scale-in", benefitsSection.isVisible && "visible")}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
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
            Planning a Coastal Project?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Contact us to discuss your coastal infrastructure requirements. Our team will provide expert guidance and comprehensive solutions.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/contact">
                Get Coastal Infrastructure Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

