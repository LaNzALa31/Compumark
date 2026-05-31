"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      className="fixed inset-0 z-0"
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          color: { value: "#818cf8" },
          links: {
            color: "#818cf8",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: {
            density: { enable: true, width: 1920, height: 1080 },
            value: 80,
          },
          opacity: { value: 0.5 },
          size: { value: { min: 2, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
}
