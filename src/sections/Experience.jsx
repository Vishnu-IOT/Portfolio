
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Fullstack Web Developer",
            company: "MPeoples Business Solutions Pvt. Ltd.",
            period: "September 2025 - Present",
            description: "Led Full Stack Development of scalable web applications using React.js, Next.js for frontend and Node.js, Express.js, and MySQL for backend development."
        },
        {
            id: 2,
            role: "Industrial based Embedded System with AI & IoT - Internship",
            company: "National Small Industries Corporation",
            period: "July 2023 - August 2023",
            description: "Gained hands-on experience in designing embedded systems integrated with AI and IoT. Worked on sensor data processing, microcontroller programming, and smart automation solutions for industrial applications.",
        },
        {
            id: 3,
            role: "Bulding AI Tool using Langchain Framework - Internship",
            company: "MindfulAI Pvt. Ltd.",
            period: "July 2023 - August 2023",
            description: "Developed advanced AI tools leveraging the LangChain framework to build LLM-powered applications. Implemented custom chains and agents to automate complex workflows and enhance data processing capabilities."
        }
    ];

    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    Experience
                </motion.h2>
                <div className="relative border-l border-gray-700 ml-4 md:ml-10 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <span className="absolute -left-[5px] top-2 w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_#00f3ff]"></span>
                            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-accent/30 transition-all duration-300">
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <p className="text-accent mb-2">{exp.company} | {exp.period}</p>
                                <p className="text-gray-400">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
