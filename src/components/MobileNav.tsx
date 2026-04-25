"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";

interface MobileNavProps {
  items: { name: string; href: string }[];
  onItemClick: (href: string) => void;
}

export default function MobileNav({ items, onItemClick }: MobileNavProps) {
  const [open, setOpen] = useState(false);

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
            className="text-text-primary hover:bg-bg-secondary border-2 border-text-primary w-10 h-10 rounded-none"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-full sm:w-80 bg-bg-primary border-l-4 border-accent-primary p-0 flex flex-col"
        >
          <div className="flex items-center justify-between p-8 border-b border-border/50">
            <div className="flex flex-col">
              <SheetTitle className="text-2xl font-black uppercase tracking-tighter text-text-primary">
                Navigation
              </SheetTitle>
              <span className="font-mono text-[10px] text-accent-primary font-bold uppercase tracking-widest">
                {"// System Access"}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="text-text-secondary hover:text-text-primary border border-border w-10 h-10 rounded-none"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <nav className="flex-1 p-8 space-y-4">
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleItemClick(item.href)}
                  className="w-full text-left group"
                >
                  <div className="flex items-center justify-between py-4 border-b border-border/30 group-hover:border-accent-primary transition-colors">
                    <span className="font-black text-2xl uppercase tracking-tighter text-text-secondary group-hover:text-text-primary transition-colors">
                      {item.name}
                    </span>
                    <Terminal className="w-4 h-4 text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </nav>

          <div className="p-8 border-t border-border/50 bg-bg-secondary/30">
            <div className="flex flex-col gap-2 font-mono text-[10px] font-bold text-text-secondary uppercase">
              <span>Status: Authorized</span>
              <span>Node: Mobile_Gateway_v2</span>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
