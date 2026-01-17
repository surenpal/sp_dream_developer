export default function Navbar() {
  return (
    <nav className="w-full h-16 p-4 bg-gray-200 shadow-md fixed top-0 left- z-50 text-xl font-semibold text-lavender-600">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-lavender-600">Suren Pal</h1>
        <div className="space-x-6">
          <a  href="#about">About</a>
          <a  href="#skills">Skills</a>
          <a  href="#projects">Projects</a>
          <a  href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}