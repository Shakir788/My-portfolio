import type { Metadata } from "next";
import { Inter, Space_Grotesk, Kanit } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { CinematicOverlay } from "@/components/ui/CinematicOverlay";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Cortex } from "@/components/chat/Cortex";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Jack-style Kanit font — bold headings
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-phi-indol-26.vercel.app"),
  title: "Mohammad Shakir | Product Engineer",
  description:
    "Full Stack Software Engineer building AI-Powered SaaS, ERP & E-Commerce Products. View my latest projects including SPE ERP and Amina Academy.",
  keywords: ["Mohammad Shakir Salmani", "Product Engineer", "Full Stack Developer", "Next.js", "AI SaaS", "India"],
  openGraph: {
    title: "Mohammad Shakir | Product Engineer",
    description: "Building products, not just websites.",
    type: "website",
    url: "/",
    siteName: "Mohammad Shakir Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Shakir | Product Engineer",
    description: "Building AI-Powered SaaS, ERP & E-Commerce Products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${kanit.variable} font-sans antialiased bg-background text-white selection:bg-accent-blue/30 selection:text-white`}
      >
        <AmbientGlow />
        <CinematicOverlay />
        <ScrollProgress />
        <Navbar />
        <main className="relative min-h-screen">
          {children}
        </main>
        <Cortex />
      </body>
    </html>
  );
}