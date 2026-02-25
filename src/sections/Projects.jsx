
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import trolleyImg from '../assets/trolley.png';
import votingImg from '../assets/voting.jpg';
import groceryImg from '../assets/grocery.jpg';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Automated Billing Shopping Trolley",
            description: "Engineered an intelligent RFID-based billing ecosystem designed for high-volume scalability, processing over 100 transactions per hour with seamless stability. Revolutionized the checkout experience by optimizing operational efficiency, reducing billing discrepancies by 20%, and eliminating critical errors during peak loads.",
            tags: ["Arduino", "ESP", "RFID", "RFID Tags"],
            image: trolleyImg
        },
        {
            id: 2,
            title: "Decentralized Digital Voting System",
            description: "Developed a secure, blockchain-based voting platform using smart contracts for verifiable digital elections. Enhanced electoral security and reduced potential fraud by 70% through immutable ledger technology.",
            tags: ["Solidity", "Blockchain", "Web3.js", "JavaScript"],
            image: votingImg
        },
        {
            id: 3,
            title: "Grocery Delivery Platform (Rappi)",
            description: "Built a web-based e-commerce solution connecting retailers with wholesalers. Integrated payment gateways and optimized inventory workflows, boosting retailer visibility by 30%.",
            tags: ["HTML/CSS", "JavaScript", "MySQL", "GitHub"],
            image: groceryImg
        }
    ];

    return (
        <section id="projects" className="py-20 bg-secondary/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    Featured Projects
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-black/40 rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300"
                        >
                            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center overflow-hidden">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                                ) : (
                                    <span className="text-gray-500 text-4xl">📷</span>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
                                            {tag}
                                        </span>
                                    ))}
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
