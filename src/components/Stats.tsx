"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = to / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= to) {
              setCount(to);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tabular-nums">
        {count.toFixed(decimals)}
        {suffix}
      </div>
    </div>
  );
}

const stats = [
  { value: 10, suffix: "K+", label: "Clientes activos" },
  { value: 99, suffix: "%", label: "Tiempo de actividad" },
  { value: 4.9, suffix: "", label: "Valoración media", decimals: 1 },
  { value: 150, suffix: "+", label: "Países alcanzados" },
];

export default function Stats() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-border bg-card"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <Counter to={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              <p className="text-sm text-muted mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
