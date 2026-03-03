import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const experiences = [
        {
            company: "Zeen Group",
            role: "Key Developer & Digital Specialist",
            period: "2022 — Present",
            location: "Hybrid Studio",
            description: "Leading technical strategy and full-stack development. Orchestrating digital growth through precision engineering.",
            skills: ["Strategy", "Architecture", "Optimization"]
        },
        {
            company: "Creative Studio",
            role: "Frontend UI/UX Specialist",
            period: "2020 — 2022",
            location: "Remote",
            description: "Crafting beautiful, high-performance interfaces for global startups. Focused on micro-interactions and accessibility.",
            skills: ["UI/UX", "Dynamics", "Accessibility"]
        }
    ];

    return (
        <section id="experience" className="section experience-neon" ref={ref}>
            <div className="container">
                <div className="experience-layout">
                    <motion.div
                        className="exp-header"
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title">The <span className="text-neon-blue">Trajectory</span></h2>
                        <p className="section-subtitle">A professional journey defined by continuous impact and technical mastery.</p>
                    </motion.div>

                    <div className="exp-timeline-modern">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="exp-item-glass glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                whileHover={{ x: 10 }}
                            >
                                <div className="exp-meta">
                                    <div className="company-info">
                                        <div className="company-logo-placeholder">
                                            <Briefcase size={20} className="text-neon-blue" />
                                        </div>
                                        <div>
                                            <h3>{exp.company}</h3>
                                            <p className="role-text">{exp.role}</p>
                                        </div>
                                    </div>
                                    <div className="period-badge">
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <p className="exp-desc">{exp.description}</p>

                                <div className="exp-footer">
                                    <div className="exp-skills-brief">
                                        {exp.skills.map(s => <span key={s} className="exp-skill-dot">{s}</span>)}
                                    </div>
                                    <motion.div
                                        className="view-case-link"
                                        whileHover={{ x: 5 }}
                                    >
                                        Details <ChevronRight size={16} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
