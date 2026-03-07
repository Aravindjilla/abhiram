'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Check, RefreshCw, Smartphone } from 'lucide-react';

const questions = [
    {
        id: 1,
        question: "How do you imagine your morning light?",
        options: [
            { id: 'a', text: 'Floor-to-ceiling glass walls', value: 'modern' },
            { id: 'b', text: 'Strategic, poetic skylights', value: 'regal' },
            { id: 'c', text: 'Large, arched traditional windows', value: 'traditional' }
        ]
    },
    {
        id: 2,
        question: "Which material palette feels like 'Home'?",
        options: [
            { id: 'a', text: 'Raw Concrete & Warm Teak', value: 'modern' },
            { id: 'b', text: 'Polished Marble & Gold Accents', value: 'regal' },
            { id: 'c', text: 'Exposed Brick & Matte Steel', value: 'industrial' }
        ]
    },
    {
        id: 3,
        question: "What is the heart of your house?",
        options: [
            { id: 'a', text: 'A floating, sculptural staircase', value: 'modern' },
            { id: 'b', text: 'A grand, double-height lobby', value: 'regal' },
            { id: 'c', text: 'An intimate, lush internal courtyard', value: 'traditional' }
        ]
    }
];

const results = {
    modern: {
        title: "The Modern Minimalist",
        desc: "You value clean lines, honest materials, and seamless indoor-outdoor living.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    regal: {
        title: "The Regal Contemporary",
        desc: "You seek grandeur, symmetry, and timeless luxury that commands respect.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    },
    traditional: {
        title: "The Lush Traditionalist",
        desc: "You prioritize soulful spaces, natural ventilation, and heritage-inspired charm.",
        image: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=800&q=80"
    },
    industrial: {
        title: "The Industrial Visionary",
        desc: "You appreciate bold structural expressions, urban textures, and open-plan freedom.",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    }
};

const StyleMatcher = () => {
    const [step, setStep] = useState(0); // 0: Start, 1-3: Questions, 4: Result
    const [scores, setScores] = useState<Record<string, number>>({});
    const [finalStyle, setFinalStyle] = useState<keyof typeof results | null>(null);

    const handleAnswer = (value: string) => {
        const newScores = { ...scores, [value]: (scores[value] || 0) + 1 };
        setScores(newScores);

        if (step < questions.length) {
            setStep(step + 1);
        } else {
            // Calculate winner
            let winner: keyof typeof results = 'modern';
            let maxScore = -1;
            Object.entries(newScores).forEach(([key, score]) => {
                if (score > maxScore) {
                    maxScore = score;
                    winner = key as keyof typeof results;
                }
            });
            setFinalStyle(winner);
            setStep(questions.length + 1);
        }
    };

    const reset = () => {
        setStep(1);
        setScores({});
        setFinalStyle(null);
    };

    return (
        <section className="py-24 bg-marble relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16">
                        <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Interactive Experience</span>
                        <h2 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight">
                            The <span className="text-gold">Style</span> Matcher
                        </h2>
                    </div>

                    <div className="glass-gold p-8 md:p-16 rounded-[2rem] border-2 border-gold/10 relative min-h-[500px] flex flex-col items-center justify-center overflow-hidden">

                        <AnimatePresence mode="wait">
                            {step === 0 && (
                                <motion.div
                                    key="start"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    className="text-center"
                                >
                                    <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                                        <Sparkles size={40} />
                                    </div>
                                    <h3 className="text-2xl font-black text-foreground uppercase tracking-widest mb-6">Discover Your Architectural DNA</h3>
                                    <p className="text-foreground/60 mb-10 text-lg max-w-md mx-auto leading-relaxed">
                                        Answer 3 visual questions and we will reveal the perfect design philosophy for your future home.
                                    </p>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="btn-gold flex items-center gap-4 px-10 py-5 uppercase tracking-[0.3em] text-xs"
                                    >
                                        Begin Selection
                                        <ArrowRight size={18} />
                                    </button>
                                </motion.div>
                            )}

                            {step > 0 && step <= questions.length && (
                                <motion.div
                                    key={`question-${step}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="w-full"
                                >
                                    <div className="flex justify-between items-center mb-12">
                                        <span className="text-[10px] font-black text-gold uppercase tracking-[0.4em]">Question 0{step} / 03</span>
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className={`h-1 w-8 rounded-full transition-all duration-500 ${step >= i ? 'bg-gold' : 'bg-gold/10'}`} />
                                            ))}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black text-foreground mb-12 uppercase tracking-tight text-center">
                                        {questions[step - 1].question}
                                    </h3>

                                    <div className="grid gap-4">
                                        {questions[step - 1].options.map((opt) => (
                                            <button
                                                key={opt.id}
                                                onClick={() => handleAnswer(opt.value)}
                                                className="group relative p-6 text-left border-2 border-gold/10 rounded-2xl hover:border-gold bg-background hover:bg-gold transition-all duration-300 flex items-center justify-between"
                                            >
                                                <span className="text-foreground group-hover:text-white font-bold uppercase tracking-widest text-sm transition-colors">
                                                    {opt.text}
                                                </span>
                                                <div className="w-8 h-8 rounded-full border border-gold group-hover:bg-white group-hover:border-white flex items-center justify-center transition-all">
                                                    <Check className="scale-0 group-hover:scale-100 text-gold transition-transform" size={16} />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {step > questions.length && finalStyle && (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="w-full text-center"
                                >
                                    <div className="grid md:grid-cols-2 gap-12 items-center">
                                        <div className="relative group overflow-hidden rounded-3xl aspect-[4/5] md:aspect-square">
                                            <img
                                                src={results[finalStyle].image}
                                                alt={results[finalStyle].title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gold/20" />
                                        </div>
                                        <div className="text-left py-4">
                                            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Your Match Is</span>
                                            <h3 className="text-3xl font-black text-foreground uppercase tracking-widest mb-6">{results[finalStyle].title}</h3>
                                            <p className="text-foreground/60 text-lg mb-8 leading-relaxed">
                                                {results[finalStyle].desc}
                                            </p>

                                            <div className="flex flex-col gap-4">
                                                <button
                                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                                    className="btn-gold flex items-center justify-center gap-4 text-xs tracking-[0.3em] py-5"
                                                >
                                                    Build This Style
                                                    <Smartphone size={18} />
                                                </button>
                                                <button
                                                    onClick={reset}
                                                    className="flex items-center justify-center gap-2 text-[10px] font-black text-foreground/40 uppercase tracking-[0.4em] hover:text-gold transition-colors py-2"
                                                >
                                                    <RefreshCw size={12} />
                                                    Re-Discovery
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Background subtle accents */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 blur-3xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/5 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StyleMatcher;
