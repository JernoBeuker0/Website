"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] px-4 py-12 flex items-center justify-center">
      <div className="max-w-3xl w-full text-center flex flex-col items-center gap-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-[#E6EDF3]"
        >
          About Me
        </motion.h1>

        <Image
            src="/Mee.jpeg"
            alt="Profile picture"
            width={128}
            height={128}
            className="rounded-full object-cover w-32 h-32 shadow-md"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-[#C9D1D9] max-w-xl"
        >
          I'm Jerno Beuker, a student of Artificial Intelligence BSc at the University of Groningen. In my spare time, I like to play the guitar, go bouldering, and play chess. I also am active for my study association, Cover. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="px-6 py-3 bg-[#F1D7CE] text-[#1A1A1A] border border-[#D4BFB8] hover:ring-2 hover:ring-blue-500 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            View Projects
          </Link>

          <Link
            href="/"
            className="px-6 py-3 bg-[#21262D] hover:bg-[#30363D] text-[#E6EDF3] rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:ring-2 hover:ring-blue-500"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}