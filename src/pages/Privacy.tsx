import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';
import { dictionary } from '@/lib/i18n';
import { GradeReveal } from '@/components/ui/GradeReveal';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-24 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Back button */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <GradeReveal>
        <div className="space-y-4 border-b border-border pb-8">
          <div className="flex items-center gap-2 text-accent-2 font-mono text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>TRANSPARENCY & DATA HYGIENE</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl uppercase text-foreground">
            PRIVACY POLICY
          </h1>
          <p className="font-mono text-xs text-muted">
            LAST UPDATED: SEPTEMBER 2026 // GOA, INDIA
          </p>
        </div>
      </GradeReveal>

      <GradeReveal delay={0.1}>
        <div className="space-y-8 text-foreground/85 text-sm sm:text-base leading-relaxed bg-surface p-8 sm:p-10 border border-border rounded">
          <section className="space-y-3">
            <h2 className="font-display text-xl text-foreground uppercase tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              1. NO SURVEILLANCE & NO AD TRACKERS
            </h2>
            <p className="text-muted leading-relaxed">
              This portfolio is built to showcase video editing, color grading, and creative engineering craft. It does not use Google Analytics, Meta Pixel, third-party advertising cookies, or surveillance telemetry scripts. You can inspect the network tab in your browser devtools to verify zero tracking cookies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-foreground uppercase tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              2. INQUIRY FORM DATA
            </h2>
            <p className="text-muted leading-relaxed">
              When you submit an inquiry through the Contact page, your submitted information (name, email, phone number, project type, budget range, and project brief) is processed solely for evaluating project feasibility, preparing scoped proposals, and replying to your message.
            </p>
            <p className="text-muted leading-relaxed">
              Your contact details are never sold, rented, or distributed to any marketing databases.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-foreground uppercase tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              3. STORAGE & SECURITY
            </h2>
            <p className="text-muted leading-relaxed">
              Submissions are transmitted over encrypted TLS/HTTPS protocols and stored within secure database infrastructure (Supabase / Lovable Cloud) with strict Row Level Security (RLS) policies. Messages are cached locally in your client's browser sessionStorage/localStorage for instant feedback and draft resilience.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-foreground uppercase tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              4. DATA ACCESS & DELETION REQUESTS
            </h2>
            <p className="text-muted leading-relaxed">
              Under applicable digital data protection standards, you have the right to request a copy of the information you submitted or request its prompt deletion from our project records. Simply send an email to <a href={`mailto:${dictionary.common.email}`} className="text-accent hover:underline font-mono text-xs">{dictionary.common.email}</a> with the subject line "Data Request".
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-xs font-mono text-muted">
              <Lock className="w-3.5 h-3.5 text-accent-2" />
              <span>Direct Controller: Abhijit Raul, Goa, India.</span>
            </div>
          </section>
        </div>
      </GradeReveal>
    </div>
  );
};
