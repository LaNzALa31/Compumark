import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import GradientMesh from "@/components/GradientMesh";
import ParticlesBackground from "@/components/ParticlesBackground";
import AudioPlayer from "@/components/AudioPlayer";

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
  title: "Clientes — Gestión Inteligente",
  description:
    "La plataforma moderna para gestionar tus clientes de forma eficiente y profesional.",
  openGraph: {
    title: "Clientes — Gestión Inteligente",
    description:
      "La plataforma moderna para gestionar tus clientes de forma eficiente y profesional.",
  },
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
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
