import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollHeader } from "@/hooks/use-scroll-animation";

const services = [
  { name: "Surveying & Geospatial", href: "/services/surveying" },
  { name: "Interior Design", href: "/services/interior-design" },
  { name: "Construction", href: "/services/construction" },
  { name: "Landscape & Horticulture", href: "/services/landscape" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", children: services },
  { name: "Industries", href: "/industries" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isScrolled = useScrollHeader();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-all duration-300",
        isScrolled 
          ? "border-border shadow-md" 
          : "border-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary transition-transform duration-300 group-hover:scale-105">
            <span className="font-display text-xl font-bold text-primary-foreground">G</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-lg font-semibold text-foreground leading-tight">Geoscape</span>
            <span className="block text-xs text-muted-foreground">Engineering Solutions</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <div
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md",
                      isActive(item.href)
                        ? "text-primary active"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", servicesOpen && "rotate-180")} />
                  </button>
                  <div 
                    className={cn(
                      "absolute left-0 top-full pt-2 transition-all duration-200",
                      servicesOpen 
                        ? "opacity-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="w-56 rounded-lg border border-border bg-card p-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm transition-all duration-200",
                            isActive(child.href)
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground hover:translate-x-1"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    "nav-link px-4 py-2 text-sm font-medium transition-colors rounded-md",
                    isActive(item.href)
                      ? "text-primary active"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button variant="accent" asChild className="hover-glow">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-muted-foreground hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div 
        className={cn(
          "lg:hidden border-t border-border bg-background overflow-hidden transition-all duration-300",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-4 space-y-2">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <div className="space-y-1">
                  <span className="block px-3 py-2 text-sm font-medium text-foreground">
                    {item.name}
                  </span>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      className={cn(
                        "block pl-6 pr-3 py-2 text-sm rounded-md transition-colors",
                        isActive(child.href)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-border">
            <Button variant="accent" className="w-full" asChild>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
