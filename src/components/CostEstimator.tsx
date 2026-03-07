'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Ruler, Layers, TrendingUp, Info, ArrowRight } from 'lucide-react';

const materialQualities = [
    { id: 'standard', name: 'Standard', rate: 1650, features: ['Local TMT Steel', 'Standard Bricks', 'Basic Vitrified Tiles'] },
    { id: 'premium', name: 'Premium', rate: 1850, features: ['Jai Raj Steel', 'First-class Bricks', 'Large Vitrified Tiles', 'Branded Plumbing'] },
    { id: 'luxury', name: 'Luxury', rate: 2150, features: ['Premium Steel', 'Ultra-Tech Cement', 'Italian Marble Finish', 'Designer Bath Fittings'] },
];

export default function CostEstimator() {
    const [sft, setSft] = useState<number>(1800);
    const [quality, setQuality] = useState(materialQualities[1]);
    const [estimate, setEstimate] = useState(0);

    useEffect(() => {
        setEstimate(sft * quality.rate);
    }, [sft, quality]);

    return (
        <section className="py-24 bg-marble relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Interactive Tool</span>
                        <h2 className="text-3xl md:text-5xl font-black text-charcoal uppercase tracking-tight mb-6">
                            Instant <span className="text-gold">Cost Estimator</span>
                        </h2>
                        <p className="text-charcoal/60 max-w-2xl mx-auto font-medium">
                            Get an accurate construction cost estimate based on your space and material choices. Transparent pricing for Uppal & Ghatkesar.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Input Controls */}
                        <div className="space-y-10 glass p-8 md:p-10 rounded-[2rem]">
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <label className="text-sm font-bold uppercase tracking-widest text-charcoal flex items-center gap-2">
                                        <Ruler size={18} className="text-gold" />
                                        Built-up Area (SFT)
                                    </label>
                                    <span className="text-gold font-black text-xl">{sft} SFT</span>
                                </div>
                                <input
                                    type="range"
                                    min="500"
                                    max="10000"
                                    step="100"
                                    value={sft}
                                    onChange={(e) => setSft(parseInt(e.target.value))}
                                    className="w-full h-2 bg-marble-gray rounded-lg appearance-none cursor-pointer accent-gold"
                                />
                                <div className="flex justify-between text-[10px] text-charcoal/30 font-bold mt-4 uppercase tracking-widest">
                                    <span>500 SFT</span>
                                    <span>10,000 SFT</span>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-bold uppercase tracking-widest text-charcoal flex items-center gap-2 mb-6">
                                    <Layers size={18} className="text-gold" />
                                    Material Quality
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    {materialQualities.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setQuality(item)}
                                            className={`py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${quality.id === item.id
                                                ? 'bg-gold text-white shadow-xl shadow-gold/20'
                                                : 'bg-marble-gray/20 text-charcoal/40 hover:bg-marble-gray/40'
                                                }`}
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gold/5 rounded-2xl p-6 border border-gold/10">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-gold mb-4 flex items-center gap-2">
                                    <Info size={14} /> Included in {quality.name} Package
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {quality.features.map((feature, i) => (
                                        <li key={i} className="text-[11px] font-bold text-charcoal/60 flex items-center gap-2 uppercase tracking-tight">
                                            <div className="w-1 h-1 rounded-full bg-gold" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Result Display */}
                        <div className="flex flex-col justify-center items-center text-center glass p-10 rounded-[2rem] bg-charcoal/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                                <Calculator size={120} className="text-gold" />
                            </div>

                            <TrendingUp className="text-gold mb-6" size={48} />
                            <h3 className="text-charcoal/40 font-bold uppercase tracking-[0.2em] text-xs mb-2">Estimated Range</h3>
                            <div className="text-4xl md:text-6xl font-black text-charcoal mb-4">
                                ₹{(estimate / 100000).toFixed(1)}L <span className="text-gold text-2xl md:text-4xl">-</span> ₹{((estimate * 1.05) / 100000).toFixed(1)}L
                            </div>
                            <p className="text-charcoal/40 text-[10px] font-bold uppercase tracking-widest mb-10 max-w-[200px]">
                                *Tentative estimate only. Actual costs may vary based on site conditions.
                            </p>

                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-gold w-full flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs"
                            >
                                Get Exact Quotation
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
