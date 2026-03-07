'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, ThumbsUp, Medal } from 'lucide-react';
import Image from 'next/image';

const brands = [
    { name: 'Jai Raj Steel', logo: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=200&auto=format&fit=crop', color: '#B22222' }, // Steel rebar representational
    { name: 'Ultratech', logo: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=200&auto=format&fit=crop', color: '#FFD700' }, // Cement conceptual
    { name: 'Finolex', logo: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=200&auto=format&fit=crop', color: '#0047AB' }, // Electrical wires
    { name: 'Asian Paints', logo: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?q=80&w=200&auto=format&fit=crop', color: '#E31E24' }, // Paint drops
    { name: 'Astral Pipes', logo: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=200&auto=format&fit=crop', color: '#00A86B' }, // CPVC Pipes
    { name: 'Kajaria Tiles', logo: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=200&auto=format&fit=crop', color: '#808080' }, // Ceramic tiles
];

const badges = [
    { icon: ShieldCheck, title: "10-Year Warranty", desc: "Structural integrity guaranteed." },
    { icon: Award, title: "ISO Certified", desc: "Quality standards maintained." },
    { icon: ThumbsUp, title: "100+ Happy Clients", desc: "Trust earned through work." },
    { icon: Medal, title: "Premium Materials", desc: "No compromise on quality." },
];

const Transparency = () => {
    return (
        <section className="py-24 bg-marble relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Trust Badges */}
                    <div className="order-2 lg:order-1">
                        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Transparency First</span>
                        <h2 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-8">
                            Quality You Can <span className="text-gold">Verify</span>
                        </h2>
                        <p className="text-foreground/60 text-lg mb-12 max-w-xl">
                            We believe in 100% transparency. From the steel we use to the paints on your walls, we only partner with industry leaders to ensure your home lasts for generations.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {badges.map((badge, i) => (
                                <motion.div
                                    key={badge.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 p-4 rounded-xl glass hover:border-gold/30 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                                        <badge.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-bold uppercase tracking-wider text-sm mb-1">{badge.title}</h4>
                                        <p className="text-foreground/50 text-xs font-medium">{badge.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Logo Grid */}
                    <div className="order-1 lg:order-2">
                        <div className="glass p-8 md:p-12 rounded-3xl border-2 border-gold/10 relative">
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold rounded-tr-3xl opacity-20" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold rounded-bl-3xl opacity-20" />

                            <h3 className="text-center text-foreground/40 font-bold uppercase tracking-[0.2em] text-[10px] mb-12">Authorized Material Partners</h3>

                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                                {brands.map((brand, i) => (
                                    <motion.div
                                        key={brand.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="relative group h-32"
                                    >
                                        <div className="absolute inset-0 bg-background rounded-2xl p-4 shadow-sm border border-marble-gray/30 group-hover:border-gold/30 transition-all duration-500 overflow-hidden flex items-center justify-center">
                                            {/* Representational Image with Overlay */}
                                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                                <Image
                                                    src={brand.logo}
                                                    alt={brand.name}
                                                    fill
                                                    className="object-cover grayscale group-hover:grayscale-0"
                                                    sizes="200px"
                                                />
                                            </div>

                                            {/* Stylized Brand Name */}
                                            <div className="relative z-10 text-center">
                                                <span
                                                    className="text-xs font-black uppercase tracking-[0.2em] transition-colors duration-500 text-foreground"
                                                >
                                                    {brand.name}
                                                </span>
                                                <div
                                                    className="h-0.5 w-0 group-hover:w-full mx-auto mt-2 transition-all duration-500"
                                                    style={{ backgroundColor: brand.color }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
        </section>
    );
};

export default Transparency;
