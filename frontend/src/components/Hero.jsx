import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Layout, Code } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-neon" id="home">
            {/* Dynamic Background */}
            <div className="hero-visuals">
                <motion.div
                    className="neon-blob blob-blue"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="neon-blob blob-cyan"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -80, 0],
                        y: [0, -40, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container relative z-10">
                <div className="hero-flex">
                    <motion.div
                        className="hero-text-content"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="hero-badge">
                            <Sparkles size={14} className="text-neon-blue" />
                            <span>UI/UX & Full Stack Specialist</span>
                        </div>

                        <h1 className="hero-headline">
                            Crafting <span className="text-neon-blue">Digital</span> <br />
                            Masterpieces.
                        </h1>

                        <p className="hero-subtext">
                            I transform complex ideas into intuitive, high-performance digital experiences.
                            Engineering excellence met with creative vision.
                        </p>

                        <div className="hero-buttons">
                            <motion.a
                                href="#projects"
                                className="btn btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Case Studies <ArrowRight size={18} />
                            </motion.a>
                            <motion.a
                                href="#about"
                                className="btn btn-secondary"
                                whileHover={{ scale: 1.05 }}
                            >
                                The Strategy
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Abstract UI Representation */}
                    <motion.div
                        className="hero-ui-visual"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="glass-card main-card">
                            <div className="card-header">
                                <div className="dots"><span></span><span></span><span></span></div>
                                <div className="search-bar"></div>
                            </div>
                            <div className="card-body">
                                <div className="rect rect-1"></div>
                                <div className="rect rect-2"></div>
                                <div className="grid-abstract">
                                    <div className="item"><Layout size={20} /></div>
                                    <div className="item"><Code size={20} /></div>
                                </div>
                            </div>
                            <div className="card-floating float-1">
                                <div className="pulse"></div>
                                <span>99% Success</span>
                            </div>
                            <div className="card-floating float-2">
                                <span>Fast Loading</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
