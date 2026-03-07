import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="pt-20 pb-10 bg-marble border-t border-marble-gray/30">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 border-2 border-gold flex items-center justify-center font-bold text-gold text-xl group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                A
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-wider text-foreground">ABHIRAM</span>
                                <span className="text-[10px] tracking-[0.2em] text-gold font-semibold uppercase">Constructions</span>
                            </div>
                        </Link>
                        <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
                            Building trust into every brick. Expert construction services in Hyderabad, specialising in duplexes, independent houses, and premium apartments.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-foreground font-bold uppercase tracking-widest text-sm">Quick Links</h4>
                        <nav className="flex flex-col gap-3">
                            {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((link) => (
                                <Link
                                    key={link}
                                    href="#"
                                    className="text-sm text-foreground/60 hover:text-gold transition-colors duration-300"
                                >
                                    {link}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Our Services */}
                    <div className="space-y-6">
                        <h4 className="text-foreground font-bold uppercase tracking-widest text-sm">Our Services</h4>
                        <nav className="flex flex-col gap-3">
                            {['Residential Construction', 'Commercial Buildings', 'Interior Design', 'Renovations', 'Project Management'].map((link) => (
                                <Link
                                    key={link}
                                    href="#"
                                    className="text-sm text-foreground/60 hover:text-gold transition-colors duration-300"
                                >
                                    {link}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-foreground font-bold uppercase tracking-widest text-sm">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                                <span className="text-sm text-foreground/60 leading-relaxed">
                                    Uppal & Ghatkesar Area,<br />Hyderabad, Telangana 500092
                                </span>
                            </div>
                            <a href="tel:+917799954555" className="flex items-center gap-3 text-sm text-foreground/60 leading-relaxed hover:text-gold transition-colors duration-300">
                                <Phone size={18} className="text-gold flex-shrink-0" />
                                <span>+91 77999 54555</span>
                            </a>
                            <a href="mailto:aravindjilla9@gmail.com" className="flex items-center gap-3 text-sm text-foreground/60 leading-relaxed hover:text-gold transition-colors duration-300">
                                <Mail size={18} className="text-gold flex-shrink-0" />
                                <span>aravindjilla9@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-marble-gray/20 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-foreground/40 font-medium tracking-wider uppercase">
                        © {new Date().getFullYear()} Abhiram Constructions. All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-[10px] text-foreground/40 font-semibold hover:text-gold transition-colors duration-300 uppercase tracking-widest">Privacy Policy</Link>
                        <Link href="#" className="text-[10px] text-foreground/40 font-semibold hover:text-gold transition-colors duration-300 uppercase tracking-widest">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
