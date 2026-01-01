import { motion } from "framer-motion";

export default function Mycareer() {
  const items = [
    { title: "High School", text: "Majored in science and built strong analytical skills." },
    { title: "Bachelor’s in Food Technology", text: "Learned food safety, GMP, and HACCP." },
    { title: "Quality Control Officer", text: "Worked in food processing industry for 2 years." },
    { title: "React Developer Journey", text: "Started building learner-friendly resources." },
    { title: "Future Vision", text: "Plan to establish my own food & restaurant company." },
  ];

  return (
    <section id="career" className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">My Career</h2>
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
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}