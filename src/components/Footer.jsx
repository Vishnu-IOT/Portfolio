

const Footer = () => {
    return (
        <footer className="py-8 bg-black border-t border-white/10 text-center">
            <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Vishnu V. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
                Built with React, and Tailwind CSS.
            </p>
        </footer>
    );
};

export default Footer;
