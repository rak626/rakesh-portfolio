"use client";

import {motion} from "framer-motion";
import {Calendar, Clock, ArrowRight, PenLine} from "lucide-react";
import {blogPosts} from "@/datas/data";

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function BlogCard({
                      post,
                      index,
                  }: {
    post: (typeof blogPosts)[0];
    index: number;
}) {
    return (
        <motion.article
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: index * 0.1}}
            whileHover={{y: -5}}
            className="group cursor-pointer"
        >
            <div
                className="h-full rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent-primary)]/50 transition-all overflow-hidden">
                <div
                    className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <PenLine className="w-16 h-16 text-[var(--accent-primary)]/30"/>
                    </div>
                    <div className="absolute top-4 left-4">
            <span
                className="px-3 py-1 rounded-full bg-[var(--bg-primary)]/80 backdrop-blur-sm text-[var(--accent-primary)] text-xs font-medium">
              {post.category}
            </span>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4"/>
                {formatDate(post.date)}
            </span>
                        <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4"/>
                            {post.readingTime}
            </span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                        {post.title}
                    </h3>

                    <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                    </p>

                    <span
                        className="inline-flex items-center gap-2 text-[var(--accent-primary)] font-medium text-sm group-hover:gap-3 transition-all">
            Read More
            <ArrowRight className="w-4 h-4"/>
          </span>
                </div>
            </div>
        </motion.article>
    );
}

export default function Blog() {
    return (
        <section id="blog" className="relative py-24 lg:py-32 bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
          <span className="text-[var(--accent-primary)] font-medium mb-2 block">
            Thoughts & Insights
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                        Blog
                    </h2>
                    <div
                        className="mt-4 w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"/>
                    <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Sharing my experiences, learnings, and thoughts on software development,
                        system design, and technology.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index}/>
                    ))}
                </div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mt-16 text-center"
                >
                    <p className="text-[var(--text-secondary)] mb-4">
                        More articles coming soon! Stay tuned.
                    </p>
                    <motion.a
                        href="https://github.com/rak626"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] font-medium hover:border-[var(--accent-primary)] transition-colors"
                    >
                        Follow me on GitHub for updates
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
