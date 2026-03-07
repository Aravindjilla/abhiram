'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts as posts } from '@/data/blog-posts';

export default function BlogListing() {
    return (
        <main className="min-h-screen bg-marble pt-32 pb-24">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Knowledge Hub</span>
                    <h1 className="text-4xl md:text-6xl font-black text-charcoal uppercase tracking-tight mb-6">
                        Building <span className="text-gold">Insights</span>
                    </h1 >
                    <p className="text-charcoal/60 text-lg font-medium leading-relaxed">
                        Stay updated with the latest trends in construction, Vastu shastra, and home design delivered by our expert team.
                    </p>
                </div>

                {/* Search & Filter - Simplified for now */}
                <div className="flex flex-col md:flex-row gap-6 mb-12">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30" size={20} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full pl-12 pr-4 py-4 bg-white border border-marble-gray/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all shadow-sm text-charcoal"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                        {['All', 'Vastu', 'Guides', 'Expertise'].map((cat) => (
                            <button key={cat} className={`px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] whitespace-nowrap transition-all shadow-sm ${cat === 'All' ? 'bg-gold text-white' : 'bg-white text-charcoal border border-marble-gray/20 hover:border-gold'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post, i) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-1.5 bg-gold text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1 space-y-4">
                                    <div className="flex items-center gap-4 text-[10px] text-charcoal/40 font-bold uppercase tracking-widest">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={12} className="text-gold" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={12} className="text-gold" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-charcoal group-hover:text-gold transition-colors leading-tight uppercase tracking-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-charcoal/60 text-sm leading-relaxed line-clamp-3 font-medium flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="pt-4 flex items-center justify-between border-t border-marble-gray/10">
                                        <div className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-[10px]">
                                            Read Full Article
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                        <span className="text-[10px] text-charcoal/30 font-bold uppercase tracking-widest">
                                            {post.readingTime}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </main>
    );
}
