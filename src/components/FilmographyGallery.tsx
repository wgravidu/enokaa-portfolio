import React, { useState } from 'react';
import { ArrowUpRight, Clapperboard, Film, Play, SlidersHorizontal, Sparkles } from 'lucide-react';
import { PROJECTS, Project, DIRECTOR_PROFILE } from '../data/portfolioData';

interface FilmographyGalleryProps {
  onSelectProject: (project: Project) => void;
  onOpenReelModal: () => void;
}

type FilterCategory = 'All' | 'Feature Film' | 'Documentary' | 'Tele-Drama & Series' | 'In Development';

export const FilmographyGallery: React.FC<FilmographyGalleryProps> = ({
  onSelectProject,
  onOpenReelModal
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const categories: FilterCategory[] = [
    'All',
    'Feature Film',
    'Documentary',
    'Tele-Drama & Series',
    'In Development'
  ];

  return (
    <section id="filmography" className="py-20 md:py-28 bg-[#070709] relative cinema-noise">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-3">
              <span>Directorial Works</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>1998 – Present</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight [text-wrap:balance]">
              Filmography & Directorial Archive
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl font-light">
              Explore feature films, investigative documentaries, television narratives, and projects currently in international co-production.
            </p>
          </div>

          {/* Interactive Filter Controls - Functional Segmented Buttons (Compliant with Section 1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900/90 border border-zinc-800 rounded-lg">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat === 'All' ? 'All Works' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {filteredProjects.map((project, idx) => {
            const isFeatured = project.featured && (activeCategory === 'All' || activeCategory === 'Feature Film');
            const colSpanClass = isFeatured
              ? 'lg:col-span-8 md:col-span-2'
              : 'lg:col-span-4 md:col-span-1';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${colSpanClass} group relative bg-zinc-950/70 border border-zinc-800/90 hover:border-zinc-700/80 rounded-lg overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-amber-500/5`}
              >
                {/* Media Showcase Container */}
                <div className={`relative overflow-hidden bg-black ${isFeatured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
                  <img
                    src={project.primaryImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  {/* Top Technical Metadata Overlays (Unboxed clean text) */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono tracking-wider text-zinc-300">
                    <span className="bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-amber-300/90">
                      {project.category}
                    </span>
                    <span className="bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-zinc-400">
                      {project.aspectRatio}
                    </span>
                  </div>

                  {/* Hover Explore Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <div className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-white bg-zinc-900/90 border border-zinc-700 rounded-sm flex items-center gap-1.5 shadow-xl">
                      <span>View Project Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                  </div>
                </div>

                {/* Minimalist Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Unboxed Metadata (Zero-Pill) */}
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                      <span>{project.year}</span>
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span>{project.format}</span>
                    </div>

                    {/* Primary Title */}
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-white group-hover:text-amber-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.originalTitle && (
                        <span className="text-xs text-amber-300/70 font-sans font-normal truncate max-w-[140px]">
                          {project.originalTitle}
                        </span>
                      )}
                    </div>

                    {/* Logline */}
                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mt-2.5 line-clamp-3">
                      {project.logline}
                    </p>
                  </div>

                  {/* Accolade highlight or festival teaser */}
                  <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-xs">
                    <div className="text-[11px] font-mono text-zinc-400 truncate max-w-[80%]">
                      {project.awards[0] || project.festivals[0] || `Directed by ${DIRECTOR_PROFILE.name}`}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-300 transition-colors shrink-0" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span>Archival 35mm Prints & Digital DCPs available for international retrospectives</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <a href="#contact" className="text-amber-400 hover:text-amber-300 transition-colors">
              Request Screener Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
