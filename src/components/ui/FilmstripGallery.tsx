import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/lib/types';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface FilmstripGalleryProps {
  projects: Project[];
}

export const FilmstripGallery: React.FC<FilmstripGalleryProps> = ({ projects }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group/gallery">
      {/* Scroll controls (desktop) */}
      <div className="hidden lg:flex items-center gap-2 absolute -top-14 right-0">
        <button
          type="button"
          onClick={() => scroll('left')}
          className="p-2.5 bg-surface border border-border rounded hover:border-accent text-foreground hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent-2"
          aria-label="Scroll projects left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          className="p-2.5 bg-surface border border-border rounded hover:border-accent text-foreground hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent-2"
          aria-label="Scroll projects right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Filmstrip Horizontal Track / Mobile Stack */}
      <div
        ref={scrollContainerRef}
        className="flex flex-col lg:flex-row gap-6 lg:overflow-x-auto lg:pb-6 no-scrollbar snap-x snap-mandatory"
      >
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="w-full lg:w-[460px] flex-shrink-0 bg-surface border border-border rounded overflow-hidden snap-start hover:border-accent/60 transition-all duration-300 group flex flex-col justify-between"
          >
            {/* Top Film Header Strip */}
            <div className="p-3 bg-background/60 border-b border-border flex items-center justify-between font-mono text-[10px] text-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>SEQ_0{index + 1} // {project.category.toUpperCase()}</span>
              </span>
              <span>{project.year}</span>
            </div>

            {/* Interactive Before/After Grade Slider */}
            <div className="p-3">
              <BeforeAfterSlider
                gradedImage={project.coverUrl}
                rawImage={project.rawCoverUrl}
                alt={project.title}
                aspectRatio="aspect-[16/10]"
              />
            </div>

            {/* Card Body */}
            <div className="p-5 pt-2 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-background text-[10px] font-mono text-muted/90 rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-2xl text-foreground uppercase tracking-wide group-hover:text-accent transition-colors line-clamp-1 mb-2">
                  <Link to={`/work/${project.slug}`} className="focus:outline-none">
                    {project.title}
                  </Link>
                </h3>

                <p className="text-muted text-sm line-clamp-2 leading-relaxed mb-4">
                  {project.outcome}
                </p>
              </div>

              {/* View Case Study Link */}
              <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                <span className="text-xs font-mono text-accent-2 font-medium">
                  {project.role}
                </span>
                <Link
                  to={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors"
                >
                  <span>Deconstruct</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
