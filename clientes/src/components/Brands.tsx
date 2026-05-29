"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "HP", color: "from-teal-400 to-teal-600" },
  { name: "Dell", color: "from-blue-400 to-blue-600" },
  { name: "Lenovo", color: "from-red-400 to-red-600" },
  { name: "Asus", color: "from-yellow-400 to-yellow-600" },
  { name: "Acer", color: "from-green-400 to-green-600" },
  { name: "Apple", color: "from-gray-300 to-gray-500" },
  { name: "Samsung", color: "from-blue-400 to-indigo-600" },
  { name: "Brother", color: "from-orange-400 to-orange-600" },
  { name: "Epson", color: "from-emerald-400 to-emerald-600" },
  { name: "Canon", color: "from-rose-400 to-rose-600" },
  { name: "Intel", color: "from-sky-400 to-sky-600" },
  { name: "AMD", color: "from-red-500 to-rose-600" },
];

export default function Brands() {
  return (
    <section id="brands" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Marcas que trabajamos
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Reparamos y damos soporte a las marcas más reconocidas del mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group p-3 sm:p-4 rounded-xl border border-border bg-card hover:border-indigo-500/30 transition-all duration-300 flex items-center justify-center"
            >
              <span
                className={`text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r ${brand.color} text-transparent bg-clip-text group-hover:scale-110 transition-transform`}
              >
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
