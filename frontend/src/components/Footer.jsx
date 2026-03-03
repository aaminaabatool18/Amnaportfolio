import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-neon">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="logo-text-large">AAMINA<span className="dot">.</span></h2>
                        <p className="footer-brief">
                            Architecting Digital Impact. Full Stack Developer & UI/UX Specialist
                            focused on technical excellence and strategic growth.
                        </p>
                    </div>

                    <div className="footer-nav-groups">
                        <div className="nav-group">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Capabilities</a></li>
                                <li><a href="#experience">Trajectory</a></li>
                            </ul>
                        </div>
                        <div className="nav-group">
                            <h4>Case Studies</h4>
                            <ul>
                                <li><a href="#projects">Work</a></li>
                                <li><a href="#contact">Inquiry</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom glass-card">
                    <p className="copyright">&copy; {currentYear} Aamina Batool. Crafted with <span className="text-neon-blue">Precision</span>.</p>
                    <div className="footer-socials">
                        <a href="#"><Linkedin size={18} /></a>
                        <a href="#"><Github size={18} /></a>
                        <a href="#"><Mail size={18} /></a>
                    </div>
                    <motion.button
                        className="scroll-top-btn"
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-neon-blue)', color: 'white' }}
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
