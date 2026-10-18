import React, { useState, useEffect } from 'react';
import { Film, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenReelModal: () => void;
  onOpenCloudflareModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReelModal, onOpenCloudflareModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070709]/95 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-base md:text-lg font-bold tracking-tight text-zinc-100 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
        >
          <Film className="w-4 h-4 text-amber-400/90 transition-transform group-hover:scale-110" />
          <span className="font-display tracking-wider">Enokaa Sathyangani Keerthinanda</span>
        </a>

        {/* Zone 2: 4–5 single-line clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs tracking-wider uppercase font-medium text-zinc-400">
          <a
            href="#filmography"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Works
          </a>
          <a
            href="#showreel"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Showreel
          </a>
          <a
            href="#gallery"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Stills
          </a>
          <a
            href="#philosophy"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Philosophy
          </a>
          <a
            href="#accolades"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Accolades
          </a>
          <a
            href="#contact"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenReelModal}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-all rounded-sm whitespace-nowrap shrink-0 shadow-sm shadow-amber-400/20 active:scale-95"
          >
            <span>Watch Reel</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0d] border-b border-zinc-800 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3 text-sm tracking-wider uppercase font-medium text-zinc-300">
            <a
              href="#filmography"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-300"
            >
              Works
            </a>
            <a
              href="#showreel"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-300"
            >
              Showreel
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-300"
            >
              Stills
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-300"
            >
              Philosophy
            </a>
            <a
              href="#accolades"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-300"
            >
              Accolades
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-300"
            >
              Contact
            </a>
          </div>
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReelModal();
              }}
              className="w-full text-center px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-sm"
            >
              Watch Official Showreel
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCloudflareModal();
              }}
              className="w-full text-center px-4 py-2 text-xs tracking-wider font-mono text-zinc-400 hover:text-zinc-200 border border-zinc-800 rounded-sm"
            >
              Cloudflare Pages Config
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
