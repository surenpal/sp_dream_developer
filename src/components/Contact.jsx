export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 text-center bg-gray-50"
    >
      <h2 className="text-4xl font-extrabold text-green-600 mb-6 text-shadow-md">
        Contact
      </h2>

      <p className="text-gray-700 text-lg mb-8">
        Feel free to reach out for collaboration or questions.
      </p>

      <a
        href="mailto:example@email.com"
        className="px-8 py-3 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-700 hover:shadow-xl transition-all duration-300"
      >
        Email Me
      </a>
    </section>
  );
}