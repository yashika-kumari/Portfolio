import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users2, Calendar, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export function PhilosophySection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const exp1 = RESUME_DATA.experiences[0];
  const exp2 = RESUME_DATA.experiences[1];

  return (
    <section id="experience" ref={ref} className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading: text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24 */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24 font-serif"
        >
          Leadership <span className="italic text-white/40">x</span> Impact
        </motion.h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Video in rounded-3xl overflow-hidden aspect-[4/3] */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden aspect-[4/3] relative border border-white/10 group shadow-2xl"
          >
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="liquid-glass rounded-xl p-4 border border-white/10">
                <div className="text-white/80 text-xs font-mono uppercase tracking-wider flex items-center gap-2">
                  <Users2 className="w-3.5 h-3.5 text-white/60" />
                  <span>Student Leadership &amp; Community Building</span>
                </div>
                <div className="text-white text-sm font-light mt-1">
                  Empowering 250+ community members through high-impact workshops and events.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Animates from opacity: 0, x: 40 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-8 md:gap-10"
          >
            {/* Block 1 */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="text-white/40 text-xs tracking-widest uppercase font-mono">
                  {exp1.organization}
                </div>
                <div className="flex items-center gap-2 text-white/50 text-xs font-mono">
                  <Calendar className="w-3 h-3" />
                  <span>{exp1.period}</span>
                  <span>•</span>
                  <MapPin className="w-3 h-3" />
                  <span>{exp1.location}</span>
                </div>
              </div>

              <h3 className="text-white text-xl md:text-2xl font-serif mb-4">
                {exp1.role}
              </h3>

              <div className="text-white/70 text-base md:text-lg leading-relaxed font-light space-y-3">
                {exp1.bullets.map((bullet, idx) => (
                  <p key={idx} className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">•</span>
                    <span>{bullet}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Block 2 */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="text-white/40 text-xs tracking-widest uppercase font-mono">
                  {exp2.organization}
                </div>
                <div className="flex items-center gap-2 text-white/50 text-xs font-mono">
                  <Calendar className="w-3 h-3" />
                  <span>{exp2.period}</span>
                  <span>•</span>
                  <MapPin className="w-3 h-3" />
                  <span>{exp2.location}</span>
                </div>
              </div>

              <h3 className="text-white text-xl md:text-2xl font-serif mb-4">
                {exp2.role}
              </h3>

              <div className="text-white/70 text-base md:text-lg leading-relaxed font-light space-y-3">
                {exp2.bullets.map((bullet, idx) => (
                  <p key={idx} className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">•</span>
                    <span>{bullet}</span>
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
