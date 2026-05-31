"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      className="fixed inset-0 z-0"
      options={{
        fpsLimit: 30,
        particles: {
          color: { value: "#818cf8" },
          links: {
            color: "#818cf8",
            distance: 120,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: {
            density: { enable: true },
            value: 25,
          },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: false,
      }}
    />
  );
}
