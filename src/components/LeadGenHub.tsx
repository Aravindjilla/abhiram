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

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic Indian Phone Validation (10 digits)
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(formData.phone)) {
            setError('Please enter a valid 10-digit phone number.');
            return;
        }

        setError('');
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const updateFormData = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (field === 'phone') setError('');
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Text Content */}
                    <div>
                        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get a Quote</span>
                        <h2 className="text-3xl md:text-5xl font-black text-charcoal uppercase tracking-tight mb-8">
                            Start Your <span className="text-gold">Home Journey</span> Today
                        </h2>
                        <p className="text-charcoal/60 text-lg mb-12 max-w-xl">
                            Tell us a bit about your dream project, and our experts will provide a customized cost estimate and Vastu-compliant plan within 24 hours.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Personalized Consultation",
                                "Detailed Material Specification",
                                "Fixed Pricing Structure",
                                "Free Vastu Plan"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-charcoal font-bold uppercase tracking-widest text-sm">
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
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-charcoal mb-4 uppercase tracking-wider">Request Received!</h3>
                                    <p className="text-charcoal/60 mb-8 max-w-xs mx-auto">
                                        Thank you {formData.name}! Our team will contact you shortly on {formData.phone} with your quote.
                                    </p>
                                    <button
                                        onClick={() => { setIsSubmitted(false); setCurrentStep(1); setFormData({ plotSize: '', location: '', name: '', phone: '' }) }}
                                        className="text-gold font-bold uppercase tracking-widest text-sm hover:underline"
                                    >
                                        Send Another Request
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    {/* Progress Header */}
                                    <div className="flex justify-between mb-12 relative">
                                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-marble-gray/30 -translate-y-1/2 z-0" />
                                        <div
                                            className="absolute top-1/2 left-0 h-0.5 bg-gold transition-all duration-500 -translate-y-1/2 z-0"
                                            style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                                        />

                                        {steps.map((step) => (
                                            <div key={step.id} className="relative z-10 flex flex-col items-center">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${currentStep >= step.id ? 'bg-gold border-gold text-white' : 'bg-white border-marble-gray/50 text-charcoal/30'
                                                    }`}>
                                                    <step.icon size={18} />
                                                </div>
                                                <span className={`text-[10px] uppercase font-bold tracking-widest mt-2 ${currentStep >= step.id ? 'text-gold' : 'text-charcoal/30'
                                                    }`}>
                                                    {step.title}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Form Steps */}
                                    <form onSubmit={handleSubmit} className="min-h-[300px] flex flex-col justify-between">
                                        <AnimatePresence mode="wait">
                                            {currentStep === 1 && (
                                                <motion.div
                                                    key="step1"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-6"
                                                >
                                                    <h4 className="text-xl font-bold text-charcoal uppercase tracking-wide mb-6">Approximate Plot Size</h4>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {['150-200 SQYD', '200-300 SQYD', '300-500 SQYD', '500+ SQYD'].map((size) => (
                                                            <button
                                                                key={size}
                                                                type="button"
                                                                onClick={() => updateFormData('plotSize', size)}
                                                                className={`p-4 rounded-xl border-2 text-sm font-bold transition-all ${formData.plotSize === size
                                                                    ? 'border-gold bg-gold/5 text-gold'
                                                                    : 'border-marble-gray/30 text-charcoal/60 hover:border-gold/30'
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
                                                    <h4 className="text-xl font-bold text-charcoal uppercase tracking-wide mb-6">Preferred Location</h4>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {['Uppal', 'Ghatkesar', 'Pocharam', 'Other'].map((loc) => (
                                                            <button
                                                                key={loc}
                                                                type="button"
                                                                onClick={() => updateFormData('location', loc)}
                                                                className={`p-4 rounded-xl border-2 text-sm font-bold transition-all ${formData.location === loc
                                                                    ? 'border-gold bg-gold/5 text-gold'
                                                                    : 'border-marble-gray/30 text-charcoal/60 hover:border-gold/30'
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
                                                    <h4 className="text-xl font-bold text-charcoal uppercase tracking-wide mb-6">Contact Details</h4>
                                                    <div className="space-y-4">
                                                        <input
                                                            required
                                                            type="text"
                                                            placeholder="Full Name"
                                                            value={formData.name}
                                                            onChange={(e) => updateFormData('name', e.target.value)}
                                                            className="w-full p-4 rounded-xl border-2 border-marble-gray/30 focus:border-gold outline-none transition-all font-medium text-charcoal"
                                                        />
                                                        <input
                                                            required
                                                            type="tel"
                                                            placeholder="Phone Number (10-digit)"
                                                            value={formData.phone}
                                                            onChange={(e) => updateFormData('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                                                            className={`w-full p-4 rounded-xl border-2 transition-all font-medium text-charcoal outline-none ${error ? 'border-red-500 bg-red-50' : 'border-marble-gray/30 focus:border-gold'}`}
                                                        />
                                                        {error && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{error}</p>}
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
                                                    className="flex-1 p-4 rounded-xl border-2 border-charcoal/10 text-charcoal font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-charcoal/5 transition-all"
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
                                                    disabled={isSubmitting}
                                                    className="flex-1 p-4 rounded-xl btn-gold text-xs uppercase tracking-[0.2em] shadow-xl shadow-gold/30 flex items-center justify-center gap-2 disabled:opacity-70"
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
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-charcoal blur-[80px] opacity-10" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LeadGenHub;
