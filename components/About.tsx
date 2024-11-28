import * as simpleIcons from "simple-icons";

export default function About() {
  const techTools = [
    { key: "siAmazonwebservices", name: "AWS" },
    { key: "siOpensourceinitiative", name: "OpenSource" },
    { key: "siDocker", name: "Docker" },
    { key: "siKubernetes", name: "Kubernetes" },
    { key: "siTerraform", name: "Terraform" },
    { key: "siPython", name: "Python" },
    { key: "siJenkins", name: "Jenkins" },
    { key: "siPrometheus", name: "Prometheus" },
    { key: "siGrafana", name: "Grafana" },
    { key: "siAnsible", name: "Ansible" },
    { key: "siNginx", name: "NGINX" },
    { key: "siReact", name: "React" },
    { key: "siNodedotjs", name: "Node.js" },
    { key: "siMongodb", name: "MongoDB" },
    { key: "siMysql", name: "MySQL" },
    { key: "siPostgresql", name: "PostgreSQL" },
    { key: "siOpenshift", name: "OpenShift" },
    { key: "siElastic", name: "ElasticSearch" },
    { key: "siRedis", name: "Redis" }
];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black to-black text-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-10">
          {/* About Me Heading with Sketch Highlighter */}
          <h2 className="text-5xl md:text-6xl font-extrabold relative leading-tight">
            <span className="relative z-10">About Me</span>
            <span className="absolute left-0 bottom-1 w-full h-3 bg-green-500 opacity-50 rounded-lg -z-10"></span>
          </h2>

          {/* About Me Description */}
          <p className="text-lg text-white-300 leading-relaxed">
            Hi, I&apos;m <span className="text-green-300 font-semibold">Aakash Sharma</span>, a passionate{" "}
            <span className="text-green-300 font-semibold">DevOps Engineer</span> dedicated to
            delivering efficient pipelines, managing scalable cloud infrastructures, and automating
            workflows. With a strong foundation in{" "}
            <span className="text-green-300">Docker</span>,{" "}
            <span className="text-green-300">Kubernetes</span>, and{" "}
            <span className="text-green-300">Terraform</span>, I thrive on solving complex problems
            with innovative solutions.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I’ve worked extensively on platforms like{" "}
            <span className="text-green-300">AWS</span>, <span className="text-green-300">Azure</span>, and{" "}
            <span className="text-green-300">GCP</span>. My mission is to bridge the gap between
            development and operations by creating seamless workflows, ensuring reliability and
            scalability in every deployment.
          </p>

          {/* Vision and Mission */}
          <div>
            <h3 className="text-2xl font-semibold text-green-400">Vision and Mission</h3>
            <p className="mt-2 text-gray-300 leading-relaxed">
              My vision is to simplify and streamline DevOps practices, enabling organizations to
              innovate and grow faster. I aim to build solutions that not only address current needs
              but also future-proof your operations.
            </p>
          </div>

          {/* What I Offer */}
          <div>
            <h3 className="text-2xl font-semibold text-green-400">What I Offer</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Design and implementation of CI/CD pipelines",
                "Containerization and orchestration solutions",
                "Cloud architecture setup and optimization",
                "Infrastructure as Code (IaC) with tools like Terraform",
                "Monitoring and logging for proactive insights",
                "Automation of repetitive workflows for efficiency",
              ].map((offer, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-300 leading-relaxed"
                >
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-green-500 text-black font-bold">
                    ✓
                  </div>
                  <span>{offer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content - Tech Tools */}
        <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {techTools.map(({ key, name }, index) => {
            const icon = simpleIcons[key as keyof typeof simpleIcons];
            if (!icon || typeof icon !== "object") return null;
            const { hex, path } = icon as {
              hex: string;
              path: string;
            };

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center transform transition-transform"
              >
                {/* Icon Circle */}
                <div
                  className="w-20 h-20 flex items-center justify-center rounded-xl shadow-lg"
                  style={{
                    background: `linear-gradient(145deg, #${hex}aa, #${hex})`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-10 h-10"
                  >
                    <path d={path} />
                  </svg>
                </div>
                {/* Icon Name */}
                <span className="mt-2 text-base font-semibold text-gray-300">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
