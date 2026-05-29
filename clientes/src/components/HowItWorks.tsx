"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Wrench, Toolbox, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "1. Diagnóstico",
    description:
      "Revisamos tu equipo a fondo e identificamos el problema. Te explicamos qué necesita y te damos un presupuesto claro sin compromiso.",
  },
  {
    icon: Wrench,
    title: "2. Autorización",
    description:
      "Una vez que apruebes el presupuesto, procedemos con la reparación. Siempre te mantenemos informado del avance.",
  },
  {
    icon: Toolbox,
    title: "3. Reparación",
    description:
      "Realizamos la reparación con repuestos originales o equivalentes de alta calidad. Probamos el equipo exhaustivamente.",
  },
  {
    icon: Truck,
    title: "4. Entrega",
    description:
      "Te entregamos tu equipo funcionando al 100%. Incluye garantía del servicio realizado y soporte post-venta.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Proceso simple y transparente para que recuperes tus equipos en el
            menor tiempo posible.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-4 sm:mb-6 border border-indigo-500/20">
                <step.icon size={22} className="sm:size-[28px] text-indigo-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted text-xs sm:text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
