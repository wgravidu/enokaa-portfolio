import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Copy, Check, MapPin, Building, Globe, ExternalLink, AlertCircle } from 'lucide-react';
import { DIRECTOR_PROFILE } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    category: 'Festival Programming & Screener',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyInquiry = () => {
    const text = `To: Enokaa Sathyangani Keerthinanda Directorial Office
Category: ${formData.category}
From: ${formData.name || '[Your Name]'} (${formData.organization || '[Organization]'})
Subject: ${formData.subject || 'Directorial Inquiry'}

Message:
${formData.message || 'We would like to request screener access / inquire about directorial retrospective.'}`;

    navigator.clipboard.writeText(text);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#070709] border-t border-zinc-800/80 cinema-noise">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-3">
            <span>Representation & Inquiries</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Directorial Office</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight [text-wrap:balance]">
            Festival Programming, Retrospectives & Collaborations
          </h2>
          <p className="text-sm text-zinc-400 mt-3 font-light leading-relaxed">
            For international festival curators, archival retrospectives, 35mm print or DCP requests, and co-production financing discussions.
          </p>
        </div>

        {/* Email "Add Later" Informational Banner (Respects Prompt Requirement) */}
        <div className="mb-10 p-4 rounded-md bg-zinc-900/70 border border-zinc-800/90 flex items-start sm:items-center gap-3 text-xs text-zinc-300">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1">
            <span className="font-medium text-white">Direct Email Notice: </span>
            <span>Official contact email will be announced soon (designated: <em>Add later</em>). Inquiries submitted below are logged and queued directly for the directorial production desk.</span>
          </div>
          <button
            onClick={handleCopyInquiry}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-[11px] font-mono transition-colors shrink-0"
          >
            {copiedTemplate ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedTemplate ? 'Copied' : 'Copy Inquiry Draft'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Representation & Archival Office Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-white">
                Production & Curatorial Bureau
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                All festival screening permissions, 35mm print archival access, subtitling materials, and press interview requests are coordinated through Colombo, Sri Lanka.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-xs">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-zinc-200 font-medium">Headquarters</div>
                  <div className="text-zinc-400">Colombo 07, Western Province, Sri Lanka</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <Globe className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-zinc-200 font-medium">Online Video Archive</div>
                  <a
                    href={DIRECTOR_PROFILE.showreelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-mono flex items-center gap-1 transition-colors"
                  >
                    <span>youtube.com/@enokaasathyangani7292</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <Building className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-zinc-200 font-medium">Archival Formats</div>
                  <div className="text-zinc-400">Original 35mm Master Positives, 4K DCPs, ProRes 4444 Master Files</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-md bg-zinc-950/80 border border-zinc-800/80 space-y-2">
              <div className="text-xs font-mono uppercase text-amber-400/90 font-medium">
                Festival Programmer Access
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Watermarked digital preview screeners with English, French, and German subtitles are provided upon verification of festival affiliation.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 sm:p-8 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl text-white font-semibold">
                    Inquiry Queued for Production Desk
                  </h3>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Your inquiry regarding <span className="text-amber-300 font-medium">{formData.category}</span> has been logged. When direct email channels open, formal correspondence will follow.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-white border border-zinc-800 rounded"
                    >
                      Send Another Inquiry
                    </button>
                    <button
                      onClick={handleCopyInquiry}
                      className="px-4 py-2 text-xs font-mono text-amber-400 hover:text-amber-300 border border-amber-400/30 rounded"
                    >
                      {copiedTemplate ? 'Copied to Clipboard' : 'Copy Inquiry Draft'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Rossi"
                        className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Organization / Festival
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Rotterdam International Film Festival"
                        className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Inquiry Nature *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Festival Programming & Screener">Festival Programming & Screener</option>
                        <option value="Retrospective & Archive Curation">Retrospective & Archive Curation</option>
                        <option value="International Co-Production">International Co-Production</option>
                        <option value="Press, Interview & Academic Research">Press, Interview & Academic Research</option>
                        <option value="Directorial Commission / Masterclass">Directorial Commission / Masterclass</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Subject Line *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Screener Request for Sulan Kirilli"
                        className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Proposal / Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please include festival dates, format requirements (35mm / DCP), or project context..."
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-all rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Directorial Inquiry</span>
                    </button>

                    <span className="text-[11px] font-mono text-zinc-400">
                      Dispatched with archival confidentiality
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
