import { Link } from "react-router-dom";
import { ArrowRight, Compass, Palette, Building, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/hero-bg.png";
import engineeringTeamImg from "@/assets/engineering-team-on-site.jpg";

const services = [
  {
    icon: Compass,
    title: "Surveying & Geospatial",
    description: "Precision land, topographic, DGPS, drone, and LiDAR surveys with GIS mapping for accurate project planning.",
    href: "/services/surveying",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Transform spaces with innovative residential and commercial interior solutions, from concept to execution.",
    href: "/services/interior-design",
  },
  {
    icon: Building,
    title: "Construction",
    description: "End-to-end construction management and project consultancy delivering quality builds on time and budget.",
    href: "/services/construction",
  },
  {
    icon: TreePine,
    title: "Landscape & Horticulture",
    description: "Sustainable landscape design, green roofs, and urban greenery solutions for healthier environments.",
    href: "/services/landscape",
  },
];

const whyChooseUs = [
  {
    title: "One-Stop Solution",
    description: "From survey to handover, we manage your entire project lifecycle under one roof.",
  },
  {
    title: "Technical Excellence",
    description: "Our team combines decades of experience with cutting-edge technology and methodology.",
  },
  {
    title: "Sustainability Focus",
    description: "Every project incorporates green building practices and sustainable development principles.",
  },
  {
    title: "Cost Efficiency",
    description: "Integrated services eliminate coordination gaps and reduce overall project costs.",
  },
];

const process = [
  { step: "01", title: "Survey", description: "Accurate site assessment and mapping" },
  { step: "02", title: "Design", description: "Creative space planning and visualization" },
  { step: "03", title: "Build", description: "Quality construction and execution" },
  { step: "04", title: "Green", description: "Sustainable finishing and landscaping" },
];

const industries = [
  { name: "Residential", description: "Individual homes, villas, and apartment complexes" },
  { name: "Commercial", description: "Offices, retail spaces, and hospitality projects" },
  { name: "Infrastructure", description: "Government and large-scale development projects" },
];

function AnimatedSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div 
      ref={ref} 
      className={cn("scroll-fade-up", isVisible && "visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const servicesSection = useScrollAnimation();
  const whySection = useScrollAnimation();
  const processSection = useScrollAnimation();
  const industriesSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate/95 via-slate/80 to-slate/40" />
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium bg-primary/20 text-primary-foreground rounded-full animate-fade-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              Integrated Solutions • Pan-India Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-tight animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Survey. Design. Build. <span className="text-accent">Sustain.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-background/80 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Your trusted partner for end-to-end surveying, interior design, construction, and sustainable landscape development. One team, complete solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/contact">
                  Request Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/services/surveying">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div 
            ref={servicesSection.ref}
            className={cn("text-center max-w-2xl mx-auto mb-16 scroll-fade-up", servicesSection.isVisible && "visible")}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
              Comprehensive Project Solutions
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Four specialized divisions working seamlessly together to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className={cn(
                  "group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover-lift scroll-fade-up",
                  servicesSection.isVisible && "visible"
                )}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={whySection.ref} className={cn("scroll-slide-left", whySection.isVisible && "visible")}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Geoscape</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
                Your Complete Project Partner
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                We eliminate the complexity of managing multiple vendors. Our integrated approach ensures seamless coordination, consistent quality, and faster project delivery.
              </p>
              
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div 
                    key={item.title} 
                    className={cn("space-y-2 scroll-fade-up", whySection.isVisible && "visible")}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm pl-11">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={cn("relative scroll-slide-right", whySection.isVisible && "visible")}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl">
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full">
                  {/* Professional Engineering Image */}
                  <img
                    src={engineeringTeamImg}
                    alt="Civil engineers coordinating on construction site, reviewing plans and using tablets"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Subtle Brand Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-slate/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-slate text-background">
        <div className="container">
          <div 
            ref={processSection.ref}
            className={cn("text-center max-w-2xl mx-auto mb-16 scroll-fade-up", processSection.isVisible && "visible")}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Process</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-background">
              From Vision to Reality
            </h2>
            <p className="mt-4 text-background/90 text-lg">
              A streamlined four-phase approach that delivers excellence at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div 
                key={item.step} 
                className={cn("relative text-center scroll-scale-in", processSection.isVisible && "visible")}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-light/20" />
                )}
                <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                  <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">{item.title}</h3>
                <p className="text-background/90 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div 
            ref={industriesSection.ref}
            className={cn("text-center max-w-2xl mx-auto mb-16 scroll-fade-up", industriesSection.isVisible && "visible")}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Industries We Serve</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
              Solutions for Every Sector
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={industry.name} 
                className={cn(
                  "group p-8 rounded-xl bg-sage hover:bg-primary transition-all duration-300 cursor-pointer hover-lift scroll-fade-up",
                  industriesSection.isVisible && "visible"
                )}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          <div className={cn("mt-12 text-center scroll-fade-up", industriesSection.isVisible && "visible")} style={{ transitionDelay: '500ms' }}>
            <Button variant="default" size="lg" asChild className="group">
              <Link to="/industries">
                View All Industries
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div 
          ref={ctaSection.ref}
          className={cn("container text-center scroll-scale-in", ctaSection.isVisible && "visible")}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground max-w-2xl mx-auto">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Let's discuss your project requirements. Our team is ready to provide a comprehensive solution tailored to your needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:+918425984962">Call Us Now</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
