"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import PipelineAnimation from "./DevOpsPipelineStages";
import TechTools from "./techTools";

interface Spot {
  width: number;
  height: number;
  top: number;
  left: number;
  color: string;
}

export default function Hero() {
  const [spots, setSpots] = useState<Spot[]>([]); // Define the state with the correct type

  // Generate random spot positions and sizes on the client
  useEffect(() => {
    const generatedSpots = [...Array(10)].map(() => ({
      width: Math.random() * 150 + 100,
      height: Math.random() * 150 + 100,
      top: Math.random() * 100,
      left: Math.random() * 100,
      color: [
        "from-green-400 via-blue-500 to-purple-600",
        "from-red-500 via-yellow-500 to-orange-500",
        "from-pink-500 via-purple-400 to-indigo-500",
        "from-cyan-400 via-teal-500 to-green-500",
        "from-orange-400 via-red-500 to-yellow-500",
      ][Math.floor(Math.random() * 5)],
    }));
    setSpots(generatedSpots);
  }, []); // Run once on mount

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center overflow-hidden bg-black">
      {/* Multi-Colored Background Spot Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {spots.map((spot, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full bg-gradient-to-r ${spot.color} blur-3xl`}
            style={{
              width: `${spot.width}px`,
              height: `${spot.height}px`,
              top: `${spot.top}%`,
              left: `${spot.left}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.6, 0.4, 0.6],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 h-full">
        {/* Left Side Content */}
        <div className="text-center md:text-left md:w-1/2 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600 drop-shadow-lg">
            Hi, I&apos;m <span className="font-bold text-white">Aakash Sharma</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300">
            <span className="text-green-500 font-semibold">DevOps Engineer</span> |{" "}
            <span className="text-green-400 font-semibold">Cloud Enthusiast</span> |{" "}
            <span className="text-green-300 font-semibold">Automation Guru</span>
          </p>

          {/* Social Media Icons and Schedule Button */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
            {[
              { href: "https://linkedin.com/in/redaakash", icon: FaLinkedin, color: "text-green-500" },
              { href: "https://github.com/redaakash", icon: FaGithub, color: "text-green-300" },
              { href: "https://twitter.com/redaakash", icon: FaTwitter, color: "text-green-400" },
              { href: "https://instagram.com/redaakash", icon: FaInstagram, color: "text-green-400" },
              { href: "https://facebook.com/redaakash", icon: FaFacebook, color: "text-green-400" },
            ].map(({ href, icon: Icon, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl ${color} hover:scale-125 transition-transform`}
              >
                <Icon />
              </a>
            ))}
            <a
              href="https://www.cal.com/oneggy-aakash-sharma/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-3 text-sm md:text-lg font-medium text-black bg-gradient-to-r from-green-500 via-green-400 to-green-300 rounded-full overflow-hidden flex items-center justify-center space-x-2 group"
            >
              <span className="relative z-10">Schedule a Meeting</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 relative z-10 transform transition-transform group-hover:translate-x-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-400 to-green-300 blur-md opacity-50 transition-transform transform group-hover:scale-110" />
            </a>
          </div>

          <PipelineAnimation />

          <div className="relative mt-12 flex flex-col items-center md:items-start space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative flex items-center"
            >
              <span
                className="text-6xl font-bold italic text-purple-400 tracking-wide"
                style={{ fontFamily: "Caveat" }}
              >
                10+ Years in Tech
              </span>
            </motion.div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-[50vh] md:h-[90%] flex justify-center md:justify-end items-end">
          <Image
            src="/aakashsharma.png"
            width={500}
            height={500}
            alt="Aakash Sharma"
            className="absolute bottom-0 right-0 h-full w-auto object-cover z-10 shadow-lg"
          />
        </div>
      </div>

      <TechTools />
    </section>
  );
}
