import { X, CheckCircle2, Cpu } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  if (!projectId) return null;

  const project = RESUME_DATA.projects.find((p) => p.id === projectId);
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-neutral-950 border border-white/15 rounded-3xl p-6 sm:p-10 text-white my-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video preview in modal */}
        <div className="rounded-2xl overflow-hidden aspect-video relative mb-6 border border-white/10">
          <video
            src={project.videoUrl}
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white/70 bg-black/50 px-3 py-1 rounded-full border border-white/10">
              {project.category}
            </span>
          </div>
        </div>

        {/* Title & Info */}
        <h3 className="text-2xl sm:text-3xl font-serif text-white mb-3">
          {project.title}
        </h3>

        <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-light">
          {project.summary}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technologies &amp; Architecture</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-white/90 bg-white/5 px-3 py-1 rounded-full border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Engineering Accomplishments */}
        <div className="border-t border-white/10 pt-6">
          <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">
            Core Implementation Highlights
          </div>
          <div className="space-y-3">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-white/80 font-light">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-white/40">Verified Resume Engineering Project</span>
          <button
            onClick={onClose}
            className="liquid-glass rounded-full px-6 py-2 text-xs font-mono text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
