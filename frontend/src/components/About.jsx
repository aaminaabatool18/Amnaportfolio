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
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
                            Engineering <span className="text-neon-blue">Impact</span> through Experience.
                        </h2>

                        <div className="about-text-box">
                            <p className="lead-text">
                                I am a Full Stack Developer & Digital Growth Specialist dedicated to
                                building high-performance digital solutions at **Zeen Group**.
                            </p>

                            <p>
                                My approach combines deep technical expertise with a sharp UI/UX focus.
                                I believe that every line of code should contribute to a seamless user journey
                                and tangible business growth.
                            </p>

                            <p>
                                From architecting scalable backends to crafting pixel-perfect frontend experiences,
                                I bridge the gap between design vision and technical reality.
                                Precision is my standard, and performance is my metric.
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
