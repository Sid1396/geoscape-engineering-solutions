import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { name: "Surveying & Geospatial", href: "/services/surveying" },
  { name: "Interior Design", href: "/services/interior-design" },
  { name: "Construction", href: "/services/construction" },
  { name: "Landscape & Horticulture", href: "/services/landscape" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate text-slate-light">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Geoscape Engineering Solutions" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <span className="font-display text-lg font-semibold text-background leading-tight">Geoscape</span>
                <span className="block text-xs text-background/90">Engineering Solutions</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-background/90">
              Your trusted partner for integrated surveying, design, construction, and sustainable development solutions across India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-accent">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/90 transition-all duration-300 hover:text-background hover:scale-110 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-accent">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/90 transition-all duration-300 hover:text-background hover:scale-110 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-accent">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-background/80 shrink-0 transition-transform duration-300" />
                <span className="text-background/90">B-05, Plot Number 612, Anita CHS LTD, Charkop Sector 6, Near Charkop Petrol Pump, Kandivali west, Mumbai 400067</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-background/80 shrink-0 transition-transform duration-300" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+918425984962" className="text-background/90 hover:text-background transition-all duration-300 hover:scale-110 inline-block">
                    +91 84259 84962
                  </a>
                  <a href="tel:+918104647171" className="text-background/90 hover:text-background transition-all duration-300 hover:scale-110 inline-block">
                    +91 81046 47171
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <Mail className="h-4 w-4 text-background/80 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <a href="mailto:info@geoscapesolutions.com" className="text-background/90 hover:text-background transition-all duration-300 hover:scale-110 inline-block">
                  info@geoscapesolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-light/20 pt-8 sm:flex-row">
          <p className="text-sm text-background/80">
            © {new Date().getFullYear()} Geoscape Engineering Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-background/80 hover:text-background transition-all duration-300 hover:scale-110 inline-block">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-background/80 hover:text-background transition-all duration-300 hover:scale-110 inline-block">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
