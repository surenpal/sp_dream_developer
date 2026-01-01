import AnimatedCard from "./AnimatedCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="flex flex-wrap gap-8 justify-center">
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
      </div>
    </section>
  );
}