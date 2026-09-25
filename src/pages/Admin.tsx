import React, { useState, useEffect } from 'react';
import { Lock, Mail, Trash2, AlertCircle, RefreshCw, LogOut } from 'lucide-react';
import { getStoredMessages, saveStoredMessages, getStoredProjects, checkAdminAuth, setAdminAuth } from '@/lib/supabase';
import { ContactMessage, Project } from '@/lib/types';

export const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);

  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeTab, setActiveTab] = useState<'messages' | 'projects'>('messages');

  useEffect(() => {
    const isAuthed = checkAdminAuth();
    setIsAuthenticated(isAuthed);
    if (isAuthed) {
      loadData();
    }
  }, []);

  const loadData = () => {
    setMessages(getStoredMessages());
    setProjects(getStoredProjects());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'ar2026' || passcode.trim() === 'abhijit77') {
      setAdminAuth(true);
      setIsAuthenticated(true);
      setAuthError(false);
      loadData();
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    setAdminAuth(false);
    setIsAuthenticated(false);
    setPasscode('');
  };

  const handleStatusChange = (id: string, newStatus: ContactMessage['status']) => {
    const updated = messages.map((m) => (m.id === id ? { ...m, status: newStatus } : m));
    setMessages(updated);
    saveStoredMessages(updated);
  };

  const handleDeleteMessage = (id: string) => {
    if (window.confirm('Delete this inquiry record?')) {
      const updated = messages.filter((m) => m.id !== id);
      setMessages(updated);
      saveStoredMessages(updated);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-md p-8 bg-surface border border-border rounded space-y-6">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <div className="p-2 bg-background border border-border rounded text-accent">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-wider block">
                CONSOLE ACCESS
              </span>
              <h2 className="font-display text-xl uppercase text-foreground">
                STUDIO TELEMETRY ADMIN
              </h2>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="passcode" className="block font-mono text-xs text-muted uppercase tracking-wider mb-2">
                Security PIN / Key
              </label>
              <input
                id="passcode"
                type="password"
                required
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setAuthError(false);
                }}
                placeholder="Enter admin passcode"
                className="w-full px-4 py-3 bg-background border border-border rounded text-foreground font-mono text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
              />
              {authError && (
                <p className="font-mono text-xs text-accent mt-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Invalid PIN. (Hint: default key is ar2026)</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-accent hover:bg-accent-2 text-foreground font-mono text-xs uppercase font-bold tracking-widest rounded transition-colors shadow-glow-crimson"
            >
              Authenticate Suite
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <span className="font-mono text-xs text-accent uppercase tracking-widest font-bold block mb-1">
            STUDIO TELEMETRY // DISPATCH CONSOLE
          </span>
          <h1 className="font-display text-3xl uppercase text-foreground">
            ADMIN DASHBOARD
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={loadData}
            className="p-2 bg-surface border border-border rounded hover:border-accent text-muted hover:text-foreground text-xs font-mono flex items-center gap-1.5 transition-colors"
            title="Refresh records"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Refresh</span>
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="px-3 py-2 bg-background border border-border rounded hover:border-accent text-accent text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock Console</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-border">
        <button
          type="button"
          onClick={() => setActiveTab('messages')}
          className={`pb-3 font-mono text-xs uppercase font-bold tracking-wider border-b-2 transition-colors ${
            activeTab === 'messages'
              ? 'border-accent text-accent'
              : 'border-transparent text-muted hover:text-foreground'
          }`}
        >
          Inquiries Dossier ({messages.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('projects')}
          className={`pb-3 font-mono text-xs uppercase font-bold tracking-wider border-b-2 transition-colors ${
            activeTab === 'projects'
              ? 'border-accent text-accent'
              : 'border-transparent text-muted hover:text-foreground'
          }`}
        >
          Active Projects ({projects.length})
        </button>
      </div>

      {/* Messages Tab */}
      {activeTab === 'messages' && (
        <div className="space-y-6">
          {messages.length === 0 ? (
            <div className="p-12 text-center bg-surface border border-border rounded">
              <Mail className="w-8 h-8 text-muted mx-auto mb-3" />
              <p className="font-mono text-xs text-muted">No messages in local / cloud inbox.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="p-6 bg-surface border border-border rounded space-y-4 hover:border-border/80 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-lg text-foreground uppercase">
                        {msg.name}
                      </span>
                      <a
                        href={`mailto:${msg.email}`}
                        className="font-mono text-xs text-accent hover:underline"
                      >
                        {msg.email}
                      </a>
                      {msg.phone && (
                        <span className="font-mono text-xs text-muted">
                          · {msg.phone}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="text-muted text-[11px]">
                        {new Date(msg.created_at).toLocaleString()}
                      </span>
                      <select
                        value={msg.status}
                        onChange={(e) => handleStatusChange(msg.id, e.target.value as ContactMessage['status'])}
                        className={`px-2 py-1 rounded text-[11px] font-mono border ${
                          msg.status === 'new'
                            ? 'bg-accent/20 text-accent border-accent'
                            : msg.status === 'replied'
                            ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                            : 'bg-background text-muted border-border'
                        }`}
                      >
                        <option value="new">Status: New</option>
                        <option value="read">Status: Read</option>
                        <option value="replied">Status: Replied</option>
                        <option value="archived">Status: Archived</option>
                      </select>
                      <button
                        type="button"
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="p-1 text-muted hover:text-accent transition-colors ml-2"
                        title="Delete message"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs p-3 bg-background border border-border rounded">
                    <div>
                      <span className="text-muted block text-[10px]">FOCUS AREA:</span>
                      <span className="text-accent-2 font-bold">{msg.enquiry_type}</span>
                    </div>
                    <div>
                      <span className="text-muted block text-[10px]">ESTIMATED BUDGET:</span>
                      <span className="text-foreground">{msg.budget}</span>
                    </div>
                    <div>
                      <span className="text-muted block text-[10px]">TARGET TIMELINE:</span>
                      <span className="text-foreground">{msg.preferred_date || 'Flexible'}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-background/50 rounded border-l-2 border-accent text-sm leading-relaxed text-foreground/90 font-sans whitespace-pre-wrap">
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Projects Tab */}
      {activeTab === 'projects' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.slug} className="p-6 bg-surface border border-border rounded flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2 font-mono text-xs text-muted">
                    <span className="text-accent font-bold">{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground uppercase mb-2">
                    {p.title}
                  </h3>
                  <p className="text-muted text-xs line-clamp-2 mb-4 font-sans">
                    {p.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-border flex items-center justify-between font-mono text-[11px]">
                  <span className="text-accent-2">{p.role}</span>
                  <span className="px-2 py-0.5 bg-background border border-border rounded text-foreground">
                    {p.published ? 'Published' : 'Draft'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
