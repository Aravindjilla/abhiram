'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Home, Building2, Paintbrush, Plus } from 'lucide-react';
import Image from 'next/image';

const categories = [
    { id: 'all', name: 'All Projects', icon: Plus },
    { id: 'houses', name: 'Independent Houses', icon: Home },
    { id: 'apartments', name: 'Apartments', icon: Building2 },
    { id: 'interiors', name: 'Interiors', icon: Paintbrush },
];

const projects = [
    {
        id: 1,
        title: "Luxury Duplex in Uppal",
        category: "houses",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        gridArea: "md:col-span-2 md:row-span-2",
    },
    {
        id: 2,
        title: "Modern Apartment Complex",
        category: "apartments",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        gridArea: "md:col-span-1 md:row-span-1",
    },
    {
        id: 3,
        title: "Minimalist Living Room",
        category: "interiors",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
        gridArea: "md:col-span-1 md:row-span-1",
    },
    {
        id: 4,
        title: "Premium Villa in Ghatkesar",
        category: "houses",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
        gridArea: "md:col-span-1 md:row-span-2",
    },
    {
        id: 5,
        title: "Executive Office Interior",
        category: "interiors",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        gridArea: "md:col-span-1 md:row-span-1",
    },
    {
        id: 6,
        title: "Skyline Penthouse",
        category: "apartments",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        gridArea: "md:col-span-1 md:row-span-1",
    },
];

const PortfolioCard = ({ project }: { project: typeof projects[0] }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative group overflow-hidden rounded-2xl cursor-pointer bg-marble-gray/10 shadow-lg hover:shadow-2xl hover:shadow-gold/10 transition-shadow duration-500 ${project.gridArea}`}
        >
            <div
                className="absolute inset-0 z-0"
                style={{ transform: "translateZ(-20px) scale(1.1)" }}
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority={project.id === 1}
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />

            {/* Content */}
            <div
                className="absolute inset-0 p-8 flex flex-col justify-end transform transition-all duration-500 z-20"
                style={{ transform: "translateZ(50px)" }}
            >
                <span className="text-gold text-[10px] uppercase font-black tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {categories.find(c => c.id === project.category)?.name}
                </span>
                <h3 className="text-white text-xl font-bold uppercase tracking-wide leading-tight group-hover:text-gold transition-all duration-500 transform group-hover:-translate-y-1">
                    {project.title}
                </h3>

                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    className="overflow-hidden"
                >
                    <p className="text-white/60 text-sm mt-4 line-clamp-2 font-medium">
                        Built with precision and luxury. Every detail crafted to perfection by Abhiram Constructions.
                    </p>
                </motion.div>
            </div>

            {/* Hover Border Accent */}
            <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/40 rounded-2xl transition-all duration-500 pointer-events-none z-30" />

            {/* Glassmorphism Reflection */}
            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 z-15" />
        </motion.div>
    );
};

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 text-center md:text-left">
                    <div>
                        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Portfolio</span>
                        <h2 className="text-3xl md:text-5xl font-black text-charcoal uppercase tracking-tight">
                            Selected <span className="text-gold">Masterpieces</span>
                        </h2>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat.id
                                    ? 'bg-gold text-white border-gold shadow-lg shadow-gold/20'
                                    : 'text-charcoal/60 border-marble-gray/50 hover:border-gold hover:text-gold'
                                    }`}
                            >
                                <cat.icon size={14} />
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bento Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] grid-flow-row-dense"
                    style={{ perspective: "1000px" }}
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project) => (
                            <PortfolioCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All CTA */}
                <div className="mt-16 text-center">
                    <button className="text-charcoal font-black uppercase tracking-[0.3em] text-sm hover:text-gold transition-colors flex items-center gap-2 mx-auto group">
                        Discover More Projects
                        <div className="w-10 h-px bg-gold group-hover:w-16 transition-all duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
