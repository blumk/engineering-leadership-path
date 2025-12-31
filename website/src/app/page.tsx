import Link from "next/link";

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

const roadmaps = [
  {
    title: "Engineering Manager",
    description:
      "Master the transition from IC to people leader. Build high-performing teams, run effective 1:1s, and develop your coaching skills.",
    href: "/engineering-manager",
    icon: icons.em,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Senior Engineering Manager",
    description:
      "Scale your impact across multiple teams. Navigate complex org dynamics, drive technical strategy, and grow other managers.",
    href: "/senior-engineering-manager",
    icon: icons.sem,
    gradient: "from-purple-500 to-pink-400",
  },
  {
    title: "Director",
    description:
      "Shape engineering culture and vision. Influence at the executive level, build organizations, and drive business outcomes.",
    href: "/director",
    icon: icons.director,
    gradient: "from-orange-500 to-red-400",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[800px] w-[1000px] rounded-full bg-gradient-to-b from-blue-500/20 via-purple-500/15 to-transparent blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 sm:py-32">

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Level Up Your
            <span className="block pb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Engineering Leadership
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400 sm:text-xl">
            Interactive roadmaps to guide your journey from Engineering Manager
            to Director. Learn the skills, frameworks, and mindsets that
            distinguish great engineering leaders.
          </p>
        </div>
      </section>

      {/* Roadmap Cards Section */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-2xl font-semibold text-gray-300">
            Choose Your Path
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {roadmaps.map((roadmap) => (
              <Link
                key={roadmap.title}
                href={roadmap.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151515] p-8 transition-all duration-300 hover:border-white/20 hover:bg-[#1a1a1a] hover:scale-[1.02]"
              >
                {/* Card gradient accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${roadmap.gradient}`}
                />

                <div className="mb-4">{roadmap.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {roadmap.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {roadmap.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
          <p>
            Built for engineering leaders, by engineering leaders.{" "}
            <a
              href="https://kenleads.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors underline underline-offset-2"
            >
              Read the blog
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
