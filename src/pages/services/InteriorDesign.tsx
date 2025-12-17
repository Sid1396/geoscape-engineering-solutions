import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const offerings = [
  "Residential Interior Design",
  "Commercial & Office Interiors",
  "2D & 3D Visualization",
  "Space Planning & Layout",
  "Material Selection & Procurement",
  "Custom Furniture Design",
  "Lighting Design",
  "Turnkey Interior Execution",
];

const benefits = [
  { title: "End-to-End Service", description: "From concept to completion, we handle every aspect of your interior project." },
  { title: "Custom Solutions", description: "Designs tailored to your lifestyle, brand, and budget requirements." },
  { title: "Quality Materials", description: "Access to premium materials and trusted vendor partnerships." },
  { title: "On-Time Delivery", description: "Project management expertise ensures timely completion." },
];

export default function InteriorDesign() {
  const overviewSection = useScrollAnimation();
  const whoSection = useScrollAnimation();
  const benefitsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <Link to="/services/interior-design" className="text-sm font-medium text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors animate-fade-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>Services</Link>
            <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>Interior Design & Space Planning</h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>Transform your spaces with thoughtful design. We create interiors that blend aesthetics, functionality, and your unique personality—from concept to turnkey execution.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div ref={overviewSection.ref} className="grid lg:grid-cols-2 gap-12">
            <div className={cn("scroll-slide-left", overviewSection.isVisible && "visible")}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Overview</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">Spaces That Inspire</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">Great interiors go beyond aesthetics—they enhance how you live and work. Our design team creates spaces that are beautiful, functional, and uniquely yours.</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">Whether it's a cozy home, a productive office, or an inviting retail space, we bring your vision to life through creative design, quality materials, and meticulous execution.</p>
            </div>
            <div className={cn("bg-sage rounded-xl p-8 hover-lift scroll-slide-right", overviewSection.isVisible && "visible")}>
              <h3 className="text-xl font-semibold text-foreground mb-6">What We Offer</h3>
              <div className="grid grid-cols-1 gap-3">
                {offerings.map((item, index) => (
                  <div key={item} className={cn("flex items-center gap-3 scroll-fade-up", overviewSection.isVisible && "visible")} style={{ transitionDelay: `${index * 50 + 200}ms` }}>
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div ref={whoSection.ref} className={cn("text-center max-w-2xl mx-auto mb-12 scroll-fade-up", whoSection.isVisible && "visible")}>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Who It's For</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">Design Solutions for Everyone</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Homeowners", description: "Complete home interiors, kitchen design, bedroom makeovers, and living space transformations." },
              { title: "Businesses", description: "Office interiors, retail spaces, restaurants, and hospitality environments that reflect your brand." },
              { title: "Developers", description: "Model apartments, common area design, and bulk interior packages for residential projects." },
            ].map((item, index) => (
              <div key={item.title} className={cn("p-6 bg-card rounded-xl border border-border hover-lift scroll-fade-up", whoSection.isVisible && "visible")} style={{ transitionDelay: `${index * 100 + 200}ms` }}>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div ref={benefitsSection.ref} className={cn("text-center max-w-2xl mx-auto mb-12 scroll-fade-up", benefitsSection.isVisible && "visible")}>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Benefits</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">Why Choose Our Interior Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className={cn("text-center scroll-scale-in", benefitsSection.isVisible && "visible")} style={{ transitionDelay: `${index * 100 + 200}ms` }}>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary">
        <div ref={ctaSection.ref} className={cn("container text-center scroll-scale-in", ctaSection.isVisible && "visible")}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">Ready to Transform Your Space?</h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Schedule a design consultation to discuss your vision and get a customized proposal.</p>
          <div className="mt-8">
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/contact">Book Design Consultation<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
