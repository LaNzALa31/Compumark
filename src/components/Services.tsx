"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Printer,
  Laptop,
  HardDrive,
  Wifi,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Reparación de PCs",
    description:
      "Diagnóstico y reparación de computadoras de escritorio. Cambio de componentes, limpieza, formateo e instalación de software.",
    price: "Desde S/ 30",
  },
  {
    icon: Laptop,
    title: "Reparación de Laptops",
    description:
      "Reparación de laptops, cambio de pantalla, teclado, batería, pasta térmica y solución de fallas eléctricas.",
    price: "Desde S/ 40",
  },
  {
    icon: Printer,
    title: "Reparación de Impresoras",
    description:
      "Diagnóstico y reparación de impresoras láser y tinta. Mantenimiento preventivo, cambio de tóner y solución de atascos.",
    price: "Desde S/ 35",
  },
  {
    icon: HardDrive,
    title: "Recuperación de Datos",
    description:
      "Recuperación de archivos borrados o perdidos en discos duros, SSDs, USB y tarjetas de memoria.",
    price: "Desde S/ 50",
  },
  {
    icon: Wifi,
    title: "Redes e Internet WISP",
    description:
      "Instalación y configuración de redes WiFi, cableado estructurado, equipos de red y solución de problemas de conexión.",
    price: "Desde S/ 60",
  },
  {
    icon: Cpu,
    title: "Mantenimiento General",
    description:
      "Limpieza física, optimización de software, actualización de drivers y eliminación de virus y malware.",
    price: "Desde S/ 25",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Servicios y Precios
          </h2>
          <p className="text-sm sm:text-lg text-muted max-w-2xl mx-auto">
            Ofrecemos soluciones rápidas y profesionales para todo tipo de
            equipos informáticos. Presupuesto sin compromiso.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <service.icon size={20} className="text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium">
                {service.price}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
