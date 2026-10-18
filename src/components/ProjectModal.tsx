import React, { useEffect, useState } from 'react';
import { X, Award, Film, Users, Quote, ExternalLink, Calendar, Compass, Layers } from 'lucide-react';
import { Project, DIRECTOR_PROFILE } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectStill?: (src: string, title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onSelectStill }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
    >
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Minimalist Project Description Container */}
      <div className="relative w-full max-w-4xl bg-[#09090d] border border-zinc-800 rounded-lg shadow-2xl overflow-hidden z-10 my-auto text-zinc-200">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-[#09090d]/95 backdrop-blur-md px-6 py-4 border-b border-zinc-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-amber-400 font-semibold">{project.category}</span>
            <span aria-hidden="true" className="text-zinc-600">/</span>
            <span>{project.year}</span>
            <span aria-hidden="true" className="text-zinc-600">/</span>
            <span>{project.aspectRatio}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 md:p-10 space-y-10">
          {/* Main Visual Showcase Frame */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-md overflow-hidden bg-black border border-zinc-800">
              <img
                src={project.galleryImages[activeImageIndex] || project.primaryImage}
                alt={`${project.title} still`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-4 text-[11px] font-mono tracking-wider text-zinc-300 bg-black/70 px-2.5 py-1 rounded">
                FRAME STILL {activeImageIndex + 1} OF {project.galleryImages.length} · {project.format}
              </div>
            </div>

            {/* Thumbnail switcher if multiple images */}
            {project.galleryImages.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-12 rounded overflow-hidden border transition-all shrink-0 ${
                      activeImageIndex === idx ? 'border-amber-400 scale-105' : 'border-zinc-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Minimalist Project Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
                {project.title}
              </h2>
              {project.originalTitle && (
                <span className="text-sm font-sans text-amber-300/80">
                  {project.originalTitle}
                </span>
              )}
            </div>

            {/* Clean unboxed metadata row */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 font-mono">
              <span>{project.role}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>{project.format}</span>
              {project.duration && (
                <>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span>{project.duration}</span>
                </>
              )}
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Aspect Ratio: {project.aspectRatio}</span>
            </div>

            {/* Logline */}
            <p className="text-base sm:text-lg text-zinc-100 font-normal leading-relaxed pt-2 border-t border-zinc-800/80">
              "{project.logline}"
            </p>
          </div>

          {/* Synopsis & Director's Statement Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Synopsis
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                {project.synopsis}
              </p>

              {project.quote && (
                <div className="mt-6 p-4 rounded bg-zinc-950/60 border border-zinc-800/80">
                  <p className="text-xs italic text-zinc-300 leading-relaxed">
                    "{project.quote.text}"
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-amber-400/80">
                    — {project.quote.source}
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-5 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400/90">
                Director’s Vision & Statement
              </h3>
              <div className="text-sm text-zinc-300 font-light leading-relaxed italic border-l border-amber-400/40 pl-4 py-1">
                "{project.directorStatement}"
              </div>
              <div className="text-xs font-mono text-zinc-500">
                — Enokaa Sathyangani Keerthinanda
              </div>
            </div>
          </div>

          {/* Cast & Key Technical Credits (Minimalist Tabular Grid) */}
          <div className="space-y-4 pt-4 border-t border-zinc-800/80">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Key Credits & Collaborators
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
              {project.keyCredits.map((credit, idx) => (
                <div key={idx} className="text-xs">
                  <div className="text-zinc-500 font-mono text-[11px]">{credit.role}</div>
                  <div className="text-zinc-200 font-medium">{credit.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Festival Honors & Accolades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-800/80">
            {project.awards.length > 0 && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  Honors & Awards
                </h3>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {project.awards.map((award, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400/80 mt-0.5">•</span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.festivals.length > 0 && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5" />
                  Festival Circuit
                </h3>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {project.festivals.map((fest, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-zinc-500 mt-0.5">•</span>
                      <span>{fest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <a
              href={DIRECTOR_PROFILE.showreelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Watch Reel Sequences on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2 text-xs uppercase tracking-wider font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded transition-colors"
            >
              Close Project File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
