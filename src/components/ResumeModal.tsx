import { X, Mail, Phone, MapPin, Github, Linkedin, Award, GraduationCap, Code2, Briefcase, Download, Check } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { useState } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `
${RESUME_DATA.name}
Email: ${RESUME_DATA.email} | Phone: ${RESUME_DATA.phone} | Location: ${RESUME_DATA.location}
LinkedIn: ${RESUME_DATA.linkedin} | GitHub: ${RESUME_DATA.github}

PROFILE:
${RESUME_DATA.summary}

EDUCATION:
${RESUME_DATA.education.degree} - ${RESUME_DATA.education.institution}
${RESUME_DATA.education.period} | ${RESUME_DATA.education.location} | ${RESUME_DATA.education.score}

SKILLS:
${RESUME_DATA.skills.languages.join(', ')} | ${RESUME_DATA.skills.backend.join(', ')} | ${RESUME_DATA.skills.infrastructure.join(', ')}

PROJECTS:
${RESUME_DATA.projects.map((p) => `${p.title}\nTech: ${p.technologies.join(', ')}\n${p.highlights.map(h => `• ${h}`).join('\n')}`).join('\n\n')}

EXPERIENCE:
${RESUME_DATA.experiences.map((e) => `${e.role} - ${e.organization} (${e.period})\n${e.bullets.map(b => `• ${b}`).join('\n')}`).join('\n\n')}

CERTIFICATES:
${RESUME_DATA.certificates.map(c => `• ${c.title} - ${c.issuer}${c.badge ? ` (${c.badge})` : ''}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-neutral-950 border border-white/15 rounded-3xl p-6 sm:p-10 text-white my-8 shadow-2xl overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-white/40">
              Curriculum Vitae
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white mt-1">
              {RESUME_DATA.name}
            </h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleCopyText}
              className="liquid-glass rounded-full px-4 py-2 text-xs font-mono text-white/80 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="liquid-glass rounded-full px-4 py-2 text-xs font-mono text-white/80 hover:text-white hover:bg-white/10 transition-all hidden sm:flex items-center gap-1.5 cursor-pointer"
            >
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-wrap gap-4 text-xs font-mono text-white/60 mb-8 pb-6 border-b border-white/10">
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-white/40" />
            {RESUME_DATA.email}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-white/40" />
            {RESUME_DATA.phone}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-white/40" />
            {RESUME_DATA.location}
          </span>
          <a
            href={RESUME_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white text-white/80 underline decoration-white/30"
          >
            <Linkedin className="w-3.5 h-3.5 text-white/40" />
            LinkedIn Profile
          </a>
          <a
            href={RESUME_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white text-white/80 underline decoration-white/30"
          >
            <Github className="w-3.5 h-3.5 text-white/40" />
            GitHub Profile
          </a>
        </div>

        {/* Modal Body Content */}
        <div className="space-y-8 text-sm font-light leading-relaxed">
          {/* Summary */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">
              Profile
            </div>
            <p className="text-white/80 leading-relaxed">{RESUME_DATA.summary}</p>
          </div>

          {/* Education */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-white/60" />
              <span>Education</span>
            </div>
            <div className="liquid-glass rounded-xl p-4 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="font-serif text-base text-white">{RESUME_DATA.education.degree}</div>
                <div className="text-white/60 text-xs">{RESUME_DATA.education.institution}</div>
              </div>
              <div className="text-right sm:text-right font-mono text-xs">
                <div className="text-white">{RESUME_DATA.education.period} | {RESUME_DATA.education.location}</div>
                <div className="text-emerald-400 font-semibold">{RESUME_DATA.education.score}</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-white/60" />
              <span>Skills</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                ...RESUME_DATA.skills.languages,
                ...RESUME_DATA.skills.backend,
                ...RESUME_DATA.skills.infrastructure,
                ...RESUME_DATA.skills.ai_ml,
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
              Projects
            </div>
            <div className="space-y-4">
              {RESUME_DATA.projects.map((project) => (
                <div key={project.id} className="liquid-glass rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h4 className="font-serif text-lg text-white">{project.title}</h4>
                    <span className="text-xs font-mono text-white/50">{project.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1.5 text-xs text-white/70">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-white/40 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-white/60" />
              <span>Leadership Experience</span>
            </div>
            <div className="space-y-4">
              {RESUME_DATA.experiences.map((exp) => (
                <div key={exp.id} className="liquid-glass rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                    <h4 className="font-serif text-lg text-white">{exp.role}</h4>
                    <span className="text-xs font-mono text-white/50">{exp.period}</span>
                  </div>
                  <div className="text-xs font-mono text-white/40 mb-3">
                    {exp.organization} • {exp.location}
                  </div>
                  <ul className="space-y-1.5 text-xs text-white/70">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-white/40 mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-white/60" />
              <span>Certificates</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {RESUME_DATA.certificates.map((cert) => (
                <div key={cert.title} className="liquid-glass rounded-xl p-4 border border-white/10">
                  <div className="text-xs font-mono text-white/40 mb-1">{cert.issuer}</div>
                  <div className="font-serif text-sm text-white">{cert.title}</div>
                  {cert.badge && (
                    <div className="text-[11px] font-mono text-amber-300 mt-1">{cert.badge}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
