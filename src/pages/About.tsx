import React from 'react';
import { Award, BookOpen, GraduationCap } from 'lucide-react';
import { dictionary } from '@/lib/i18n';
import { TIMELINE_ENTRIES, SKILL_GROUPS } from '@/lib/data';
import { GradeReveal } from '@/components/ui/GradeReveal';
import { Button } from '@/components/ui/Button';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* 1. HERO / OPENING STATEMENT */}
      <section className="space-y-6 border-b border-border pb-16">
        <GradeReveal>
          <span className="text-eyebrow block mb-3">{dictionary.about.eyebrow}</span>
          <h1 className="font-display text-fluid-h1 uppercase text-foreground max-w-5xl leading-none">
            "{dictionary.about.openingStatement}"
          </h1>
          <p className="text-accent-2 font-mono text-xs md:text-sm tracking-wider uppercase pt-2">
            GOA, INDIA — REMOTE WORLDWIDE // MSC IN ARTIFICIAL INTELLIGENCE & TIMELINE CRAFT
          </p>
        </GradeReveal>
      </section>

      {/* 2. THE STORY & IMAGE SLOTS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Story Text */}
        <div className="lg:col-span-7 space-y-6">
          <GradeReveal>
            <span className="text-eyebrow block mb-2">BACKGROUND & PHILOSOPHY</span>
            <h2 className="font-display text-fluid-h2 text-foreground uppercase mb-6">
              THE AI-FLUENT TIMELINE
            </h2>
            <div className="text-foreground/85 text-base md:text-lg leading-relaxed space-y-5">
              <p>
                I'm Abhijit — a video editor and creator with a distinctive edge: an academic background in Artificial Intelligence. I spend my days cutting, color grading, and animating for brands and creators, combining the timeline craftsmanship of DaVinci Resolve and CapCut with the analytical discipline of computer science.
              </p>
              <p>
                That AI background isn't a party trick — it shapes how I pace a cut, how fast I iterate, and how comfortably I move between traditional editing and next-generation AI-assisted tools like Claude, Runway, ElevenLabs, and Google Flow, which most editors are still catching up to.
              </p>
              <p>
                Outside the edit suite, I sketch and paint, follow astronomy and space-science news, lift weights, and build interactive web experiences — including the canvas-driven scrollytelling engine that powers my personal site.
              </p>
              <p>
                I'm currently completing my MSc in AI at Goa Business School, Goa University, with a thesis focus on Small Language, Vision, and Language Models — work that keeps feeding back into how I think about story structure and pacing.
              </p>
            </div>
          </GradeReveal>
        </div>

        {/* Visual Slots: Portrait & BTS Edit Suite */}
        <div className="lg:col-span-5 space-y-6">
          <GradeReveal delay={0.15}>
            {/* [portrait-slot] */}
            <div className="relative aspect-square rounded border border-border overflow-hidden bg-surface group">
              <img
                src="/assets/portrait-slot.jpg"
                alt="Abhijit Raul Portrait [portrait-slot]"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-3 left-3 px-2 py-1 bg-background/80 backdrop-blur-md rounded font-mono text-[9px] text-muted border border-border">
                [portrait-slot] // HEADSHOT / SILHOUETTE
              </div>
            </div>

            {/* [about-bts-slot] */}
            <div className="relative aspect-[4/3] rounded border border-border overflow-hidden bg-surface group">
              <img
                src="/assets/about-bts-slot.jpg"
                alt="DaVinci Resolve Edit Suite [about-bts-slot]"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2 py-1 bg-background/80 backdrop-blur-md rounded font-mono text-[9px] text-accent border border-border">
                [about-bts-slot] // SUITE TELEMETRY
              </div>
            </div>
          </GradeReveal>
        </div>
      </section>

      {/* 3. CORE PRINCIPLES / VALUES */}
      <section className="space-y-8">
        <GradeReveal>
          <div className="mb-8">
            <span className="text-eyebrow block mb-2">FOUNDATIONS</span>
            <h2 className="font-display text-fluid-h2 text-foreground uppercase">
              HOW I APPROACH EVERY CUT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dictionary.about.values.map((v, i) => (
              <div key={i} className="p-8 bg-surface border border-border rounded flex flex-col justify-between group hover:border-accent transition-colors">
                <div>
                  <span className="font-mono text-xs text-accent font-bold block mb-3">
                    RULE 0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl text-foreground uppercase mb-3 group-hover:text-accent transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </GradeReveal>
      </section>

      {/* 4. EXPERIENCE TIMELINE (VERTICAL GRADE-TIMELINE WITH TICK MARKS) */}
      <section className="space-y-8">
        <GradeReveal>
          <div className="mb-8">
            <span className="text-eyebrow block mb-2">CAREER & EDUCATION</span>
            <h2 className="font-display text-fluid-h2 text-foreground uppercase">
              TIMELINE & MILESTONES
            </h2>
          </div>

          <div className="relative border-l-2 border-border ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
            {TIMELINE_ENTRIES.map((entry, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Needle / Tick Mark */}
                <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${entry.isMilestone ? 'bg-accent border-accent-2 shadow-glow-crimson' : 'bg-background border-border'} group-hover:scale-125 transition-transform`} />

                <div className="p-6 bg-surface border border-border rounded group-hover:border-accent/60 transition-colors">
                  <span className="font-mono text-xs text-accent-2 font-semibold block mb-1">
                    {entry.period}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl text-foreground uppercase mb-1">
                    {entry.role}
                  </h3>
                  <p className="font-mono text-xs text-foreground/80 mb-3">
                    {entry.organization}
                  </p>
                  {entry.details && (
                    <p className="text-muted text-sm leading-relaxed">
                      {entry.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </GradeReveal>
      </section>

      {/* 5. ACADEMIC CREDENTIALS & CERTIFICATIONS */}
      <section className="space-y-8">
        <GradeReveal>
          <div className="mb-8">
            <span className="text-eyebrow block mb-2">VERIFIED CREDENTIALS</span>
            <h2 className="font-display text-fluid-h2 text-foreground uppercase">
              ACADEMIC & INDUSTRY CERTIFICATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface border border-border rounded flex flex-col justify-between">
              <div>
                <GraduationCap className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display text-xl text-foreground uppercase mb-2">
                  MSc in Artificial Intelligence
                </h3>
                <p className="font-mono text-xs text-accent-2 mb-3">Expected May 2026</p>
                <p className="text-muted text-xs leading-relaxed">
                  Goa Business School, Goa University. Thesis focus: Small Language, Vision, and Language Models.
                </p>
              </div>
            </div>

            <div className="p-6 bg-surface border border-border rounded flex flex-col justify-between">
              <div>
                <BookOpen className="w-6 h-6 text-accent-2 mb-4" />
                <h3 className="font-display text-xl text-foreground uppercase mb-2">
                  BSc in Computer Science
                </h3>
                <p className="font-mono text-xs text-accent-2 mb-3">April 2024 · CGPA 7.97/10</p>
                <p className="text-muted text-xs leading-relaxed">
                  Dnyanprassarak Mandal's College. A+ in Mobile App Dev & IoT. Outstanding Capstone Grade.
                </p>
              </div>
            </div>

            <div className="p-6 bg-surface border border-border rounded flex flex-col justify-between">
              <div>
                <Award className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display text-xl text-foreground uppercase mb-2">
                  AI Filmmaking Pipeline
                </h3>
                <p className="font-mono text-xs text-accent-2 mb-3">July 2026 · Higgsfield Academy</p>
                <p className="text-muted text-xs leading-relaxed font-mono">
                  Credential ID: HFA-2026-NGFSWY73HVCF. Generative-to-timeline production workflow.
                </p>
              </div>
            </div>
          </div>
        </GradeReveal>
      </section>

      {/* 6. TOOLS & SKILLS (NO PERCENTAGE BARS) */}
      <section className="space-y-8">
        <GradeReveal>
          <div className="mb-8">
            <span className="text-eyebrow block mb-2">TOOLCHAIN & PROFICIENCY</span>
            <h2 className="font-display text-fluid-h2 text-foreground uppercase">
              SYSTEMS & SOFTWARE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={idx} className="p-8 bg-surface border border-border rounded">
                <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold block mb-4">
                  // {group.category.toUpperCase()}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-background border border-border rounded font-mono text-xs text-foreground/90 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </GradeReveal>
      </section>

      {/* 7. PERSONAL NOTE & CTA */}
      <section className="p-10 md:p-14 bg-surface border border-border rounded text-center space-y-6">
        <GradeReveal>
          <span className="text-eyebrow">OFF-TIMELINE</span>
          <p className="text-foreground/90 text-lg md:text-xl max-w-2xl mx-auto italic font-medium leading-relaxed">
            "{dictionary.about.personalNote}"
          </p>
          <div className="pt-4 flex justify-center">
            <Button variant="primary" to="/contact" className="px-8 py-4 text-sm">
              {dictionary.about.cta}
            </Button>
          </div>
        </GradeReveal>
      </section>

    </div>
  );
};
