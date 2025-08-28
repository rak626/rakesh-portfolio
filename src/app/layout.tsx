import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";

const geistSans = Geist({
    variable: "--font-geist-sans", subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono", subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Rakesh's Portfolio", description: "Developed By Rakesh Ghosh",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>);
}
