"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { AIIllustration } from "@/components/illustrations/ai-illustration";
import { CodeIllustration } from "@/components/illustrations/code-illustration";
import { CloudIllustration } from "@/components/illustrations/cloud-illustration";
import Image from "next/image";

const techStack = [
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Redis", logo: "https://cdn.simpleicons.org/redis/DC382D" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  { name: "AWS", logo: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
  { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  { name: "TensorFlow", logo: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  { name: "PyTorch", logo: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
  { name: "GraphQL", logo: "https://cdn.simpleicons.org/graphql/E10098" },
  { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
];

export function TechSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-grid opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Our Tech Arsenal
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Powered by <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies and industry-leading tools to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Innovation Features - No Cards */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-48 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 scale-125">
                <AIIllustration />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-3">
              AI & Machine Learning
            </h3>
            <p className="text-lg text-muted-foreground">
              Intelligent solutions that adapt and learn
            </p>
          </motion.div>

          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-48 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 scale-125">
                <CodeIllustration />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-3">
              Modern Development
            </h3>
            <p className="text-lg text-muted-foreground">
              Clean, scalable, and maintainable code
            </p>
          </motion.div>

          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-48 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 scale-125">
                <CloudIllustration />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-3">
              Cloud Infrastructure
            </h3>
            <p className="text-lg text-muted-foreground">
              Scalable and reliable cloud solutions
            </p>
          </motion.div>
        </div>

        {/* Tech Stack - Just Logos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Technologies We Use
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.2, y: -5 }}
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <span className="text-xs font-medium text-muted-foreground">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </motion.div>
            <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">
              Always exploring new technologies and frameworks
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
