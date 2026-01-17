import { section } from "framer-motion/client";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <section id="projects" className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
    <div className="flex gap-4">
      <ProjectCard 
        imgSrc={"./src/assets/weather-app.png"}
        title="Weather-App"
        description="A clean weather app built with React and Tailwind."
        url={"https://weatherappsuren.vercel.app/"}
      />

      <ProjectCard 
        imgSrc={"./src/assets/date-time-app.png"}
        title="Date-Time-App"
        description="A clean date-time app built with React and Tailwind."
        url={"https://datetimeappsuren.vercel.app"}
      />

      <ProjectCard 
        imgSrc={"./src/assets/login-page.png"}
        title="Login-Form"
        description="Login form built with React and Tailwind."
        url={"https://loginformreacttailwind.vercel.app/"}
      />
    </div>
    </section>
  );
}