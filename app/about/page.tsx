'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 text-gray-900 px-4 py-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          About Me
        </motion.h1>

        <Image
          src="/Mee.jpeg"
          alt="Profile"
          width={128}
          height={128}
          className="rounded-full object-cover border-4 border-white shadow-md"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg max-w-2xl text-gray-800"
        >
          I'm Jerno Beuker, a student of Artificial Intelligence at the University of Groningen. I enjoy building interactive web experiences and exploring the frontiers of machine learning, computer vision, and game theory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <Link
            href="/projects"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            View Projects
          </Link>

          <Link
            href="/"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
