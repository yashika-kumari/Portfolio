import { useRef, useEffect, useState, FormEvent, ChangeEvent, DragEvent } from 'react';
import { ArrowRight, Globe, Github, Linkedin, Mail, Check, Sparkles, Camera } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({ onOpenResume, onNavigate }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const isFadingRef = useRef(false);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('yashika_avatar');
      if (stored) return stored;
    }
    return RESUME_DATA.avatarUrl || '/avatar.png';
  });

  const handleImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const res = e.target?.result as string;
      if (res) {
        setAvatarUrl(res);
        try {
          localStorage.setItem('yashika_avatar', res);
        } catch {
          // Ignore localStorage quota exceeded
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageFile(file);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleImageFile(file);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';

    const animateOpacity = (target: number, duration: number, callback?: () => void) => {
      if (!video) return;
      const startOpacity = parseFloat(video.style.opacity || '0');
      const startTime = performance.now();

      const step = (currentTime: number) => {
        if (!video) return;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        video.style.opacity = (startOpacity + (target - startOpacity) * progress).toString();

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          isFadingRef.current = false;
          if (callback) callback();
        }
      };

      isFadingRef.current = true;
      requestAnimationFrame(step);
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
      animateOpacity(1, 500);
    };

    const handleTimeUpdate = () => {
      if (isFadingRef.current || !video.duration) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && remaining > 0) {
        animateOpacity(0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(() => {});
          animateOpacity(1, 500);
        }
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Initial check if video is already ready
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmailInput('');
    }, 4000);
  };

  return (
    <section id="hero" className="min-h-screen overflow-hidden relative flex flex-col justify-between bg-black">
      {/* Background Video with Vanilla JS Fade */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        muted
        autoPlay
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
        style={{ opacity: 0 }}
      />

      {/* Subtle top & bottom shadow gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />

      {/* Navbar (relative z-20, px-6 py-6) */}
      <nav className="relative z-20 px-4 sm:px-6 py-6 w-full">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left: Globe icon + Name + Nav Links */}
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('hero')}
              className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity cursor-pointer group"
            >
              <div className="p-1 rounded-full bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                {RESUME_DATA.name}
              </span>
            </button>

            {/* Nav links hidden on mobile */}
            <div className="hidden md:flex items-center gap-7 ml-8">
              <button
                onClick={() => onNavigate('summary')}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Summary
              </button>
              <button
                onClick={() => onNavigate('skills')}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Skills
              </button>
              <button
                onClick={() => onNavigate('experience')}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Experience
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => onNavigate('credentials')}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Education
              </button>
            </div>
          </div>

          {/* Right: Contact + Resume Button */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="text-white text-sm font-medium hover:text-white/80 transition-colors hidden sm:inline-block"
            >
              Contact
            </a>
            <button
              onClick={onOpenResume}
              className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/10 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Resume</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content (relative z-10, flex-1 flex flex-col items-center justify-center, px-6 py-12 text-center) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-8 sm:py-12 text-center md:-translate-y-[8%]">
        {/* Title + Avatar Row */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-5 md:gap-7 max-w-full">
          {/* Heading: text-5xl sm:text-7xl md:text-8xl lg:text-9xl, white, tracking-tight, font-family 'Instrument Serif', serif */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tight font-serif select-none">
            Yashika <em className="italic font-normal">Kumari</em>
          </h1>

          {/* Floating Avatar Pill to the right of the title */}
          <div className="relative group shrink-0">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileInputChange}
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`relative p-1 rounded-full liquid-glass ring-1 ring-white/25 shadow-[0_0_35px_rgba(255,255,255,0.18)] transition-all duration-300 group-hover:scale-105 cursor-pointer ${
                isDragging ? 'ring-emerald-400 scale-105' : ''
              }`}
              title="Click or drop your photo to update profile picture"
            >
              <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-24 lg:h-24 rounded-full overflow-hidden relative bg-neutral-900 flex items-center justify-center">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="Yashika Kumari"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={() => setAvatarUrl(null)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950 text-white">
                    <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-wider text-white/90">YK</span>
                  </div>
                )}

                {/* Hover action overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white/90 gap-1 backdrop-blur-xs">
                  <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-[9px] font-medium tracking-tight">Upload</span>
                </div>
              </div>

              {/* Active status indicator badge */}
              <span
                className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-emerald-400 ring-2 ring-[#0a0a0c] shadow-sm animate-pulse"
                title="Available for opportunities"
              />
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-white/85 text-sm sm:text-base max-w-2xl mx-auto mt-5 sm:mt-6 leading-relaxed px-4 font-normal">
          {RESUME_DATA.heroSummary}
        </p>

        {/* Email input pill */}
        <form
          onSubmit={handleEmailSubmit}
          className="max-w-xl w-full mt-8 sm:mt-10 liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3"
        >
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="Enter your email to connect..."
            className="w-full bg-transparent text-white placeholder:text-white/40 text-sm sm:text-base outline-none border-none focus:ring-0"
          />
          <button
            type="submit"
            className="bg-white hover:bg-white/90 text-black rounded-full p-3 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            title="Connect with Yashika"
          >
            {subscribed ? (
              <Check className="w-5 h-5 text-black" />
            ) : (
              <ArrowRight className="w-5 h-5 text-black" />
            )}
          </button>
        </form>

        {subscribed && (
          <p className="text-xs text-white/70 mt-2.5 animate-fadeIn">
            Thank you! Yashika will reach out to you directly at your email.
          </p>
        )}

        {/* Action button */}
        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => onNavigate('projects')}
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-white/70" />
            <span>Explore Engineering Projects</span>
          </button>
        </div>
      </div>

      {/* Social icons footer (relative z-10, flex justify-center gap-4 pb-8 sm:pb-12) */}
      <div className="relative z-10 flex justify-center items-center gap-4 pb-8 sm:pb-12 px-6">
        <a
          href={RESUME_DATA.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer group"
        >
          <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
        <a
          href={RESUME_DATA.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer group"
        >
          <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
        <a
          href={`mailto:${RESUME_DATA.email}`}
          aria-label="Send Email"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer group"
        >
          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </section>
  );
}
