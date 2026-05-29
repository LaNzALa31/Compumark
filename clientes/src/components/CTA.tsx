"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 p-6 sm:p-8 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-sm sm:text-lg text-indigo-200 max-w-xl mx-auto mb-6 sm:mb-8">
              Únete a miles de profesionales que ya gestionan sus clientes de
              forma inteligente.
            </p>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-lg">
              Crear cuenta gratis
              <ArrowRight size={18} />
            </button>
            <p className="text-xs sm:text-sm text-indigo-300 mt-3 sm:mt-4">Sin tarjeta de crédito</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
