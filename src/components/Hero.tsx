'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

import Image from 'next/image';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center bg-background">
            {/* Parallax Background */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0 will-change-transform"
            >
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                        alt="Luxury Duplex Construction"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/10 z-10" />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center pt-32 pb-12 md:pt-0 md:pb-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ opacity }}
                >
                    <span className="inline-block px-4 py-1 border border-gold/40 text-gold text-xs font-bold uppercase tracking-[0.3em] mb-6 rounded-full glass-gold">
                        Est. 2010 | Hyderabad
                    </span>
                    <h1 className="text-3xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tight leading-[0.95] md:leading-[0.9] max-w-[15ch] mx-auto">
                        Building <span className="text-gold">Trust</span> <br />
                        Into Every Brick.
                    </h1>
                    <div className="flex flex-col items-center gap-8 mb-16">
                        {/* Sleek Modern Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-5 md:py-2.5 bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-full shadow-2xl group hover:border-gold/30 transition-all duration-500"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-gold"></span>
                            </span>
                            <span className="text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/70">Starting At</span>
                            <span className="h-3 md:h-4 w-px bg-white/20" />
                            <span className="text-base md:text-xl font-black text-white group-hover:text-gold transition-colors">₹1499 <span className="text-[10px] md:text-xs opacity-40 font-bold">/ SFT</span></span>
                        </motion.div>

                        <p className="text-base md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed px-4 md:px-0">
                            Premium turnkey residential solutions in Hyderabad’s <br className="hidden md:block" />
                            <span className="text-white border-b border-gold/30 pb-0.5">East Corridor.</span> Crafting spaces that define your legacy.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#contact" className="btn-gold px-8 md:px-10 py-3.5 md:py-4 text-sm md:text-base flex items-center gap-3 group rounded-xl w-full sm:w-auto justify-center">
                            Start Your Project
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#portfolio" className="px-8 md:px-10 py-3.5 md:py-4 text-sm md:text-base font-bold text-white border-2 border-white/20 hover:border-gold hover:text-gold transition-all duration-500 rounded-xl backdrop-blur-md uppercase tracking-[0.2em] flex items-center gap-3 group/portfolio w-full sm:w-auto justify-center">
                            View Portfolio
                            <ArrowRight size={18} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 text-gold" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown size={32} />
            </motion.div>

            {/* Luxury Border Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </section>
    );
};

export default Hero;
