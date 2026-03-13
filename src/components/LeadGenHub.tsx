'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Ruler, MapPin, User } from 'lucide-react';

const steps = [
    { id: 1, title: 'Plot Size', icon: Ruler },
    { id: 2, title: 'Location', icon: MapPin },
    { id: 3, title: 'Contact', icon: User },
];

const LeadGenHub = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        plotSize: '',
        location: '',
        name: '',
        phone: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [touched, setTouched] = useState({ name: false, phone: false });

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setIsSubmitted(true);
        } catch (err: any) {
            setError(err.message || 'Failed to submit. Please try again or contact us directly.');
            console.error('Submission error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const updateFormData = (field: keyof typeof formData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setError(''); // Clear error whenever any field changes
    };

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden transition-colors duration-500 scroll-mt-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Text Content */}
                    <div>
                        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get a Quote</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tight mb-8">
                            Start Your <span className="text-gold">Home Journey</span> Today
                        </h2>
                        <p className="text-foreground/60 text-lg mb-12 max-w-xl">
                            Tell us a bit about your dream project, and our experts will provide a customized cost estimate and Vastu-compliant plan within 24 hours.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Personalized Consultation",
                                "Detailed Material Specification",
                                "Fixed Pricing Structure",
                                "Free Vastu Plan"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-foreground font-bold uppercase tracking-widest text-sm">
                                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reactive Form */}
                    <div className="relative">
                        <div className="glass p-8 md:p-12 rounded-3xl border-2 border-gold/10 shadow-2xl relative z-10">
                            {isSubmitted ? (
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    variants={{
                                        initial: { opacity: 0 },
                                        animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
                                    }}
                                    className="text-center py-12 relative overflow-hidden"
                                >
                                    {/* Animated Success Icon Container */}
                                    <motion.div
                                        variants={{
                                            initial: { scale: 0, opacity: 0 },
                                            animate: { scale: 1, opacity: 1, transition: { type: 'spring', damping: 12, stiffness: 100 } }
                                        }}
                                        className="relative w-24 h-24 mx-auto mb-8"
                                    >
                                        <div className="absolute inset-0 bg-gold/20 rounded-full animate-ping" />
                                        <div className="relative w-full h-full bg-gold text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                                            <CheckCircle2 size={48} strokeWidth={1.5} />
                                        </div>
                                    </motion.div>

                                    <motion.h3
                                        variants={{
                                            initial: { y: 20, opacity: 0 },
                                            animate: { y: 0, opacity: 1 }
                                        }}
                                        className="text-3xl font-extrabold text-foreground mb-4 uppercase tracking-[0.2em]"
                                    >
                                        Blueprint <span className="text-gold">Acquired</span>
                                    </motion.h3>

                                    <motion.div
                                        variants={{
                                            initial: { y: 20, opacity: 0 },
                                            animate: { y: 0, opacity: 1 }
                                        }}
                                        className="space-y-4 mb-10"
                                    >
                                        <p className="text-foreground/80 text-lg font-medium leading-relaxed max-w-xs mx-auto">
                                            Your blueprint for luxury is being reviewed by our chief architect.
                                        </p>
                                        <div className="h-0.5 w-12 bg-gold/30 mx-auto" />
                                        <p className="text-foreground/50 text-xs font-bold uppercase tracking-widest">
                                            Our concierge will contact you on <br />
                                            <span className="text-foreground font-extrabold">{formData.phone}</span> <br />
                                            within 24 hours.
                                        </p>
                                    </motion.div>

                                    <motion.button
                                        variants={{
                                            initial: { opacity: 0 },
                                            animate: { opacity: 1 }
                                        }}
                                        onClick={() => { setIsSubmitted(false); setCurrentStep(1); setFormData({ plotSize: '', location: '', name: '', phone: '' }) }}
                                        className="text-[10px] text-gold font-extrabold uppercase tracking-[0.5em] hover:opacity-70 transition-opacity flex items-center gap-2 mx-auto"
                                    >
                                        <span className="w-8 h-px bg-gold/30" />
                                        New Journey
                                        <span className="w-8 h-px bg-gold/30" />
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="flex justify-between mb-12 relative">
                                        {/* Centered Line Container */}
                                        <div className="absolute top-[20px] left-[20px] right-[20px] h-0.5 bg-marble-gray/20 z-0">
                                            {/* Progress line */}
                                            <motion.div
                                                className="h-full bg-gold"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                            />
                                        </div>

                                        {steps.map((step) => {
                                            const isCompleted = currentStep > step.id;
                                            const isActive = currentStep === step.id;

                                            return (
                                                <div key={step.id} className="relative z-10 flex flex-col items-center">
                                                    <motion.div
                                                        animate={{
                                                            scale: isActive ? 1.1 : 1,
                                                            backgroundColor: isCompleted || isActive ? 'var(--gold)' : 'var(--background)'
                                                        }}
                                                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 shadow-sm ring-4 ring-background ${isCompleted || isActive
                                                            ? 'border-gold text-white'
                                                            : 'border-marble-gray/50 text-foreground/20'
                                                            }`}
                                                    >
                                                        {isCompleted ? (
                                                            <motion.div
                                                                initial={{ scale: 0, rotate: -45 }}
                                                                animate={{ scale: 1, rotate: 0 }}
                                                            >
                                                                <CheckCircle2 size={18} />
                                                            </motion.div>
                                                        ) : (
                                                            <step.icon size={18} />
                                                        )}
                                                    </motion.div>
                                                    <span className={`text-[10px] uppercase font-extrabold tracking-[0.2em] mt-3 transition-colors duration-500 ${isActive ? 'text-gold' : isCompleted ? 'text-foreground/60' : 'text-foreground/20'
                                                        }`}>
                                                        {step.title}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Form Steps */}
                                    <form onSubmit={handleSubmit} noValidate className="min-h-[300px] flex flex-col justify-between">
                                        <AnimatePresence mode="wait">
                                            {currentStep === 1 && (
                                                <motion.div
                                                    key="step1"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-6"
                                                >
                                                    <h4 className="text-xl font-bold text-foreground uppercase tracking-wide mb-6">Approximate Plot Size</h4>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {['150-200 SQYD', '200-300 SQYD', '300-500 SQYD', '500+ SQYD'].map((size) => (
                                                            <button
                                                                key={size}
                                                                type="button"
                                                                onClick={() => updateFormData('plotSize', size)}
                                                                className={`p-4 rounded-xl border-2 text-sm font-bold transition-all ${formData.plotSize === size
                                                                    ? 'border-gold bg-gold/5 text-gold'
                                                                    : 'border-marble-gray/30 text-foreground/60 hover:border-gold/30'
                                                                    }`}
                                                            >
                                                                {size}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}

                                            {currentStep === 2 && (
                                                <motion.div
                                                    key="step2"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-6"
                                                >
                                                    <h4 className="text-xl font-bold text-foreground uppercase tracking-wide mb-6">Preferred Location</h4>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {['Uppal', 'Ghatkesar', 'Pocharam', 'Other'].map((loc) => (
                                                            <button
                                                                key={loc}
                                                                type="button"
                                                                onClick={() => updateFormData('location', loc)}
                                                                className={`p-4 rounded-xl border-2 text-sm font-bold transition-all ${formData.location === loc
                                                                    ? 'border-gold bg-gold/5 text-gold'
                                                                    : 'border-marble-gray/30 text-foreground/60 hover:border-gold/30'
                                                                    }`}
                                                            >
                                                                {loc}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}

                                            {currentStep === 3 && (
                                                <motion.div
                                                    key="step3"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-6"
                                                >
                                                    <h4 className="text-xl font-bold text-foreground uppercase tracking-wide mb-6">Contact Details</h4>
                                                    <div className="space-y-4">
                                                        <input
                                                            type="text"
                                                            placeholder="Full Name"
                                                            value={formData.name}
                                                            onChange={(e) => updateFormData('name', e.target.value)}
                                                            onBlur={() => setTouched(prev => ({ ...prev, name: true }))}
                                                            className={`w-full p-4 rounded-xl border-2 transition-all font-medium text-foreground bg-background outline-none ${touched.name && !formData.name.trim() ? 'border-red-500 bg-red-50/5' : 'border-marble-gray/30 focus:border-gold'}`}
                                                        />
                                                        <input
                                                            type="tel"
                                                            placeholder="Phone Number (10-digit)"
                                                            value={formData.phone}
                                                            onChange={(e) => updateFormData('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                                                            onBlur={() => setTouched(prev => ({ ...prev, phone: true }))}
                                                            className={`w-full p-4 rounded-xl border-2 transition-all font-medium text-foreground bg-background outline-none ${(touched.phone && formData.phone.length > 0 && formData.phone.length < 10) || (touched.phone && error.includes('phone')) ? 'border-red-500 bg-red-50/5' : 'border-marble-gray/30 focus:border-gold'}`}
                                                        />
                                                        {touched.phone && formData.phone.length > 0 && formData.phone.length < 10 && (
                                                            <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest pl-2">Please enter all 10 digits</p>
                                                        )}
                                                        {error && (
                                                            <motion.p
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                className="text-red-500 text-[10px] font-bold uppercase tracking-widest pl-2"
                                                            >
                                                                {error}
                                                            </motion.p>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Navigation Buttons */}
                                        <div className="flex gap-4 mt-12">
                                            {currentStep > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={prevStep}
                                                    className="flex-1 p-4 rounded-xl border-2 border-foreground/10 text-foreground font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-foreground/5 transition-all"
                                                >
                                                    <ArrowLeft size={16} />
                                                    Back
                                                </button>
                                            )}

                                            {currentStep < 3 ? (
                                                <button
                                                    type="button"
                                                    onClick={nextStep}
                                                    disabled={currentStep === 1 && !formData.plotSize || currentStep === 2 && !formData.location}
                                                    className="flex-1 p-4 rounded-xl btn-gold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    Continue
                                                    <ArrowRight size={16} />
                                                </button>
                                            ) : (
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting || !formData.name.trim() || formData.phone.length < 10}
                                                    className="flex-1 p-4 rounded-xl btn-gold text-xs uppercase tracking-[0.2em] shadow-xl shadow-gold/30 flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed disabled:grayscale"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                            Processing...
                                                        </>
                                                    ) : (
                                                        'Get Your Quote'
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>

                        {/* Background Accent */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold blur-[80px] opacity-20" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-foreground blur-[80px] opacity-10" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LeadGenHub;
