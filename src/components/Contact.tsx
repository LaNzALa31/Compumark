"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    content: "+51 947 237 074",
    href: "tel:+51947237074",
  },
  {
    icon: Mail,
    title: "Correo",
    content: "contacto@compumark.pe",
    href: "mailto:contacto@compumark.pe",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Av. Principal 123, Lima, Perú",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Horarios",
    content: "Lun - Vie: 9:00 - 19:00\nSáb: 9:00 - 13:00",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Estamos listos para ayudarte. Contáctanos por cualquiera de
            nuestros canales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                    <item.icon size={22} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted text-sm whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted text-sm whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
