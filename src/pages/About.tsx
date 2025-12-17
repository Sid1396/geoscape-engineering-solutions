import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Lightbulb, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We deliver accurate results through meticulous attention to detail and cutting-edge technology.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Our clients trust us to deliver quality work on time, every time, without compromises.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Environmental responsibility is at the core of every project we undertake.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously adopt new methods and technologies to stay ahead of industry standards.",
  },
];

export default function About() {
  const storySection = useScrollAnimation();
  const visionSection = useScrollAnimation();
  const valuesSection = useScrollAnimation();
  const approachSection = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider animate-fade-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              About Geoscape
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold text-foreground animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Building Tomorrow's Landmarks Today
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Founded with a vision to transform how projects are delivered in India, Geoscape Engineering Solutions combines surveying expertise, design innovation, construction excellence, and sustainable practices under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={storySection.ref} className={cn("scroll-slide-left", storySection.isVisible && "visible")}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Geoscape Engineering Solutions was born from a simple observation: project owners in India often struggled with coordinating multiple vendors across surveying, design, construction, and landscaping. This fragmentation led to delays, cost overruns, and compromised quality.
                </p>
                <p>
                  We created an integrated solution. By bringing together specialists from each discipline under one organization, we eliminated coordination gaps and created seamless project delivery. Today, we serve homeowners, developers, and government bodies across India.
                </p>
                <p>
                  Our name reflects our commitment—"Geoscape" represents the landscapes and terrains we shape through precision engineering, creating sustainable spaces for generations to come.
                </p>
              </div>
            </div>
            <div className={cn("grid grid-cols-2 gap-4 scroll-slide-right", storySection.isVisible && "visible")}>
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "15+", label: "Years Experience" },
                { value: "50+", label: "Expert Team" },
                { value: "12", label: "States Covered" },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={cn("p-6 rounded-xl bg-sage text-center hover-lift scroll-scale-in", storySection.isVisible && "visible")}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="text-4xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-slate text-background">
        <div className="container">
          <div ref={visionSection.ref} className="grid md:grid-cols-2 gap-12">
            <div 
              className={cn("p-8 rounded-xl bg-slate-light/10 border border-slate-light/20 hover-lift scroll-fade-up", visionSection.isVisible && "visible")}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-slate-light leading-relaxed">
                To be India's most trusted integrated project solutions company, known for transforming spaces while preserving the environment for future generations.
              </p>
            </div>
            <div 
              className={cn("p-8 rounded-xl bg-slate-light/10 border border-slate-light/20 hover-lift scroll-fade-up", visionSection.isVisible && "visible")}
              style={{ transitionDelay: '150ms' }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-slate-light leading-relaxed">
                To deliver exceptional value through integrated surveying, design, construction, and sustainable development services, making quality accessible and project management seamless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div 
            ref={valuesSection.ref}
            className={cn("text-center max-w-2xl mx-auto mb-16 scroll-fade-up", valuesSection.isVisible && "visible")}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Core Values</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className={cn("text-center group scroll-fade-up", valuesSection.isVisible && "visible")}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Approach */}
      <section className="py-20 md:py-28 bg-sage">
        <div className="container">
          <div 
            ref={approachSection.ref}
            className={cn("max-w-3xl mx-auto text-center scroll-scale-in", approachSection.isVisible && "visible")}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Approach</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
              The Geoscape Advantage
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Our integrated approach means a single point of contact, unified project management, and seamless handoffs between surveying, design, construction, and landscaping teams. This eliminates the traditional gaps that cause delays and cost overruns.
            </p>
            <div className="mt-8">
              <Button variant="default" size="lg" asChild className="group">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
