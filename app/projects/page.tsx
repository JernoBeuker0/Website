'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] px-4 py-12">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-[#E6EDF3]"
        >
          My Projects
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid gap-8 sm:grid-cols-2 w-full"
        >
          {/* Game Card */}
          <div className="bg-[#F1D7CE] text-[#1A1A1A] rounded-xl border border-[#D4BFB8] shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-left relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 pointer-events-none" />
            <h2 className="text-2xl font-semibold mb-2">Godot Web Game</h2>
            <p className="text-sm text-[#332F2E] mb-4">
              A game made for GMTK Game Jam 2025, in collaboration with{' '}
              <a href="https://github.com/juliansprietsma" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Julian Sprietsma
              </a>,{' '}
              <a href="https://github.com/LucaDro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Luca Drouillet
              </a>, and{' '}
              <a href="https://github.com/mcozijn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Max Cozijn
              </a>.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com/juliansprietsma/GameJam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-[#21262D] hover:bg-[#30363D] text-[#E6EDF3] rounded-full font-medium shadow-md hover:shadow-lg transition-colors hover:ring-2 hover:ring-blue-500"
              >
                View on GitHub
              </a>
              <button
                onClick={() => setShowGame(!showGame)}
                className="inline-block px-5 py-2 bg-[#21262D] hover:bg-[#30363D] text-[#E6EDF3] rounded-full font-medium shadow-md hover:shadow-lg transition-colors hover:ring-2 hover:ring-blue-500"
              >
                {showGame ? '⏹ Stop Game' : '▶ Play Game'}
              </button>
            </div>
          </div>
        </motion.div>

        {showGame && (
          <div className="w-full max-w-5xl mt-8 aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="/Game/index.html"
              className="w-full h-full border-0"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <Link
          href="/"
          className="mt-8 px-6 py-3 bg-[#21262D] hover:bg-[#30363D] text-[#E6EDF3] rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:ring-2 hover:ring-blue-500"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}