import React from 'react';

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only fixed top-6 left-6 z-[100] px-4 py-2 bg-accent text-foreground font-mono text-xs uppercase tracking-wider rounded border border-accent-2 shadow-glow-crimson"
    >
      Skip to main content
    </a>
  );
};
