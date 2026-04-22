import type {Metadata} from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {ThemeProvider} from "@/contexts/ThemeProvider";
import React from "react";

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Rakesh Ghosh | Terminal Portfolio",
    description: "Software Engineer with 4+ years of experience building scalable payment systems and microservices. Specializing in Java, Spring Boot, and distributed systems.",
    keywords: ["Software Engineer", "Java Developer", "Spring Boot", "Backend Developer", "Kolkata"],
    authors: [{name: "Rakesh Ghosh"}],
    icons: {
        icon: "/favicon.svg",
    },
    openGraph: {
        title: "Rakesh Ghosh | Terminal Portfolio",
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
            className={`${jetbrainsMono.variable} antialiased`}
        >
        <ThemeProvider>
            {children}
            <Analytics/>
            <SpeedInsights/>
        </ThemeProvider>
        </body>
        </html>);
}
