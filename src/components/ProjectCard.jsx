export default function ProjectCard({ title, description, url, imgSrc }) {
  return (
    <div className="w-64 bg-white rounded-xl overflow-hidden shadow-md">
      <div className="overflow-hidden">
        <img
          src={imgSrc}
          className="w-full h-40 object-contain transition duration-300 hover:scale-110 pt-5"
        />
      </div>

      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold">{title}</h2>

        <p className="text-sm text-gray-600 mt-2">
          {description}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline mt-3 inline-block"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
}