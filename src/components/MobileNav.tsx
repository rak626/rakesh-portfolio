"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {navElements} from "@/datas/data";
import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {LucideMenu} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import {DialogTitle} from "@radix-ui/react-dialog";

interface MobileNavProps {
    mobileOpen: boolean;
    setMobileOpen: (open: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({mobileOpen, setMobileOpen}) => {
    const pathname = usePathname();

    return (
        <div className={`lg:hidden`}>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                {/* Hamburger Button */}
                <SheetTrigger asChild>
                    <Button variant="ghost" className="text-white p-0">
                        <LucideMenu className="w-6 h-6"/>
                    </Button>
                </SheetTrigger>

                {/* Mobile Drawer */}
                <SheetContent side="right" className="w-64 md:w-72 bg-green-700 p-6" aria-label="Mobile Navigation">
                    <DialogTitle>
                        <VisuallyHidden>Close Menu</VisuallyHidden>
                    </DialogTitle>
                    <SheetClose onClick={() => setMobileOpen(false)}>
                        <div className="flex flex-col space-y-4 mt-6">
                            <AnimatePresence>
                                {navElements.map((nav) => {
                                    const isActive = pathname === nav.slug;
                                    return (
                                        <motion.div
                                            key={nav.slug}
                                            initial={{x: -50, opacity: 0}}
                                            animate={{x: 0, opacity: 1}}
                                            exit={{x: -50, opacity: 0}}
                                            transition={{type: "spring", stiffness: 300, damping: 20}}
                                        >
                                            <SheetClose asChild onClick={() => setMobileOpen(false)}>
                                                <Link
                                                    href={nav.slug}
                                                    className={`text-white/90 text-lg font-medium transition-colors ${
                                                        isActive
                                                            ? "text-yellow-300 underline"
                                                            : "hover:text-gray-300 hover:underline"
                                                    }`}
                                                >
                                                    {nav.name}
                                                </Link>
                                            </SheetClose>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    </SheetClose>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;
