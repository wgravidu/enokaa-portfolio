import React from 'react';
import { Award, Globe, Trophy, CheckCircle2 } from 'lucide-react';
import { TIMELINE_AWARDS } from '../data/portfolioData';

export const AccoladesTimeline: React.FC = () => {
  return (
    <section id="accolades" className="py-20 md:py-28 bg-[#09090d] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-3">
              <span>Festival Honors</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>International & National Recognition</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight [text-wrap:balance]">
              Major Accolades & Curatorial Selections
            </h2>
          </div>

          <div className="text-xs font-mono text-zinc-400">
            Official record of competitive festival awards and jury citations
          </div>
        </div>

        {/* Timeline / List View */}
        <div className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-950/60 divide-y divide-zinc-800/80">
          {TIMELINE_AWARDS.map((award, index) => (
            <div
              key={index}
              className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-zinc-900/50 transition-colors"
            >
              {/* Year & Festival Name */}
              <div className="flex items-start md:items-center gap-4 md:w-1/3">
                <div className="text-xl font-display font-bold text-amber-400 tabular-nums shrink-0">
                  {award.year}
                </div>
                <div>
                  <div className="font-display text-base font-semibold text-white">
                    {award.festival}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    {award.location}
                  </div>
                </div>
              </div>

              {/* Category & Distinction */}
              <div className="md:w-1/3">
                <div className="text-sm font-medium text-zinc-200">
                  {award.category}
                </div>
                <div className="text-xs text-zinc-400 font-light mt-0.5">
                  Distinction for Directorial Excellence
                </div>
              </div>

              {/* Work Title */}
              <div className="md:w-1/4 md:text-right">
                <div className="text-xs font-mono text-amber-300/90 font-medium">
                  {award.work}
                </div>
                <div className="text-[11px] text-zinc-400">
                  Official Award Entry
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Historical Record Highlight */}
        <div className="mt-8 p-6 rounded-lg bg-zinc-900/40 border border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-xs text-zinc-300 leading-relaxed">
              <span className="font-semibold text-white">National Record:</span> At the 30th Sarasaviya Film Festival,{' '}
              <em>Sulan Kirilli (Wind Bird)</em> set an unprecedented national milestone by winning 12 major awards in a single evening, including Best Director, Best Screenplay, and Best Film.
            </div>
          </div>
          <a
            href="#filmography"
            className="text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap"
          >
            Explore Project Dossier →
          </a>
        </div>
      </div>
    </section>
  );
};
