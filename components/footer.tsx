import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-black text-white py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            RedAakash
          </h1>
          <p className="text-sm md:text-base text-gray-400 mt-2">
            Empowering innovation, one project at a time.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <a
            href="#home"
            className="text-gray-400 hover:text-green-400 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-green-400 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-green-400 transition"
          >
            Projects
          </a>
          <a
            href="#services"
            className="text-gray-400 hover:text-green-400 transition"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-green-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Powered By Section */}
        <div className="text-center md:text-right">
          <p className="text-sm md:text-base text-gray-400">
            Powered by
          </p>

          <Link href={"https://www.oneggy.com"}>
          <div className="flex items-center justify-center md:justify-end space-x-2 mt-2">
            <Image
              src="https://www.oneggy.com/logov1.png"
              width={100} // Replace with your desired width
              height={24} // Replace with your desired height
              layout="intrinsic" // Automatically sizes the image based on the intrinsic dimensions
              alt="OnEggy Technologies Logo"
              className="h-6"
            />
            {/* <span className="text-sm text-gray-400">OnEggy Technologies</span> */}
          </div>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-6 pt-4">
        <p className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} RedAakash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
