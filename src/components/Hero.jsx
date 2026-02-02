export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50">
      <h1 className="text-5xl font-extrabold mb-4 text-green-600">
        Hi, I'm Suren Pal
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Good Learner • React Developer • Full Stack Developer
      </p>

      <a
        href="#projects"
        className="px-8 py-3 bg-pink-400 text-white rounded-lg shadow-lg hover:bg-pink-600 hover:shadow-xl transition-all duration-300"
      >
        Upcoming Projects
      </a>
    </section>
  );
}