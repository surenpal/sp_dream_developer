import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="flex gap-4">
      <ProjectCard 
        title="Portfolio Website"
        description="A modern portfolio built with React and Tailwind."
      />

      <ProjectCard 
        title="Food Safety App"
        description="A tool for tracking HACCP and GMP compliance."
      />
    </div>

    </section>
  );
}