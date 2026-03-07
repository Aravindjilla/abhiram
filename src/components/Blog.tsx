'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { blogPosts as posts } from '@/data/blog-posts';

const Blog = () => {
    return (
        <section id="blog" className="py-24 bg-marble relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="text-center md:text-left">
                        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Knowledge Hub</span>
                        <h2 className="text-3xl md:text-5xl font-black text-charcoal uppercase tracking-tight">
                            Building <span className="text-gold">Insights</span>
                        </h2>
                    </div>
                    <Link href="/blog" className="hidden md:flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs hover:underline">
                        View All Articles <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.slice(0, 3).map((post, i) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-xl">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 bg-white text-charcoal text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4">
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

                                    <h3 className="text-xl font-bold text-charcoal group-hover:text-gold transition-colors leading-tight uppercase tracking-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-charcoal/60 text-sm leading-relaxed line-clamp-2 font-medium">
                                        {post.excerpt}
                                    </p>

                                    <div className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-[10px] group/link">
                                        Read Article
                                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                <Link href="/blog" className="md:hidden block w-full mt-12 py-4 border-2 border-gold/20 text-gold font-bold uppercase tracking-widest text-xs rounded-xl text-center">
                    View All Articles
                </Link>
            </div>
        </section>
    );
};

export default Blog;
