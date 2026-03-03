import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section id="contact" className="section contact-neon" ref={ref}>
            <div className="container">
                <div className="contact-premium-grid">
                    <motion.div
                        className="contact-info-panel"
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title">Let's <span className="text-neon-blue">Connect.</span></h2>
                        <p className="section-subtitle">
                            Ready to architect the next digital masterpiece? Reach out for collaborations
                            or strategic partnerships.
                        </p>

                        <div className="contact-methods">
                            <div className="method-item">
                                <div className="method-icon"><Mail size={20} /></div>
                                <div className="method-text">
                                    <span className="method-label">Email</span>
                                    <a href="mailto:hello@aaminabatool.com">hello@aaminabatool.com</a>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon"><MapPin size={20} /></div>
                                <div className="method-text">
                                    <span className="method-label">Global Presence</span>
                                    <span>Remote / Hybrid</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-social-pills">
                            <a href="#" className="social-pill-glass"><Linkedin size={18} /> LinkedIn</a>
                            <a href="#" className="social-pill-glass"><Github size={18} /> GitHub</a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-glass glass-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <form className="modern-form">
                            <div className="form-row">
                                <div className="input-group-modern">
                                    <label>Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className="input-group-modern">
                                    <label>Email</label>
                                    <input type="email" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="input-group-modern">
                                <label>Subject</label>
                                <input type="text" placeholder="Project Inquiry" />
                            </div>
                            <div className="input-group-modern">
                                <label>Message</label>
                                <textarea placeholder="Tell me about your vision..." rows="5"></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="btn btn-primary btn-full"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Vision <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
