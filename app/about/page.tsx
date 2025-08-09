"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ---- Types ----
type TimelineItem = {
  type: "work" | "edu"; // work on left, edu on right
  title: string;
  org: string;
  period: string; // e.g., "2024 — present" or "2016 — 2022"
  points?: string[];
};

type ParsedPeriod = { start: number; end?: number };

// ---- Data ----
const timeline: TimelineItem[] = [
  {
    type: "work",
    title: "Returns & Repairs Specialist",
    org: "Belsimpel · Gomibo Group",
    period: "2024 — present",
    points: [
      "Customer-focused diagnostics and handling of device returns/repairs.",
      "Worked across teams to streamline case resolution and communication.",
    ],
  },
  {
    type: "work",
    title: "Produce Aisle Supervisor",
    org: "Poiesz Supermarket",
    period: "2022 — 2024",
    points: [
      "Led produce section operations and mentored new student workers.",
      "Maintained freshness, stock rotation, and daily planning.",
    ],
  },
  {
    type: "work",
    title: "Stock Filler (Groceries & Dairy)",
    org: "Poiesz Supermarket",
    period: "2020 — 2022",
    points: [
      "Kept shelves organised and ensured product availability.",
      "Developed a strong eye for detail and teamwork mindset.",
    ],
  },
  {
    type: "edu",
    title: "BSc Artificial Intelligence",
    org: "University of Groningen (RUG)",
    period: "2022 — present",
    points: [
      "Active member of Cover (study association).",
      "Notable courses: Machine Learning, Reinforcement Learning, NLP, Robotics, Advanced Logic.",
    ],
  },
  {
    type: "edu",
    title: "VWO (High School)",
    org: "Het Drachtster Lyceum",
    period: "2016 — 2022",
    points: ["Graduated with a broad STEM foundation ready for AI studies."],
  },
];

// ---- Helpers ----
function parsePeriod(p: string): ParsedPeriod {
  const normalized = p
    .replace(/present/i, String(new Date().getFullYear()))
    .replace(/\u2013|\u2014|—|–/g, "-");
  const match = normalized.match(/(\d{4})\s*-\s*(\d{4})?/);
  if (!match) return { start: 0 };
  const start = Number(match[1]);
  const end = match[2] ? Number(match[2]) : undefined;
  return { start, end };
}

function sortByStartDesc(a: TimelineItem, b: TimelineItem): number {
  const pa = parsePeriod(a.period);
  const pb = parsePeriod(b.period);
  if (pb.start !== pa.start) return pb.start - pa.start; // newer first
  const ea = pa.end ?? 9999;
  const eb = pb.end ?? 9999;
  return eb - ea;
}

export default function AboutPage() {
  const items = React.useMemo(() => [...timeline].sort(sortByStartDesc), []);

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] px-4 py-12 flex items-center justify-center">
      <div className="max-w-5xl w-full text-center flex flex-col items-center gap-10">
        {/* Intro */}
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl font-bold">About Me</motion.h1>
        <Image src="/Mee.jpeg" alt="Profile picture" width={128} height={128} className="rounded-full object-cover w-32 h-32 shadow-md" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-lg text-[#C9D1D9] max-w-xl">I'm Jerno Beuker, a student of Artificial Intelligence BSc at the University of Groningen. In my spare time, I like to play the guitar, go bouldering, and play chess. I also am active for my study association, Cover.</motion.p>

        {/* Timeline */}
        <section aria-label="Timeline" className="w-full mt-6">
          <div className="relative mx-auto max-w-5xl">
            {/* Vertical center line */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-[#F1D7CE] opacity-70" />

            <ul className="space-y-6 md:space-y-8">
              {items.map((item, idx) => {
                const isLeft = item.type === "work"; // work left, edu right
                const year = parsePeriod(item.period).start;
                const prev = items[idx - 1];
                const prevYear = prev ? parsePeriod(prev.period).start : undefined;
                const prevIsLeft = prev ? prev.type === "work" : undefined;

                // Overlap more when sides alternate
                const overlapClass = prev && prevIsLeft !== isLeft ? "md:-mt-24 lg:-mt-28" : "";
                const showYear = idx === 0 || year !== prevYear;

                return (
                  <React.Fragment key={`${item.title}-${idx}`}>
                    <li className={`relative ${overlapClass}`}>
                      {/* Year pill tightly above the dot */}
                      {showYear && (
                        <div className="absolute left-1/2 -translate-x-1/2 -top-10 z-10">
                          <span className="inline-block px-3 py-1 rounded-full bg-[#0D1117] border border-[#30363D] text-sm text-[#9BA3AF]">
                            {year}
                          </span>
                        </div>
                      )}

                      {/* Dot */}
                      <span className="absolute left-1/2 -translate-x-1/2 -top-2 block h-4 w-4 rounded-full border-2 border-[#1A1A1A] bg-[#F1D7CE] shadow-md" />

                      {/* 9-col grid: 1-4 left, 5 line, 6-9 right */}
                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.02 * idx }}
                        className="md:grid md:grid-cols-9 items-start"
                      >
                        <div className="hidden md:flex md:col-start-1 md:col-end-5 justify-end pr-8">
                          {isLeft && <TimelineCard item={item} align="left" />}
                        </div>
                        <div className="hidden md:flex md:col-start-6 md:col-end-10 justify-start pl-8">
                          {!isLeft && <TimelineCard item={item} align="right" />}
                        </div>
                        <div className="md:hidden col-span-9">
                          <TimelineCard item={item} align="mobile" />
                        </div>
                      </motion.div>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Actions below timeline */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center gap-4 mt-10">
          <Link href="/projects" className="px-6 py-3 bg-[#F1D7CE] text-[#1A1A1A] border border-[#D4BFB8] hover:ring-2 hover:ring-blue-500 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300">View Projects</Link>
          <Link href="/" className="px-6 py-3 bg-[#21262D] hover:bg-[#30363D] text-[#E6EDF3] rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:ring-2 hover:ring-blue-500">Back to Home</Link>
        </motion.div>
      </div>
    </div>
  );
}

function TimelineCard({ item, align }: { item: TimelineItem; align: "left" | "right" | "mobile" }) {
  const badge = item.type === "work" ? "Work" : "Education";
  const base = "relative rounded-2xl bg-[#161B22] border border-[#30363D] p-6 shadow-lg text-left w-full max-w-md";
  const arrowBase = "hidden md:block absolute top-6 w-0 h-0 border-y-[10px] border-y-transparent";
  const arrowLeft = "-right-2 border-l-[10px] border-l-[#161B22]";
  const arrowRight = "-left-2 border-r-[10px] border-r-[#161B22]";
  return (
    <div className={base}>
      {align === "left" && <span className={`${arrowBase} ${arrowLeft}`} aria-hidden />}
      {align === "right" && <span className={`${arrowBase} ${arrowRight}`} aria-hidden />}
      <div className="flex items-center gap-3 mb-3">
        <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full border ${item.type === "work" ? "bg-[#0D1117] border-[#F1D7CE] text-[#F1D7CE]" : "bg-[#0D1117] border-blue-400 text-blue-300"}`}>{badge}</span>
        <span className="text-sm text-[#9BA3AF]">{item.period}</span>
      </div>
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="text-[#C9D1D9] mb-3">{item.org}</p>
      {item.points && (<ul className="list-disc list-inside space-y-1 text-[#C9D1D9]">{item.points.map((p, i) => (<li key={i}>{p}</li>))}</ul>)}
    </div>
  );
}