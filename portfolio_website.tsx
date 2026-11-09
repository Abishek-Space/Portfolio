import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Calendar, 
  Shield, 
  BrainCircuit, 
  Terminal, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Menu, 
  X,
  ExternalLink,
  ChevronRight,
  Code
} from 'lucide-react';

// --- Data ---
const personalInfo = {
  name: "Abishek P",
  title: "AI & Data Science | Cybersecurity",
  location: "Coimbatore, Tamil Nadu, India",
  email: "abishekpalanisamym@gmail.com",
  linkedin: "linkedin.com/in/abishek-p-ai",
  github: "github.com/Abishek-Space",
  phone: "+91-8489302266"
};

const education = [
  {
    degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
    institution: "KPR Institute of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu",
    period: "Aug. 2025 – May 2028",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "PSG College of Technology",
    location: "Coimbatore, Tamil Nadu",
    period: "Aug. 2022 – May 2025",
  }
];

const experience = [
  {
    role: "AI & Cybersecurity Student Assistant",
    company: "KPR Institute of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu",
    period: "Jan. 2026 – Present",
    description: [
      "Developed machine learning models using PyTorch and Scikit-Learn for data classification, including detection of phishing attempts and unusual network activity.",
      "Prepared datasets using Pandas and NumPy by cleaning data and scaling features for model training.",
      "Built REST APIs using FastAPI and PostgreSQL to store security logs and serve model predictions, with Docker used for testing."
    ],
    icon: <Shield className="w-5 h-5 text-cyan-400" />
  },
  {
    role: "Information Technology Project Intern",
    company: "PSG College of Technology",
    location: "Coimbatore, Tamil Nadu",
    period: "Dec. 2023 – May 2025",
    description: [
      "Maintained computer laboratory infrastructure, managed local databases, and carried out routine data backups.",
      "Developed web-based portal utilities using HTML/CSS, JavaScript, and SQL to simplify student record management.",
      "Troubleshot hardware, software, and local network issues to keep systems running smoothly."
    ],
    icon: <Terminal className="w-5 h-5 text-violet-400" />
  }
];

const projects = [
  {
    title: "AI Predictive Analytics Platform",
    period: "Jan. 2026 – Present",
    tech: ["Python", "Scikit-Learn", "FastAPI", "React"],
    description: "Built an end-to-end machine learning application that processes structured datasets and delivers predictions with 94% accuracy. Connected a React frontend dashboard to a FastAPI backend to display charts and statistical summaries.",
    icon: <BrainCircuit className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Network Vulnerability Scanner",
    period: "May 2026 – Present",
    tech: ["Python", "Nmap", "Linux"],
    description: "Built a Python tool that automates Nmap scans to find open ports and running services on target systems. Generated simple reports that list possible weaknesses.",
    icon: <Shield className="w-6 h-6 text-violet-400" />
  }
];

const certifications = [
  { title: "First Prize, Hackathon (YUKTHI)", org: "Baselios Mathews II College of Engineering", date: "Sep. 2026" },
  { title: "Cybersecurity Hands-on Training", org: "KGISL MicroCollege (NSDC)", date: "Jan. 2025" },
  { title: "Networking Workshop", org: "Refinement Software Solutions Pvt. Ltd.", date: "Jun. 2024" },
  { title: "Artificial Intelligence Intern", org: "Adroit Technologies Innovative Solution Pvt. Ltd.", date: "May 2024" },
  { title: "Data Analytics Intern", org: "TechForge Academy", date: "Dec. 2025 – Jan. 2026" }
];

const skills = {
  "Languages": ["Python", "SQL", "JavaScript", "HTML", "CSS"],
  "Frameworks & Libraries": ["PyTorch", "Scikit-Learn", "pandas", "NumPy", "FastAPI", "React"],
  "Tools & Technologies": ["Git", "Docker", "Linux", "Nmap", "VS Code"]
};

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- Components ---

const SectionHeading = ({ title, icon: Icon }) => (
  <motion.div 
    variants={fadeInUp}
    className="flex items-center gap-3 mb-12"
  >
    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 shadow-lg">
      <Icon className="w-6 h-6 text-cyan-400" />
    </div>
    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-500">
      {title}
    </h2>
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-slate-100 hover:text-cyan-400 transition-colors">
          AP<span className="text-cyan-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:abishekpalanisamym@gmail.com" 
            className="px-5 py-2 text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full hover:bg-cyan-500/20 transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 mb-8 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-300">Available for Opportunities</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-transparent bg-clip-text">Abishek P</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 mb-8 font-light max-w-2xl mx-auto">
            {personalInfo.title}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 mb-12">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-500" /> {personalInfo.location}
            </div>
            <div className="hidden sm:block text-zinc-700">•</div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-500" /> {personalInfo.email}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-cyan-500/50 rounded-xl transition-all">
              <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-cyan-400" />
              <span className="font-medium text-slate-300 group-hover:text-white">LinkedIn</span>
            </a>
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-violet-500/50 rounded-xl transition-all">
              <Github className="w-5 h-5 text-slate-300 group-hover:text-violet-400" />
              <span className="font-medium text-slate-300 group-hover:text-white">GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <SectionHeading title="Experience" icon={Briefcase} />
        
        <div className="relative border-l-2 border-zinc-800/50 ml-4 md:ml-0">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {experience.map((exp, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-zinc-950 border-2 border-cyan-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>
                
                <div className="bg-zinc-900/50 border border-zinc-800/80 p-6 md:p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                        {exp.icon} {exp.role}
                      </h3>
                      <p className="text-lg text-slate-400">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium">
                        <Calendar className="w-4 h-4" /> {exp.period}
                      </span>
                      <span className="text-sm text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                        <ChevronRight className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <SectionHeading title="Featured Projects" icon={Terminal} />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 group-hover:border-cyan-500/50 transition-colors">
                  {project.icon}
                </div>
                <span className="text-sm font-medium text-slate-400 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800">
                  {project.period}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-sm font-medium bg-zinc-950 text-slate-300 border border-zinc-800 rounded-lg group-hover:border-violet-500/30 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <SectionHeading title="Technical Arsenal" icon={Code} />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div key={index} variants={fadeInUp} className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-violet-400" /> {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-slate-300 rounded-xl hover:bg-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <SectionHeading title="Education" icon={GraduationCap} />
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={fadeInUp} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-violet-500/30 transition-colors">
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{edu.degree}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {edu.period}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Column */}
          <div>
            <SectionHeading title="Certifications & Training" icon={Award} />
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={fadeInUp} className="group p-5 bg-zinc-900/30 border border-zinc-800/80 rounded-2xl hover:bg-zinc-900 transition-colors flex items-start gap-4">
                  <div className="mt-1 p-2 bg-zinc-950 rounded-lg border border-zinc-800 group-hover:border-cyan-500/50">
                    <Award className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-slate-200 font-semibold mb-1 group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                    <p className="text-sm text-slate-400 mb-2">{cert.org}</p>
                    <span className="text-xs font-medium text-slate-500 bg-zinc-950 px-2 py-1 rounded-md border border-zinc-800">
                      {cert.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold tracking-tighter text-slate-100 mb-6">
          AP<span className="text-cyan-500">.</span>
        </h2>
        <div className="flex justify-center gap-6 mb-8">
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-violet-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Abishek P. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}