"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Carousel from "@/components/Carousel";

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

      <a
        href="https://wa.me/51947237074"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span className="absolute inset-0 w-14 h-14 rounded-full bg-green-500 animate-ping opacity-30" />
        <span className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/40 group-hover:shadow-green-500/60 transition-all group-hover:scale-110 group-hover:-translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white" className="drop-shadow-sm"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </span>
      </a>
    </main>
  );
}
