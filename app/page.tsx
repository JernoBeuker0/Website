'use client';
import Image from "next/image";
import ContactButton from "./components/ContactButton";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 text-center text-gray-900">
      <header className="mb-16">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {/* Text section */}
          <div className="text-center sm:text-left">
            <h1 className="text-6xl font-bold mb-2">Jerno Beuker</h1>
            <p className="text-xl text-gray-700">
              BSc Artificial Intelligence Student at RUG
            </p>
          </div>

          {/* Image section */}
          <Image
            src="/Mee.jpeg"
            alt="Profile picture"
            width={128}
            height={128}
            className="rounded-full object-cover w-32 h-32 border-4 border-white shadow-md"
          />
        </div>
      </header>

      <main className="flex flex-col gap-16 w-full max-w-5xl px-4">
        {/* Cards Section */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10">
          {/* About Me Card */}
          <motion.a
            href="/about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 rounded-xl bg-yellow-50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/noise.svg')] bg-no-repeat bg-cover opacity-10 pointer-events-none" />
            <div className="flex flex-col justify-between h-full p-5">
              <h2 className="text-2xl font-semibold">About Me</h2>
              <p className="text-sm text-gray-600 mt-auto">
                Learn about my academic background, interests, and more.
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
            className="w-64 h-64 rounded-xl bg-emerald-50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/noise.svg')] bg-no-repeat bg-cover opacity-10 pointer-events-none" />
            <div className="flex flex-col justify-between h-full p-5">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <p className="text-sm text-gray-600 mt-auto">
                Explore my work with React, Python, and machine learning.
              </p>
            </div>
          </motion.a>
        </div>

        {/* Contact Section */}
        <section>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <ContactButton />
            <a
              href="https://github.com/jernobeuker0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Visit my GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-20 text-gray-600 text-sm">
        © 2025 Jerno Beuker. Built with ❤️ using Next.js.
      </footer>
    </div>
  );
}
