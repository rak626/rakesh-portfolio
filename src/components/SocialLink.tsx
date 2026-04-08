import {motion} from "framer-motion";

export default function SocialLink({
                                       href,
                                       icon: Icon,
                                       label,
                                   }: {
    href?: string;
    icon: React.ElementType;
    label: string;
}) {
    if (!href) return null;

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{scale: 1.02, x: 4}}
            whileTap={{scale: 0.98}}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-all group"
        >
            <div
                className="p-2 rounded-lg bg-[var(--accent-primary)]/10 group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                <Icon className="w-5 h-5 text-[var(--accent-primary)]"/>
            </div>
            <span className="text-[var(--text-primary)] font-medium">{label}</span>
        </motion.a>
    );
}