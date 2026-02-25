
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12">
                {/* Profile Image - Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-shrink-0 order-1 md:order-none"
                >
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent to-cyan-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                        <img
                            src={profileImg}
                            alt="Vishnu V"
                            className="relative w-full h-full object-cover object-center rounded-full border-4 border-accent/50 shadow-[0_0_40px_rgba(0,243,255,0.5)]"
                            style={{ objectPosition: 'center 0%' }}
                        />
                    </div>
                </motion.div>

                {/* Text Content - Right Side */}
                <div className="flex-1 text-center md:text-left order-2 md:order-none max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
                    >
                        Hi, I'm <span className="text-accent">Vishnu V</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8"
                    >
                        Building immersive digital experiences with code and creativity.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <a
                            href="#projects"
                            className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)] text-sm sm:text-base"
                        >
                            View My Work
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
