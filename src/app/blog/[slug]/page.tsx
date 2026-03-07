import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import BlogPostContent from '@/components/BlogPostContent';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found | Abhiram Constructions',
        };
    }

    return {
        title: `${post.title} | Abhiram Constructions Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
            type: 'article',
            authors: [post.author],
            publishedTime: post.date,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts
        .filter(p => p.slug !== slug)
        .slice(0, 2);

    return <BlogPostContent post={post} relatedPosts={relatedPosts} />;
}
