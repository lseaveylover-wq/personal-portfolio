'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

interface MobileNavProps {
    activeSection: string
    scrollToSection: (section: string) => void
    brandName: string
}

export default function MobileNav({ activeSection, scrollToSection, brandName }: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Hide nav when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const menuItems = ['Home', 'About', 'Portfolio', 'Contact']

    const handleMenuClick = (section: string) => {
        scrollToSection(section.toLowerCase())
        setIsOpen(false)
    }

    return (
        <>
            {/* Mobile Navigation Bar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden fixed top-3 left-3 right-3 z-50"
            >
                <div className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-xl px-3 py-2.5 shadow-2xl max-w-full">
                    <div className="flex items-center justify-between gap-3">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-sm sm:text-base font-bold text-gradient truncate"
                        >
                            {brandName}
                        </motion.div>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-9 h-9 rounded-lg bg-primary/20 border border-white/50 flex items-center justify-center hover:bg-primary/30 transition-colors shadow-lg flex-shrink-0"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={18} className="text-white" strokeWidth={2.5} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={18} className="text-white" strokeWidth={2.5} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed top-[55px] right-3 z-50 w-[200px]"
                    >
                        <div className="bg-[#0a0e27]/98 backdrop-blur-2xl border border-white/20 rounded-xl shadow-2xl overflow-hidden">
                            {/* Menu Items */}
                            <nav className="py-2">
                                {menuItems.map((item, index) => {
                                    const isActive = activeSection === item.toLowerCase()
                                    return (
                                        <motion.button
                                            key={item}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => handleMenuClick(item)}
                                            className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all ${isActive
                                                    ? 'bg-primary/20 text-primary'
                                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            {item}
                                        </motion.button>
                                    )
                                })}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
