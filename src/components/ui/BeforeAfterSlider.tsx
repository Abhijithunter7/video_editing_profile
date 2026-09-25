import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  gradedImage: string;
  rawImage?: string;
  alt: string;
  className?: string;
  aspectRatio?: string; // e.g. 'aspect-video' or 'aspect-[16/9]'
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  gradedImage,
  rawImage,
  alt,
  className = '',
  aspectRatio = 'aspect-video',
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPos(100);
    }
  };

  const rawSrc = rawImage || gradedImage;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      className={`relative overflow-hidden select-none group border border-border rounded ${aspectRatio} ${className} cursor-ew-resize`}
      tabIndex={0}
      role="slider"
      aria-label={`Color grade comparison slider for ${alt}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPos)}
      aria-valuetext={`${Math.round(sliderPos)}% graded frame revealed`}
      onKeyDown={handleKeyDown}
    >
      {/* Background Graded Image (Right Layer) */}
      <img
        src={gradedImage}
        alt={`${alt} - Final Graded Frame`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />

      {/* Foreground Raw / Desaturated Image (Left Layer, clipped) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={rawSrc}
          alt={`${alt} - Raw Ungraded Frame`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none filter grayscale contrast-125 brightness-90 max-w-none"
          style={{
            width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
            height: '100%',
          }}
          loading="lazy"
        />
        {/* Raw Log Indicator Badge */}
        <div className="absolute top-3 left-3 px-2 py-1 bg-background/80 backdrop-blur-md border border-border rounded font-mono text-[9px] uppercase tracking-wider text-muted">
          RAW LOG / 001
        </div>
      </div>

      {/* Final Grade Indicator Badge */}
      <div className="absolute top-3 right-3 px-2 py-1 bg-background/80 backdrop-blur-md border border-accent/60 rounded font-mono text-[9px] uppercase tracking-wider text-accent">
        FINAL GRADE / REC.709
      </div>

      {/* Center Divider Line & Drag Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-accent-2 pointer-events-none shadow-glow-gold"
        style={{ left: `${sliderPos}%` }}
      >
        <div 
          onMouseDown={handleMouseDown}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface border-2 border-accent-2 flex items-center justify-center pointer-events-auto shadow-2xl transition-transform active:scale-110"
        >
          <div className="flex gap-0.5 items-center">
            <span className="w-1 h-3 bg-accent rounded-full" />
            <span className="w-1 h-3 bg-accent-2 rounded-full" />
          </div>
        </div>
      </div>

      {/* Subtitle affordance */}
      <div className="absolute bottom-2 inset-x-0 text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="px-3 py-1 bg-background/90 backdrop-blur-md border border-border/80 rounded font-mono text-[10px] text-foreground/80">
          ◀ Drag / Arrow Keys to Grade ▶
        </span>
      </div>
    </div>
  );
};
