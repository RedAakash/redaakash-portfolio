import Marquee from "react-fast-marquee";
import * as simpleIcons from "simple-icons";

export default function TechTools() {
  // Array of tech tools with their Simple Icons keys
  const techTools = [
    "siDocker",
    "siKubernetes",
    "siTerraform",
    "siAnsible",
    "siAmazonwebservices",
    "siMicrosoftazure",
    "siGithub",
    "siGitlab",
    "siJenkins",
    "siPrometheus",
    "siGrafana",
    "siNginx",
    "siApache",
    "siPython",
    "siGnubash",
    "siOpenstack",
    "siRedhatopenshift",
    "siNodedotjs",
    "siReact",
    "siNextdotjs",
    "siMongodb",
    "siMysql",
  ];

  return (
    <div className="absolute bottom-0 w-full bg-white py-4 shadow-lg z-20">
      <Marquee gradient={false} autoFill={true} speed={50} className="flex items-center">
        {techTools.map((key, index) => {
          const icon = simpleIcons[key as keyof typeof simpleIcons];
          if (!icon || typeof icon !== "object") return null;

          const { hex, path } = icon as {
            hex: string;
            path: string;
          };

          return (
            icon && (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 mx-6" // Add explicit horizontal margin
                fill={`#${hex}`} // Use the brand color from the icon's `hex` property
              >
                <path d={path} />
              </svg>
            )
          );
        })}
      </Marquee>
    </div>
  );
}
