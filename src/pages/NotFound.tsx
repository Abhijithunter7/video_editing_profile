import React from 'react';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { dictionary } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-xl w-full p-8 sm:p-12 bg-surface border border-border rounded text-center relative overflow-hidden">
        {/* Subtle SMPTE-inspired color bar glitch line */}
        <div className="absolute top-0 inset-x-0 h-1.5 flex">
          <div className="flex-1 bg-muted/40" />
          <div className="flex-1 bg-accent-2" />
          <div className="flex-1 bg-cyan-600" />
          <div className="flex-1 bg-emerald-600" />
          <div className="flex-1 bg-purple-600" />
          <div className="flex-1 bg-accent" />
          <div className="flex-1 bg-blue-700" />
        </div>

        <div className="pt-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-background border border-accent/40 rounded font-mono text-xs text-accent">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{dictionary.notFound.code}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl uppercase text-foreground">
            {dictionary.notFound.title}
          </h1>

          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            {dictionary.notFound.message}
          </p>

          <div className="p-4 bg-background border border-border rounded font-mono text-xs text-muted flex items-center justify-between">
            <span>TIMECODE: 00:00:00:00</span>
            <span className="text-accent animate-pulse">OFFLINE FEED</span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" to="/" className="w-full sm:w-auto px-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>{dictionary.notFound.button}</span>
            </Button>
            <Button variant="secondary" to="/work" className="w-full sm:w-auto px-6">
              <span>View All Work</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
