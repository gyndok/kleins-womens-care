import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Services", href: isHome ? "#services" : "/#services" },
    { label: "Weight Loss", href: "/weight-loss" },
    { label: "Videos", href: "/videos" },
    { label: "Patient Education", href: "/patient-education" },
    { label: "Consent Forms", href: "/consent-forms" },
    { label: "Reviews", href: isHome ? "#reviews" : "/#reviews" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--pale-silver)]">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold" style={{ color: "var(--deep-teal)" }}>
          Dr. Klein
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: "var(--charcoal)" }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: "var(--charcoal)" }}
              >
                {item.label}
              </a>
            )
          )}
          <Button asChild size="sm" className="bg-[var(--deep-teal)] hover:bg-[var(--teal)] text-white">
            <Link to="/appointment">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          style={{ color: "var(--charcoal)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--pale-silver)] bg-white px-4 pb-4">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                to={item.href}
                className="block py-2 text-sm font-medium"
                style={{ color: "var(--charcoal)" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-medium"
                style={{ color: "var(--charcoal)" }}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
              >
                {item.label}
              </a>
            )
          )}
          <Button asChild size="sm" className="w-full mt-2 bg-[var(--deep-teal)] hover:bg-[var(--teal)] text-white">
            <Link to="/appointment" onClick={() => setMobileOpen(false)}>Book Appointment</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
