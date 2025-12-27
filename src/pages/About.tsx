import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Lightbulb, Shield, Leaf, Users, Award, CheckCircle2, TrendingUp } from "lucide-react";
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

const expertise = [
  {
    icon: CheckCircle2,
    title: "Integrated Services",
    description: "End-to-end solutions from surveying to landscaping under one roof, eliminating coordination challenges.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Successfully delivered projects across residential, commercial, and infrastructure sectors.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensuring excellence at every project stage.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals with deep expertise in their respective domains.",
  },
];

export default function About() {
  const storySection = useScrollAnimation();
  const statsSection = useScrollAnimation();
  const visionSection = useScrollAnimation();
  const valuesSection = useScrollAnimation();
  const expertiseSection = useScrollAnimation();
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

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container">
          <div 
            ref={statsSection.ref}
            className={cn("grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto scroll-fade-up", statsSection.isVisible && "visible")}
          >
            {[
              { value: "8+", label: "Years Experience" },
              { value: "10+", label: "Expert Team" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={cn("p-6 md:p-8 rounded-xl bg-primary-foreground/10 backdrop-blur-sm text-center hover-lift scroll-scale-in", statsSection.isVisible && "visible")}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">{stat.value}</div>
                <div className="mt-2 text-sm md:text-base text-primary-foreground/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div ref={storySection.ref} className={cn("max-w-4xl mx-auto scroll-fade-up", storySection.isVisible && "visible")}>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Story</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
                How We Started
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
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
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-slate text-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Foundation</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-background">
              Vision & Mission
            </h2>
          </div>
          <div ref={visionSection.ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div 
              className={cn("p-8 rounded-xl bg-slate-light/10 border border-slate-light/20 hover-lift scroll-fade-up", visionSection.isVisible && "visible")}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-accent">Our Vision</h3>
              <p className="text-background leading-relaxed">
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
              <h3 className="text-2xl font-display font-bold mb-4 text-accent">Our Mission</h3>
              <p className="text-background leading-relaxed">
                To deliver exceptional value through integrated surveying, design, construction, and sustainable development services, making quality accessible and project management seamless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Our Expertise */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div 
            ref={expertiseSection.ref}
            className={cn("text-center max-w-2xl mx-auto mb-16 scroll-fade-up", expertiseSection.isVisible && "visible")}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
              Our Expertise
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              What sets Geoscape apart in delivering exceptional project outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={item.title} 
                className={cn("p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover-lift group scroll-fade-up", expertiseSection.isVisible && "visible")}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
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
            <p className="mt-4 text-muted-foreground text-lg">
              The principles that guide every decision and action we take
            </p>
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
            className={cn("max-w-4xl mx-auto scroll-scale-in", approachSection.isVisible && "visible")}
          >
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Approach</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
                The Geoscape Advantage
              </h2>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-lg">
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Our integrated approach means a single point of contact, unified project management, and seamless handoffs between surveying, design, construction, and landscaping teams. This eliminates the traditional gaps that cause delays and cost overruns.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Single Point of Contact</h4>
                      <p className="text-sm">One dedicated project manager coordinates all aspects of your project</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Unified Project Management</h4>
                      <p className="text-sm">Streamlined processes ensure consistent quality and timely delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Seamless Coordination</h4>
                      <p className="text-sm">Teams work together from day one, eliminating communication gaps</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Cost Efficiency</h4>
                      <p className="text-sm">Integrated services reduce overhead and eliminate redundant costs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 text-center">
                <Button variant="default" size="lg" asChild className="group">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
