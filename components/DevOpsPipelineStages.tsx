import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function PipelineAnimation() {
  const stages = ["Design", "Code", "Build", "UAT", "Prod"];

  return (
    <div className="relative py-4">
      <div className="relative flex items-center gap-4 px-2">
        {stages.map((stage, index) => (
          <div key={index} className="relative flex items-center space-x-2">
            {/* Stage Text */}
            <motion.div
              className="text-sm md:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-teal-400 to-blue-400 shadow-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.6, // Text animates first
                ease: "easeInOut",
              }}
            >
              {stage}
            </motion.div>

            {/* Connecting Line */}
            {index < stages.length - 1 && (
              <motion.div
                className="h-[2px] bg-gradient-to-r from-green-500 to-blue-500 shadow-md"
                style={{
                  width: "20px", // Shorter line length
                }}
                initial={{ width: 0 }}
                animate={{ width: "20px" }}
                transition={{
                  duration: 0.4, // Faster animation for the shorter line
                  delay: index * 0.6 + 0.3, // Line animates after the text
                  ease: "easeInOut",
                }}
              ></motion.div>
            )}

            {/* Checkmark Icon */}
            <motion.div
              className="text-green-400 transform scale-0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.3, // Faster checkmark animation
                delay: index * 0.6 + 0.5, // Checkmark appears after the line
                ease: "easeOut",
              }}
            >
              <FaCheckCircle size={16} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
