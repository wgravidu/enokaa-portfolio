import React, { useState } from 'react';
import { X, Cloud, Check, Copy, Terminal, ExternalLink, ShieldCheck } from 'lucide-react';

interface CloudflareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CloudflareModal: React.FC<CloudflareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-2xl bg-[#0a0a0e] border border-zinc-800 rounded-lg shadow-2xl overflow-hidden z-10 text-zinc-200">
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Cloud className="w-5 h-5 text-amber-400" />
            <h3 className="font-display text-base font-semibold text-white">
              Cloudflare Pages Deployment Configuration
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-white rounded"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <div className="p-4 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Production Verification: </span>
              This portfolio is 100% pre-configured for Cloudflare Pages. Static build output, SPA routing rules (<code className="font-mono text-white">public/_redirects</code>), and security headers (<code className="font-mono text-white">public/_headers</code>) are fully set up.
            </div>
          </div>

          {/* Quick Build Settings Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Cloudflare Pages Build Settings
            </h4>
            <div className="border border-zinc-800 rounded-md bg-zinc-950 divide-y divide-zinc-800/80 text-xs font-mono">
              <div className="p-3 flex items-center justify-between">
                <span className="text-zinc-400">Framework Preset</span>
                <span className="text-white font-semibold">Vite</span>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="text-zinc-400">Build Command</span>
                <div className="flex items-center gap-2">
                  <span className="text-amber-300">npm run build</span>
                  <button
                    onClick={() => copyToClipboard('npm run build', 'build_cmd')}
                    className="p-1 hover:text-white text-zinc-500"
                    title="Copy build command"
                  >
                    {copied === 'build_cmd' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="text-zinc-400">Build Output Directory</span>
                <div className="flex items-center gap-2">
                  <span className="text-amber-300">dist</span>
                  <button
                    onClick={() => copyToClipboard('dist', 'dist_dir')}
                    className="p-1 hover:text-white text-zinc-500"
                    title="Copy output directory"
                  >
                    {copied === 'dist_dir' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="text-zinc-400">Root Directory</span>
                <span className="text-zinc-200">/ (Root)</span>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="text-zinc-400">Node.js Compatibility</span>
                <span className="text-zinc-200">v20+</span>
              </div>
            </div>
          </div>

          {/* Direct CLI Deployment Option */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              Direct Wrangler CLI Deployment
            </h4>
            <div className="p-3.5 rounded bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-between">
              <code>npx wrangler pages deploy dist --project-name enokaa-director-portfolio</code>
              <button
                onClick={() =>
                  copyToClipboard(
                    'npx wrangler pages deploy dist --project-name enokaa-director-portfolio',
                    'cli_cmd'
                  )
                }
                className="p-1.5 hover:text-white text-zinc-400"
              >
                {copied === 'cli_cmd' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Configured Files Verification */}
          <div className="space-y-2 text-xs">
            <h4 className="font-mono uppercase tracking-widest text-zinc-400">
              Bundled Deployment Files
            </h4>
            <ul className="space-y-1.5 text-zinc-400">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <code className="text-zinc-200">public/_redirects</code> — Handles client-side SPA routing for Cloudflare edge nodes.
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <code className="text-zinc-200">public/_headers</code> — Sets strict security headers and 1-year immutable caching for static assets.
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <code className="text-zinc-200">dist/</code> — Production-optimized HTML, CSS, JavaScript, and high-res imagery bundle.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-zinc-950 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
          >
            Ready for Cloudflare Deployment
          </button>
        </div>
      </div>
    </div>
  );
};
