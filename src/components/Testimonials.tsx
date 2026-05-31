"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "CEO, TechStart",
    content:
      "Esta plataforma transformó la forma en que gestionamos nuestros clientes. Ahora todo está organizado y accesible en segundos.",
  },
  {
    name: "Carlos Mendoza",
    role: "Freelancer",
    content:
      "Desde que uso Clientes, puedo dar seguimiento a cada proyecto sin perder detalle. Mi productividad aumentó un 40%.",
  },
  {
    name: "Ana López",
    role: "Directora Comercial",
    content:
      "Las analíticas en tiempo real me permiten tomar decisiones informadas al instante. Una herramienta indispensable.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-sm sm:text-lg text-muted max-w-2xl mx-auto">
            Miles de profesionales confían en nosotros para gestionar sus
            clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="p-6 rounded-2xl border border-border bg-card relative"
            >
              <Quote size={24} className="text-indigo-400/30 mb-4" />
              <p className="text-sm text-muted leading-relaxed mb-6">
                {t.content}
              </p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
