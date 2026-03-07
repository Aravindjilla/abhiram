'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Layout, Layers, Wand2, Key } from 'lucide-react';

const steps = [
    {
        title: "Foundation",
        description: "Deep excavation and seismic-resistant RCC footing to ensure lifelong stability.",
        icon: HardHat,
        color: "#D4AF37",
    },
    {
        title: "Structure",
        description: "Precision-engineered pillars and slabs using Jai Raj Steel & Ultratech Cement.",
        icon: Layout,
        color: "#36454F",
    },
    {
        title: "Brickwork",
        description: "High-quality red bricks with perfect alignment for superior thermal insulation.",
        icon: Layers,
        color: "#D4AF37",
    },
    {
        title: "Finishing",
        description: "Premium Asian Paints, Finolex wiring, and designer tile work for a luxury feel.",
        icon: Wand2,
        color: "#36454F",
    },
    {
        title: "Handover",
        description: "Rigorous quality checks followed by a celebratory handover of your dream home.",
        icon: Key,
        color: "#D4AF37",
    }
];

const ProcessStoryteller = () => {
    return (
        <section id="process" className="py-24 bg-marble relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
                    >
                        How We Build
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-charcoal uppercase tracking-tight"
                    >
                        Our Construction <span className="text-gold">Journey</span>
                    </motion.h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0 hidden md:block" />

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className={`glass p-8 rounded-2xl border-l-4 border-gold transition-transform hover:scale-[1.02] duration-300 ${index % 2 === 0 ? 'md:text-right md:border-l-0 md:border-r-4' : ''
                                        }`}>
                                        <h3 className="text-2xl font-bold text-charcoal mb-3 uppercase tracking-wider">{step.title}</h3>
                                        <p className="text-charcoal/70 leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Icon Circle */}
                                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-gold shadow-xl">
                                    <step.icon size={28} className="text-gold" />
                                    <div className="absolute -z-10 w-24 h-24 bg-gold/5 rounded-full blur-xl" />
                                </div>

                                {/* Spacer for alignment */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Accents */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-charcoal/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default ProcessStoryteller;
