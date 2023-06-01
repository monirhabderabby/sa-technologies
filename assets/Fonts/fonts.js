import { Barlow, Inter, Lato } from "next/font/google";

export const inter = Inter({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const lato = Lato({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lato",
});

export const barlow = Barlow({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-barlow",
});
