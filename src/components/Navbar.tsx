import React from 'react'
import {NavigationMenu, NavigationMenuItem,} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {


    const navElements = [
        {
            name: "Home", slug: "/"
        },
        {
            name: "Skills", slug: "/skills"
        },
        {
            name: "Experiences", slug: "/experiences"
        },
        {
            name: "Projects", slug: "/projects"
        },
        {
            name: "Education", slug: "/education"
        },
        {
            name: "Contact Me", slug: "/contact"
        },
    ];


    return (
        <nav className="w-full bg-gradient-to-r from-green-600 to-green-700 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Brand */}
                <Link href="/">
                    <div className="text-2xl font-bold text-white">
                        Rakesh Ghosh
                    </div>
                </Link>

                {/* Navigation Menu */}
                <NavigationMenu viewport={false} className="list-none">
                    <div className="flex space-x-8">
                        {navElements.map((navElement) => (
                            <NavigationMenuItem key={navElement.slug}>
                                <Link
                                    href={navElement.slug}
                                    className="text-white/90 hover:text-gray-300 hover:underline transition-colors font-medium"
                                >
                                    {navElement.name}
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </div>
                </NavigationMenu>
            </div>
        </nav>
    )
}

export default Navbar;