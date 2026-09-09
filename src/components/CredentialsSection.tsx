import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, ShieldCheck, Cpu, Database, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface CredentialsSectionProps {
  onOpenResume: () => void;
}

export function CredentialsSection({ onOpenResume }: CredentialsSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="credentials" ref={ref} className="bg-black py-28 md:py-36 px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-white/40 text-xs uppercase tracking-widest font-mono mb-3">
              ACADEMIA &amp; CREDENTIALS
            </div>
            <h2 className="text-4xl md:text-6xl text-white tracking-tight font-serif">
              Education &amp; <span className="italic text-white/60">Certifications</span>
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onClick={onOpenResume}
            className="liquid-glass rounded-full px-6 py-2.5 text-white text-sm font-medium hover:bg-white/10 transition-all cursor-pointer self-start md:self-end flex items-center gap-2"
          >
            <span>View Full Resume Data</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/70" />
          </motion.button>
        </div>

        {/* Two-column layout for Education & Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          {/* Education Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 liquid-glass rounded-3xl p-8 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-white/40 text-xs font-mono uppercase tracking-widest mb-2">
                DEGREE PROGRAM
              </div>
              <h3 className="text-white text-2xl font-serif mb-2">
                {RESUME_DATA.education.degree}
              </h3>
              <div className="text-white/80 text-lg font-light mb-4">
                {RESUME_DATA.education.institution}
              </div>

              <div className="space-y-2 text-sm text-white/60 font-mono pt-4 border-t border-white/10">
                <div className="flex justify-between">
                  <span>Timeline</span>
                  <span className="text-white">{RESUME_DATA.education.period}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location</span>
                  <span className="text-white">{RESUME_DATA.education.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cumulative Performance</span>
                  <span className="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/20">
                    {RESUME_DATA.education.score}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs text-white/50 leading-relaxed font-light">
              Coursework highlights: Data Structures &amp; Algorithms, Object-Oriented Programming,
              Database Management Systems, Software Engineering, Operating Systems.
            </div>
          </motion.div>

          {/* Certificates Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-7 flex flex-col gap-4"
          >
            {RESUME_DATA.certificates.map((cert, idx) => {
              const icons = [ShieldCheck, Cpu, Database];
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={cert.title}
                  className="liquid-glass rounded-2xl p-6 border border-white/10 flex items-start gap-4 hover:border-white/20 transition-all"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white shrink-0">
                    <Icon className="w-5 h-5 text-white/80" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                      <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                        {cert.issuer}
                      </span>
                      {cert.badge && (
                        <span className="text-xs font-mono text-amber-300 bg-amber-300/10 px-2.5 py-0.5 rounded-full border border-amber-300/30 flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          <span>{cert.badge}</span>
                        </span>
                      )}
                    </div>
                    <h4 className="text-white text-lg font-serif">{cert.title}</h4>
                    <p className="text-white/60 text-xs mt-1">
                      Verified professional curriculum credential focusing on practical deployment &amp; architecture.
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Contact Banner in Liquid Glass */}
        <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="text-white/40 text-xs font-mono uppercase tracking-widest mb-2">
                GET IN TOUCH
              </div>
              <h3 className="text-3xl md:text-4xl text-white font-serif mb-3">
                Let&apos;s build something <span className="italic text-white/60">remarkable</span> together.
              </h3>
              <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
                Available for software engineering opportunities, AI research collaborations, and backend development.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col gap-3">
              <a
                href={`mailto:${RESUME_DATA.email}`}
                className="liquid-glass rounded-xl p-3.5 px-5 flex items-center justify-between text-white hover:bg-white/10 transition-colors border border-white/10 group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                  <span className="text-sm font-mono">{RESUME_DATA.email}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-white" />
              </a>

              <a
                href={`tel:${RESUME_DATA.phone}`}
                className="liquid-glass rounded-xl p-3.5 px-5 flex items-center justify-between text-white hover:bg-white/10 transition-colors border border-white/10 group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                  <span className="text-sm font-mono">+91 {RESUME_DATA.phone}</span>
                </div>
                <span className="text-xs text-white/40 font-mono">Call</span>
              </a>

              <div className="liquid-glass rounded-xl p-3.5 px-5 flex items-center justify-between text-white border border-white/10">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-white/60" />
                  <span className="text-sm font-mono">{RESUME_DATA.location}</span>
                </div>
                <span className="text-xs text-emerald-400 font-mono">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info & Links */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs font-mono">
          <div>
            &copy; {new Date().getFullYear()} Yashika Kumari. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href={RESUME_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/yashika-kumari</span>
            </a>
            <a
              href={RESUME_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>linkedin.com/in/yashika-kumari</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
