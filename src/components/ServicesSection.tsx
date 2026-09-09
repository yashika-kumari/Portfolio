import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface ServicesSectionProps {
  onSelectProject: (projectId: string) => void;
}

export function ServicesSection({ onSelectProject }: ServicesSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const project1 = RESUME_DATA.projects[0];
  const project2 = RESUME_DATA.projects[1];

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-black py-28 md:py-40 px-6 overflow-hidden relative"
    >
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header row: flex between "Featured Projects" and "Engineering Portfolio" label */}
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl text-white tracking-tight font-serif"
          >
            Engineering <span className="italic text-white/60">Projects</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white/40 text-sm tracking-widest uppercase font-mono hidden md:block"
          >
            Featured Works &amp; Systems
          </motion.div>
        </div>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1: Intelligent Candidate Discovery & Ranking System */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            onClick={() => onSelectProject(project1.id)}
            className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card video area: aspect-video, object-cover, transition-transform duration-700 group-hover:scale-105 */}
              <div className="aspect-video overflow-hidden relative">
                <video
                  src={project1.videoUrl}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="uppercase tracking-widest text-white/40 text-xs font-mono">
                    {project1.category}
                  </span>
                  <div className="liquid-glass rounded-full p-2 text-white/70 group-hover:text-white group-hover:bg-white/10 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-serif">
                  {project1.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-4 font-light">
                  {project1.summary}
                </p>

                {/* Bullets excerpt */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Processed 100,000 candidate profiles against job descriptions</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Hybrid pipeline: MiniLM embeddings + 6 behavioral ranking signals</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>FastAPI &amp; Docker offline CPU inference in under 60 seconds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech badges footer */}
            <div className="px-6 pb-6 md:px-8 md:pb-8 flex flex-wrap gap-1.5">
              {project1.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] text-white/80 bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Car Rental & Billing Management Systems */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            onClick={() => onSelectProject(project2.id)}
            className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card video area */}
              <div className="aspect-video overflow-hidden relative">
                <video
                  src={project2.videoUrl}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="uppercase tracking-widest text-white/40 text-xs font-mono">
                    {project2.category}
                  </span>
                  <div className="liquid-glass rounded-full p-2 text-white/70 group-hover:text-white group-hover:bg-white/10 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-serif">
                  {project2.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-4 font-light">
                  {project2.summary}
                </p>

                {/* Bullets excerpt */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Customer management, vehicle inventory, rental lifecycle</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Invoice generation, GST calculations &amp; discount processing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Modular OOP design, input validation &amp; file-based persistence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech badges footer */}
            <div className="px-6 pb-6 md:px-8 md:pb-8 flex flex-wrap gap-1.5">
              {project2.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] text-white/80 bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
