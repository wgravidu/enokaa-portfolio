import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Play, Film, Volume2, Maximize, RotateCcw } from 'lucide-react';
import { DIRECTOR_PROFILE } from '../data/portfolioData';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      title: 'Opening Movement: Sulan Kirilli (Wind Bird)',
      timecode: '00:00 – 01:45',
      note: 'Long unbroken tracking shot capturing the rural expanse under gathering monsoon clouds.',
      image: '/src/assets/images/film_still_sulan_kirilli_1792332834757.jpg'
    },
    {
      title: 'Intimate Dialectics: The Silent Weaver',
      timecode: '01:45 – 03:10',
      note: 'Macro study of handloom shuttles, tactile skin textures, and ambient room acoustics.',
      image: '/src/assets/images/film_still_documentary_1792332834848.jpg'
    },
    {
      title: 'Atmospheric Previews: The Rain Song',
      timecode: '03:10 – 04:30',
      note: '2.39:1 Anamorphic master landscape compositions across mist-laden central mountain ridges.',
      image: '/src/assets/images/film_still_cinematic_landscape_1792332834603.jpg'
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-5xl bg-[#09090d] border border-zinc-800 rounded-lg shadow-2xl overflow-hidden z-10 flex flex-col my-auto">
        {/* Top Bar */}
        <div className="px-6 py-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-white font-semibold">DIRECTOR’S OFFICIAL SHOWREEL REEL ARCHIVE</span>
            <span className="text-zinc-600">|</span>
            <span className="hidden sm:inline">ENOKAA SATHYANGANI KEERTHINANDA</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={DIRECTOR_PROFILE.showreelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
            >
              <span className="hidden sm:inline">Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1 text-zinc-400 hover:text-white rounded"
              aria-label="Close showreel player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cinematic Video Showcase Screen */}
        <div className="relative aspect-video bg-black overflow-hidden group">
          <img
            src={chapters[activeChapter].image}
            alt={chapters[activeChapter].title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter contrast-105"
          />

          {/* Letterbox & Viewfinder overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Center Play/Pause state overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <a
              href={DIRECTOR_PROFILE.showreelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 rounded-full bg-amber-400/95 hover:bg-amber-300 text-zinc-950 flex items-center justify-center shadow-2xl hover:scale-105 transition-all mb-4"
            >
              <Play className="w-8 h-8 fill-zinc-950 translate-x-1" />
            </a>
            <div className="font-display text-lg text-white font-medium">
              {chapters[activeChapter].title}
            </div>
            <div className="text-xs text-amber-300/80 font-mono mt-1">
              {chapters[activeChapter].timecode}
            </div>
            <div className="text-xs text-zinc-300 mt-2 max-w-lg font-light">
              {chapters[activeChapter].note}
            </div>
          </div>

          {/* Bottom Screen Bar */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-300 pointer-events-none">
            <span className="bg-black/70 px-2 py-0.5 rounded text-[11px]">
              MASTER 4K DIGITAL ARCHIVE
            </span>
            <span className="bg-black/70 px-2 py-0.5 rounded text-[11px] text-amber-400">
              SOUNDTRACK: ORIGINAL COMPOSITIONS
            </span>
          </div>
        </div>

        {/* Chapter Selection Bar */}
        <div className="p-4 sm:p-6 bg-zinc-950 border-t border-zinc-800 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Showreel Sequences & Movements
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {chapters.map((chap, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`p-3 rounded text-left border transition-all ${
                  activeChapter === idx
                    ? 'bg-zinc-900 border-amber-400/70 text-white'
                    : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                }`}
              >
                <div className="text-[10px] font-mono text-amber-400/90">{chap.timecode}</div>
                <div className="text-xs font-medium text-white truncate mt-0.5">{chap.title}</div>
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="text-zinc-400 text-[11px]">
              Official YouTube Archive: <span className="text-zinc-200 font-mono">@enokaasathyangani7292</span>
            </div>
            <a
              href={DIRECTOR_PROFILE.showreelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-400 text-zinc-950 font-semibold uppercase tracking-wider rounded text-[11px] hover:bg-amber-300 transition-colors"
            >
              <span>Launch Full YouTube Showreel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
