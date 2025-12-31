import { Hero } from "./Hero";
import { RoadmapCards } from "./RoadmapCard";
import { Footer } from "./Footer";

export function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[800px] w-[1000px] rounded-full bg-gradient-to-b from-blue-500/20 via-purple-500/15 to-transparent blur-3xl" />
      </div>

      <Hero />
      <RoadmapCards />
      <Footer />
    </main>
  );
}
