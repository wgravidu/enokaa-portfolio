import React, { useState } from 'react';
import { Play, ExternalLink, Film, Volume2, Maximize2, Sparkles, MonitorPlay } from 'lucide-react';
import { DIRECTOR_PROFILE } from '../data/portfolioData';

interface ShowreelSectionProps {
  onOpenReelModal: () => void;
}

export const ShowreelSection: React.FC<ShowreelSectionProps> = ({ onOpenReelModal }) => {
  const [aspect, setAspect] = useState<'16:9' | '2.39:1'>('16:9');

  return (
    <section id="showreel" className="py-20 md:py-28 bg-[#09090d] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-3">
              <span>Selected Works</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Directorial Showreel</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight [text-wrap:balance]">
              The Moving Image: Rhythm, Silence & Light
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Aspect Ratio Selector */}
            <div className="flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-md">
              <button
                onClick={() => setAspect('16:9')}
                className={`px-3 py-1 text-xs font-mono transition-colors rounded ${
                  aspect === '16:9' ? 'bg-zinc-800 text-amber-300 font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                16:9
              </button>
              <button
                onClick={() => setAspect('2.39:1')}
                className={`px-3 py-1 text-xs font-mono transition-colors rounded ${
                  aspect === '2.39:1' ? 'bg-zinc-800 text-amber-300 font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                2.39:1 SCOPE
              </button>
            </div>

            <a
              href={DIRECTOR_PROFILE.showreelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-md transition-colors"
            >
              <span>YouTube Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Cinematic Cinema Frame Container */}
        <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-black shadow-2xl group">
          {/* Top Letterbox Bar with Timecode */}
          <div className="bg-zinc-950 px-4 py-2 border-b border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <Film className="w-3.5 h-3.5" />
                OFFICIAL SHOWREEL
              </span>
              <span className="text-zinc-600">|</span>
              <span>ENOKAA SATHYANGANI KEERTHINANDA</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-zinc-500 hidden sm:inline">SOUND: DOLBY 5.1 MASTER</span>
              <span className="text-zinc-400 tabular-nums">TC 00:03:42:18</span>
            </div>
          </div>

          {/* Video Preview Box */}
          <div
            className={`relative w-full overflow-hidden transition-all duration-500 ${
              aspect === '2.39:1' ? 'aspect-[2.39/1]' : 'aspect-video'
            }`}
          >
            <img
              src="/src/assets/images/film_still_sulan_kirilli_1792332834757.jpg"
              alt="Directorial showreel preview frame"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
            />

            {/* Dark Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

            {/* Central Play Trigger Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <button
                onClick={onOpenReelModal}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-400/95 hover:bg-amber-300 text-zinc-950 flex items-center justify-center shadow-2xl shadow-amber-400/20 hover:scale-105 active:scale-95 transition-all mb-4 group/btn"
                aria-label="Open Showreel Video Player"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-zinc-950 translate-x-1" />
              </button>
              <div className="text-white font-display text-lg sm:text-xl font-medium tracking-wide">
                Directorial Showreel & Master Sequences
              </div>
              <div className="text-xs text-zinc-300 mt-1 max-w-md font-light">
                Featuring excerpts from Sulan Kirilli, documentary series, and festival retrospectives
              </div>
            </div>

            {/* Bottom Controls Bar Mockup */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-zinc-300 pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="text-amber-300 font-mono text-[11px]">4K MASTER ARCHIVE</span>
                <span className="text-zinc-500">·</span>
                <span className="text-[11px] text-zinc-400">SRI LANKA & WORLD CINEMA</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-zinc-400 font-mono">CHANNEL: {DIRECTOR_PROFILE.youtubeHandle}</span>
              </div>
            </div>
          </div>

          {/* Bottom Letterbox Bar with Director Notes */}
          <div className="bg-zinc-950 px-6 py-4 border-t border-zinc-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-zinc-400">
            <div>
              <div className="text-zinc-200 font-medium mb-0.5">Directorial Precision</div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Framing calibrated to character geography and authentic emotional temperature rather than rapid cutting.
              </p>
            </div>
            <div>
              <div className="text-zinc-200 font-medium mb-0.5">Atmospheric Sound Design</div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Integration of natural winds, rainfall, and silence as narrative counterpoints to dialogue.
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="text-zinc-200 font-medium mb-0.5">Official Video Portal</div>
              <a
                href={DIRECTOR_PROFILE.showreelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors font-mono"
              >
                <span>Visit YouTube Channel ({DIRECTOR_PROFILE.youtubeHandle})</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
