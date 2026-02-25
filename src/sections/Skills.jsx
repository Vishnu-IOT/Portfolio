
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: 'devicon-html5-plain colored' },
        { name: 'CSS', icon: 'devicon-css3-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'React.js', icon: 'devicon-react-original colored' },
        { name: 'Next.js', icon: 'devicon-nextjs-plain ' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Express.js', icon: 'devicon-express-original' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', icon: 'devicon-github-original' },
        { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
        { name: 'Dart', icon: 'devicon-dart-plain colored' },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    Skills
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap justify-center items-center gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.15, y: -5 }}
                            className="flex flex-col items-center justify-center w-20 h-24 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 cursor-default"
                        >
                            <i className={`${skill.icon} text-4xl`}></i>
                            <span className="text-xs text-gray-300 mt-2 text-center leading-tight">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
