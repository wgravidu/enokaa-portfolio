import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera, Film } from 'lucide-react';
import { STILLS_GALLERY, StillImage } from '../data/portfolioData';

export const StillsLightboxGallery: React.FC = () => {
  const [selectedStillIndex, setSelectedStillIndex] = useState<number | null>(null);

  const activeStill = selectedStillIndex !== null ? STILLS_GALLERY[selectedStillIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedStillIndex === null) return;
    setSelectedStillIndex((selectedStillIndex - 1 + STILLS_GALLERY.length) % STILLS_GALLERY.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedStillIndex === null) return;
    setSelectedStillIndex((selectedStillIndex + 1) % STILLS_GALLERY.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedStillIndex === null) return;
      if (e.key === 'Escape') setSelectedStillIndex(null);
      if (e.key === 'ArrowLeft') {
        setSelectedStillIndex((prev) => (prev !== null ? (prev - 1 + STILLS_GALLERY.length) % STILLS_GALLERY.length : null));
      }
      if (e.key === 'ArrowRight') {
        setSelectedStillIndex((prev) => (prev !== null ? (prev + 1) % STILLS_GALLERY.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedStillIndex]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#09090d] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-3">
              <span>Cinematography & Stills</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Visual Composition Archive</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight [text-wrap:balance]">
              Frame Studies & Production Archive
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl font-light">
              High-resolution captures showcasing directorial framing, lighting design, and camera choreography across analog 35mm and digital anamorphic formats.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
            <Camera className="w-4 h-4 text-amber-400/80" />
            <span>Click any still to view full-resolution frame</span>
          </div>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STILLS_GALLERY.map((still, idx) => (
            <div
              key={still.id}
              onClick={() => setSelectedStillIndex(idx)}
              className="group relative bg-zinc-950 border border-zinc-800/80 hover:border-amber-400/60 rounded-md overflow-hidden cursor-pointer transition-all duration-300"
            >
              {/* Image Container with fixed cinematic proportions */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={still.src}
                  alt={still.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Aspect Ratio Badge */}
                <div className="absolute top-2.5 right-2.5 text-[10px] font-mono text-zinc-300 bg-black/70 px-2 py-0.5 rounded">
                  {still.aspectRatio}
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Minimal Caption */}
              <div className="p-4 space-y-1.5">
                <div className="text-xs font-mono text-zinc-400">
                  {still.project} · {still.year}
                </div>
                <div className="font-display text-sm font-medium text-white group-hover:text-amber-300 transition-colors">
                  {still.title}
                </div>
                <div className="text-[11px] text-zinc-400 font-light truncate">
                  {still.captureNote}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeStill && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedStillIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 z-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-semibold">{activeStill.project}</span>
              <span aria-hidden="true" className="text-zinc-600">|</span>
              <span>{activeStill.title}</span>
              <span aria-hidden="true" className="text-zinc-600">|</span>
              <span>{activeStill.aspectRatio}</span>
            </div>

            <button
              onClick={() => setSelectedStillIndex(null)}
              className="p-2 text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 rounded-full transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central Image Viewport with Nav Arrows */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white transition-all shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={activeStill.src}
              alt={activeStill.title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] max-w-[90vw] object-contain shadow-2xl rounded border border-zinc-800"
            />

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white transition-all shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div className="max-w-3xl mx-auto w-full text-center space-y-1.5 z-10" onClick={(e) => e.stopPropagation()}>
            <div className="font-display text-lg text-white font-medium">
              {activeStill.title}
            </div>
            <div className="text-xs text-zinc-400 font-mono">
              {activeStill.captureNote}
            </div>
            <div className="text-[11px] text-zinc-500 font-mono pt-1">
              Still { (selectedStillIndex ?? 0) + 1 } of { STILLS_GALLERY.length } · Use ← and → keys to navigate · Esc to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
