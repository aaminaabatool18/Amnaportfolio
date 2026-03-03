import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ShieldCheck, Zap } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const certs = [
        { title: "Advanced React Patterns", issuer: "Frontend Masters", year: "2023" },
        { title: "Google Analytics Professional", issuer: "Google", year: "2022" },
        { title: "AWS Developer Associate", issuer: "Amazon", year: "2022" },
        { title: "UI/UX Design Spec", issuer: "CalArts", year: "2021" }
    ];

    return (
        <section id="certifications" className="section certs-neon" ref={ref}>
            <div className="container">
                <div className="section-header text-center">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        Elite <span className="text-neon-blue">Credentials</span>
                    </motion.h2>
                </div>

                <div className="certs-grid-modern">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-card-glass glass-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="cert-top">
                                <div className="cert-icon-box">
                                    <Award size={24} className="text-neon-blue" />
                                </div>
                                <span className="cert-year">{cert.year}</span>
                            </div>
                            <h3 className="cert-name-refined">{cert.title}</h3>
                            <div className="cert-issuer">
                                <ShieldCheck size={14} className="text-neon-cyan" />
                                <span>{cert.issuer}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
