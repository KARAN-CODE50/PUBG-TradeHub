"use client"
import Footer from "../(home)/Footer";
import Navbar from "../(home)/navbar";
import { Bebas_Neue, Manrope } from "next/font/google";

const bebas_neue = Bebas_Neue({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-bebas-neue'
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: '--font-manrope'
});

export default function TermsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={` bg-primary text-white ${manrope.variable} ${bebas_neue.variable}`}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}