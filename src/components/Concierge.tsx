'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Headphones, Wrench, CheckCircle } from 'lucide-react';

const benefits = [
    {
        icon: ShieldCheck,
        title: "5-Year Structural Warranty",
        desc: "Comprehensive protection for your home's integrity, ensuring peace of mind for years to come."
    },
    {
        icon: Clock,
        title: "24/7 Priority Support",
        desc: "A dedicated concierge line for any maintenance requests or architectural consultations."
    },
    {
        icon: Wrench,
        title: "Annual Health Checks",
        desc: "Free annual inspection of plumbing, electrical, and structure for the first 3 years."
    },
    {
        icon: Headphones,
        title: "Expert Assistance",
        desc: "Instant access to our pool of architects and civil engineers for any future modifications."
    }
];

export default function Concierge() {
    return (
        <section className="py-24 bg-background relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2">
                        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Lifetime Commitment</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tight mb-8">
                            The <span className="text-gold">Abhiram</span> Concierge
                        </h2>
                        <p className="text-foreground/60 text-lg mb-12 font-medium leading-relaxed">
                            We don&apos;t just hand over keys; we hand over a promise. Our Concierge service ensures that your dream home stays in pristine condition, backed by experts who built it.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {benefits.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="space-y-3"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                                        <item.icon size={20} />
                                    </div>
                                    <h4 className="text-sm font-extrabold text-foreground uppercase tracking-widest">{item.title}</h4>
                                    <p className="text-xs text-foreground/50 leading-relaxed font-medium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative aspect-auto lg:min-h-[480px] max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gold/5 rounded-[3rem] -rotate-6 transform scale-105" />
                            <div className="relative z-10 w-full lg:min-h-[480px] glass rounded-[3rem] border-2 border-gold/10 p-8 md:p-12 flex flex-col justify-center items-center text-center shadow-2xl">
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 md:mb-8">
                                    <ShieldCheck size={40} className="md:w-12 md:h-12" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-extrabold text-foreground uppercase tracking-wider mb-4">Quality Certified</h3>
                                <p className="text-foreground/60 text-sm font-medium mb-8 md:mb-10">
                                    Every project at Abhiram Constructions undergoes a 120-point quality check before the final handover.
                                </p>

                                <div className="space-y-4 w-full">
                                    {['Structural Stability Certificate', 'Material Quality Reports', 'Vastu Certification'].map((cert) => (
                                        <div key={cert} className="flex items-center gap-3 bg-foreground/5 p-3 md:p-4 rounded-xl border border-gold/10 shadow-sm backdrop-blur-md">
                                            <CheckCircle size={18} className="text-gold" />
                                            <span className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground">{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Background Graphic */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 rounded-full blur-[100px] -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
