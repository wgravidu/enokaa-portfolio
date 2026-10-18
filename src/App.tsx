import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowreelSection } from './components/ShowreelSection';
import { FilmographyGallery } from './components/FilmographyGallery';
import { StillsLightboxGallery } from './components/StillsLightboxGallery';
import { PhilosophySection } from './components/PhilosophySection';
import { AccoladesTimeline } from './components/AccoladesTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ShowreelModal } from './components/ShowreelModal';
import { CloudflareModal } from './components/CloudflareModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [reelModalOpen, setReelModalOpen] = useState(false);
  const [cloudflareModalOpen, setCloudflareModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col selection:bg-amber-500/20 selection:text-amber-200">
      {/* Primary Top Bar adhering to 3-zone contract */}
      <Navbar
        onOpenReelModal={() => setReelModalOpen(true)}
        onOpenCloudflareModal={() => setCloudflareModalOpen(true)}
      />

      <main className="flex-1">
        {/* Split-screen Hero & Quantitative Strip */}
        <Hero onOpenReelModal={() => setReelModalOpen(true)} />

        {/* Dedicated Showreel Section */}
        <ShowreelSection onOpenReelModal={() => setReelModalOpen(true)} />

        {/* Responsive Works Gallery with Minimalist Project Layout */}
        <FilmographyGallery
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenReelModal={() => setReelModalOpen(true)}
        />

        {/* Cinematography & Production Frame Studies */}
        <StillsLightboxGallery />

        {/* Directorial Philosophy & Vision Statement */}
        <PhilosophySection />

        {/* Accolades & Curatorial History */}
        <AccoladesTimeline />

        {/* Inquiries & Representation (with Email: Add Later Notice) */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenCloudflareModal={() => setCloudflareModalOpen(true)}
        onOpenReelModal={() => setReelModalOpen(true)}
      />

      {/* Interactive Minimalist Project Dossier Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Showreel Video Player Modal */}
      <ShowreelModal
        isOpen={reelModalOpen}
        onClose={() => setReelModalOpen(false)}
      />

      {/* Cloudflare Pages Deployment Guide Modal */}
      <CloudflareModal
        isOpen={cloudflareModalOpen}
        onClose={() => setCloudflareModalOpen(false)}
      />
    </div>
  );
}
