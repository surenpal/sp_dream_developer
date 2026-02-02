import MyCareer from "./MyCareer";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-24 px-6 text-center bg-gray-50"
    >
      <h2 className="text-4xl font-extrabold text-green-800 mb-6 text-shadow-md">
        About Me
      </h2>

      <p className="text-gray-700 leading-relaxed text-lg mb-10">
        I am a React developer who loves building learner-friendly resources.
        I enjoy simplifying complex topics and creating clean,<br /> scalable
        projects for teaching and real-world use.
      </p>

      <MyCareer />
    </section>
  );
}