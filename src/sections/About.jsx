
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Skilled Full Stack Web Developer with experience in Full Stack Development, Scalable Systems Development using
                        React, Node.js, and MongoDB, and Mobile App Development using cross-platform apps with Flutter and Dart.
                        Experienced in RESTful API Development, API Integration, and effective database solution design. Interests include
                        applying knowledge of backend and mobile development to build high-performance software systems.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
