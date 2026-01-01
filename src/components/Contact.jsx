export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-700 mb-6">
        Feel free to reach out for collaboration or questions.
      </p>

      <a
        href="mailto:example@email.com"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Email Me
      </a>
    </section>
  );
}