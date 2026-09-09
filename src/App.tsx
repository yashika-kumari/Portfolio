import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedVideoSection } from './components/FeaturedVideoSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black font-sans antialiased">
      {/* SECTION 1: HERO */}
      <HeroSection
        onOpenResume={() => setIsResumeOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* SECTION 2: ABOUT / PROFILE & SUMMARY */}
      <AboutSection />

      {/* SECTION 3: SKILLS / FEATURED VIDEO */}
      <FeaturedVideoSection
        onExploreProjects={() => handleNavigate('projects')}
      />

      {/* SECTION 4: EXPERIENCES & LEADERSHIP (PHILOSOPHY / INNOVATION x VISION) */}
      <PhilosophySection />

      {/* SECTION 5: ENGINEERING PROJECTS (SERVICES / WHAT WE DO) */}
      <ServicesSection
        onSelectProject={(projectId) => setSelectedProjectId(projectId)}
      />

      {/* SECTION 6: CREDENTIALS (EDUCATION & CERTIFICATIONS) + CONTACT */}
      <CredentialsSection
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Resume Data Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
    </div>
  );
}
