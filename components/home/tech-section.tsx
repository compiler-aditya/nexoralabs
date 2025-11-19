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
  { name: "Vue.js", logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
  { name: "Angular", logo: "https://cdn.simpleicons.org/angular/DD0031" },
  { name: "Django", logo: "https://cdn.simpleicons.org/django/092E20" },
  { name: "Flask", logo: "https://cdn.simpleicons.org/flask/000000" },
  { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "Spring Boot", logo: "https://cdn.simpleicons.org/springboot/6DB33F" },
  { name: "Go", logo: "https://cdn.simpleicons.org/go/00ADD8" },
  { name: "Rust", logo: "https://cdn.simpleicons.org/rust/000000" },
  { name: "Elasticsearch", logo: "https://cdn.simpleicons.org/elasticsearch/005571" },
  { name: "RabbitMQ", logo: "https://cdn.simpleicons.org/rabbitmq/FF6600" },
  { name: "Kafka", logo: "https://cdn.simpleicons.org/apachekafka/231F20" },
  { name: "Jenkins", logo: "https://cdn.simpleicons.org/jenkins/D24939" },
  { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions/2088FF" },
  { name: "Terraform", logo: "https://cdn.simpleicons.org/terraform/7B42BC" },
  { name: "Nginx", logo: "https://cdn.simpleicons.org/nginx/009639" },
  { name: "Jest", logo: "https://cdn.simpleicons.org/jest/C21325" },
  { name: "Cypress", logo: "https://cdn.simpleicons.org/cypress/17202C" },
  { name: "Prisma", logo: "https://cdn.simpleicons.org/prisma/2D3748" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
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

        {/* Innovation Features - Improved Visibility */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-56 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 opacity-50 scale-110">
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
            <div className="relative h-56 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 opacity-50 scale-110">
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
            <div className="relative h-56 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 opacity-50 scale-110">
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
                whileHover={{ scale: 1.15, y: -5 }}
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-2 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-gray-800 transition-all duration-300 group-hover:shadow-lg">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={80}
                    height={80}
                    unoptimized
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  <span className="text-xs font-semibold text-foreground bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg border border-border">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
