import { createClient } from '@supabase/supabase-js';
import { INITIAL_PROJECTS } from './data';
import { Project, ContactMessage, Testimonial } from './types';

// Supabase environment variables from Lovable Cloud
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Local storage fallback keys
const STORAGE_KEYS = {
  PROJECTS: 'ar_portfolio_projects',
  MESSAGES: 'ar_portfolio_messages',
  TESTIMONIALS: 'ar_portfolio_testimonials',
  AUTH: 'ar_portfolio_admin_auth',
};

// Initial state helpers
export function getStoredProjects(): Project[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to parse stored projects', e);
  }
  // Initialize with seed projects
  saveStoredProjects(INITIAL_PROJECTS);
  return INITIAL_PROJECTS;
}

export function saveStoredProjects(projects: Project[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  } catch (e) {
    console.error('Failed to save projects to storage', e);
  }
}

export function getStoredMessages(): ContactMessage[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to parse messages', e);
  }
  // Sample initial test messages
  const initialMessages: ContactMessage[] = [
    {
      id: 'msg_001',
      created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
      name: 'Elena Rostova',
      email: 'elena@velvetluxury.com',
      phone: '+44 20 7946 0912',
      enquiry_type: 'Brand Video',
      budget: '$2,000 - $5,000',
      preferred_date: '2026-10-15',
      message: 'Looking for a cinematic brand video cut for our luxury wellness line launch. Loved the swimming pool & spa grade!',
      status: 'new'
    },
    {
      id: 'msg_002',
      created_at: new Date(Date.now() - 3600000 * 72).toISOString(),
      name: 'Marcus Vance',
      email: 'marcus@apexspeed.de',
      phone: '+49 151 23456789',
      enquiry_type: 'Color Grading',
      budget: '$1,000 - $2,500',
      preferred_date: '2026-10-01',
      message: 'Need urgent speed ramping and automotive color grading for a 4-part Porsche GT3 track sequence.',
      status: 'read'
    }
  ];
  saveStoredMessages(initialMessages);
  return initialMessages;
}

export function saveStoredMessages(messages: ContactMessage[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  } catch (e) {
    console.error('Failed to save messages', e);
  }
}

export function getStoredTestimonials(): Testimonial[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to parse testimonials', e);
  }
  // Default empty/unpublished as specified
  return [];
}

export function saveStoredTestimonials(testimonials: Testimonial[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
  } catch (e) {
    console.error('Failed to save testimonials', e);
  }
}

// Contact submission handler with validation, honeypot & cloud/local sync
export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone?: string;
  enquiry_type: string;
  budget: string;
  preferred_date?: string;
  message: string;
  honeypot?: string;
}): Promise<{ success: boolean; error?: string; emailSent?: boolean }> {
  // Honeypot spam check
  if (formData.honeypot && formData.honeypot.trim() !== '') {
    return { success: true }; // Silently reject bot submissions
  }

  // Rate limit check (max 3 submissions per email per hour)
  const messages = getStoredMessages();
  const oneHourAgo = Date.now() - 3600000;
  const recentSubmissions = messages.filter(
    m => m.email.toLowerCase() === formData.email.toLowerCase() && 
    new Date(m.created_at).getTime() > oneHourAgo
  );

  if (recentSubmissions.length >= 3) {
    return { 
      success: false, 
      error: 'Submission rate limit reached for this email. Please try again in an hour or contact directly via WhatsApp.' 
    };
  }

  const newMessage: ContactMessage = {
    id: 'msg_' + Math.random().toString(36).substring(2, 9),
    created_at: new Date().toISOString(),
    name: formData.name,
    email: formData.email,
    phone: formData.phone || '',
    enquiry_type: formData.enquiry_type,
    budget: formData.budget,
    preferred_date: formData.preferred_date || '',
    message: formData.message,
    status: 'new'
  };

  // 1. Save to local storage cache
  const updated = [newMessage, ...messages];
  saveStoredMessages(updated);

  // 2. Dispatch real email via Web3Forms if access key is configured
  const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  let emailSent = false;

  if (web3formsKey) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `Portfolio Inquiry: ${formData.name} — ${formData.enquiry_type}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          enquiry_type: formData.enquiry_type,
          budget: formData.budget,
          preferred_date: formData.preferred_date || 'Flexible',
          message: formData.message,
        }),
      });
      const data = await response.json();
      if (data.success) {
        emailSent = true;
      }
    } catch (err) {
      console.warn('Web3Forms dispatch error:', err);
    }
  }

  // 3. If Supabase is connected, insert to cloud table
  if (supabase) {
    try {
      const { error } = await supabase.from('contact_messages').insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        enquiry_type: formData.enquiry_type,
        budget: formData.budget,
        preferred_date: formData.preferred_date,
        message: formData.message,
        status: 'new'
      }]);
      if (error) console.warn('Supabase message insert error:', error.message);
    } catch (err) {
      console.warn('Cloud insert fallback to local:', err);
    }
  }

  return { success: true, emailSent };
}

// Admin Auth Helper
export function checkAdminAuth(): boolean {
  return sessionStorage.getItem(STORAGE_KEYS.AUTH) === 'authenticated';
}

export function setAdminAuth(authenticated: boolean): void {
  if (authenticated) {
    sessionStorage.setItem(STORAGE_KEYS.AUTH, 'authenticated');
  } else {
    sessionStorage.removeItem(STORAGE_KEYS.AUTH);
  }
}
