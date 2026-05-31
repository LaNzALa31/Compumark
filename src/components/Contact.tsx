"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

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
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola CompuMark! Me contacto desde la web:%0A%0A*Nombre:* ${encodeURIComponent(form.name)}%0A*Email:* ${encodeURIComponent(form.email)}%0A*Mensaje:* ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/51947237074?text=${text}`, "_blank");
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

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
            Estamos listos para ayudarte. Escríbenos o contáctanos por cualquiera de nuestros canales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
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
                    className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card hover:border-indigo-500/30 transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                      <item.icon size={20} className="text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-0.5">{item.title}</h3>
                      <p className="text-muted text-sm whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-0.5">{item.title}</h3>
                      <p className="text-muted text-sm whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Tu nombre"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder-muted focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Tu correo electrónico"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder-muted focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
            <textarea
              placeholder="Escribe tu mensaje..."
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder-muted focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-indigo-500/25"
            >
              <Send size={16} />
              Enviar mensaje
            </button>
            {sent && (
              <p className="text-center text-sm text-green-400 animate-fade-in">
                ¡Gracias! Se abrirá WhatsApp con tu mensaje.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
