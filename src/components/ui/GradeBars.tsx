import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Film } from 'lucide-react';

export const GradeBars: React.FC = () => {
  const passes = [
    {
      step: 'PASS 01',
      title: 'Structured Storytelling',
      icon: Layers,
      description: 'Pacing and cut rhythms engineered for retention, informed by an academic AI background and narrative metrics.',
      progress: '92%',
      tools: 'Pacing Analysis · Hook Retention · Sequence Assembly',
      color: 'from-accent to-accent',
    },
    {
      step: 'PASS 02',
      title: 'AI-Assisted Velocity',
      icon: Zap,
      description: 'Generative tools (Claude, Runway Gen-3, ElevenLabs, Google Flow) speed up scripting and rough cuts without losing creative direction.',
      progress: '86%',
      tools: 'Rapid Pre-vis · Foley Prototyping · Scene Extensions',
      color: 'from-accent to-accent-2',
    },
    {
      step: 'PASS 03',
      title: 'Timeline Craftsmanship',
      icon: Film,
      description: 'Meticulous node-based color grading, Fairlight audio choreography, and bespoke motion graphics on every single frame.',
      progress: '100%',
      tools: 'DaVinci Resolve Studio · 3D LUT Design · Master Export',
      color: 'from-accent-2 to-foreground',
    },
  ];

  return (
    <div className="space-y-8">
      {passes.map((pass, index) => {
        const Icon = pass.icon;
        return (
          <motion.div
            key={pass.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 md:p-8 bg-surface border border-border rounded relative overflow-hidden group hover:border-accent/40 transition-colors"
          >
            {/* Header / Step Label */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-background border border-border rounded text-accent group-hover:text-accent-2 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-accent font-semibold block">
                    {pass.step}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl text-foreground uppercase tracking-wide">
                    {pass.title}
                  </h3>
                </div>
              </div>
              <span className="font-mono text-xs text-muted/80 font-medium">
                {pass.tools}
              </span>
            </div>

            <p className="text-muted text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
              {pass.description}
            </p>

            {/* Horizontal Grade Pass Timeline Bar */}
            <div className="relative w-full h-2.5 bg-background border border-border rounded-sm overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: pass.progress }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full bg-gradient-to-r ${pass.color} rounded-sm relative`}
              >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-foreground animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
