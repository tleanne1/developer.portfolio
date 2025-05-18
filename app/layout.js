import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Tracey Buentello | Frontend Developer",
  description:
    "Frontend Developer portfolio specializing in React, Tailwind CSS, Next.js, and accessible, secure UI design.",
  openGraph: {
    title: "Tracey Buentello | Frontend Developer",
    description:
      "Explore clean, modern, and responsive frontend builds crafted with React, Tailwind CSS, and Next.js.",
    url: "https://tleanne.dev",
    siteName: "tleanne.dev",
    images: [
      {
        url: "/og-image.png", // Make sure this is in your /public folder
        width: 1200,
        height: 630,
        alt: "Tracey Buentello | Frontend Developer",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://tleanne.dev"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
