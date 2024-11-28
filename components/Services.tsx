"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "CI/CD Pipeline Setup",
      description:
        "Streamline your software development lifecycle with efficient and scalable CI/CD pipelines, ensuring faster and error-free deployments.",
      icon: "⚙️",
      benefits: [
        "Reduced deployment errors.",
        "Accelerated delivery cycles.",
        "Automated testing integration.",
      ],
    },
    {
      title: "Cloud Infrastructure Design",
      description:
        "Design and implement secure, scalable, and cost-effective cloud architectures tailored to your business needs.",
      icon: "☁️",
      benefits: [
        "High-availability architectures.",
        "Optimized cost management.",
        "Seamless cloud migration support.",
      ],
    },
    {
      title: "Containerization & Orchestration",
      description:
        "Leverage Docker and Kubernetes to containerize and orchestrate your applications for scalability and resilience.",
      icon: "📦",
      benefits: [
        "Improved resource utilization.",
        "Streamlined application deployments.",
        "Fault-tolerant microservices architecture.",
      ],
    },
    {
      title: "Infrastructure as Code (IaC)",
      description:
        "Automate infrastructure management using tools like Terraform to ensure consistent and repeatable provisioning.",
      icon: "📜",
      benefits: [
        "Faster infrastructure provisioning.",
        "Version-controlled infrastructure.",
        "Improved team collaboration.",
      ],
    },
    {
      title: "Monitoring & Logging",
      description:
        "Gain real-time insights into your infrastructure and applications with centralized monitoring and logging solutions.",
      icon: "🔍",
      benefits: [
        "Proactive issue detection.",
        "Detailed application performance metrics.",
        "Custom dashboards for insights.",
      ],
    },
    {
      title: "DevOps Consulting",
      description:
        "Transform your business operations by implementing industry-standard DevOps practices tailored to your needs.",
      icon: "🛠️",
      benefits: [
        "Improved team collaboration.",
        "Streamlined workflows.",
        "Enhanced software quality.",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-black to-black text-white relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-6xl font-extrabold">
            <span className="relative text-white-400">
              Services
              <span className="absolute left-0 bottom-1 w-full h-3 bg-green-500 opacity-50 rounded-lg -z-10"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            Empowering your business with modern DevOps solutions and tools.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl shadow-2xl bg-black bg-opacity-40 backdrop-blur-lg border border-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {/* Service Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Service Title */}
              <h3 className="text-3xl font-bold text-green-400 mb-6">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-xl text-green-400 font-semibold mb-3">
                  Key Benefits
                </h4>
                <ul className="space-y-2 list-disc list-inside text-gray-300">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
