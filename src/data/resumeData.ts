export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  avatarUrl?: string;
  heroSummary: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    period: string;
    location: string;
    score: string;
  };
  skills: {
    languages: string[];
    backend: string[];
    infrastructure: string[];
    ai_ml: string[];
  };
  projects: {
    id: string;
    title: string;
    category: string;
    technologies: string[];
    summary: string;
    highlights: string[];
    videoUrl: string;
  }[];
  experiences: {
    id: string;
    role: string;
    organization: string;
    period: string;
    location: string;
    bullets: string[];
  }[];
  certificates: {
    title: string;
    issuer: string;
    badge?: string;
  }[];
}

export const RESUME_DATA: ResumeData = {
  name: "Yashika Kumari",
  title: "Software & AI Engineer",
  email: "yashikamjr@gmail.com",
  phone: "7877375737",
  location: "Jaipur, India",
  linkedin: "https://linkedin.com/in/yashika-kumari",
  github: "https://github.com/yashika-kumari",
  avatarUrl: "/avatar.png",
  heroSummary:
    "Computer Science undergraduate with strong foundations in Java, DSA, and Full-Stack Development, currently exploring AI and web development.",
  summary:
    "Computer Science undergraduate with strong foundations in Java, Data Structures & Algorithms, and Full-Stack Development. Experienced in building AI-powered applications, backend systems, and responsive web applications using modern development tools. Passionate about building scalable software and continuously improving through hands-on projects.",
  education: {
    degree: "B.Tech Computer Science and Engineering",
    institution: "Poornima College of Engineering",
    period: "2024 – 2028",
    location: "Jaipur, India",
    score: "CGPA - 8.98",
  },
  skills: {
    languages: ["Java", "JavaScript", "Python"],
    backend: ["Node.js", "Express.js", "FastAPI"],
    infrastructure: ["Docker", "MySQL", "Git"],
    ai_ml: ["Sentence Transformers", "FAISS", "Vector Embeddings", "Hugging Face", "NumPy"],
  },
  projects: [
    {
      id: "candidate-ranking",
      title: "Intelligent Candidate Discovery & Ranking System",
      category: "AI & Vector Search",
      technologies: [
        "Python",
        "FastAPI",
        "FAISS",
        "Sentence Transformers",
        "Docker",
        "NumPy",
        "Hugging Face",
      ],
      summary:
        "An AI-powered candidate ranking engine processing 100,000 candidate profiles against job descriptions using vector embeddings, keyword matching, and multi-stage ranking algorithms.",
      highlights: [
        "Developed an AI-powered candidate ranking system that processed 100,000 candidate profiles against job descriptions using vector embeddings, keyword matching, and multi-stage ranking algorithms.",
        "Designed a hybrid ranking pipeline combining keyword extraction, MiniLM embeddings, cosine similarity, and six behavioral ranking signals including experience, notice period, location preference, recruiter responsiveness, and profile recency.",
        "Built a fully offline CPU-only inference pipeline using FastAPI and Docker that completed ranking in under 60 seconds without relying on external APIs or cloud-based LLM inference.",
      ],
      videoUrl:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
    },
    {
      id: "desktop-systems",
      title: "Car Rental & Billing Management Systems",
      category: "Java & OOP Architecture",
      technologies: ["Java", "Java Swing", "Object-Oriented Design", "File Persistence"],
      summary:
        "Robust desktop applications engineered with modular OOP architecture, featuring vehicle inventory, automated bill and receipt generation, and input validation.",
      highlights: [
        "Car Rental System: Developed dedicated modules for customer management, vehicle inventory, rentals, returns, and bill generation using Java Swing with modular OOP class design and file-based persistence.",
        "Billing Management System: Engineered invoice generation, GST calculation, discount processing, multi-item billing, and printable professional receipts.",
        "Implemented robust input validation, search functionality, and file-based data persistence for dependable record keeping and usability.",
      ],
      videoUrl:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
    },
  ],
  experiences: [
    {
      id: "hack-it-sapiens-lead",
      role: "Graphics Lead & Vice Captain",
      organization: "Hack IT Sapiens",
      period: "09/2024 – 06/2026",
      location: "Jaipur, India",
      bullets: [
        "Graphics Lead (09/2025 – 06/2026): Directing visual assets, creative direction, and design workflows for all community initiatives.",
        "Vice Captain - Students' Council (09/2024 – 08/2025): Coordinated recruitment for 100+ applicants, streamlining application management and communication workflows.",
        "Organized technical events and workshops attended by 150+ students across multiple colleges.",
      ],
    },
    {
      id: "alumni-coordinator",
      role: "Student Coordinator",
      organization: "Poornima College Alumni Society",
      period: "10/2024 – 03/2025",
      location: "Jaipur, India",
      bullets: [
        "Coordinated and supported The Grand Alumni Meet, which hosted 200+ alumni, ensuring smooth operations across all phases.",
        "Handled alumni calling, event planning, poster designing, and video editing, contributing to a 20% increase in alumni participation.",
      ],
    },
  ],
  certificates: [
    {
      title: "Cyber Security and Privacy",
      issuer: "NPTEL",
      badge: "Elite + Silver (Top 5%)",
    },
    {
      title: "Agents and Workflows",
      issuer: "OpenAI Academy",
    },
    {
      title: "Introduction to Retrieval Augmented Generation (RAG)",
      issuer: "IBM SkillsBuild",
    },
  ],
};
