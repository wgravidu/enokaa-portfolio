import React from 'react';
import { Play, Clapperboard, Award, Compass } from 'lucide-react';
import { DIRECTOR_PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenReelModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReelModal }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden cinema-noise">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Kicker - Clean unboxed text with separator */}
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-5">
                <span>Directorial Portfolio</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>Cinema Archive</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>Colombo, Sri Lanka</span>
              </div>

              {/* Main Headline with balanced wrap */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12] mb-6 [text-wrap:balance]">
                Cinema of Human Resilience & Poetic Truth
              </h1>

              {/* Lead copy */}
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8 max-w-2xl">
                Official archive of <span className="text-white font-medium">Enokaa Sathyangani Keerthinanda</span> —
                groundbreaking Sri Lankan filmmaker and screenwriter. Globally renowned for her landmark auteur feature{' '}
                <em className="text-amber-200/95 not-italic font-normal">Sulan Kirilli (Wind Bird)</em>, her cinema explores the quiet agency of women, social fractures, and the profound poetics of human resilience.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenReelModal}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-all rounded-sm shadow-lg shadow-amber-400/10 active:scale-95"
                >
                  <Play className="w-4 h-4 fill-zinc-950" />
                  <span>Play Showreel</span>
                </button>

                <a
                  href="#filmography"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-zinc-200 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/60 transition-all rounded-sm"
                >
                  <Clapperboard className="w-4 h-4 text-amber-400/80" />
                  <span>Explore Filmography</span>
                </a>
              </div>
            </div>

            {/* Quiet Director Citation */}
            <div className="mt-10 pt-6 border-t border-zinc-800/80">
              <p className="text-xs italic text-zinc-400 font-light leading-relaxed">
                "{DIRECTOR_PROFILE.artisticPhilosophy.quote}"
              </p>
              <div className="mt-2 text-xs font-mono tracking-wider uppercase text-zinc-400">
                — Enokaa Sathyangani Keerthinanda
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container (matching height) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative h-full min-h-[380px] sm:min-h-[460px] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
              <img
                src="/src/assets/images/hero_director_portrait_1792332832590.jpg"
                alt="Enokaa Sathyangani Keerthinanda behind 35mm motion picture camera"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

              {/* Viewfinder Aspect Ratio / Timecode Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none text-[11px] font-mono tracking-wider text-zinc-400">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                  FRAME 24 FPS
                </span>
                <span className="text-zinc-500">35MM · 1.85:1</span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                <div className="text-[11px] font-mono uppercase tracking-widest text-amber-400/90 mb-1">
                  Auteur Portrait
                </div>
                <div className="text-sm font-display text-white font-medium tracking-wide">
                  Enokaa Sathyangani Keerthinanda
                </div>
                <div className="text-xs text-zinc-400">
                  Directing on 35mm Motion Picture Soundstage
                </div>
              </div>

              {/* Quick reel trigger on the portrait */}
              <button
                onClick={onOpenReelModal}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]"
                aria-label="Play director showreel"
              >
                <div className="w-14 h-14 rounded-full bg-amber-400/90 text-zinc-950 flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-zinc-950 translate-x-0.5" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width Metrics Row Below the Split */}
        <div className="mt-14 pt-8 pb-4 border-t border-b border-zinc-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {DIRECTOR_PROFILE.metrics.map((m, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight tabular-nums">
                  {m.value}
                </div>
                <div className="text-xs text-zinc-400 mt-1 font-sans-body">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
