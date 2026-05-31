import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import GradientMesh from "@/components/GradientMesh";
import ParticlesBackground from "@/components/ParticlesBackground";
import AudioPlayer from "@/components/AudioPlayer";
import ThemeToggle from "@/components/ThemeToggle";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CompuMark — WISP, Soporte TI y Reparación de PCs",
  description:
    "Proveedores de Internet WISP, soluciones TI y reparación de computadoras en Lima. Diagnóstico, mantenimiento y recuperación de datos.",
  openGraph: {
    title: "CompuMark — Tecnología a tu alcance",
    description:
      "Internet WISP, soporte técnico, reparación de PCs y laptops en Lima. Presupuesto sin compromiso.",
    locale: "es_PE",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <ScrollProgress />
        <GradientMesh />
        <ParticlesBackground />
        <AudioPlayer />
        <ThemeToggle />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
