"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import {usePathname} from "next/navigation";

interface MobileNavProps {
    items: { name: string; href: string }[];
    onItemClick: (href: string) => void;
}

export default function MobileNav({items, onItemClick}: MobileNavProps) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const handleItemClick = (href: string) => {
        onItemClick(href);
        setOpen(false);
    };

    return (
        <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                    >
                        <Menu className="w-6 h-6"/>
                    </Button>
                </SheetTrigger>

                <SheetContent
                    side="right"
                    className="w-72 bg-[var(--bg-primary)] border-l border-[var(--border)] p-0"
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
              <span
                  className="text-xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                Menu
              </span>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setOpen(false)}
                                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                            >
                                <X className="w-5 h-5"/>
                            </Button>
                        </div>

                        <nav className="flex-1 p-6">
                            <AnimatePresence>
                                {items.map((item, index) => (
                                    <motion.button
                                        key={item.name}
                                        initial={{opacity: 0, x: 20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{delay: index * 0.05}}
                                        onClick={() => handleItemClick(item.href)}
                                        className={`w-full text-left py-3 px-4 mb-2 rounded-lg text-base font-medium transition-all ${
                                            pathname === item.href
                                                ? "text-[var(--accent-primary)] bg-[var(--accent-primary)]/10"
                                                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                                        }`}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}
                            </AnimatePresence>
                        </nav>

                        <div className="p-6 border-t border-[var(--border)]">
                            <p className="text-sm text-[var(--text-secondary)] text-center">
                                Connect with me
                            </p>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
