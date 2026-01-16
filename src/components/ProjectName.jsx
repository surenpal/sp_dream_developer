
export default function AnimatedCard() {
  return (
    <div className="w-64 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <div className="overflow-hidden">
        <img
          src="https://picsum.photos/300"
          className="w-full h-40 object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">Project title</h2>
        <p className="text-sm text-gray-600 opacity-0 transition duration-300 hover:opacity-100">
          Projects will be added here
        </p>
      </div>
    </div>
  );
}