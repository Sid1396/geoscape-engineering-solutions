import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const services = [
  "End-to-end surveying and Geomatic services",
  "Coastal infrastructure development",
  "Interior design and space planning",
  "Construction and integrated consultancy",
  "Landscape and horticulture services",
  "Multiple Services",
  "Not Sure / General Inquiry",
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your project"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const formSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    // Create email subject and body
    const subject = encodeURIComponent(`Inquiry: ${data.service}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n` +
      `Service Required: ${data.service}\n\n` +
      `Project Details:\n${data.message}`
    );
    
    // Open email client with pre-filled data
    window.location.href = `mailto:info@geoscapesolutions.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your email client will open with the form details pre-filled.",
    });
    
    // Reset form after a short delay
    setTimeout(() => {
      reset();
    }, 500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider animate-fade-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              Contact Us
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold text-foreground animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Let's Discuss Your Project
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Ready to start? Have questions? Our team is here to help. Fill out the form below or reach us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div ref={formSection.ref} className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className={cn("space-y-8 scroll-slide-left", formSection.isVisible && "visible")}>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                      <MapPin className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Office Address</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        B-05, Plot Number 612, Anita CHS LTD<br />
                        Charkop Sector 6, Near Charkop Petrol Pump<br />
                        Kandivali west, Mumbai 400067
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                      <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        <a href="tel:+918425984962" className="hover:text-primary transition-colors">+91 84259 84962</a><br />
                        <a href="tel:+918104647171" className="hover:text-primary transition-colors">+91 81046 47171</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                      <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        <a href="mailto:info@geoscapesolutions.com" className="hover:text-primary transition-colors">info@geoscapesolutions.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Monday – Saturday: 9:00 AM – 6:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={cn("lg:col-span-2 scroll-slide-right", formSection.isVisible && "visible")}>
              <div className="bg-card rounded-xl border border-border p-8 hover-lift">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name")}
                        className={cn(
                          "transition-all duration-200 focus:scale-[1.01]",
                          errors.name && "border-destructive"
                        )}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        {...register("email")}
                        className={cn(
                          "transition-all duration-200 focus:scale-[1.01]",
                          errors.email && "border-destructive"
                        )}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        {...register("phone")}
                        className={cn(
                          "transition-all duration-200 focus:scale-[1.01]",
                          errors.phone && "border-destructive"
                        )}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required *</Label>
                      <select
                        id="service"
                        {...register("service")}
                        className={cn(
                          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-200 focus:scale-[1.01]",
                          errors.service && "border-destructive"
                        )}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-sm text-destructive">{errors.service.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements, location, timeline, and any specific needs..."
                      rows={5}
                      {...register("message")}
                      className={cn(
                        "transition-all duration-200 focus:scale-[1.01]",
                        errors.message && "border-destructive"
                      )}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>
                  <Button type="submit" variant="accent" size="lg" className="w-full md:w-auto group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </div>
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
            Prefer a Direct Conversation?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Call us now to speak with a project consultant who can understand your requirements and guide you through our services.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="xl" asChild className="group">
              <a href="tel:+918425984962">
                <Phone className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                +91 84259 84962
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
