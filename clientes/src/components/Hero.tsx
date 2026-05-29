"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-6 sm:px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs sm:text-sm text-muted mb-6 sm:mb-8">
            <Sparkles size={12} className="text-indigo-400 shrink-0" />
            <span>Gestión inteligente de clientes</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6"
        >
          <span className="animate-gradient bg-gradient-to-r from-white via-indigo-400 to-purple-400 text-transparent bg-clip-text">
            CompuMark
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
        >
          Organiza, da seguimiento y haz crecer tu cartera de clientes con una
          plataforma diseñada para profesionales como tú.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a href="/app" className="w-full sm:w-auto text-center group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-indigo-500/25">
            Comenzar ahora
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
          <button className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl border border-border bg-card/50 text-foreground font-medium hover:bg-card transition-all duration-300">
            Ver demo
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-muted animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
