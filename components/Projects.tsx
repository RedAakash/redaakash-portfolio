import * as simpleIcons from "simple-icons";
import { motion } from "framer-motion";
import { memo } from "react";
import Marquee from "react-fast-marquee";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  achievements: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Memoized Project Card for better performance
const ProjectCard = memo(({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      key={index}
      className="p-8 rounded-xl shadow-2xl bg-black bg-opacity-40 backdrop-blur-lg border border-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {/* Project Title */}
      <h3 className="text-3xl font-bold text-green-400 mb-6">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Achievements */}
      <div className="mb-6">
        <h4 className="text-xl text-green-400 font-semibold mb-3">
          Achievements
        </h4>
        <ul className="space-y-2 list-disc list-inside text-gray-300">
          {project.achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Icons */}
      <div className="flex flex-wrap gap-4">
        {project.techStack.map((key, idx) => {
          const icon = simpleIcons[key as keyof typeof simpleIcons];
          if (!icon || typeof icon !== "object") return null;

          const { hex, path } = icon as {
            hex: string;
            path: string;
          };

          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full shadow-md"
                style={{
                  background: `linear-gradient(145deg, #${hex}aa, #${hex})`,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-8 h-8"
                >
                  <path d={path} />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Kubernetes Cluster Setup",
      description:
        "Designed and deployed a high-availability Kubernetes cluster for a production environment, ensuring scalability and reliability.",
      techStack: ["siKubernetes", "siDocker", "siAmazonwebservices", "siTerraform", "siJenkins", "siUbuntu"],
      achievements: [
        "Achieved 99.99% uptime in production.",
        "Seamlessly scaled services during peak traffic.",
        "Reduced deployment time by 50%.",
      ],
    },
    {
      title: "CI/CD Pipeline with Jenkins",
      description:
        "Built a CI/CD pipeline integrating Jenkins, Docker, and Kubernetes for faster and efficient software delivery.",
      techStack: ["siJenkins", "siDocker", "siKubernetes", "siAmazoneks", "siArgo", "siAwsecr"],
      achievements: [
        "Cut deployment errors by 80%.",
        "Enabled multiple daily deployments.",
        "Improved team collaboration via automated workflows.",
      ],
    },
    {
      title: "Cloud Infrastructure Automation",
      description:
        "Automated infrastructure provisioning using Terraform, enabling rapid deployment on AWS and Azure.",
      techStack: ["siTerraform", "siAmazonwebservices", "siAmazonec2", "siAwslambda", "siAmazoncloudwatch"],
      achievements: [
        "Reduced manual provisioning time by 90%.",
        "Standardized cloud infrastructure setup.",
        "Ensured cost efficiency through infrastructure scaling.",
      ],
    },
    {
      title: "Monitoring and Logging",
      description:
        "Implemented a centralized monitoring system using Prometheus, Grafana, and ELK stack for better observability.",
      techStack: ["siPrometheus", "siGrafana", "siElastic"],
      achievements: [
        "Reduced incident detection time by 70%.",
        "Enabled real-time system monitoring.",
        "Improved troubleshooting with detailed logs.",
      ],
    },
    {
      title: "NGINX Load Balancer Configuration",
      description:
        "Configured and optimized NGINX as a load balancer for distributing traffic across multiple application servers.",
      techStack: ["siNginx", "siLinux", "siAmazonwebservices"],
      achievements: [
        "Enhanced application performance during high traffic.",
        "Achieved zero-downtime deployments with advanced routing.",
        "Improved security with SSL/TLS configurations.",
      ],
    },
    {
      title: "Django Web Application Development",
      description:
        "Developed a scalable Django-based web application, integrated with PostgreSQL and Redis for caching.",
      techStack: ["siDjango", "siPostgresql", "siRedis"],
      achievements: [
        "Reduced query response time by 40% using optimized caching.",
        "Implemented user authentication and role-based access control.",
        "Deployed on Docker containers for consistent environments.",
      ],
    },
    {
      title: "Kubernetes Helm Chart Development",
      description:
        "Created custom Helm charts for Kubernetes application deployments, simplifying multi-cluster setups.",
      techStack: ["siKubernetes", "siHelm", "siDocker"],
      achievements: [
        "Accelerated application deployment processes.",
        "Enabled reusable, version-controlled deployment templates.",
        "Facilitated rapid scaling with Kubernetes clusters.",
      ],
    },
  ];

  return (
    <section
      id="projects"
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
            <span className="relative text-white">
              Projects
              <span className="absolute left-0 bottom-1 w-full h-3 bg-white-500 opacity-50 rounded-lg -z-10"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-300 mt-4">
          Showcasing innovative projects that inspire, solve, and elevate experiences.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
