import React, { useEffect, useState } from 'react';

export const TimelineScrubber: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [timecode, setTimecode] = useState('00:00:00:00');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollPercent(percent);

      // Compute cinema timecode (e.g. 01:23:45:12) based on scroll progress
      const totalFrames = Math.floor((percent / 100) * 2400); // 100 seconds at 24fps
      const frames = totalFrames % 24;
      const totalSeconds = Math.floor(totalFrames / 24);
      const seconds = totalSeconds % 60;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const hours = 1;
      
      const tc = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(frames).padStart(2, '0')}`;
      setTimecode(tc);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate 20 timeline tick marks
  const ticks = Array.from({ length: 21 }, (_, i) => i * 5);

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 h-5 bg-background/90 backdrop-blur-sm border-b border-border select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Background timeline ruler ticks */}
      <div className="relative w-full h-full flex items-center px-2">
        <div className="w-full flex justify-between items-center text-[8px] font-mono text-muted/40">
          {ticks.map((tick) => (
            <div key={tick} className="flex flex-col items-center">
              <span className={`h-1.5 w-[1px] ${tick % 25 === 0 ? 'bg-accent/60 h-2' : 'bg-border'}`} />
              <span className="hidden md:inline text-[7px] mt-0.5 tracking-tighter opacity-60">
                {tick % 25 === 0 ? `${tick}%` : ''}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Scrubber Progress Line (Crimson) */}
        <div 
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-accent via-accent to-accent-2 transition-all duration-75"
          style={{ width: `${scrollPercent}%` }}
        />

        {/* Scrubber Playhead cursor / needle */}
        <div 
          className="absolute top-0 w-2 h-4 bg-accent -translate-x-1/2 flex items-center justify-center transition-all duration-75 shadow-glow-crimson"
          style={{ left: `${scrollPercent}%` }}
        >
          <div className="w-[1px] h-full bg-accent-2" />
        </div>

        {/* Timecode badge fixed right on desktop */}
        <div className="absolute right-3 top-0.5 text-[9px] font-mono tracking-wider text-muted hidden sm:flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-foreground/90 font-medium">TC {timecode}</span>
          <span className="text-muted/60 text-[8px]">24 FPS</span>
        </div>
      </div>
    </div>
  );
};
