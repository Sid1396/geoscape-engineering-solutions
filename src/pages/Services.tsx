import { Link } from "react-router-dom";
import { ArrowRight, Compass, Palette, Building, TreePine, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Compass,
    title: "End-to-end surveying and Geomatic services",
    description: "Comprehensive surveying solutions including precision land, topographic, DGPS, drone, and LiDAR surveys with GIS mapping for accurate project planning.",
    href: "/services/surveying",
  },
  {
    icon: Waves,
    title: "Coastal infrastructure development",
    description: "In-situ measurements, modelling, and design for coastal infrastructure projects with precision and expertise.",
    href: "/services/coastal-infrastructure",
  },
  {
    icon: Palette,
    title: "Interior design and space planning",
    description: "Transform spaces with innovative residential and commercial interior solutions, from concept to execution.",
    href: "/services/interior-design",
  },
  {
    icon: Building,
    title: "Construction and integrated consultancy",
    description: "End-to-end construction management and project consultancy delivering quality builds on time and budget.",
    href: "/services/construction",
  },
  {
    icon: TreePine,
    title: "Landscape and horticulture services",
    description: "Sustainable landscape design, green roofs, and urban greenery solutions for healthier environments.",
    href: "/services/landscape",
  },
];

export default function Services() {
  const heroSection = useScrollAnimation();
  const servicesSection = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground">
        <div className="container">
          <div 
            ref={heroSection.ref}
            className={cn("max-w-3xl scroll-fade-up", heroSection.isVisible && "visible")}
          >
            <Link 
              to="/" 
              className="text-sm font-medium text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors inline-flex items-center gap-2 mb-6"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Our Services
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Five specialized divisions working seamlessly together to deliver exceptional results. From initial surveying to final landscaping, we provide complete project solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div 
            ref={servicesSection.ref}
            className={cn("text-center max-w-2xl mx-auto mb-16 scroll-fade-up", servicesSection.isVisible && "visible")}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Offer</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
              Comprehensive Project Solutions
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Explore our specialized services to find the perfect solution for your project needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className={cn(
                  "group p-8 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover-lift scroll-fade-up",
                  servicesSection.isVisible && "visible"
                )}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-slate text-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-background max-w-2xl mx-auto">
            Need Help Choosing the Right Service?
          </h2>
          <p className="mt-4 text-background/80 text-lg max-w-xl mx-auto">
            Our team is here to help you find the perfect solution for your project. Get in touch for a free consultation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/contact">
                Get a Free Consultation
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
