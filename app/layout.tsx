import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "No-code Prototype af ConTech Lab",
    description: "No-code Prototype af ConTech Lab",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="da">
            <head>
                {/* Description no longer than 155 characters */}
                <meta
                    name="description"
                    content="No-Code Prototype af ConTech Lab"
                />
                {/* Product Name */}
                <meta
                    name="product-name"
                    content="No-Code Prototype af ConTech Lab"
                />

                {/* Twitter Card data */}
                <meta
                    name="twitter:title"
                    content="No-Code Prototype af ConTech Lab"
                />
                <meta
                    name="twitter:description"
                    content="No-Code Prototype af ConTech Lab"
                />
                <meta name="twitter:creator" content="@ui8" />
                {/* Twitter Summary card images must be at least 120x120px */}


                {/* Open Graph data for Facebook */}
                <meta
                    property="og:title"
                    content="No-Code Prototype af ConTech Lab"
                />
                <meta property="og:type" content="Article" />
                <meta
                    property="og:url"
                    content="https://contechlab.nocodeprototype.com"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/fb-og-image.png"
                />
                <meta
                    property="og:description"
                    content="No-Code Prototype af ConTech Lab"
                />
                <meta
                    property="og:site_name"
                    content="No-Code Prototype af ConTech Lab"
                />

                {/* Open Graph data for LinkedIn */}
                <meta
                    property="og:title"
                    content="No-Code Prototype af ConTech Lab"
                />
                <meta
                    property="og:url"
                    content="https://contechlab.nocodeprototype.com"
                />
                <meta
                    property="og:description"
                    content="No-Code Prototype af ConTech Lab"
                />

                {/* Open Graph data for Pinterest */}
                <meta
                    property="og:title"
                    content="No-Code Prototype af ConTech Lab"
                />
                <meta
                    property="og:url"
                    content="https://contechlab.nocodeprototype.com"
                />
                <meta
                    property="og:description"
                    content="No-Code Prototype af ConTech Lab"
                />
            </head>
            <body
                className={`${inter.variable} bg-white font-sans text-xl text-greyscale-900 antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
