'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-marble flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-charcoal blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-2xl w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6 block">Error 404</span>

                    <h1 className="text-6xl md:text-9xl font-black text-charcoal mb-8 uppercase tracking-tighter">
                        Lost in <span className="text-gold">Space.</span>
                    </h1>

                    <div className="w-24 h-1 bg-gold mx-auto mb-10" />

                    <p className="text-charcoal/60 text-lg md:text-xl mb-12 font-medium leading-relaxed">
                        The blueprint for this page seems to be missing. <br className="hidden md:block" />
                        Let&apos;s get you back to the main site where the building happens.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/" className="btn-gold px-10 py-4 text-sm flex items-center gap-3 w-full sm:w-auto justify-center group">
                            <Home size={18} />
                            Back to Home
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="px-10 py-4 text-sm font-bold text-charcoal border-2 border-charcoal/10 hover:bg-charcoal/5 transition-all rounded-xl uppercase tracking-widest flex items-center gap-2 w-full sm:w-auto justify-center group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Previous Page
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>
    );
}
