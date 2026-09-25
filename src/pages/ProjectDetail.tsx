import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getStoredProjects } from '@/lib/supabase';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { GradeReveal } from '@/components/ui/GradeReveal';
import { Button } from '@/components/ui/Button';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const projects = getStoredProjects().filter((p) => p.published);
  
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <article className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Back Navigation Bar */}
      <div>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Timelines</span>
        </Link>
      </div>

      {/* 1. HERO SECTION */}
      <section className="space-y-6">
        <GradeReveal>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 bg-surface font-mono text-xs uppercase tracking-wider text-accent border border-border rounded font-semibold">
              {project.category}
            </span>
            <span className="px-2.5 py-1 bg-surface font-mono text-xs text-muted border border-border rounded">
              {project.year}
            </span>
          </div>

          <h1 className="font-display text-fluid-h1 uppercase text-foreground max-w-5xl tracking-tight leading-none mb-4">
            {project.title}
          </h1>

          <p className="text-foreground/85 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            {project.summary}
          </p>

          {/* Metadata Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-surface border border-border rounded">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1">
                ROLE
              </span>
              <p className="font-medium text-sm text-foreground">
                {project.role}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1">
                YEAR / CONTEXT
              </span>
              <p className="font-mono text-sm text-accent-2">
                {project.year}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1">
                DISCIPLINES
              </span>
              <p className="text-sm text-foreground">
                {project.tags.slice(0, 2).join(' · ')}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1">
                DELIVERY
              </span>
              <p className="font-mono text-xs text-foreground/90">
                16:9 & 9:16 Cinema Masters
              </p>
            </div>
          </div>
        </GradeReveal>
      </section>

      {/* 2. SIGNATURE BEFORE/AFTER GRADE SLIDER */}
      <section className="space-y-4">
        <GradeReveal>
          <div className="flex items-center justify-between mb-2">
            <span className="text-eyebrow">SIGNATURE GRADE DECONSTRUCTION</span>
            <span className="font-mono text-xs text-muted">DRAGGABLE COMPARISON</span>
          </div>

          <BeforeAfterSlider
            gradedImage={project.coverUrl}
            rawImage={project.rawCoverUrl}
            alt={project.title}
            aspectRatio="aspect-[16/9]"
            className="w-full shadow-2xl"
          />
        </GradeReveal>
      </section>

      {/* 3. BRIEF → CONCEPT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GradeReveal>
          <div className="p-8 bg-surface border border-border rounded h-full flex flex-col justify-between">
            <div>
              <span className="text-eyebrow block mb-2">01 // THE BRIEF</span>
              <h2 className="font-display text-2xl text-foreground uppercase mb-4">
                CONTEXT & OBJECTIVES
              </h2>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                {project.brief || project.summary}
              </p>
            </div>
          </div>
        </GradeReveal>

        <GradeReveal delay={0.1}>
          <div className="p-8 bg-surface border border-border rounded h-full flex flex-col justify-between">
            <div>
              <span className="text-eyebrow block mb-2">02 // THE CONCEPT</span>
              <h2 className="font-display text-2xl text-foreground uppercase mb-4">
                COLOR & MOTION DIRECTION
              </h2>
              <p className="text-foreground/85 text-sm md:text-base leading-relaxed">
                {project.concept || project.outcome}
              </p>
            </div>
          </div>
        </GradeReveal>
      </section>

      {/* 4. PROCESS BREAKDOWN */}
      {project.process && project.process.length > 0 && (
        <section className="space-y-6">
          <GradeReveal>
            <div className="mb-6">
              <span className="text-eyebrow block mb-2">03 // TIMELINE WORKFLOW</span>
              <h2 className="font-display text-fluid-h2 text-foreground uppercase">
                PROCESS & TOOLCHAIN
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.process.map((p, idx) => (
                <div key={idx} className="p-6 bg-surface border border-border rounded flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-accent font-bold block mb-2">
                      PHASE 0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl text-foreground uppercase mb-3">
                      {p.step}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex flex-wrap gap-1.5">
                    {p.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 bg-background font-mono text-[10px] text-accent-2 border border-border rounded"
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
      )}

      {/* 5. FULL SEQUENCE GALLERY */}
      <section className="space-y-6">
        <GradeReveal>
          <div className="mb-6">
            <span className="text-eyebrow block mb-2">04 // SEQUENCE STILLS</span>
            <h2 className="font-display text-fluid-h2 text-foreground uppercase">
              FRAME CAPTURES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.galleryUrls.map((url, idx) => (
              <div
                key={idx}
                className={`overflow-hidden border border-border rounded bg-surface group ${
                  idx === 0 ? 'md:col-span-2 aspect-video' : 'aspect-video'
                }`}
              >
                <img
                  src={url}
                  alt={`${project.title} sequence capture ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </GradeReveal>
      </section>

      {/* 6. RESULTS & CREDITS */}
      <section className="p-8 md:p-10 bg-surface border border-border rounded space-y-8">
        <GradeReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-4">
              <span className="text-eyebrow">05 // OUTCOME</span>
              <h2 className="font-display text-3xl text-foreground uppercase">
                DELIVERED RESULTS
              </h2>
              <p className="text-foreground/90 text-base leading-relaxed">
                {project.outcome}
              </p>
            </div>

            <div className="md:col-span-5 space-y-4 md:border-l md:border-border md:pl-8">
              <span className="text-eyebrow">CREDITS & LINKS</span>
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-muted block">CREDITED ROLE:</span>
                  <span className="text-foreground font-semibold">{project.role}</span>
                </div>
                <div>
                  <span className="text-muted block">PRIMARY TOOLS:</span>
                  <span className="text-accent-2 font-semibold">{project.tags.join(', ')}</span>
                </div>
                {project.externalLink && (
                  <div className="pt-2">
                    <span className="text-muted block mb-1">EXTERNAL LINK:</span>
                    <a
                      href={project.externalLink.startsWith('http') ? project.externalLink : '#'}
                      target={project.externalLink.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent hover:text-accent-2 transition-colors break-all"
                    >
                      <span>{project.externalLink}</span>
                      {project.externalLink.startsWith('http') && <ExternalLink className="w-3.5 h-3.5" />}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </GradeReveal>
      </section>

      {/* 7. NEXT PROJECT & BOTTOM CTA */}
      <section className="border-t border-border pt-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <GradeReveal>
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              UP NEXT IN TIMELINE
            </span>
            <h3 className="font-display text-2xl text-foreground uppercase">
              <Link to={`/work/${nextProject.slug}`} className="hover:text-accent transition-colors">
                {nextProject.title}
              </Link>
            </h3>
            <p className="font-mono text-xs text-accent-2">
              {nextProject.category} · {nextProject.year}
            </p>
          </div>
        </GradeReveal>

        <GradeReveal delay={0.1}>
          <div className="flex items-center gap-4">
            <Button variant="secondary" to={`/work/${nextProject.slug}`}>
              Next Project →
            </Button>
            <Button variant="primary" to="/contact">
              Start a Project
            </Button>
          </div>
        </GradeReveal>
      </section>

    </article>
  );
};
