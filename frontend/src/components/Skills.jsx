import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Smartphone, Globe, Layers, Zap, Cpu } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const skillGroups = [
        {
            title: "Frontend Architecture",
            icon: <Monitor size={24} />,
            skills: ["React", "Next.js", "TypeScript", "Tailwind"],
            size: "large",
            color: "blue"
        },
        {
            title: "Backend Excellence",
            icon: <Cpu size={24} />,
            skills: ["Node", "PostgreSQL", "Prisma"],
            size: "small",
            color: "cyan"
        },
        {
            title: "UI/UX Strategy",
            icon: <Layers size={24} />,
            skills: ["Figma", "Interaction Design", "Prototyping"],
            size: "medium",
            color: "blue"
        },
        {
            title: "Growth & Optimization",
            icon: <Zap size={24} />,
            skills: ["SEO", "Performance", "Analytics"],
            size: "small",
            color: "cyan"
        },
        {
            title: "Advanced Engineering",
            icon: <Globe size={24} />,
            skills: ["REST APIs", "Auth0", "CI/CD"],
            size: "medium",
            color: "blue"
        }
    ];

    return (
        <section id="skills" className="section skills-neon" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        Capabilities <span className="text-neon-blue">& Skills</span>
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        A high-performance toolkit designed for modern digital landscapes.
                    </motion.p>
                </div>

                <div className="bento-grid-skills">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            className={`bento-card-skill ${group.size} ${group.color}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="skill-card-head">
                                <div className={`icon-box ${group.color}`}>
                                    {group.icon}
                                </div>
                                <h3>{group.title}</h3>
                            </div>
                            <div className="skill-pills-container">
                                {group.skills.map(skill => (
                                    <span key={skill} className="skill-pill-modern">{skill}</span>
                                ))}
                            </div>
                            <div className="card-flare"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
