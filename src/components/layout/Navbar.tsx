import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { dictionary } from '@/lib/i18n';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: dictionary.nav.work, path: '/work' },
    { label: dictionary.nav.about, path: '/about' },
    { label: dictionary.nav.services, path: '/services' },
    { label: dictionary.nav.contact, path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-5 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface/90 backdrop-blur-md border-b border-border shadow-2xl py-3' 
          : 'bg-gradient-to-b from-background/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logotype: Anton + Dancing Script */}
        <Link 
          to="/" 
          className="group flex items-baseline gap-1 focus-visible:ring-2 focus-visible:ring-accent-2"
          aria-label="Abhijit Raul Portfolio Home"
        >
          <span className="font-display text-2xl sm:text-3xl tracking-tight text-foreground uppercase transition-colors group-hover:text-accent">
            ABHIJIT
          </span>
          <span className="font-script text-2xl sm:text-3xl text-accent -rotate-6 transition-transform group-hover:scale-110 group-hover:text-accent-2">
            Raul
          </span>
          <span className="hidden sm:inline-block ml-3 px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-widest text-muted border border-border/80 rounded">
            EDIT / GRADE
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide uppercase transition-colors cinematic-link ${
                  isActive ? 'text-accent font-semibold' : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-2 text-foreground font-mono text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 active:scale-95 shadow-glow-crimson"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 text-foreground hover:text-accent transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[60px] bg-background/98 backdrop-blur-xl z-50 flex flex-col justify-between p-6 border-t border-border animate-grade-wash"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex flex-col gap-6 pt-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-muted border-b border-border pb-2">
              TIMELINE NAVIGATION
            </span>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-3xl font-display uppercase tracking-wider py-2 flex items-center justify-between border-b border-border/40 transition-colors ${
                    isActive ? 'text-accent pl-2' : 'text-foreground hover:text-accent'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-muted" />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 pb-8">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 text-center bg-accent hover:bg-accent-2 text-foreground font-mono text-sm font-bold uppercase tracking-wider rounded shadow-glow-crimson transition-colors"
            >
              Start a Project
            </Link>

            <div className="flex justify-between items-center text-xs font-mono text-muted pt-2">
              <span>Goa, India</span>
              <a href="mailto:abhijitraul77@gmail.com" className="hover:text-accent transition-colors">
                abhijitraul77@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
