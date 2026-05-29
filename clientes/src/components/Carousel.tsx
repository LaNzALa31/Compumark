"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1656082644825-a9227fec24ba?w=1200&q=80",
    alt: "Internet WISP - Cobertura rural",
    title: "Internet WISP",
    subtitle: "Cobertura rural y urbana con velocidad simétrica real. Instalación en 24-48 hrs.",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    alt: "Soluciones TI - Centro de datos",
    title: "Soluciones TI",
    subtitle: "Infraestructura de redes, servidores y soporte técnico especializado para tu negocio.",
  },
  {
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1200&q=80",
    alt: "Reparación de computadoras",
    title: "Reparación de PCs",
    subtitle: "Diagnóstico rápido, reparación eficiente y recuperación de datos con garantía.",
  },
  {
    image: "/printer-repair.jpg",
    alt: "Reparación de impresoras",
    title: "Reparación de Impresoras",
    subtitle: "Diagnóstico y reparación de impresoras láser y tinta. Mantenimiento preventivo, cambio de tóner y solución de atascos con servicio rápido a domicilio.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 20000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current].image}
          alt={slides[current].alt}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className="absolute bottom-12 sm:bottom-16 left-0 right-0 z-10 px-4 sm:px-8 md:px-12 text-left">
        <motion.h2
          key={`title-${current}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg"
        >
          {slides[current].title}
        </motion.h2>
        <motion.p
          key={`sub-${current}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-sm sm:text-lg md:text-xl text-indigo-200 max-w-xl drop-shadow-lg"
        >
          {slides[current].subtitle}
        </motion.p>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-indigo-400 w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
