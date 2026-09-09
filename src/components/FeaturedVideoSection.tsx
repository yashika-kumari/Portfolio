import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDown, Cpu, Layers } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface FeaturedVideoSectionProps {
  onExploreProjects: () => void;
}

export function FeaturedVideoSection({ onExploreProjects }: FeaturedVideoSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillGroups = [
    { label: 'Languages', items: RESUME_DATA.skills.languages },
    { label: 'Backend & APIs', items: RESUME_DATA.skills.backend },
    { label: 'Infrastructure & DB', items: RESUME_DATA.skills.infrastructure },
    { label: 'AI & Vector Systems', items: RESUME_DATA.skills.ai_ml },
  ];

  return (
    <section id="skills" className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.9 }}
          className="rounded-3xl overflow-hidden aspect-video relative group shadow-2xl border border-white/10"
        >
          {/* Background Loop Video */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay on video: from-black/85 via-black/40 to-transparent for great legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none" />

          {/* Top subtle badge */}
          <div className="absolute top-6 left-6 z-10">
            <div className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2 text-white/80 text-xs font-mono uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5 text-cyan-300" />
              <span>Skill Matrix &amp; Systems Architecture</span>
            </div>
          </div>

          {/* Bottom overlay content (absolute bottom-0 left-0 right-0 p-6 md:p-10) */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
            {/* Left: a liquid-glass rounded-2xl p-6 md:p-8 max-w-2xl card */}
            <div className="liquid-glass rounded-2xl p-5 sm:p-6 md:p-8 max-w-2xl w-full border border-white/10">
              <div className="text-white/50 text-xs tracking-widest uppercase mb-3 font-mono flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-white/60" />
                <span>Technical Skills &amp; Stack</span>
              </div>
              <p className="text-white text-sm md:text-base leading-relaxed mb-5 font-light">
                Engineering resilient software across backend distributed services, vector similarity engines,
                and desktop application suites.
              </p>

              {/* Skills categorization pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {skillGroups.map((group) => (
                  <div key={group.label} className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs text-white/90 bg-white/5 hover:bg-white/15 px-2 py-0.5 rounded-md border border-white/10 transition-colors whitespace-nowrap"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: "Explore more" button with whileHover and whileTap */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onExploreProjects}
              className="liquid-glass rounded-full px-8 py-3.5 text-white text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer shrink-0 self-start md:self-end flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 text-white/70" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
