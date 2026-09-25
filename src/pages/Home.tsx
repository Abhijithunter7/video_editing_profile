import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Instagram } from 'lucide-react';
import { dictionary } from '@/lib/i18n';
import { getStoredProjects, getStoredTestimonials } from '@/lib/supabase';
import { SERVICE_OFFERS } from '@/lib/data';
import { FilmstripGallery } from '@/components/ui/FilmstripGallery';
import { GradeBars } from '@/components/ui/GradeBars';
import { GradeReveal } from '@/components/ui/GradeReveal';
import { Button } from '@/components/ui/Button';

export const Home: React.FC = () => {
  const projects = getStoredProjects().filter((p) => p.published && p.featured);
  const testimonials = getStoredTestimonials().filter((t) => t.published);

  // Letter-by-letter mask animation
  const letterContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 * i },
    }),
  };

  const letterChild = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 35,
    },
  };

  const heroHeadlineLetters = Array.from("STORIES, GRADED FRAME BY FRAME.");

  return (
    <div className="space-y-24 md:space-y-36">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden border-b border-border/60">
        {/* Full-bleed hero background [hero-reel-slot] with desaturated-to-color crossfade */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src="/assets/hero-bg.jpg"
            alt="Cinematic timeline and color grading studio [hero-reel-slot]"
            initial={{ filter: 'grayscale(100%) brightness(0.6)', scale: 1.05 }}
            animate={{ filter: 'grayscale(0%) brightness(0.75)', scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover object-center pointer-events-none"
          />
          {/* Gradients & Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
          <div className="absolute inset-0 vignette-radial pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Live Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-surface/90 backdrop-blur-md border border-border rounded mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-foreground/90 font-medium">
              {dictionary.common.availableBadge}
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-eyebrow mb-4"
          >
            {dictionary.home.eyebrow}
          </motion.p>

          {/* Giant Kinetic Headline with Letter-by-Letter Mask Reveal */}
          <motion.h1
            variants={letterContainer}
            initial="hidden"
            animate="visible"
            className="font-display text-fluid-h1 uppercase text-foreground mb-6 max-w-5xl tracking-tight leading-none flex flex-wrap justify-center overflow-hidden"
          >
            {heroHeadlineLetters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterChild}
                className={char === " " ? "mr-4" : ""}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-fluid-body text-foreground/85 text-center mb-10 max-w-2xl leading-relaxed"
          >
            {dictionary.home.subheadline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="primary" to="/contact">
              {dictionary.common.startProject}
            </Button>
            <Button variant="secondary" to="/work">
              {dictionary.common.seeTheWork}
            </Button>
          </motion.div>
        </div>

        {/* Bottom subtle timeline tick readout */}
        <div className="absolute bottom-4 left-0 right-0 px-6 hidden sm:flex justify-between items-center text-[10px] font-mono text-muted/60 pointer-events-none">
          <span>SEQUENCE: TIMELINE_01</span>
          <span>GRADE: CRIMSON & GOLD (REC.709)</span>
          <span>FPS: 24.00</span>
        </div>
      </section>

      {/* 2. PROOF STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GradeReveal>
          <div className="p-6 md:p-8 bg-surface/60 border border-border rounded">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border">
              {dictionary.home.proofStrip.map((item, idx) => (
                <div key={idx} className={`flex items-center gap-3 ${idx > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}>
                  <div className="p-2 bg-background border border-border rounded text-accent-2 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs text-foreground/90 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </GradeReveal>
      </section>

      {/* 3. SELECTED WORK (FILMSTRIP GALLERY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GradeReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-eyebrow block mb-2">{dictionary.home.selectedWork}</span>
              <h2 className="font-display text-fluid-h2 text-foreground uppercase">
                FEATURED TIMELINES
              </h2>
            </div>
            <p className="text-muted text-sm max-w-md">
              {dictionary.home.selectedWorkSub}
            </p>
          </div>

          <FilmstripGallery projects={projects} />

          <div className="mt-8 text-center sm:text-right">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent hover:text-accent-2 transition-colors cinematic-link"
            >
              <span>{dictionary.common.viewAllWork}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </GradeReveal>
      </section>

      {/* 4. WHAT I DO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GradeReveal>
          <div className="mb-12">
            <span className="text-eyebrow block mb-2">{dictionary.home.whatIDoTitle}</span>
            <h2 className="font-display text-fluid-h2 text-foreground uppercase">
              CAPABILITIES & EXECUTION
            </h2>
            <p className="text-muted text-sm mt-2 max-w-xl">
              {dictionary.home.whatIDoSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_OFFERS.map((service, index) => (
              <div
                key={service.id}
                className="p-8 bg-surface border border-border rounded group hover:border-accent transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-accent font-semibold block mb-2">
                    0{index + 1} // AREA
                  </span>
                  <h3 className="font-display text-2xl text-foreground uppercase tracking-wide group-hover:text-accent transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent-2 text-xs font-mono mb-4 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-muted">
                    No fixed packages
                  </span>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-foreground group-hover:text-accent transition-colors"
                  >
                    <span>Explore Area</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </GradeReveal>
      </section>

      {/* 5. THE METHOD: STRUCTURED STORYTELLING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GradeReveal>
          <div className="mb-12">
            <span className="text-eyebrow block mb-2">{dictionary.home.methodTitle}</span>
            <h2 className="font-display text-fluid-h2 text-foreground uppercase">
              THE THREE-PASS PIPELINE
            </h2>
            <p className="text-muted text-sm mt-2 max-w-2xl">
              {dictionary.home.methodSub}
            </p>
          </div>

          <GradeBars />
        </GradeReveal>
      </section>

      {/* 6. ABOUT TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GradeReveal>
          <div className="p-8 md:p-12 bg-surface border border-border rounded grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Portrait placeholder slot [portrait-slot] */}
            <div className="lg:col-span-4 aspect-square rounded border border-border overflow-hidden bg-background relative group">
              <img
                src="/assets/portrait-slot.jpg"
                alt="Abhijit Raul Portrait Silhouette [portrait-slot]"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-3 left-3 px-2 py-1 bg-background/80 backdrop-blur-md rounded font-mono text-[9px] text-muted border border-border">
                AVATAR / SILHOUETTE
              </div>
            </div>

            {/* About Teaser Copy */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-eyebrow block mb-2">ABOUT THE EDITOR</span>
                <h3 className="font-display text-3xl md:text-4xl text-foreground uppercase mb-4">
                  "I EDIT LIKE AN ENGINEER THINKS."
                </h3>
                <p className="text-foreground/80 text-base leading-relaxed mb-4">
                  {dictionary.home.aboutTeaser}
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Completing an MSc in AI at Goa University with a thesis focus on Vision & Small Language Models — bridging code, computer vision, and the visceral emotional craft of the edit suite.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Button variant="primary" to="/about">
                  Read Full Story
                </Button>
                <Link
                  to="/contact"
                  className="font-mono text-xs uppercase font-bold text-foreground/80 hover:text-accent transition-colors cinematic-link"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </GradeReveal>
      </section>

      {/* 7. TESTIMONIALS (Hidden by default / published: false) */}
      {testimonials.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GradeReveal>
            <div className="mb-8">
              <span className="text-eyebrow block mb-2">CLIENT FEEDBACK</span>
              <h2 className="font-display text-fluid-h2 text-foreground uppercase">
                TESTIMONIALS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div key={t.id} className="p-6 bg-surface border border-border rounded">
                  <p className="text-foreground/90 italic mb-4">"{t.quote}"</p>
                  <div className="font-mono text-xs text-accent font-bold">{t.name}</div>
                  <div className="text-muted text-xs">{t.role} · {t.company}</div>
                </div>
              ))}
            </div>
          </GradeReveal>
        </section>
      )}

      {/* 8. LATEST FROM THE REEL SERIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GradeReveal>
          <div className="p-8 bg-gradient-to-r from-surface via-surface to-background border border-border rounded flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-background border border-border rounded text-accent flex-shrink-0">
                <Instagram className="w-8 h-8" />
              </div>
              <div>
                <span className="text-eyebrow block mb-1">INSTAGRAM AUTOMOTIVE REELS</span>
                <h3 className="font-display text-2xl text-foreground uppercase">
                  {dictionary.home.reelSeriesTitle}
                </h3>
                <p className="text-muted text-xs md:text-sm mt-1">
                  {dictionary.home.reelSeriesSub}
                </p>
              </div>
            </div>

            <Button
              variant="secondary"
              href={dictionary.common.instagramUrl}
              className="flex-shrink-0"
            >
              <span>Follow @abhijit_hunter7</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </GradeReveal>
      </section>

      {/* 9. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <GradeReveal>
          <div className="p-12 md:p-20 bg-surface border border-border rounded relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-eyebrow mb-4">READY TO GRADE</span>
              <h2 className="font-display text-fluid-h1 uppercase text-foreground mb-6 leading-none">
                {dictionary.home.finalCtaTitle}
              </h2>
              <p className="text-muted text-base max-w-lg mb-8 leading-relaxed">
                Whether you need a commercial brand cut, moody automotive grading, or a custom interactive canvas portfolio build.
              </p>
              <Button variant="primary" to="/contact" className="px-8 py-4 text-sm">
                {dictionary.home.finalCtaBtn}
              </Button>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </GradeReveal>
      </section>

    </div>
  );
};
