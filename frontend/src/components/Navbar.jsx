import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className={`nav-wrapper ${isScrolled ? 'scrolled' : ''}`}>
            <motion.header
                className="navbar-pill glass-card"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <nav className="navbar">
                    <motion.a
                        href="#"
                        className="logo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="logo-dot"></span>
                        <span className="logo-text">AAMINA</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <ul className="nav-links desktop-only">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-cta desktop-only">
                        <motion.a
                            href="#contact"
                            className="btn-link"
                            whileHover={{ x: 5 }}
                        >
                            Let's Talk <span className="arrow">↗</span>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu glass-card"
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="mobile-links">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href="#contact" className="mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>
                                    Contact Me
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
