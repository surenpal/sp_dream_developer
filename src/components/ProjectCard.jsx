export default function ProjectCard({ title, description, url }) {
  return (
    <div className="w-64 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <div className="overflow-hidden">
        <img
          src={imgSrc}
          className="w-full h-40 object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 opacity-0 transition dur">
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline mt-2 inline-block"
        >
          Visit Project
        </a>

      </div>
    </div>
  );
}