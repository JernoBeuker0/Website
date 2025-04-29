'use client';
import Image from "next/image";
import ContactButton from "./components/ContactButton";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 p-8 text-center">
      <header className="mb-12">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {/* Text section */}
          <div className="text-center sm:text-left">
            <h1 className="text-6xl font-bold mb-2 text-gray-900">Jerno Beuker</h1>
            <p className="text-xl text-gray-800">
              Student BSc Artificial Intelligence at RUG
            </p>
          </div>

          {/* Image section */}
          <Image
            src="/Mee.jpeg"
            alt="Profile picture"
            width={96}
            height={96}
            className="rounded-full object-cover w-24 h-24 sm:w-32 sm:h-32"
          />
        </div>
      </header>

      <main className="flex flex-col gap-12 w-full max-w-4xl text-left">
        {/* Cards Section */}
        <div className="mt-12 flex justify-center gap-4 flex-nowrap overflow-x-auto py-4 px-2">
          {/* About Me Card */}
          <motion.a
            href="/about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 w-60 h-60 rounded-xl bg-yellow-100 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/noise.svg')] bg-no-repeat bg-cover opacity-10 pointer-events-none" />
            <div className="flex flex-col justify-between h-full p-4">
              <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
              <p className="text-sm text-gray-700 self-end text-right">
                Learn more about my background, education, and interests.
              </p>
            </div>
          </motion.a>

          {/* Projects Card */}
          <motion.a
            href="/projects"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0 w-60 h-60 rounded-xl bg-green-100 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/noise.svg')] bg-no-repeat bg-cover opacity-10 pointer-events-none" />
            <div className="flex flex-col justify-between h-full p-4">
              <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
              <p className="text-sm text-gray-700 self-end text-right">
                Explore what I've built using React, Python, and more.
              </p>
            </div>
          </motion.a>
        </div>

        {/* Contact Section */}
        <section>
          <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
            <ContactButton />
            <a
              href="https://github.com/jernobeuker0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full font-medium transition-colors"
            >
              Visit my GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-16 text-gray-600 text-sm">
        © 2025 Jerno Beuker. Built with ❤️ using Next.js.
      </footer>
    </div>
  );
}