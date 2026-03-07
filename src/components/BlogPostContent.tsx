'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Linkedin, Pointer as Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/data/blog-posts';

interface BlogPostContentProps {
    post: BlogPost;
    relatedPosts: BlogPost[];
}

export default function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
    return (
        <article className="bg-marble min-h-screen">
            {/* Progress Bar (Visual Only) */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gold/10 z-50">
                <motion.div
                    className="h-full bg-gold"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                />
            </div>

            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-6">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-white/70 hover:text-gold transition-colors font-bold uppercase tracking-widest text-[10px] mb-8"
                        >
                            <ArrowLeft size={14} /> Back to Hub
                        </Link>

                        <div className="max-w-4xl">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="px-4 py-1.5 bg-gold text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg mb-6 inline-block"
                            >
                                {post.category}
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight leading-tight mb-8"
                            >
                                {post.title}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap items-center gap-6 text-[10px] md:text-xs text-white/70 font-bold uppercase tracking-[0.2em]"
                            >
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-gold" />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={14} className="text-gold" />
                                    BY {post.author}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={14} className="text-gold" />
                                    {post.readingTime}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 -mt-20 relative z-10 pb-24">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex-1 bg-white rounded-[2rem] p-8 md:p-14 shadow-2xl"
                    >
                        <div className="max-w-none">
                            {post.content.split('\n\n').map((paragraph, idx) => {
                                if (paragraph.trim().startsWith('###')) {
                                    return <h2 key={idx} className="text-xl font-bold text-charcoal tracking-tight mt-10 mb-5 border-l-4 border-gold pl-5">{paragraph.replace('### ', '')}</h2>;
                                }
                                if (paragraph.trim().startsWith('-')) {
                                    return (
                                        <ul key={idx} className="space-y-3 my-6">
                                            {paragraph.trim().split('\n').map((item, i) => (
                                                <li key={i} className="flex items-start gap-4 text-charcoal/80 text-base leading-relaxed font-normal">
                                                    <div className="w-1.5 h-1.5 bg-gold mt-2 rounded-full flex-shrink-0" />
                                                    {item.replace('- ', '')}
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                }
                                if (paragraph.trim().startsWith('1.')) {
                                    return (
                                        <ol key={idx} className="space-y-3 my-6">
                                            {paragraph.trim().split('\n').map((item, i) => (
                                                <li key={i} className="flex items-start gap-4 text-charcoal/80 text-base leading-relaxed font-normal">
                                                    <span className="text-gold font-bold">{i + 1}.</span>
                                                    {item.replace(/^\d+\.\s*/, '')}
                                                </li>
                                            ))}
                                        </ol>
                                    );
                                }
                                return (
                                    <p key={idx} className="text-charcoal/80 text-base leading-relaxed mb-6 font-normal">
                                        {paragraph.trim()}
                                    </p>
                                );
                            })}
                        </div>

                        {/* Social Share */}
                        <div className="mt-20 pt-10 border-t border-marble-gray/20 flex flex-col md:flex-row items-center justify-between gap-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/30">Share this Article</h4>
                            <div className="flex gap-4">
                                {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                                    <button
                                        key={i}
                                        className="w-12 h-12 rounded-full border border-marble-gray/20 flex items-center justify-center text-charcoal/40 hover:text-gold hover:border-gold transition-all duration-300"
                                    >
                                        <Icon size={20} />
                                    </button>
                                ))}
                                <button className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center shadow-lg hover:shadow-gold/40 transition-all duration-300">
                                    <Share2 size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-96 space-y-12">
                        {/* CTA Card */}
                        <div className="bg-charcoal rounded-[2rem] p-10 text-white relative overflow-hidden shadow-2xl group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-gold/20 transition-all" />
                            <h4 className="text-xl font-bold uppercase tracking-tight mb-4 relative z-10">
                                Ready to build your <span className="text-gold">dream home?</span>
                            </h4>
                            <p className="text-white/60 text-sm mb-8 relative z-10">
                                Let Abhiram Constructions guide you with expert advice and premium craftsmanship.
                            </p>
                            <button className="btn-gold w-full flex items-center justify-center gap-2 relative z-10">
                                Get Free Quote <ArrowLeft size={16} className="rotate-180" />
                            </button>
                        </div>

                        {/* Related Posts */}
                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/30 px-2">Related Articles</h4>
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.id}
                                    href={`/blog/${related.slug}`}
                                    className="group flex gap-4 bg-white p-4 rounded-2xl shadow-lg border border-transparent hover:border-gold transition-all"
                                >
                                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                        <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex flex-col justify-center gap-1">
                                        <span className="text-[8px] font-black uppercase tracking-widest text-gold">{related.category}</span>
                                        <h5 className="text-sm font-bold text-charcoal leading-tight group-hover:text-gold transition-colors">{related.title}</h5>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
