import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const projects = [
        {
            id: 1,
            title: "Gradience",
            category: "Frontend / UI/UX",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            description: "E learning platform for CS students, with quizzes and assignments, certifications and more",
            tags: ["React", "Express", "MongoDB"]
        },
        {
            id: 2,
            title: "Fleet Mate",
            category: "UI/UX",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            description: "A Fleet Management System for tracking and managing vehicles and drivers based in Australia",
            tags: ["React", "Canva", "Figma"]
        }
    ];

    return (
        <section id="projects" className="section projects-neon" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        Digital <span className="text-neon-blue">Architecture.</span>
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        Projects that made an impact and solved real-world problems.
                    </motion.p>
                </div>

                <div className="projects-list-ultra">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-row"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="project-media">
                                <div className="glass-card media-inner">
                                    <img src={project.image} alt={project.title} />
                                    <div className="media-overlay">
                                        <div className="tag-group">
                                            {project.tags.map(t => <span key={t} className="tag-pill-modern">{t}</span>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info-modern">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title-large">{project.title}</h3>
                                <p className="project-body-text">{project.description}</p>
                                <div className="project-links-modern">
                                    <motion.a
                                        href="#"
                                        className="btn btn-primary"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        View Project <ArrowUpRight size={18} />
                                    </motion.a>
                                    <a href="#" className="github-link-circular"><Github size={20} /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
