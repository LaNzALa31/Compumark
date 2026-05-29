"use client";

import { motion } from "framer-motion";
import { Shield, Users, Award, Wrench } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "+500 Clientes satisfechos",
    description: "Años de experiencia respaldan nuestro servicio.",
  },
  {
    icon: Award,
    title: "Garantía en todos los servicios",
    description: "Todos nuestros trabajos tienen garantía por escrito.",
  },
  {
    icon: Wrench,
    title: "Técnicos certificados",
    description: "Personal capacitado y en constante actualización.",
  },
  {
    icon: Shield,
    title: "Presupuesto sin compromiso",
    description: "Diagnóstico gratuito, pagas solo si aceptas.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
              Sobre{" "}
              <span className="animate-gradient bg-gradient-to-r from-white via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                CompuMark
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-4">
              Somos una empresa especializada en soluciones informáticas,
              reparación de equipos y servicios de conectividad WISP. Nacimos
              con la misión de ofrecer un servicio técnico honesto, rápido y
              profesional.
            </p>
            <p className="text-muted leading-relaxed">
              Desde nuestros inicios, nos hemos comprometido con la calidad y la
              satisfacción de nuestros clientes, trabajando con las mejores
              marcas y manteniéndonos a la vanguardia de la tecnología.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-2xl border border-border bg-card"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3">
                  <item.icon size={20} className="text-indigo-400" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-muted text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
