"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";

interface Roadmap {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  gradient: string;
  pillars: string[];
}

const icons = {
  em: (
    <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
      <rect x="8" y="24" width="24" height="8" rx="2" className="fill-cyan-400" />
    </svg>
  ),
  sem: (
    <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
      <rect x="8" y="24" width="24" height="8" rx="2" className="fill-pink-400/50" />
      <rect x="8" y="13" width="24" height="8" rx="2" className="fill-pink-400" />
    </svg>
  ),
  director: (
    <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
      <rect x="8" y="24" width="24" height="8" rx="2" className="fill-orange-400/30" />
      <rect x="8" y="13" width="24" height="8" rx="2" className="fill-orange-400/60" />
      <rect x="8" y="2" width="24" height="8" rx="2" className="fill-orange-400" />
    </svg>
  ),
};

const roadmaps: Roadmap[] = [
  {
    title: "Engineering Manager",
    description:
      "Master the transition from IC to people leader. Build high-performing teams, run effective 1:1s, and develop your coaching skills.",
    href: "/engineering-manager",
    icon: icons.em,
    gradient: "from-blue-500 to-cyan-400",
    pillars: [
      "Team Building",
      "1:1s & Feedback",
      "Coaching & Growth",
      "Delivery Management",
      "Technical Credibility",
    ],
  },
  {
    title: "Senior Engineering Manager",
    description:
      "Scale your impact across multiple teams. Navigate complex org dynamics, drive technical strategy, and grow other managers.",
    href: "/senior-engineering-manager",
    icon: icons.sem,
    gradient: "from-purple-500 to-pink-400",
    pillars: [
      "Multi-Team Strategy",
      "Manager Development",
      "Cross-Org Influence",
      "System Design",
      "Stakeholder Management",
    ],
  },
  {
    title: "Director",
    description:
      "Shape engineering culture and vision. Influence at the executive level, build organizations, and drive business outcomes.",
    href: "/director",
    icon: icons.director,
    gradient: "from-orange-500 to-red-400",
    pillars: [
      "Org Design",
      "Executive Presence",
      "Culture & Vision",
      "Business Strategy",
      "Talent & Succession",
    ],
  },
];

function RoadmapCard({ roadmap }: { roadmap: Roadmap }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition-all duration-300 hover:border-white/20 hover:bg-[#1a1a1a]"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${roadmap.gradient}`}
      />

      <div className="p-8">
        <div className="mb-4">{roadmap.icon}</div>
        <h3 className="mb-3 text-xl font-bold text-white">{roadmap.title}</h3>
        <p className="text-gray-400 leading-relaxed">{roadmap.description}</p>

        {/* Pillars - revealed on hover */}
        <div
          className={`grid grid-cols-2 gap-2 overflow-hidden transition-all duration-300 ease-out ${
            isExpanded ? "mt-6 max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {roadmap.pillars.map((pillar, index) => (
            <div
              key={pillar}
              className={`flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 ${
                isExpanded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
              style={{
                transitionDelay: isExpanded ? `${index * 50}ms` : "0ms",
              }}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${roadmap.gradient}`}
              />
              {pillar}
            </div>
          ))}
        </div>

        <Link
          href={roadmap.href}
          className="mt-6 flex items-center text-sm font-medium text-gray-500 group-hover:text-white transition-colors"
        >
          Explore roadmap
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export function RoadmapCards() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-2xl font-semibold text-gray-300">
          Choose Your Path
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {roadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.title} roadmap={roadmap} />
          ))}
        </div>
      </div>
    </section>
  );
}
