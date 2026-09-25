import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ProjectCategory } from '@/lib/types';
import { getStoredProjects } from '@/lib/supabase';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { GradeReveal } from '@/components/ui/GradeReveal';
import { Button } from '@/components/ui/Button';

export const WorkIndex: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = (searchParams.get('filter') as ProjectCategory | 'All') || 'All';
  const allProjects = getStoredProjects().filter((p) => p.published);

  const categories: (ProjectCategory | 'All')[] = [
    'All',
    'Brand Work',
    'Car Reels',
    'AI Pipeline',
    'Web/Dev',
  ];

  const handleFilterChange = (cat: ProjectCategory | 'All') => {
    if (cat === 'All') {
      searchParams.delete('filter');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ filter: cat });
    }
  };

  const filteredProjects = useMemo(() => {
    if (currentFilter === 'All') return allProjects;
    return allProjects.filter((p) => p.category === currentFilter);
  }, [allProjects, currentFilter]);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <section className="border-b border-border pb-12">
        <GradeReveal>
          <span className="text-eyebrow block mb-3">WORK INDEX // TIMELINES</span>
          <h1 className="font-display text-fluid-h1 uppercase text-foreground mb-4">
            SELECTED PROJECTS
          </h1>
          <p className="text-muted text-base max-w-2xl leading-relaxed">
            A mix of client work, self-directed series, and the tools I build to show it all off. Inspect the raw capture against the finished grade on every timeline.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 mt-8" role="tablist" aria-label="Project Categories">
            {categories.map((cat) => {
              const isActive = currentFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-4 py-2 font-mono text-xs uppercase font-bold tracking-wider rounded border transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent-2 ${
                    isActive
                      ? 'bg-accent text-foreground border-accent shadow-glow-crimson'
                      : 'bg-surface text-muted border-border hover:text-foreground hover:border-accent/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </GradeReveal>
      </section>

      {/* Projects Grid */}
      <section>
        {filteredProjects.length === 0 ? (
          <div className="p-16 text-center bg-surface border border-border rounded">
            <p className="font-mono text-sm text-muted">No projects found for category "{currentFilter}".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <GradeReveal key={project.slug} delay={index * 0.1}>
                <article className="bg-surface border border-border rounded overflow-hidden group hover:border-accent transition-all duration-300 flex flex-col justify-between h-full">
                  
                  {/* Top Filmstrip Header */}
                  <div className="p-4 bg-background/80 border-b border-border flex items-center justify-between font-mono text-xs text-muted">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="font-bold text-foreground/80">{project.category}</span>
                    </span>
                    <span>{project.year}</span>
                  </div>

                  {/* Before/After Grade Slider */}
                  <div className="p-4">
                    <BeforeAfterSlider
                      gradedImage={project.coverUrl}
                      rawImage={project.rawCoverUrl}
                      alt={project.title}
                      aspectRatio="aspect-[16/10]"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-6 pt-2 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-background font-mono text-[10px] text-muted rounded border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="font-display text-2xl md:text-3xl text-foreground uppercase tracking-wide group-hover:text-accent transition-colors mb-2">
                        <Link to={`/work/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h2>

                      <p className="text-accent-2 font-mono text-xs font-semibold mb-3">
                        {project.role}
                      </p>

                      <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      <div className="p-3 bg-background/50 border-l-2 border-accent rounded-r font-mono text-xs text-muted mb-6">
                        <strong className="text-foreground">Outcome:</strong> {project.outcome}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <span className="font-mono text-xs text-muted">
                        Interactive Case Study
                      </span>
                      <Button variant="primary" to={`/work/${project.slug}`} className="px-4 py-2">
                        <span>View Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                      </Button>
                    </div>
                  </div>

                </article>
              </GradeReveal>
            ))}
          </div>
        )}
      </section>

      {/* CTA Band */}
      <section className="pt-12 text-center border-t border-border">
        <GradeReveal>
          <div className="max-w-xl mx-auto space-y-4">
            <h3 className="font-display text-2xl text-foreground uppercase">
              HAVE A SPECIFIC VISION OR FORMAT IN MIND?
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Every project starts with a direct conversation. Let's discuss your timeline, source footage, and target outcome.
            </p>
            <div className="pt-2">
              <Button variant="primary" to="/contact">
                Start a Project
              </Button>
            </div>
          </div>
        </GradeReveal>
      </section>

    </div>
  );
};
