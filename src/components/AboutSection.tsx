import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Code2, GraduationCap, Sparkles } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export function AboutSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="summary"
      ref={ref}
      className="bg-black pt-32 md:pt-44 pb-16 md:pb-24 px-6 overflow-hidden relative"
    >
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label: "Profile & Summary" -- text-white/40 text-sm tracking-widest uppercase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-sm tracking-widest uppercase font-mono mb-6 flex items-center gap-2"
        >
          <span className="w-6 h-px bg-white/30" />
          <span>Profile &amp; Summary</span>
        </motion.div>

        {/* Heading: text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.15] tracking-tight font-serif"
        >
          Engineering{' '}
          <span className="italic text-white/60">scalable software</span> for
          <br className="hidden md:inline" />{' '}
          <span className="italic text-white/60">minds that create, build, and deploy.</span>
        </motion.h2>

        {/* Narrative & Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          {/* Main Description */}
          <div className="md:col-span-8">
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
              {RESUME_DATA.summary}
            </p>
            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed mt-4">
              Currently pursuing a B.Tech in Computer Science and Engineering at{' '}
              <span className="text-white font-normal">{RESUME_DATA.education.institution}</span>,
              maintaining a distinguished academic record of{' '}
              <span className="text-white font-medium">{RESUME_DATA.education.score}</span>.
              Specializing in high-throughput backend services, deterministic ranking algorithms, and
              offline-first AI architectures.
            </p>
          </div>

          {/* Quick Metrics / Key Accolades */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="liquid-glass rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-white/80" />
                <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
                  Academic Excellence
                </span>
              </div>
              <div className="text-2xl font-serif text-white">8.98 CGPA</div>
              <div className="text-xs text-white/60 mt-1">Poornima College of Engineering (2024–2028)</div>
            </div>

            <div className="liquid-glass rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-amber-300" />
                <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
                  National Honor
                </span>
              </div>
              <div className="text-lg font-serif text-white">Elite + Silver (Top 5%)</div>
              <div className="text-xs text-white/60 mt-1">NPTEL Cyber Security and Privacy</div>
            </div>

            <div className="liquid-glass rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Code2 className="w-5 h-5 text-cyan-300" />
                <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
                  AI Throughput
                </span>
              </div>
              <div className="text-lg font-serif text-white">100,000 Profiles</div>
              <div className="text-xs text-white/60 mt-1">&lt; 60s CPU offline vector inference</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
