
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        window.open(`mailto:vishnubharani153@gmail.com?subject=${subject}&body=${body}`, '_self');
    };

    const contactDetails = [
        {
            icon: '📍',
            label: 'Address',
            value: `1/1 Thagur Street, Ammal Eri Road, Dadagapatty, Salem - 636006, Tamil Nadu, India`,
            link: null,
        },
        {
            icon: '📞',
            label: 'Phone',
            value: '+91 95145 32527',
            link: 'tel:+919514532527',
        },
        {
            icon: '✉️',
            label: 'Email',
            value: 'vishnubharani153@gmail.com',
            link: 'mailto:vishnubharani153@gmail.com',
        },
        {
            icon: '',
            label: 'GitHub',
            value: 'https://github.com/Vishnu-IOT',
            link: 'https://github.com/Vishnu-IOT',
            devicon: 'devicon-github-original',
        },
        {
            icon: '',
            label: 'LinkedIn',
            value: 'https://www.linkedin.com/in/vishnu-varatharaj-sns/',
            link: 'https://www.linkedin.com/in/vishnu-varatharaj-sns/',
            devicon: 'devicon-linkedin-plain colored',
        },
    ];

    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    Contact
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Left — Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col justify-center"
                    >
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Let&apos;s Connect</h3>
                        <p className="text-gray-400 text-sm sm:text-base mb-8">
                            Feel free to reach out through any of the channels below.
                        </p>

                        <div className="space-y-6">
                            {contactDetails.map((item) => {
                                const inner = (
                                    <div className="flex items-center gap-4 group">
                                        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-white/10 transition-all duration-300 text-lg shrink-0">
                                            {item.devicon ? (
                                                <i className={`${item.devicon} text-xl`}></i>
                                            ) : (
                                                item.icon
                                            )}
                                        </span>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                                            <p className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">{item.value}</p>
                                        </div>
                                    </div>
                                );

                                return item.link ? (
                                    <a key={item.label} href={item.link} target="_blank" rel="noopener noreferrer">
                                        {inner}
                                    </a>
                                ) : (
                                    <div key={item.label}>{inner}</div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right — Get In Touch Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-md"
                    >
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">Get In Touch</h3>
                        <p className="text-gray-400 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                            Have a project in mind or just want to say hi? Drop me a message.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2.5 sm:py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white outline-none transition-all text-sm sm:text-base"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2.5 sm:py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white outline-none transition-all text-sm sm:text-base"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2.5 sm:py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white outline-none transition-all text-sm sm:text-base"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2.5 sm:py-3 bg-accent text-white  font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(0,243,255,0.4)] text-sm sm:text-base"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
