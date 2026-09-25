// i18n English dictionary scaffolding
export const dictionary = {
  common: {
    name: 'Abhijit Raul',
    monogram: 'AR',
    role: 'Video Editor & Creative Technologist',
    location: 'Goa, India — Remote Worldwide',
    email: 'abhijitraul77@gmail.com',
    whatsapp: '+918010801696',
    whatsappUrl: 'https://wa.me/918010801696',
    instagram: '@abhijit_hunter7',
    instagramUrl: 'https://instagram.com/abhijit_hunter7',
    linkedin: 'abhijitraul777',
    linkedinUrl: 'https://linkedin.com/in/abhijitraul777',
    github: 'Abhijithunter7',
    githubUrl: 'https://github.com/Abhijithunter7',
    startProject: 'Start a Project',
    seeTheWork: 'See the Work',
    viewAllWork: 'Explore All Projects',
    backToHome: 'Back to Home',
    copyright: '© 2026 Abhijit Raul. All rights reserved.',
    availableBadge: 'Available for freelance projects — replies within 24–48 hrs',
    tagline: 'I cut, grade, and animate stories for brands and creators — and I build the tools and interfaces to show that work off properly.',
  },
  nav: {
    work: 'Work',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    admin: 'Admin',
  },
  home: {
    eyebrow: 'VIDEO EDITOR & CREATIVE TECHNOLOGIST — GOA, INDIA',
    headline: 'STORIES, GRADED FRAME BY FRAME.',
    subheadline: 'MSc in AI, day job in DaVinci Resolve and CapCut. I cut, grade, and animate for brands and creators — and I build the interfaces to show that work off properly.',
    proofStrip: [
      'MSc in AI (Goa University, expected May 2026)',
      'AI Filmmaking Pipeline Certified — Higgsfield Academy, July 2026',
      'BSc Computer Science, CGPA 7.97/10',
    ],
    selectedWork: 'SELECTED WORK',
    selectedWorkSub: 'Hover or drag the slider to inspect the raw vs finished grade.',
    whatIDoTitle: 'WHAT I DO',
    whatIDoSub: 'Four areas of execution tailored for visual impact and conversion.',
    methodTitle: 'THE METHOD: STRUCTURED STORYTELLING',
    methodSub: 'A disciplined grading pass pipeline engineered for pacing, iteration speed, and precision.',
    aboutTeaser: "I'm a video editor with an unusual second life — an MSc in AI. That mix shows up in every cut: structured pacing, fast iteration, and a fluency with next-gen tools most editors are still catching up to.",
    reelSeriesTitle: 'CURRENTLY CUTTING: THE CAR REEL SERIES',
    reelSeriesSub: 'Follow ongoing automotive speed ramping, acoustic design, and color grading on Instagram.',
    finalCtaTitle: 'Got a story that needs a grade?',
    finalCtaBtn: 'Start a Project',
  },
  about: {
    eyebrow: 'ABOUT ABHIJIT RAUL',
    openingStatement: 'I edit like an engineer thinks — structured, iterative, obsessed with the version after this one.',
    story: "I'm Abhijit — a video editor and creator with a distinctive edge: an academic background in Artificial Intelligence. I spend my days cutting, color grading, and animating for brands and creators, combining the timeline craftsmanship of DaVinci Resolve and CapCut with the analytical discipline of computer science. That AI background isn't a party trick — it shapes how I pace a cut, how fast I iterate, and how comfortably I move between traditional editing and next-generation AI-assisted tools like Claude, Runway, ElevenLabs, and Google Flow, which most editors are still catching up to. Outside the edit suite, I sketch and paint, follow astronomy and space-science news, lift weights, and build interactive web experiences — including the canvas-driven scrollytelling engine that powers my personal site. I'm currently completing my MSc in AI at Goa Business School, Goa University, with a thesis focus on Small Language, Vision, and Language Models — work that keeps feeding back into how I think about story structure and pacing.",
    values: [
      {
        title: 'Structured Storytelling',
        desc: 'Pacing engineered for retention, not guessed at.',
      },
      {
        title: 'AI-Assisted Velocity',
        desc: 'Faster iteration without losing the human hand.',
      },
      {
        title: 'Timeline Craftsmanship',
        desc: 'Every frame graded, every sound chosen on purpose.',
      },
    ],
    personalNote: "When I'm not in the timeline, I'm sketching, reading about the latest in astronomy, in the gym, or out shooting the next car-reel drive.",
    cta: "Like how I think? Let's start a project.",
  },
  services: {
    eyebrow: 'SERVICES & COLLABORATION',
    headline: 'NO TEMPLATES. NO GUESSWORK.',
    subheadline: 'I take on brand video, motion, and color-grading work — and, when it fits, the web build to go with it. Every project starts with a conversation, not a price list.',
    ctaBandTitle: "Have a project in mind? Let's talk.",
  },
  contact: {
    eyebrow: 'START A PROJECT',
    headline: "Let's grade something together.",
    responseTime: 'I usually reply within 24–48 hours.',
    successMessage: "Message received — I'll be in touch within 48 hours.",
  },
  notFound: {
    code: 'SIGNAL LOST // 404',
    title: 'TIMELINE SYNCHRONIZATION ERROR',
    message: 'The requested sequence frame or timeline feed is offline or has been moved.',
    button: 'Return to Sequence (Home)',
  },
};

export function t(key: string): string {
  const parts = key.split('.');
  let current: any = dictionary;
  for (const part of parts) {
    if (current && current[part] !== undefined) {
      current = current[part];
    } else {
      return key;
    }
  }
  return typeof current === 'string' ? current : key;
}
