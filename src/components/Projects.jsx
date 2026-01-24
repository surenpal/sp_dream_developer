import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <section
      id="projects"
      className="w-full py-24 px-6 text-center bg-gray-50"
    >
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
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