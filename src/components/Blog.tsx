"use client";

import {motion} from "framer-motion";
import {blogPosts} from "@/datas/data";
import {Clock, Tag} from "lucide-react";
import Link from "next/link";

function BlogCard({
                      post,
                      index,
                  }: {
    post: (typeof blogPosts)[0];
    index: number;
}) {
    return (
        <motion.article
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: index * 0.1}}
            className="group"
        >
            <Link href={`/blog/${post.slug}`} className="block">
                <div className="p-5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded hover:border-[var(--accent-primary)] transition-all">
                    <div className="flex items-center gap-2 mb-3 text-xs text-[var(--text-secondary)]">
                        <span className="text-[var(--accent-secondary)]">#</span>
                        <span>{post.slug}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                        {post.title}
                    </h3>

                    <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                            <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readingTime}
                            </span>
                            <span className="flex items-center gap-1">
                                <Tag className="w-3 h-3" />
                                {post.category}
                            </span>
                        </div>

                        <span className="text-[var(--accent-primary)]">
                            cat {post.slug}.md
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}

export default function Blog() {
    return (
        <section id="blog" className="relative py-24 lg:py-32 bg-[var(--bg-primary)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[var(--accent-primary)]">$</span>
                        <span className="text-[var(--text-secondary)]">ls ./blog</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] neon-text">
                        Blog Posts
                    </h2>
                    <div className="mt-2 text-xs text-[var(--text-secondary)]">
                        {blogPosts.length} posts found
                    </div>
                </motion.div>

                <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded mb-8">
                    <div className="text-xs text-[var(--text-secondary)] mb-2">
                        <span className="text-[var(--accent-secondary)]">#</span> recent_posts.json
                    </div>
                    <pre className="text-xs overflow-x-auto">
                        <span className="text-[var(--accent-secondary)]">[</span>
                        {"\n"}
                        {blogPosts.map((post, index) => (
                            <motion.span
                                key={post.slug}
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1}}
                                className="block pl-4"
                            >
                                <span className="text-[var(--neon-cyan)]">&quot;{post.title}&quot;</span>
                                <span className="text-[var(--text-secondary)]"> - </span>
                                <span className="text-[var(--neon-green)]">&quot;{post.category}&quot;</span>
                                {index < blogPosts.length - 1 && (
                                    <span className="text-[var(--text-secondary)]">,</span>
                                )}
                            </motion.span>
                        ))}
                        {"\n"}
                        <span className="text-[var(--accent-secondary)]">]</span>
                    </pre>
                </div>

                <div className="space-y-4">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mt-12 p-4 bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/30 rounded text-center"
                >
                    <div className="text-xs text-[var(--accent-primary)] mb-2">
                        <span className="text-[var(--accent-secondary)]">$</span> More posts coming soon...
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Stay tuned for more technical articles on{" "}
                        <span className="text-[var(--accent-primary)]">microservices</span>,{" "}
                        <span className="text-[var(--accent-primary)]">Spring Boot</span>, and{" "}
                        <span className="text-[var(--accent-primary)]">distributed systems</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}