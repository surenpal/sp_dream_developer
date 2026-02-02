import { motion } from "framer-motion";

export default function Mycareer() {
  const items = [
    { title: "Japanese Language School", text: "Learn Japanese language and culture at Nagoya Fukutoku Nihongo Gakuin" },
    { title: " 2 Year`s of college degree for IT", text: "Completed my 2 years IT course at Nagoya Future Technology College." },
    { title: "Sales Manager", text: "Strong communication and leadership skills." },
    { title: "React Developer Journey", text: "Started building learner-friendly resources." },
    { title: "Future Vision", text: "Plan to be a good Full Stack Developer." },
  ];

  return (
    <section id="career" className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center text-green-600 text-shadow-md">My Career</h2>
      <div className="space-y-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-green-500 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}