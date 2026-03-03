import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <section id="about" className="section about-neon" ref={ref}>
            <div className="container">
                <div className="about-flex">
                    <motion.div
                        className="about-image-container"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={variants}
                    >
                        <div className="image-frame">
                            <img
                                src="profile.jpg"
                                alt="Aamina Batool"
                                className="about-img"
                            />
                            <div className="neon-border"></div>
                        </div>
                        {/* Experience Floating Card */}
                        <motion.div
                            className="exp-card glass-card"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <h3>3+ Years</h3>
                            <p>of Digital Growth</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={variants}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="section-title">
                            Clean Code <span className="text-neon-blue">Creating</span> Real Impact.
                        </h2>

                        <div className="about-text-box">
                            <p>
                                I’m Aamina Batool — a frontend and backend developer focused on creating fast, clean, and user-friendly web solutions. I don’t just write code — I build experiences that solve real problems and help businesses grow.
                            </p>

                            <p>
                                From designing smooth interfaces to developing scalable backend systems, I turn ideas into practical, high-performing products.
                            </p>
                        </div>

                        <div className="about-signature">
                            <span className="sign-line"></span>
                            <span className="sign-text">Aamina Batool</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
