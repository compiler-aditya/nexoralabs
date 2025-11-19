"use client";

import { motion } from "framer-motion";

type AnimationType = "particles" | "waves" | "grid" | "dots";

interface BackgroundAnimationProps {
  type?: AnimationType;
  className?: string;
}

export function BackgroundAnimation({
  type = "particles",
  className = ""
}: BackgroundAnimationProps) {

  if (type === "particles") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/20 dark:bg-purple-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  }

  if (type === "waves") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <svg className="w-full h-full opacity-10 dark:opacity-5">
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={i}
              d={`M0,${100 + i * 80} Q250,${50 + i * 80} 500,${100 + i * 80} T1000,${100 + i * 80}`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (type === "grid") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    );
  }

  if (type === "dots") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          return (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-br from-purple-500/20 to-blue-500/20 dark:from-purple-400/10 dark:to-blue-400/10 rounded-full blur-sm"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    );
  }

  return null;
}
