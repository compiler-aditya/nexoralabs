import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagon */}
      <path
        d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
        stroke="url(#gradient1)"
        strokeWidth="3"
        fill="none"
      />

      {/* Inner rotating hexagon */}
      <path
        d="M50 20L75 35V65L50 80L25 65V35L50 20Z"
        fill="url(#gradient2)"
        opacity="0.2"
      />

      {/* Center N shape */}
      <path
        d="M35 40V60M35 40L55 60M55 40V60"
        stroke="url(#gradient3)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Orbiting dots */}
      <circle cx="50" cy="15" r="3" fill="url(#gradient4)">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="85" cy="50" r="3" fill="url(#gradient4)">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="120 50 50"
          to="480 50 50"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="15" cy="50" r="3" fill="url(#gradient4)">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="240 50 50"
          to="600 50 50"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>

        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>

        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>

        <radialGradient id="gradient4">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function LogoWithText({ className = "", size = 40 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo size={size} />
      <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Nexora Labs
      </span>
    </div>
  );
}
