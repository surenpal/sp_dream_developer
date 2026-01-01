export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Surendra</h1>
      <p className="text-lg text-gray-600 mb-6">
        Food Technologist • React Developer • Educator
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}