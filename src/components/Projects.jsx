import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className="flex gap-4">
      <ProjectCard 
        imgSrc={"./src/assets/weather-app.png"}
        title="Weather-App"
        description="A clean portfolio built with React and Tailwind."
        url={"https://weatherappsuren.vercel.app/"}
      />

      <ProjectCard 
        imgSrc={"./src/assets/date-time-app.png"}
        title="Date-Time-App"
        description="A clean portfolio built with React and Tailwind."
        url={"https://datetimeappsuren.vercel.app"}
      />
    </div>
  );
}