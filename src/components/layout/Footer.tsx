import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-display text-xl font-bold text-primary-foreground">G</span>
              </div>
              <div>
                <span className="font-display text-lg font-semibold text-background leading-tight">Geoscape</span>
                <span className="block text-xs text-slate-light/60">Engineering Solutions</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Your trusted partner for integrated surveying, design, construction, and sustainable development solutions across India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-background">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm opacity-80 transition-all duration-200 hover:opacity-100 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-background">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm opacity-80 transition-all duration-200 hover:opacity-100 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-background">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 opacity-60 shrink-0" />
                <span className="opacity-80">123 Business Park, Sector 15, Gurugram, Haryana 122001</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 opacity-60 shrink-0" />
                <a href="tel:+911234567890" className="opacity-80 hover:opacity-100 transition-opacity">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 opacity-60 shrink-0" />
                <a href="mailto:info@geoscapeengineering.in" className="opacity-80 hover:opacity-100 transition-opacity">
                  info@geoscapeengineering.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-light/20 pt-8 sm:flex-row">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Geoscape Engineering Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
