"use client";

import { motion } from "framer-motion";
import { Users, BarChart3, Bell, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestión de clientes",
    description: "Centraliza toda la información de tus clientes en un solo lugar con acceso instantáneo.",
  },
  {
    icon: BarChart3,
    title: "Analíticas en tiempo real",
    description: "Visualiza el rendimiento de tu cartera con gráficos interactivos y reportes detallados.",
  },
  {
    icon: Bell,
    title: "Notificaciones inteligentes",
    description: "Recibe alertas sobre fechas importantes, seguimientos pendientes y actividades clave.",
  },
  {
    icon: Shield,
    title: "Seguridad primero",
    description: "Tus datos protegidos con encriptación de extremo a extremo y cumplimiento GDPR.",
  },
  {
    icon: Zap,
    title: "Rápido y eficiente",
    description: "Diseñado para ser ultrarrápido con tecnologías de última generación.",
  },
  {
    icon: Globe,
    title: "Acceso desde cualquier lugar",
    description: "Plataforma web responsive accesible desde cualquier dispositivo y navegador.",
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
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Todo lo que necesitas
          </h2>
          <p className="text-sm sm:text-lg text-muted max-w-2xl mx-auto">
            Herramientas poderosas para que puedas enfocarte en lo que importa:
            hacer crecer tu negocio.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <feature.icon size={20} className="text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
