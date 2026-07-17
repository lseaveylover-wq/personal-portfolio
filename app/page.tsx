'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Github, Instagram, MessageCircle, ExternalLink, Mail, ChevronDown, MapPin, Globe, Download, Youtube, Send, Laptop, GraduationCap, Layers3, Upload, X } from 'lucide-react'
import { SiHtml5, SiCss, SiJavascript, SiTailwindcss, SiBootstrap, SiPhp, SiFirebase, SiVercel, SiUpwork } from 'react-icons/si'
import { useEffect, useState } from 'react'
import LaptopIllustration from './components/LaptopIllustration'
import MobileNav from './components/MobileNav'
import { personalInfo, socialLinks, socialHandles, projects, education, techStack, contactInfo, footer } from './data'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [typingText, setTypingText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [portfolioFilter, setPortfolioFilter] = useState('Proyek')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const phrases = personalInfo.typingPhrases

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (typingText.length < currentPhrase.length) {
          setTypingText(currentPhrase.slice(0, typingText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        if (typingText.length > 0) {
          setTypingText(typingText.slice(0, -1))
        } else {
          // Move to next phrase
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [typingText, isDeleting, phraseIndex])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="bg-dark text-white relative overflow-x-hidden">
      {/* FIXED BACKGROUND - Stays in place while scrolling */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Base Dark Blue Gradient - DARKER */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050d1a] via-[#070e1a] to-[#030508]" />

        {/* Small Grid Pattern - WHITE and MORE VISIBLE */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            mixBlendMode: 'overlay',
            opacity: 0.6
          }}
        />

        {/* 3 SPECIFIC GLOWING SPOTS - Matching Original */}

        {/* Glow 1: Top Left (Main Blue Glow) */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] -translate-x-1/4 -translate-y-1/4">
          <div className="absolute inset-0 bg-[#1e40af] opacity-25 blur-[120px] rounded-full"></div>
        </div>

        {/* Glow 2: Middle Left (Purple Glow behind "Ready to Innovate") */}
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px]">
          <div className="absolute inset-0 bg-[#6d28d9] opacity-20 blur-[100px] rounded-full"></div>
        </div>

        {/* Glow 3: Bottom Right (Subtle Purple) */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] translate-x-1/4 translate-y-1/4">
          <div className="absolute inset-0 bg-[#7c3aed] opacity-15 blur-[100px] rounded-full"></div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        brandName={footer.brandName}
      />

      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-gradient"
          >
            {footer.brandName}
          </motion.div>
          <div className="flex gap-8">
            {['Home', 'About', 'Portfolio', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${activeSection === item.toLowerCase() ? 'text-white' : 'text-white/70'
                  }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden z-10 px-4 md:px-6 pt-20 md:pt-0">
        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Content - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-full text-sm mb-6"
              style={{
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
              }}
            >
              <span
                className="relative z-10 bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent font-bold"
                style={{
                  textShadow: '0 0 15px rgba(167, 139, 250, 0.5)'
                }}
              >
                {personalInfo.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 mobile-heading-lg"
            >
              <span
                className="text-white"
                style={{
                  textShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.2)'
                }}
              >
                {personalInfo.title.split(' ')[0]} {personalInfo.title.split(' ')[1]}
              </span>
              <br />
              <span
                className="bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 20px rgba(167, 139, 250, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)'
                }}
              >
                {personalInfo.title.split(' ')[2]}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-white/70 mb-4 font-light h-8"
            >
              <span className="opacity-70">{typingText}</span>
              <span
                className="ml-1 text-primary inline-block"
                style={{
                  animation: 'blink 1s ease-in-out infinite'
                }}
              >
                |
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-white/80 mb-8 max-w-lg"
            >
              {personalInfo.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="flex gap-4 mb-8"
            >
              <button onClick={() => scrollToSection('portfolio')} className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium flex items-center gap-2 transition-all hover:scale-105 border border-white/50">
                Projects
                <ExternalLink size={18} />
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium flex items-center gap-2 border border-white/50 transition-all hover:scale-105">
                Contact
                <Mail size={18} />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="hidden md:flex gap-4"
            >
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="glow-btn flex items-center gap-2 px-4 py-3 bg-black/50 backdrop-blur-xl border border-white/50 rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                <Github size={20} />
                <span className="text-sm">GitHub</span>
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="glow-btn flex items-center gap-2 px-4 py-3 bg-black/50 backdrop-blur-xl border border-white/50 rounded-xl hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
                <Instagram size={20} />
                <span className="text-sm">Instagram</span>
              </a>
              <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="glow-btn flex items-center gap-2 px-4 py-3 bg-black/50 backdrop-blur-xl border border-white/50 rounded-xl hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <Send size={20} />
                <span className="text-sm">Telegram</span>
              </a>
            </motion.div>
          </div>

          {/* Right Content - Laptop Illustration */}
          <div className="order-1 lg:order-2">
            <LaptopIllustration />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          viewport={{ once: true }}
          className="absolute bottom-8 right-8"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/50 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <ChevronDown className="text-primary" />
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-[90vh] flex items-center justify-center py-4 relative z-10">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-center mb-6"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-white/60 text-lg">Turning ideas into digital experiences</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border-4 border-white/50 shadow-2xl shadow-primary/20">
                <img
                  src={personalInfo.profileImage}
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <h3 className="text-3xl font-bold mb-6">Hello, I'm {personalInfo.name}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                {personalInfo.bio[0]}
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                {personalInfo.bio[1]}
              </p>
              <div className="bg-primary/10 border-l-4 border-white/50 p-4 rounded mb-6">
                <p className="text-white/90 italic">"{personalInfo.quote}"</p>
              </div>
              <div className="flex gap-4">
                <a
                  href={personalInfo.cv}
                  download
                  className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium flex items-center gap-2 transition-all hover:scale-105 border border-white/50"
                >
                  <Download size={18} />
                  Download CV
                </a>
                <button onClick={() => scrollToSection('portfolio')} className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium flex items-center gap-2 border border-white/50 transition-all hover:scale-105">
                  View Projects
                </button>
              </div>
            </motion.div>
          </div >
        </div >
      </section >

      {/* Portfolio Section */}
      < section id="portfolio" className="min-h-[90vh] flex items-center justify-center py-20 relative z-10" >
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center mb-10"
          >
            <h2 className="text-5xl font-bold mb-4 italic">
              Portfolio <span className="text-gradient">Showcase</span>
            </h2>
            <p className="text-white/60 text-sm">This is the digital footprint of my journey.</p>
          </motion.div>

          {/* Filter Tabs - Matching reference design */}
          <div className="mb-10 flex justify-center">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/50 rounded-2xl px-4 py-2 inline-flex w-full max-w-3xl relative">
              <div className="grid grid-cols-3 w-full">
                {[
                  { name: 'Proyek', label: 'Projects', icon: Laptop },
                  { name: 'Edukasi', label: 'Education', icon: GraduationCap },
                  { name: 'Tech Stack', label: 'Tech Stack', icon: Layers3 }
                ].map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setPortfolioFilter(tab.name)}
                    className="relative py-5 px-6 rounded-xl font-medium transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
                  >
                    <tab.icon
                      size={20}
                      strokeWidth={1.5}
                      className={`transition-colors duration-300 ${portfolioFilter === tab.name ? 'text-primary' : 'text-white/50 group-hover:text-white/80'
                        }`}
                    />
                    <span className={`text-sm font-medium transition-colors duration-300 ${portfolioFilter === tab.name ? 'text-primary' : 'text-white/50 group-hover:text-white/80'
                      }`}>
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Animated Underline */}
              <motion.div
                className="absolute bottom-3 h-0.5 bg-primary rounded-full"
                initial={false}
                animate={{
                  left: portfolioFilter === 'Proyek' ? '16.666%' : portfolioFilter === 'Edukasi' ? '50%' : '83.333%',
                  x: '-50%',
                  width: '1.5rem'
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 35
                }}
              />
            </div>
          </div>

          {/* Projects Content - 3 Column Card Grid */}
          {portfolioFilter === 'Proyek' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
              className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="group bg-white/[0.03] rounded-2xl border border-white/50 overflow-hidden hover:border-primary/40 transition-all duration-300 flex flex-col"
                >
                  {/* Project Image Area */}
                  <div className="h-48 bg-gradient-to-br from-[#1a1f3a] to-[#0f1328] flex items-center justify-center overflow-hidden border-b border-white/50 relative">
                    {project.images?.[0] ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const fallback = document.createElement('span');
                            fallback.className = 'text-7xl opacity-80';
                            fallback.textContent = project.image;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    ) : (
                      <span className="text-7xl opacity-80 group-hover:scale-110 transition-transform duration-300">{project.image}</span>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold mb-2 text-primary leading-tight">{project.title}</h3>
                    <p className="text-white/60 text-sm mb-5 leading-relaxed line-clamp-3 flex-1">{project.description}</p>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 mt-auto">
                      {project.available ? (
                        <a
                          href={project.link ?? '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 bg-primary hover:bg-primary-dark rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] text-white shadow-lg shadow-primary/30"
                        >
                          Visit
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="w-full py-2.5 bg-white/[0.06] rounded-lg font-medium text-sm text-white/40 cursor-not-allowed text-center border border-white/[0.06]">
                          Demo Not Available
                        </span>
                      )}
                      <button className="w-full py-2.5 bg-transparent hover:bg-primary/10 rounded-lg font-medium text-sm border border-primary/50 text-primary hover:text-primary hover:border-primary transition-all flex items-center justify-center gap-1"
                        onClick={() => setSelectedProject(project)}
                      >
                        Details
                        <span className="text-xs">→</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Education Content - 2 Column Grid */}
          {portfolioFilter === 'Edukasi' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
              className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/50 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <GraduationCap size={28} className="text-primary/80 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1 text-white">{edu.title}</h3>
                      <p className="text-white/50 text-sm mb-3">{edu.subtitle}</p>
                      <span className="inline-block px-3 py-1 bg-emerald-500/15 rounded-full text-emerald-400 text-xs font-medium border border-emerald-500/20">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Tech Stack Content - 4 Column Grid */}
          {portfolioFilter === 'Tech Stack' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
            >
              {techStack.map((tech, index) => {
                const iconMap: { [key: string]: any } = {
                  'HTML': SiHtml5,
                  'CSS': SiCss,
                  'JavaScript': SiJavascript,
                  'Tailwind CSS': SiTailwindcss,
                  'Bootstrap': SiBootstrap,
                  'PHP': SiPhp,
                  'Firebase': SiFirebase,
                  'Vercel': SiVercel
                }
                const IconComponent = iconMap[tech.name]
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="group bg-white/[0.03] backdrop-blur-xl border border-white/50 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center gap-3">
                      <IconComponent className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                      <h3 className="text-sm font-medium text-center text-white/70">{tech.name}</h3>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-4 relative z-10">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-center mb-6"
          >
            <h2 className="text-5xl font-bold mb-4">
              Contact <span className="text-gradient">Me</span>
            </h2>
            <p className="text-white/60 text-lg">
              Have questions? Send me a message and I'll get back to you soon.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Leave a Comment Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
              className="bg-white/5 rounded-2xl border border-white/50 p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Leave a Comment</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name:</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/50 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Profile Photo (Optional):</label>
                  <label className="w-full px-4 py-3 bg-white/5 border border-white/50 rounded-lg hover:border-primary transition-colors cursor-pointer flex items-center gap-3 group">
                    <Upload size={20} className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors">Choose File</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                  <p className="text-xs text-white/50 mt-1">Max file size: 5MB</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message:</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/50 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Send size={18} />
                  Send Comment
                </button>
              </form>

              {/* Comments Section */}
              <div className="mt-8 pt-8 border-t border-white/50">
                <h4 className="text-lg font-bold mb-4">Comments (0)</h4>
                <div className="bg-white/5 rounded-lg p-4 mb-4 border border-white/50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/50">
                      <img
                        src={personalInfo.profileImage}
                        alt="Admin"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{personalInfo.name}</span>
                        <span className="text-xs text-white/50">(admin)</span>
                        <span className="text-xs text-primary">Pinned</span>
                      </div>
                      <p className="text-white/70 text-sm">
                        Thanks for visiting! Contact me if you need anything.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connect Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
              className="space-y-8"
            >
              {/* Connect with Me */}
              <div className="bg-white/5 rounded-2xl border border-white/50 p-8">
                <h3 className="text-2xl font-bold mb-6">Connect with Me</h3>
                <div className="space-y-3">
                  {[
                    { icon: <Instagram size={20} />, label: 'Instagram', handle: socialHandles.instagram, link: socialLinks.instagram },
                    { icon: <SiUpwork size={20} />, label: 'Upwork', handle: socialHandles.SiUpwork, link: socialLinks.SiUpwork },
                    { icon: <Github size={20} />, label: 'Github', handle: socialHandles.github, link: socialLinks.github },
                    { icon: <Send size={20} />, label: 'Telegram', handle: socialHandles.telegram, link: socialLinks.telegram },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/50 hover:border-primary/50 transition-all hover:scale-105"
                    >
                      <div className="text-primary">{social.icon}</div>
                      <div>
                        <p className="font-medium text-sm">{social.label}</p>
                        <p className="text-white/60 text-xs">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white/5 rounded-2xl border border-white/50 p-8">
                <h3 className="text-2xl font-bold mb-6">Contact</h3>
                <p className="text-white/70 mb-6 text-sm">
                  Have something to discuss? Send me a message and let's talk.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/70">
                    <MapPin size={20} className="text-primary" />
                    <span>{contactInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Globe size={20} className="text-primary" />
                    <span>{contactInfo.website}</span>
                  </div>
                </div>
                <a
                  href={socialLinks.telegram}
                  className="mt-6 w-full px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 border border-white/50"
                >
                  <Send size={18} />
                  Telegram Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/60">&copy; {footer.copyright}</p>
            </div>
            <div className="flex gap-6">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <Send size={20} />
              </a>
              <a href={socialLinks.SiUpwork} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <SiUpwork size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0a0e27]/98 backdrop-blur-xl border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {/* Close Button */}
                <div className="sticky top-0 bg-[#0a0e27]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between z-10">
                  <h2 className="text-2xl font-bold text-gradient">Project Details</h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-8">
                  {/* 1st Section: Main Image + Full Description */}
                  <div className="space-y-4">
                    <div className="h-64 bg-gradient-to-br from-[#1a1f3a] to-[#0f1328] rounded-xl overflow-hidden border border-white/10">
                      <img
                        src={selectedProject.images?.[0] || ''}
                        alt={selectedProject.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-8xl">${selectedProject.image}</span></div>`;
                        }}
                      />
                    </div>

                    {/* Project Title & Category */}
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                        {selectedProject.category}
                      </span>
                    </div>

                    {/* Full Description */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                      <p className="text-white/70 leading-relaxed">{selectedProject.fullDescription}</p>
                    </div>
                  </div>

                  {/* 2nd Section: Image Left + Detail Right */}
                  {selectedProject.details?.[0] && (
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div className="h-64 bg-gradient-to-br from-[#1a1f3a] to-[#0f1328] rounded-xl overflow-hidden border border-white/10">
                        <img
                          src={selectedProject.images?.[1] || ''}
                          alt={`${selectedProject.title} - Feature 1`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-6xl">${selectedProject.image}</span></div>`;
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-3">{selectedProject.details[0].title}</h4>
                        <p className="text-white/70 leading-relaxed">{selectedProject.details[0].content}</p>
                      </div>
                    </div>
                  )}

                  {/* 3rd Section: Detail Left + Image Right */}
                  {selectedProject.details?.[1] && (
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div className="order-2 md:order-1">
                        <h4 className="text-xl font-semibold text-primary mb-3">{selectedProject.details[1].title}</h4>
                        <p className="text-white/70 leading-relaxed">{selectedProject.details[1].content}</p>
                      </div>
                      <div className="h-64 bg-gradient-to-br from-[#1a1f3a] to-[#0f1328] rounded-xl overflow-hidden border border-white/10 order-1 md:order-2">
                        <img
                          src={selectedProject.images?.[2] || ''}
                          alt={`${selectedProject.title} - Feature 2`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-6xl">${selectedProject.image}</span></div>`;
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* 4th Section: Additional Detail (if available) */}
                  {selectedProject.details?.[2] && (
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-3">{selectedProject.details[2].title}</h4>
                      <p className="text-white/70 leading-relaxed">{selectedProject.details[2].content}</p>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <p className="text-white/70">{selectedProject.technologies}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 sticky bottom-0 bg-[#0a0e27]/95 backdrop-blur-xl -mx-6 px-6 py-4 border-t border-white/10">
                    {selectedProject.available ? (
                      <a
                        href={selectedProject.link ?? '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-primary/30"
                      >
                        <ExternalLink size={18} />
                        Visit Project
                      </a>
                    ) : (
                      <div className="flex-1 py-3 bg-white/5 rounded-lg font-medium text-white/40 cursor-not-allowed text-center border border-white/10">
                        Demo Not Available
                      </div>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium border border-white/20 transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main >
  )
}
