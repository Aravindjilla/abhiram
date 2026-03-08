'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/#portfolio' },
        { name: 'Process', href: '/#process' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-3 glass' : 'py-4 md:py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-gold flex items-center justify-center font-bold text-gold text-lg md:text-xl group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                        A
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-lg md:text-xl font-bold tracking-wider transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`}>ABHIRAM</span>
                        <span className="text-[9px] md:text-[11px] tracking-[0.25em] text-gold font-bold uppercase drop-shadow-sm">Constructions</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold hover:text-gold transition-colors duration-300 uppercase tracking-widest ${isScrolled ? 'text-foreground' : 'text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                    <a href="#contact" className="btn-gold flex items-center gap-2 text-sm uppercase tracking-widest px-6">
                        <Phone size={16} />
                        Get a Quote
                    </a>
                </nav>

                <button
                    className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">Switch Theme</span>
                                <ThemeToggle />
                            </div>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-semibold text-foreground hover:text-gold py-2 border-b border-marble-gray/30"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="#contact"
                                className="btn-gold w-full mt-2 flex items-center justify-center gap-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Phone size={18} />
                                Get a Quote
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
