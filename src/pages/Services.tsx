import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown, ArrowUpRight, MessageCircle } from 'lucide-react';
import { dictionary } from '@/lib/i18n';
import { SERVICE_OFFERS, HOW_IT_WORKS, FAQS } from '@/lib/data';
import { GradeReveal } from '@/components/ui/GradeReveal';
import { Button } from '@/components/ui/Button';

export const Services: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* 1. HERO HEADER */}
      <section className="space-y-6 border-b border-border pb-16">
        <GradeReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-eyebrow">{dictionary.services.eyebrow}</span>
          </div>
          <h1 className="font-display text-fluid-h1 uppercase text-foreground max-w-5xl tracking-tight leading-none mb-6">
            {dictionary.services.headline}
          </h1>
          <p className="text-foreground/80 text-lg md:text-xl max-w-3xl leading-relaxed">
            {dictionary.services.subheadline}
          </p>
        </GradeReveal>
      </section>

      {/* 2. CORE SERVICE AREAS */}
      <section className="space-y-12">
        <GradeReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <span className="text-eyebrow block mb-2">PRACTICE AREAS</span>
              <h2 className="font-display text-fluid-h2 text-foreground uppercase">
                CAPABILITIES & DELIVERABLES
              </h2>
            </div>
            <p className="text-muted text-sm font-mono max-w-md">
              Custom scope for every timeline · Tailored delivery specs
            </p>
          </div>
        </GradeReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICE_OFFERS.map((service, index) => (
            <GradeReveal key={service.id} delay={index * 0.1}>
              <div className="p-8 bg-surface border border-border rounded flex flex-col justify-between h-full group hover:border-accent transition-all duration-300">
                <div>
                  {/* Top Eyebrow Tag */}
                  <div className="flex items-center justify-between font-mono text-xs text-muted mb-4 border-b border-border/60 pb-3">
                    <span className="text-accent font-bold">
                      0{index + 1} // PRACTICE
                    </span>
                    <span className="text-muted/70">REC.709 / MASTER SPEC</span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl text-foreground uppercase tracking-wide group-hover:text-accent transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-accent-2 font-mono text-xs font-semibold uppercase tracking-wider mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-foreground/85 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Target Audience Pill */}
                  <div className="mb-6 p-3 bg-background/60 border border-border/80 rounded font-mono text-xs text-muted flex items-start gap-2">
                    <span className="text-accent font-bold">IDEAL FOR:</span>
                    <span className="text-foreground/90">{service.targetAudience}</span>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-8">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-2">
                      CORE DELIVERABLES
                    </span>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-foreground/90 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">
                    Custom scoped proposal
                  </span>
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-accent hover:text-accent-2 transition-colors cinematic-link"
                  >
                    <span>Discuss Scope</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </GradeReveal>
          ))}
        </div>
      </section>

      {/* 3. HOW IT WORKS / 4-STEP COLLABORATION FLOW */}
      <section className="space-y-12">
        <GradeReveal>
          <div className="border-t border-border pt-16">
            <span className="text-eyebrow block mb-2">COLLABORATION WORKFLOW</span>
            <h2 className="font-display text-fluid-h2 text-foreground uppercase mb-4">
              FROM RAW ASSETS TO FINISHED GRADE
            </h2>
            <p className="text-muted text-base max-w-2xl leading-relaxed">
              A transparent 4-stage pipeline that guarantees pacing precision, milestone alignment, and zero surprises.
            </p>
          </div>
        </GradeReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS.map((step, idx) => (
            <GradeReveal key={step.number} delay={idx * 0.1}>
              <div className="p-6 bg-surface border border-border rounded h-full flex flex-col justify-between group hover:border-accent transition-colors relative overflow-hidden">
                <div>
                  <span className="font-display text-4xl text-accent/40 group-hover:text-accent transition-colors block mb-4">
                    {step.number}
                  </span>
                  <h3 className="font-display text-lg text-foreground uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-border/40 font-mono text-[10px] text-accent-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-2" />
                  <span>PHASE 0{idx + 1} VERIFIED</span>
                </div>
              </div>
            </GradeReveal>
          ))}
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="space-y-8">
        <GradeReveal>
          <div className="border-t border-border pt-16 mb-8">
            <span className="text-eyebrow block mb-2">FAQ // LOGISTICS</span>
            <h2 className="font-display text-fluid-h2 text-foreground uppercase mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-muted text-sm max-w-xl">
              Everything you need to know about remote file delivery, turnaround timelines, AI pipeline ethics, and pricing.
            </p>
          </div>
        </GradeReveal>

        <div className="space-y-4 max-w-4xl mx-auto">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <GradeReveal key={index} delay={index * 0.05}>
                <div className="border border-border rounded bg-surface overflow-hidden transition-colors hover:border-border/90">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-display text-lg sm:text-xl text-foreground uppercase tracking-wide">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-accent-2' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-6 pb-6 pt-0 text-foreground/80 text-sm leading-relaxed border-t border-border/40 font-sans"
                    >
                      <div className="pt-4">{faq.answer}</div>
                    </div>
                  )}
                </div>
              </GradeReveal>
            );
          })}
        </div>
      </section>

      {/* 5. DIRECT CTA BAND */}
      <section className="pt-12 text-center border-t border-border">
        <GradeReveal>
          <div className="p-12 md:p-16 bg-surface border border-border rounded relative overflow-hidden max-w-4xl mx-auto">
            <div className="relative z-10 space-y-6">
              <span className="text-eyebrow block">LET'S BUILD YOUR TIMELINE</span>
              <h2 className="font-display text-fluid-h2 text-foreground uppercase">
                {dictionary.services.ctaBandTitle}
              </h2>
              <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
                Whether you have 4K raw footage ready to grade, a social series that needs kinetic speed ramping, or want a custom interactive portfolio build.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Button variant="primary" to="/contact" className="px-8 py-3.5">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="secondary"
                  href={dictionary.common.whatsappUrl}
                  className="px-6 py-3.5"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-accent-2" />
                  <span>Direct WhatsApp</span>
                </Button>
              </div>
            </div>

            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </GradeReveal>
      </section>
    </div>
  );
};
