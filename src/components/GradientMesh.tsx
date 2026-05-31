"use client";

export default function GradientMesh() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <svg
        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 opacity-50"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="mesh-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
          </filter>
        </defs>
        <g filter="url(#mesh-blur)">
          <ellipse cx="200" cy="200" rx="400" ry="300" fill="#6366f1">
            <animate
              attributeName="cx"
              values="200;350;200"
              dur="12s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="200;150;200"
              dur="10s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="800" cy="500" rx="350" ry="250" fill="#a855f7">
            <animate
              attributeName="cx"
              values="800;700;800"
              dur="14s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="500;400;500"
              dur="11s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="600" cy="700" rx="300" ry="200" fill="#ec4899">
            <animate
              attributeName="cx"
              values="600;500;600"
              dur="13s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="700;600;700"
              dur="9s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="300" cy="600" rx="250" ry="200" fill="#06b6d4">
            <animate
              attributeName="cx"
              values="300;450;300"
              dur="15s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="600;550;600"
              dur="12s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
      </svg>
    </div>
  );
}
