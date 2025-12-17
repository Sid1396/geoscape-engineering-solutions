import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const offerings = [
  "Land Survey & Boundary Demarcation",
  "Topographic Survey & Contour Mapping",
  "DGPS & Total Station Surveys",
  "Drone/UAV Aerial Surveys",
  "LiDAR Scanning & Point Cloud",
  "GIS Mapping & Spatial Analysis",
  "As-Built Surveys",
  "Construction Stakeout",
];

const benefits = [
  {
    title: "High Accuracy",
    description: "Sub-centimeter precision using latest DGPS and total station equipment.",
  },
  {
    title: "Quick Turnaround",
    description: "Efficient fieldwork and data processing to meet your project timelines.",
  },
  {
    title: "Comprehensive Reports",
    description: "Detailed survey reports with CAD drawings and digital deliverables.",
  },
  {
    title: "Expert Team",
    description: "Licensed surveyors with decades of combined experience across India.",
  },
];

export default function Surveying() {
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
            <Link to="/services/surveying" className="text-sm font-medium text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors animate-fade-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              Services
            </Link>
            <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Surveying & Geospatial Services
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Precision surveying solutions using advanced technology—from traditional land surveys to drone mapping and LiDAR scanning. Accurate data for informed decisions.
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
                Foundation of Every Great Project
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Accurate surveying is the cornerstone of successful construction and development projects. Our surveying division combines traditional expertise with cutting-edge technology to deliver precise measurements and actionable insights.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether you need a simple land survey for a residential plot or complex drone mapping for a large infrastructure project, our team delivers results you can build on—literally.
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
              Serving Diverse Sectors
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Property Owners", description: "Land boundary verification, plot subdivision, and building planning surveys." },
              { title: "Developers & Builders", description: "Site analysis, contour mapping, and construction stakeout for residential and commercial projects." },
              { title: "Government & Infrastructure", description: "Large-scale surveys for roads, utilities, and public infrastructure development." },
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
              Why Choose Our Survey Services
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
            Need a Survey Quote?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Contact us with your project details for a competitive quote. We serve clients across India.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/contact">
                Request Survey Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
