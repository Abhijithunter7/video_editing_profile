import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MessageCircle, Instagram, Linkedin, Github, Check, Copy, Send, AlertCircle, Clock, MapPin } from 'lucide-react';
import { dictionary } from '@/lib/i18n';
import { submitContactForm } from '@/lib/supabase';
import { GradeReveal } from '@/components/ui/GradeReveal';
import { Button } from '@/components/ui/Button';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry_type: preselectedService ? 'Commercial Brand Video' : 'Commercial Brand Video',
    budget: '$1,000 - $2,500',
    preferred_date: '',
    message: '',
    honeypot: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        message: `Hi Abhijit, I am interested in collaborating on ${preselectedService}. `,
      }));
    }
  }, [preselectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(dictionary.common.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSubmitting(true);

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.error || 'Failed to submit message. Please try again or ping directly via WhatsApp.');
      }
    } catch (err) {
      setErrorMessage('A network error occurred. Please contact directly via WhatsApp or Email.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* 1. HEADER */}
      <section className="space-y-6 border-b border-border pb-12">
        <GradeReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-eyebrow">{dictionary.contact.eyebrow}</span>
          </div>
          <h1 className="font-display text-fluid-h1 uppercase text-foreground max-w-5xl tracking-tight leading-none mb-4">
            {dictionary.contact.headline}
          </h1>
          <p className="text-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            Every project starts with a direct conversation. Tell me about your footage, concept, and target timeline below.
          </p>
        </GradeReveal>
      </section>

      {/* 2. FORM & DIRECT CHANNELS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form (col-span-7) */}
        <div className="lg:col-span-7">
          <GradeReveal>
            <div className="p-8 sm:p-10 bg-surface border border-border rounded relative">
              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-grade-wash">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center text-accent shadow-glow-crimson">
                    <Check className="w-8 h-8" />
                  </div>
                  <span className="font-mono text-xs text-accent uppercase tracking-widest block font-bold">
                    SIGNAL RECEIVED // TRANSMISSION CONFIRMED
                  </span>
                  <h3 className="font-display text-3xl text-foreground uppercase">
                    Thank You, {formData.name}
                  </h3>
                  <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
                    {dictionary.contact.successMessage} I review every message carefully against current timeline availability.
                  </p>

                  <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                    <Button
                      variant="primary"
                      href={`https://wa.me/918010801696?text=${encodeURIComponent(
                        `Hi Abhijit, I just submitted an inquiry on your portfolio regarding ${formData.enquiry_type}. My name is ${formData.name}.`
                      )}`}
                      className="w-full sm:w-auto"
                    >
                      <MessageCircle className="w-4 h-4 mr-2 text-accent-2" />
                      <span>Follow Up on WhatsApp</span>
                    </Button>
                    <Button
                      variant="secondary"
                      href={`mailto:${dictionary.common.email}?subject=${encodeURIComponent(
                        `Portfolio Inquiry: ${formData.enquiry_type} — ${formData.name}`
                      )}&body=${encodeURIComponent(
                        `Hi Abhijit,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nFocus: ${formData.enquiry_type}\nBudget: ${formData.budget}\nTarget Date: ${formData.preferred_date || 'Flexible'}\n\nProject Brief:\n${formData.message}`
                      )}`}
                      className="w-full sm:w-auto"
                    >
                      <Mail className="w-4 h-4 mr-2 text-accent" />
                      <span>Open in Email App</span>
                    </Button>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          enquiry_type: 'Commercial Brand Video',
                          budget: '$1,000 - $2,500',
                          preferred_date: '',
                          message: '',
                          honeypot: '',
                        });
                      }}
                      className="font-mono text-xs text-muted hover:text-foreground uppercase tracking-wider py-2 transition-colors"
                    >
                      ← Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-bold">
                      INQUIRY DOSSIER
                    </span>
                    <span className="font-mono text-[11px] text-muted flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-accent-2" />
                      <span>{dictionary.contact.responseTime}</span>
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-4 bg-accent/15 border border-accent rounded text-accent text-xs font-mono flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot field hidden from real humans */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-mono text-xs text-muted uppercase tracking-wider mb-2">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted/40 font-mono text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-mono text-xs text-muted uppercase tracking-wider mb-2">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@example.com"
                        className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted/40 font-mono text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
                      />
                    </div>
                  </div>

                  {/* Phone & Delivery Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block font-mono text-xs text-muted uppercase tracking-wider mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 555 0192 / +91..."
                        className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted/40 font-mono text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferred_date" className="block font-mono text-xs text-muted uppercase tracking-wider mb-2">
                        Target Delivery Date (Optional)
                      </label>
                      <input
                        id="preferred_date"
                        type="date"
                        value={formData.preferred_date}
                        onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded text-foreground font-mono text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="enquiry_type" className="block font-mono text-xs text-muted uppercase tracking-wider mb-2">
                        Project Focus
                      </label>
                      <select
                        id="enquiry_type"
                        value={formData.enquiry_type}
                        onChange={(e) => setFormData({ ...formData, enquiry_type: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded text-foreground font-mono text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
                      >
                        <option value="Commercial Brand Video">Commercial Brand Video</option>
                        <option value="Automotive Car Reels">Automotive Car Reels & Ramping</option>
                        <option value="Color Grading Suite">Color Grading Suite (DaVinci)</option>
                        <option value="AI Filmmaking Pipeline">AI Filmmaking Pipeline</option>
                        <option value="Interactive Web Build">Interactive Web / Portfolio Build</option>
                        <option value="Other Consultation">Other / General Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block font-mono text-xs text-muted uppercase tracking-wider mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded text-foreground font-mono text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
                      >
                        <option value="Under $1,000">Under $1,000 (Social cuts & fast reels)</option>
                        <option value="$1,000 - $2,500">$1,000 - $2,500 (Standard commercial scope)</option>
                        <option value="$2,500 - $5,000">$2,500 - $5,000 (Full suite + motion design)</option>
                        <option value="$5,000+">$5,000+ (Comprehensive video + web build)</option>
                        <option value="To Be Scoped">To Be Scoped / Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details Textarea */}
                  <div>
                    <label htmlFor="message" className="block font-mono text-xs text-muted uppercase tracking-wider mb-2">
                      Brief & Timeline Details <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding: 1) Your footage or concept, 2) Reference videos or mood, 3) Desired turnaround time."
                      className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted/40 font-sans text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-accent hover:bg-accent-2 text-foreground font-mono text-xs uppercase font-bold tracking-widest rounded transition-all duration-200 active:scale-[0.99] shadow-glow-crimson flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
                          <span>ENCRYPTING & TRANSMITTING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>TRANSMIT PROJECT BRIEF</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] font-mono text-muted/70 text-center mt-3">
                      Data stored securely. No marketing spam or third-party cookies.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </GradeReveal>
        </div>

        {/* Sidebar Channels & Direct Comms (col-span-5) */}
        <div className="lg:col-span-5 space-y-8">
          <GradeReveal delay={0.15}>
            {/* Direct Connect Box */}
            <div className="p-8 bg-surface border border-border rounded space-y-6">
              <span className="text-eyebrow block">DIRECT DISPATCH</span>
              <h3 className="font-display text-2xl text-foreground uppercase">
                NEED AN IMMEDIATE RESPONSE?
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                If you have an urgent cut or prefer quick messaging over email threads, ping directly on WhatsApp or copy the master email below.
              </p>

              {/* Email Pill */}
              <div className="p-3 bg-background border border-border rounded flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="font-mono text-xs text-foreground truncate select-all">
                    {dictionary.common.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 bg-surface border border-border rounded text-[11px] font-mono text-muted hover:text-accent hover:border-accent transition-colors flex items-center gap-1.5 focus-visible:ring-1 focus-visible:ring-accent-2 flex-shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-accent-2" />
                      <span className="text-accent-2">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct WhatsApp CTA */}
              <a
                href={dictionary.common.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-background border border-border hover:border-accent text-foreground font-mono text-xs uppercase font-bold tracking-wider rounded transition-colors flex items-center justify-between group"
              >
                <span className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-accent-2" />
                  <span>Open WhatsApp Direct</span>
                </span>
                <span className="text-accent-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </GradeReveal>

          {/* Studio Telemetry & Social Channels */}
          <GradeReveal delay={0.25}>
            <div className="p-8 bg-surface border border-border rounded space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-muted block border-b border-border/60 pb-3">
                STUDIO TELEMETRY
              </span>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center gap-3 text-foreground/90">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Goa, India (IST / UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/90">
                  <Clock className="w-4 h-4 text-accent-2" />
                  <span>Working Worldwide Remotely</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-3">
                  PUBLIC CHANNELS
                </span>
                <div className="space-y-2">
                  <a
                    href={dictionary.common.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-background border border-border/60 hover:border-accent rounded text-xs text-foreground/80 hover:text-accent transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-accent" />
                      <span>Instagram ({dictionary.common.instagram})</span>
                    </span>
                    <span className="font-mono text-[10px] text-muted">REELS</span>
                  </a>

                  <a
                    href={dictionary.common.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-background border border-border/60 hover:border-accent rounded text-xs text-foreground/80 hover:text-accent transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-muted" />
                      <span>LinkedIn ({dictionary.common.linkedin})</span>
                    </span>
                    <span className="font-mono text-[10px] text-muted">NETWORK</span>
                  </a>

                  <a
                    href={dictionary.common.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-background border border-border/60 hover:border-accent rounded text-xs text-foreground/80 hover:text-accent transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-muted" />
                      <span>GitHub ({dictionary.common.github})</span>
                    </span>
                    <span className="font-mono text-[10px] text-muted">CODE</span>
                  </a>
                </div>
              </div>
            </div>
          </GradeReveal>
        </div>
      </div>
    </div>
  );
};
