import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    return (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-primary-200 shadow-sm"
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold text-primary-600 font-display"
                    >
                        MLM
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            whileHover={{ scale: 1.1 }}
                            className="nav-link"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="space-y-1">
                        <div className="w-6 h-0.5 bg-primary-600"></div>
                        <div className="w-6 h-0.5 bg-primary-600"></div>
                        <div className="w-6 h-0.5 bg-primary-600"></div>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden mt-4 space-y-4 bg-white p-4 rounded-lg shadow-lg"
                    >
                        {navItems.map((item) => (
                            <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="block text-neutral-600 hover:text-primary-500 font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </nav>
          </motion.header>
    );
};

export default Header;