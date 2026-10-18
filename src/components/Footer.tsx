import React from 'react';
import { Film, Cloud, ExternalLink, ArrowUp } from 'lucide-react';
import { DIRECTOR_PROFILE } from '../data/portfolioData';

interface FooterProps {
  onOpenCloudflareModal: () => void;
  onOpenReelModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCloudflareModal, onOpenReelModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-zinc-800 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 text-white font-display text-lg font-bold tracking-wider mb-1.5">
              <Film className="w-4 h-4 text-amber-400" />
              <span>Enokaa Sathyangani Keerthinanda</span>
            </div>
            <p className="text-zinc-400 font-light max-w-md">
              Auteur Film Director & Screenwriter · Sri Lankan Cinema & World Retrospectives
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={onOpenCloudflareModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors font-mono text-[11px]"
            >
              <Cloud className="w-3.5 h-3.5 text-amber-400" />
              <span>Cloudflare Pages Ready</span>
            </button>

            <button
              onClick={onOpenReelModal}
              className="hover:text-zinc-200 transition-colors uppercase tracking-wider font-mono text-[11px]"
            >
              Showreel
            </button>

            <a
              href={DIRECTOR_PROFILE.showreelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors uppercase tracking-wider font-mono text-[11px] flex items-center gap-1"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400 font-mono">
          <div>
            © {new Date().getFullYear()} Enokaa Sathyangani Keerthinanda. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Directorial Archive</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>35mm & 4K Master Prints</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Colombo, Sri Lanka</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
