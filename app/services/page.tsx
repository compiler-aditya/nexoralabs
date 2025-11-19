"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Cloud,
  Sparkles,
  Database,
  Shield,
  Smartphone,
  BarChart,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    shortDesc: "Tailored solutions built with modern technologies and best practices.",
    benefits: [
      "Scalable architecture designed for growth",
      "Clean, maintainable code following industry standards",
      "Comprehensive testing and quality assurance",
      "Ongoing support and maintenance",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Python"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    shortDesc: "Intelligent solutions that learn and adapt to your business needs.",
    benefits: [
      "Automated decision-making processes",
      "Predictive analytics for better insights",
      "Natural language processing capabilities",
      "Computer vision for image recognition",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Keras"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    shortDesc: "Scalable infrastructure and seamless cloud migration services.",
    benefits: [
      "99.9% uptime guarantee",
      "Auto-scaling for peak performance",
      "Cost-optimized infrastructure",
      "Multi-cloud compatibility",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Innovation Consulting",
    shortDesc: "Strategic guidance for leveraging emerging technologies.",
    benefits: [
      "Technology roadmap development",
      "Digital transformation strategy",
      "Innovation workshops and training",
      "Proof of concept development",
    ],
    technologies: ["Blockchain", "IoT", "AR/VR", "Quantum Computing", "5G"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Database,
    title: "Data Engineering",
    shortDesc: "Build robust data pipelines and analytics platforms.",
    benefits: [
      "Real-time data processing",
      "Data warehouse design and implementation",
      "ETL pipeline development",
      "Big data analytics",
    ],
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Apache Spark", "Snowflake"],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    shortDesc: "Comprehensive security solutions to protect your digital assets.",
    benefits: [
      "Security audits and penetration testing",
      "Compliance and regulatory support",
      "24/7 threat monitoring",
      "Incident response planning",
    ],
    technologies: ["SSL/TLS", "OAuth", "JWT", "Encryption", "Firewall"],
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    shortDesc: "Native and cross-platform mobile applications.",
    benefits: [
      "iOS and Android development",
      "Cross-platform solutions",
      "App Store optimization",
      "Push notifications and analytics",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: BarChart,
    title: "Analytics & BI",
    shortDesc: "Transform data into actionable business insights.",
    benefits: [
      "Custom dashboards and reports",
      "Real-time analytics",
      "Data visualization",
      "KPI tracking and monitoring",
    ],
    technologies: ["Tableau", "Power BI", "Google Analytics", "Mixpanel", "Amplitude"],
    gradient: "from-yellow-500 to-orange-500",
  },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity and scope. A simple web application might take 6-8 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines during the initial consultation.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes! We offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimization, and feature enhancements.",
  },
  {
    question: "Can you work with our existing technology stack?",
    answer:
      "Absolutely. We're experienced in working with a wide range of technologies and can integrate seamlessly with your existing infrastructure.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow rigorous quality assurance processes including code reviews, automated testing, continuous integration, and user acceptance testing to ensure the highest quality deliverables.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/20 to-purple-500/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive technology solutions designed to transform your business
              and drive innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - New Design */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        {service.shortDesc}
                      </p>

                      {/* Technologies - Minimal */}
                      <div className="flex flex-wrap gap-1 mt-auto">
                        {service.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs font-medium">
                            +{service.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Details Section */}
          <motion.div
            className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">What You Get With Every Service</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="font-semibold mb-2">Quality Assurance</h4>
                <p className="text-sm text-muted-foreground">Comprehensive testing & code reviews</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">24/7</span>
                </div>
                <h4 className="font-semibold mb-2">Support</h4>
                <p className="text-sm text-muted-foreground">Ongoing maintenance & assistance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">∞</span>
                </div>
                <h4 className="font-semibold mb-2">Scalability</h4>
                <p className="text-sm text-muted-foreground">Built to grow with your business</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h4 className="font-semibold mb-2">Performance</h4>
                <p className="text-sm text-muted-foreground">Optimized for speed & efficiency</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our services
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  title={faq.question}
                  defaultOpen={index === 0}
                >
                  {faq.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help transform your business with our
              technology solutions.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
