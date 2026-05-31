"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function AppPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft size={18} />
          Volver al inicio
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-background pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="animate-gradient bg-gradient-to-r from-white via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                CompuMark
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-muted max-w-3xl mx-auto"
          >
            Proveedores de Internet WISP, soluciones TI y reparación de
            computadoras con la más alta eficiencia y compromiso.
          </motion.p>
        </div>
      </section>

      {/* Carousel */}
      <section className="relative px-4 pb-24">
        <Carousel />
      </section>

      <WhatsAppFAB />
    </main>
  );
}
