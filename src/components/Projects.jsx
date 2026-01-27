import ProjectCard from "./ProjectCard";
import weatherImg from "../assets/weather-app.png";
import dateTimeImg from "../assets/date-time-app.png";
import loginImg from "../assets/login-page.png";

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
          imgSrc={weatherImg}
          title="Weather-App"
          description="A clean weather app built with React and Tailwind."
          url="https://weatherappsuren.vercel.app/"
        />
        <ProjectCard
          imgSrc={dateTimeImg}
          title="Date-Time-App"
          description="A clean date-time app built with React and Tailwind."
        url="https://datetimeappsuren.vercel.app"
        />

        <ProjectCard
          imgSrc={my-calculaterImg}
          title="Calculater"
          description="Full calculater built with React and Tailwind."
          url="https://mycalculatersuren.vercel.app/"
        />
        

      </div>
    </section>
  );
}