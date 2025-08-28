"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navElements } from "@/datas/data";
import { motion } from "framer-motion";
import { NavigationMenu, NavigationMenuItem } from "@/components/ui/navigation-menu";
import MobileNav from "./MobileNav";

const Navbar = () => {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="w-full bg-gradient-to-r from-green-600 to-green-700 shadow-md fixed z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Brand */}
                <Link href="/">
                    <motion.div
                        className="text-2xl font-bold text-white cursor-pointer"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Rakesh Ghosh
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-8">
                    <NavigationMenu className="list-none flex space-x-8">
                        {navElements.map((nav) => {
                            const isActive = pathname === nav.slug;
                            return (
                                <NavigationMenuItem key={nav.slug}>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Link
                                            href={nav.slug}
                                            className={`text-white/90 font-medium transition-colors ${
                                                isActive ? "text-yellow-300 underline" : "hover:text-gray-300 hover:underline"
                                            }`}
                                        >
                                            {nav.name}
                                        </Link>
                                    </motion.div>
                                </NavigationMenuItem>
                            );
                        })}
                    </NavigationMenu>
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden">
                    <MobileNav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
