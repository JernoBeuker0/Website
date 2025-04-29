'use client';
import Link from "next/link";
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 text-gray-900 px-4 py-12">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          My Projects
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid gap-8 sm:grid-cols-2 w-full"
        >

          {/* EXAMPLE: Project Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none" />
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">EXAMPLE: Ozone Forecasting App</h2>
            <p className="text-sm text-gray-700 mb-4">
              A machine learning-based forecasting app that predicts O3 and NO2 levels using weather and air quality data.
            </p>
            <a
              href="https://github.com/jernobeuker0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-full font-medium shadow-md transition-colors"
            >
              View on GitHub
            </a>
          </div>

          {/* Add more project cards here as needed */}
        </motion.div>

        <Link
          href="/"
          className="mt-8 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
