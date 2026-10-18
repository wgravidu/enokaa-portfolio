import React from 'react';
import { Quote, Eye, Wind, HeartHandshake } from 'lucide-react';
import { DIRECTOR_PROFILE } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-[#070709] border-t border-zinc-800/80 cinema-noise">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Kicker */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-3">
          <span>Artistic Philosophy</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>Directorial Vision</span>
        </div>

        {/* Section Heading & Lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight [text-wrap:balance]">
              The Ethics of the Lens: Silence, Dignity & Moral Autonomy
            </h2>
          </div>
          <div className="lg:col-span-6 text-zinc-300 font-light text-base leading-relaxed space-y-4">
            <p>
              Throughout her career, Enokaa Sathyangani Keerthinanda has challenged conventional South Asian cinematic grammar. While traditional domestic dramas rely on overt sentimentality and theatrical speech, Keerthinanda’s methodology treats the camera as an instrument of quiet witness.
            </p>
            <p className="text-sm text-zinc-400">
              Her protagonists are not passive victims of societal prejudice; they are complex women who assert their dignity through deliberate silence, subtle physical resistance, and unwavering internal resolve.
            </p>
          </div>
        </div>

        {/* Highlight Quote Box */}
        <div className="relative p-8 md:p-12 rounded-lg bg-zinc-950 border border-zinc-800 shadow-2xl mb-16 overflow-hidden">
          <div className="absolute top-4 right-6 text-zinc-800 pointer-events-none select-none">
            <Quote className="w-24 h-24 opacity-20" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <p className="font-display text-lg sm:text-xl md:text-2xl text-white font-normal italic leading-relaxed mb-6">
              "{DIRECTOR_PROFILE.artisticPhilosophy.quote}"
            </p>
            <div className="flex items-center gap-3 text-xs font-mono tracking-wider uppercase text-amber-400">
              <span>Enokaa Sathyangani Keerthinanda</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Notes from the Soundstage</span>
            </div>
          </div>
        </div>

        {/* Three Guiding Directorial Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIRECTOR_PROFILE.artisticPhilosophy.tenets.map((tenet, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-zinc-950/60 border border-zinc-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-amber-400/80 mb-3">
                  0{idx + 1}. Principle
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2.5">
                  {tenet.title}
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {tenet.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900 text-[11px] font-mono text-zinc-400">
                Directorial Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
