import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {ThemeProvider} from "@/contexts/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import FuturisticBackground from "@/components/ui/FuturisticBackground";
import React from "react";

const geistSans = Geist({
    variable: "--font-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Rakesh Ghosh | Software Engineer",
    description: "Software Engineer with 4+ years of experience building scalable payment systems and microservices. Specializing in Java, Spring Boot, and distributed systems.",
    keywords: ["Software Engineer", "Java Developer", "Spring Boot", "Backend Developer", "Kolkata"],
    authors: [{name: "Rakesh Ghosh"}],
    icons: {
        icon: "/favicon.svg",
    },
    openGraph: {
        title: "Rakesh Ghosh | Software Engineer",
        description: "Software Engineer with 4+ years of experience building scalable payment systems and microservices.",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ThemeProvider>
            <CustomCursor/>
            <FuturisticBackground />
            {children}
            <Analytics/>
            <SpeedInsights/>
        </ThemeProvider>
        </body>
        </html>);
}
