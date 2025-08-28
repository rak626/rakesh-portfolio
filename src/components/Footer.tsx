import React from "react";
import Link from "next/link";
import {personalInfo} from "@/datas/data";

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0">

                {/* Left: Brand / Copyright */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold">Rakesh Ghosh</h2>
                    <p className="text-sm text-white/70 mt-2">
                        © {new Date().getFullYear()} Rakesh Ghosh. All rights reserved.
                    </p>
                </div>

                {/* Center: Quick Links */}
                <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-6 text-sm">
                    <Link href="/about" className="hover:underline">
                        About
                    </Link>
                    <Link href="/projects" className="hover:underline">
                        Projects
                    </Link>
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                </div>

                {/* Right: Socials */}
                <div className="flex gap-5 justify-center md:justify-end">
                    <a
                        href={personalInfo.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-300 transition-colors"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path
                                d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.22 1.8 1.22 1.04 1.8 2.72 1.28 3.38.98.11-.75.41-1.28.74-1.57-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.51.11-3.14 0 0 .97-.31 3.19 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.19-1.19 3.19-1.19.63 1.63.23 2.84.11 3.14.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.25 5.7.42.37.79 1.1.79 2.22 0 1.61-.01 2.91-.01 3.31 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z"
                            />
                        </svg>
                    </a>
                    <a
                        href={personalInfo.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-300 transition-colors"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path
                                d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.119 20.452H3.568V9h3.551v11.452zM5.343 7.433c-1.136 0-2.057-.921-2.057-2.057s.921-2.057 2.057-2.057c1.137 0 2.058.921 2.058 2.057s-.921 2.057-2.058 2.057zM20.452 20.452h-3.55v-5.604c0-1.336-.027-3.055-1.861-3.055-1.862 0-2.148 1.454-2.148 2.955v5.704h-3.551V9h3.411v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.605 0 4.27 2.373 4.27 5.456v6.285z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
