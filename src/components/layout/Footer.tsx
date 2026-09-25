import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Copy, Check, MessageCircle, Instagram, Linkedin, Github, Mail } from 'lucide-react';
import { dictionary } from '@/lib/i18n';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abhijitraul77@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-surface/90 border-t border-border mt-24 relative overflow-hidden">
      {/* Decorative Waveform Accent */}
      <div className="scanline-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-border/60">
          
          {/* Column 1: Brand & Monogram */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display text-3xl tracking-tight text-foreground uppercase">
                  ABHIJIT
                </span>
                <span className="font-script text-3xl text-accent -rotate-6">
                  Raul
                </span>
              </div>
              <p className="text-muted text-sm max-w-sm mb-6 leading-relaxed">
                {dictionary.common.role} — based in {dictionary.common.location}. Crafting cinematic visual worlds for brands, automotive reels, and interactive screens.
              </p>
            </div>

            {/* Email Quick Copy Pill */}
            <div className="inline-flex items-center gap-2 p-1.5 pr-3 bg-background border border-border rounded max-w-xs">
              <div className="p-1.5 bg-surface rounded text-muted">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono text-xs text-foreground select-all truncate">
                abhijitraul77@gmail.com
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="ml-auto text-muted hover:text-accent p-1 transition-colors focus-visible:ring-1 focus-visible:ring-accent-2"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-accent-2" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <span className="block font-mono text-xs uppercase tracking-widest text-muted mb-4">
              PAGES
            </span>
            <ul className="space-y-3 font-medium text-sm">
              <li>
                <Link to="/work" className="text-foreground/80 hover:text-accent transition-colors cinematic-link">
                  Work / Selected Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/80 hover:text-accent transition-colors cinematic-link">
                  About & Background
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/80 hover:text-accent transition-colors cinematic-link">
                  Services & Capabilities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/80 hover:text-accent transition-colors cinematic-link">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted/60 hover:text-muted text-xs transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Direct Channels */}
          <div className="md:col-span-4">
            <span className="block font-mono text-xs uppercase tracking-widest text-muted mb-4">
              DIRECT & SOCIALS
            </span>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={dictionary.common.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-foreground/90 hover:text-accent transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-accent-2" />
                    <span>WhatsApp Click-to-Chat</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={dictionary.common.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-foreground/90 hover:text-accent transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-accent" />
                    <span>Instagram (@abhijit_hunter7)</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={dictionary.common.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-foreground/90 hover:text-accent transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-muted" />
                    <span>LinkedIn (abhijitraul777)</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={dictionary.common.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-foreground/90 hover:text-accent transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-muted" />
                    <span>GitHub (Abhijithunter7)</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div>
            {dictionary.common.copyright}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Goa, India — Cutting Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
