'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ArchitectsVision = () => {
    return (
        <section className="py-32 bg-charcoal text-white relative overflow-hidden">
            {/* Background Texture/Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-charcoal via-transparent to-charcoal" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-1 border-l border-gold/30 h-32 hidden lg:block" />

                        <div className="lg:col-span-11">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-gold font-sans font-bold uppercase tracking-[0.4em] text-xs mb-8 block"
                            >
                                The Philosophy
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-serif italic leading-[1.1] md:leading-[1.1] mb-12"
                            >
                                A home is not just a <span className="text-gold not-italic font-sans font-extrabold">structure</span>; it is a vessel for your legacy, crafted with <span className="not-italic font-sans font-extrabold">soul</span> and precision.
                            </motion.h2>

                            <div className="grid md:grid-cols-2 gap-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="space-y-6"
                                >
                                    <p className="text-white/60 text-lg font-serif leading-relaxed italic">
                                        Proper craftsmanship is becoming a lost art. At Abhiram, we treat every brick as a commitment to the families who will live within these walls for generations.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-px bg-gold/50" />
                                        <span className="text-xs font-bold uppercase tracking-widest text-gold">Sravan, Founder</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="relative aspect-[4/5] overflow-hidden border border-white/10 mask-arch shadow-2xl"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                                        alt="Architectural Vision"
                                        fill
                                        className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Architectural Detail (SVG) */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-5 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
                    <path d="M0,50 L100,50 M50,0 L50,100 M25,25 L75,75 M75,25 L25,75" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="25" strokeWidth="0.5" />
                </svg>
            </div>
        </section>
    );
};

export default ArchitectsVision;
