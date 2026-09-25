import { Project, ServiceOffer, FAQItem, TimelineEntry } from './types';

export const INITIAL_PROJECTS: Project[] = [
  {
    slug: 'swimming-pools-spa',
    title: 'Swimming Pools & Spa — Commercial Brand Suite',
    category: 'Brand Work',
    year: '2026',
    role: 'Video Editor, Motion Designer & Graphic Designer',
    summary: 'A full brand video and motion suite for a commercial swimming-pool and spa client.',
    outcome: 'Delivered commercial explainers, a logo reveal animation, and print collateral in one cohesive visual system.',
    brief: 'The client required a high-end visual showcase that conveyed both architectural tranquility and luxury hospitality standards across digital channels and on-site collateral.',
    concept: 'A twilight chromatic grading concept transitioning from cool cobalt water tones into warm, crimson-gold architectural accent lighting, establishing a tranquil luxury signature.',
    process: [
      {
        step: 'Edit & Rhythm Selection',
        description: 'Selected slow-motion 60fps underwater and surface captures, assembling a gentle ambient cut synced to acoustic textures.',
        tools: ['DaVinci Resolve', 'Fairlight Audio']
      },
      {
        step: 'Color Grading & Match',
        description: 'Balanced custom node trees to isolate water cyan highlights while keeping surrounding stone and timber warm and grounded.',
        tools: ['DaVinci Resolve Color Page', 'Custom 3D LUTs']
      },
      {
        step: 'Motion & Print Design Suite',
        description: 'Crafted a bespoke 3D-inspired water-refraction logo reveal and matching vector collateral for luxury guest brochures.',
        tools: ['Motion Graphics Suite', 'Vector Design']
      }
    ],
    coverUrl: '/assets/project-swimming-pools-spa.jpg',
    rawCoverUrl: '/assets/project-swimming-pools-spa.jpg',
    galleryUrls: [
      '/assets/project-swimming-pools-spa.jpg',
      '/assets/hero-bg.jpg',
      '/assets/about-bts-slot.jpg'
    ],
    tags: ['Color Grading', 'Motion Graphics', 'Print Design', 'Brand Video'],
    externalLink: '[client link if shareable]',
    featured: true,
    sortOrder: 1,
    published: true,
  },
  {
    slug: 'car-edit-reels',
    title: 'Cinematic Car Edit Reels',
    category: 'Car Reels',
    year: 'Ongoing',
    role: 'Creator, Director, Editor, Sound Designer & Colorist',
    summary: 'A self-initiated automotive series on Instagram built around speed ramping and layered sound design.',
    outcome: 'Established a dedicated following and a consistent moody, dark automotive color-grading signature.',
    brief: 'Create a distinct visual identity for high-octane automotive reels that breaks away from overused transitions through surgical audio design, moody lighting, and kinetic speed manipulation.',
    concept: 'Noir automotive grade: Deep charcoal contrast, mist/fog diffusion, and high-frequency metallic rim-light reflections paired with visceral turbo flutter sound design.',
    process: [
      {
        step: 'Speed Ramping & Cut Choreography',
        description: 'Mapped dynamic velocity curves directly to engine revs, downshifts, and camera pans for seamless kinetic flow.',
        tools: ['CapCut Pro', 'DaVinci Resolve Timeline']
      },
      {
        step: 'Acoustic Sound Stacking',
        description: 'Layered multi-track telemetry audio, tire screech frequencies, mechanical turbo whistles, and deep sub-bass drops.',
        tools: ['Fairlight Audio', 'Acoustic Foley Design']
      },
      {
        step: 'Signature Automotive Grade',
        description: 'Extracted vehicle paint specular highlights, desaturated distracting greenery, and dialed in golden hour road reflections.',
        tools: ['DaVinci Resolve Studio', 'Color Wheels & Power Windows']
      }
    ],
    coverUrl: '/assets/project-car-edit-reels.jpg',
    rawCoverUrl: '/assets/project-car-edit-reels.jpg',
    galleryUrls: [
      '/assets/project-car-edit-reels.jpg',
      '/assets/hero-bg.jpg',
      '/assets/about-bts-slot.jpg'
    ],
    tags: ['Speed Ramping', 'Sound Design', 'Color Grading', 'Automotive'],
    externalLink: 'https://instagram.com/abhijit_hunter7',
    featured: true,
    sortOrder: 2,
    published: true,
  },
  {
    slug: 'ai-filmmaking-pipeline',
    title: 'The AI Filmmaking Pipeline',
    category: 'AI Pipeline',
    year: '2026',
    role: 'AI Pipeline Architect & Editor',
    summary: 'A production-ready workflow connecting generative AI tools with traditional timeline editing.',
    outcome: 'Certified by Higgsfield Academy; built custom prompt templates for rapid storyboard iteration and AI B-roll synthesis.',
    brief: 'Bridge the gap between raw AI video generator outputs and broadcast-grade color-calibrated timelines without the synthetic aesthetic or uncontrolled motion artifacts.',
    concept: 'Hybrid Human-AI Pipeline: Rapid prompt-to-timeline synthesis with rigorous manual color grading, audio choreography, and camera stabilization.',
    process: [
      {
        step: 'Generative Synthesis & Prompt Engineering',
        description: 'Engineered high-fidelity text-to-video and image-to-video motion templates with controlled camera trajectories.',
        tools: ['Runway Gen-3', 'Google Flow', 'ElevenLabs', 'Claude']
      },
      {
        step: 'Motion Stabilization & Up-sampling',
        description: 'Removed frame jitter, standardized frame rates to 24fps cinema cadence, and cleaned digital compression artifacts.',
        tools: ['DaVinci Resolve Studio', 'AI Optical Flow']
      },
      {
        step: 'Color Harmonization & Film Grain',
        description: 'Applied uniform 35mm film grain emulation and bespoke split-toning to integrate AI B-roll seamlessly with live action.',
        tools: ['DaVinci Resolve Color Suite', 'Film Emulation Node Tree']
      }
    ],
    coverUrl: '/assets/project-ai-pipeline.jpg',
    rawCoverUrl: '/assets/project-ai-pipeline.jpg',
    galleryUrls: [
      '/assets/project-ai-pipeline.jpg',
      '/assets/portfolio_engine_cover_1790171082762.jpg',
      '/assets/hero-bg.jpg'
    ],
    tags: ['Runway Gen-3', 'ElevenLabs', 'DaVinci Resolve', 'AI Pipeline'],
    externalLink: '[credential verification link if available]',
    featured: true,
    sortOrder: 3,
    published: true,
  },
  {
    slug: 'portfolio-engine',
    title: 'Kinetic Scrollytelling Portfolio Engine',
    category: 'Web/Dev',
    year: '2026',
    role: 'Creative Developer & Designer',
    summary: 'A personal interactive portfolio built on a 60fps HTML5 Canvas scrubbing engine.',
    outcome: 'Responsive mobile dynamic viewport with clamped retina GPU scaling and procedural Web Audio ambience.',
    brief: 'Build a one-of-a-kind digital stage for visual editors that feels like operating a live color-grading suite rather than scrolling a static template.',
    concept: 'Timeline Scrubber & Viewport Grading: Seamless frame development on scroll, 60fps hardware-accelerated canvas animations, and reactive audio telemetry.',
    process: [
      {
        step: 'Canvas GPU Scrub Engine',
        description: 'Architected requestAnimationFrame rendering pipeline with cached frame buffers and clamped devicePixelRatio rendering.',
        tools: ['HTML5 Canvas', 'TypeScript', 'Vite']
      },
      {
        step: 'Micro-Interactions & Transitions',
        description: 'Implemented viewport grade reveal masks, trailing exposure glow cursor, and timeline tick mark synchronization.',
        tools: ['Framer Motion', 'Tailwind CSS']
      },
      {
        step: 'Audio Telemetry & Performance Optimization',
        description: 'Integrated procedural Web Audio synthesis triggered by scrubber movement with sub-300ms time-to-interactive.',
        tools: ['Web Audio API', 'Lighthouse Optimization']
      }
    ],
    coverUrl: '/assets/project-portfolio-engine.jpg',
    rawCoverUrl: '/assets/project-portfolio-engine.jpg',
    galleryUrls: [
      '/assets/project-portfolio-engine.jpg',
      '/assets/hero-bg.jpg',
      '/assets/spa_cover_1790170974344.jpg'
    ],
    tags: ['Next.js', 'Framer Motion', 'Web Audio API', 'Creative Tech'],
    externalLink: 'https://github.com/Abhijithunter7/video_editing_profile',
    featured: true,
    sortOrder: 4,
    published: true,
  },
];

export const SERVICE_OFFERS: ServiceOffer[] = [
  {
    id: 'brand-commercial',
    title: 'Brand & Commercial Video Editing',
    tagline: 'Polished cuts that convert attention into action',
    description: 'For teams launching a product, service, or campaign. High-impact narrative pacing, clear messaging hierarchy, and surgical cut decisions that hold audience retention across commercial and social formats.',
    targetAudience: 'Brand owners, marketing leads, creative agencies, and product teams.',
    deliverables: [
      'Hero commercial master cuts (16:9 & 9:16 vertical)',
      'Hook-optimized social variations (15s, 30s, 60s)',
      'Subtitles, graphic callouts & kinetic typography',
      'Clean broadcast sound design & audio mastering'
    ]
  },
  {
    id: 'color-grading-motion',
    title: 'Color Grading & Motion Graphics',
    tagline: 'A consistent, moody visual signature for your brand',
    description: 'For brands that want a cinematic, unified aesthetic. Transform flat camera profiles and fragmented footage into a moody, high-contrast visual world with bespoke logo animations and title sequences.',
    targetAudience: 'Commercial directors, luxury lifestyle brands, and automotive creators.',
    deliverables: [
      'DaVinci Resolve node-based color grading & shot matching',
      'Custom LUT development & look-book creation',
      'Logo reveals, lower thirds & 2D/3D motion accents',
      'Print collateral & brand design system integration'
    ]
  },
  {
    id: 'ai-assisted-post',
    title: 'AI-Assisted Rapid Post-Production',
    tagline: 'Faster turnarounds without losing the human hand',
    description: 'For tight-turnaround social and campaign content. Leveraging state-of-the-art AI generation (Runway Gen-3, Claude, ElevenLabs, Google Flow) for rapid storyboarding, B-roll synthesis, and voice prototyping with human timeline craft.',
    targetAudience: 'Digital creators, agile startups, and high-frequency content teams.',
    deliverables: [
      'Generative concept storyboarding & pre-vis',
      'Synthetic B-roll expansion & scene extensions',
      'AI-accelerated rough cut assembly & captioning',
      'Human-graded final master export'
    ]
  },
  {
    id: 'interactive-web-builds',
    title: 'Interactive Portfolio / Web Builds',
    tagline: 'Portfolios and landing pages that move like film',
    description: 'For creators and studios who want their site to move like cinema. Bespoke interactive web experiences built with modern frameworks, canvas scrubbing engines, and custom scrollytelling timelines.',
    targetAudience: 'Directors, visual artists, tech founders, and boutique creative studios.',
    deliverables: [
      'Full-stack custom React / Next.js web application',
      '60fps canvas scrollytelling & grade-scrubber interactions',
      'Mobile-first responsive layout & Lighthouse 90+ optimization',
      'CMS / admin dashboard & contact form integration'
    ]
  }
];

export const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Discovery & Creative Alignment',
    description: 'Quick call or message about your goals, reference material, deliverables, and timeline.'
  },
  {
    number: '02',
    title: 'Scoped Plan & Proposal',
    description: 'A clear scoped plan — no rigid fixed packages, priced transparently to the actual project requirements.'
  },
  {
    number: '03',
    title: 'Edit, Grade & Revision Rounds',
    description: 'Iterative timeline craft: rough cut assembly, color grading pass, sound design, and structured revision rounds.'
  },
  {
    number: '04',
    title: 'Master Delivery & Wrap-up',
    description: 'Full-resolution master delivery across all aspect ratios, organized source archives, and a wrap-up call.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Do you work with clients outside India?',
    answer: 'Yes, absolutely. I work remotely with international clients, creators, and brands worldwide. All communication, footage transfer (via high-speed cloud links), and review cycles are handled smoothly across time zones.'
  },
  {
    question: "What's your typical turnaround?",
    answer: '[Depends on scope; confirm per project]. Short-form social reels and rapid edits can be delivered within 24–48 hours, while multi-minute commercial brand videos or full motion suites typically take 1–2 weeks depending on revision rounds.'
  },
  {
    question: 'Do you use AI tools in the edit?',
    answer: 'Selectively and purposefully. I use generative tools for rough cuts, B-roll prototyping, voice synthesis, and rapid ideation. The final creative direction, pacing, fine cuts, and color grading are always executed with meticulous human craftsmanship in the timeline.'
  },
  {
    question: 'What software do you edit in?',
    answer: 'Primarily DaVinci Resolve Studio (for narrative assembly, Fairlight audio, and advanced node-based color grading) and CapCut (for fast, kinetic short-form social cuts). I also use specialized motion and coding toolkits for web integrations.'
  },
  {
    question: 'Can you also build the website for my brand/portfolio?',
    answer: 'Yes! Having an academic computer science and AI background alongside video editing allows me to build custom interactive web experiences, scrollytelling engines, and digital portfolios that match your visual brand identity.'
  },
  {
    question: 'How do I get a quote?',
    answer: 'Simply send a message through the Contact page or via WhatsApp/Email. Share a few details about your project goals, raw footage volume, and desired timeline, and I will send a tailored, transparent project scope.'
  },
  {
    question: 'Do you offer print or flyer design alongside video?',
    answer: 'Yes. As demonstrated in the Swimming Pools & Spa commercial suite, I can design vector brand assets, logo reveals, print flyers, and marketing collateral to ensure a unified visual identity across physical and digital formats.'
  }
];

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    period: '2026–Present',
    role: 'Freelance Video Editor & Motion Designer',
    organization: 'Goa / Remote Worldwide',
    details: 'Commercial brand suites, luxury automotive grading, motion graphics, and creative web development for global clients.',
    isMilestone: true
  },
  {
    period: 'Ongoing',
    role: 'Creator & Director, Car Edit Reels',
    organization: 'Instagram (@abhijit_hunter7)',
    details: 'Self-initiated cinematic automotive series built on speed ramping, acoustic foley choreography, and noir grading.',
  },
  {
    period: 'July 2026',
    role: 'Certified — AI Filmmaking Pipeline',
    organization: 'Higgsfield Academy',
    details: 'Credential ID: HFA-2026-NGFSWY73HVCF. Production workflow bridging generative AI synthesis with traditional timeline post.',
    isMilestone: true
  },
  {
    period: 'Expected May 2026',
    role: 'MSc in Artificial Intelligence',
    organization: 'Goa Business School, Goa University',
    details: 'Thesis focus: Small Language, Vision, and Language Models — research directly informing narrative pacing and automated workflows.',
    isMilestone: true
  },
  {
    period: 'April 2024',
    role: 'BSc in Computer Science (CGPA 7.97/10)',
    organization: "Dnyanprassarak Mandal's College, Goa",
    details: 'A+ in Mobile App Development & IoT. Outstanding Grade for Final Year Capstone project.',
  }
];

export const SKILL_GROUPS = [
  {
    category: 'Edit & Grade',
    tools: ['DaVinci Resolve Studio', 'CapCut Pro', 'Fairlight Audio Mastering', 'Custom 3D LUT Design', 'Node-Based Color Correction', 'Speed Ramping']
  },
  {
    category: 'Motion & Design',
    tools: ['Logo Reveal Animation', 'Custom Motion Graphics', 'Kinetic Typography', 'Flyer & Print Design', 'Vector Branding Systems']
  },
  {
    category: 'AI-Assisted Workflow',
    tools: ['Claude 3.7 / 3.5 Sonnet', 'Runway Gen-3 Alpha', 'Google Flow', 'ElevenLabs Audio', 'ChatGPT & Copilot', 'Optical Flow Upscaling']
  },
  {
    category: 'Web & Build',
    tools: ['Next.js & React 18', 'TypeScript', 'Tailwind CSS', 'HTML5 Canvas', 'Framer Motion', 'Web Audio API', 'Supabase / Lovable Cloud']
  }
];
