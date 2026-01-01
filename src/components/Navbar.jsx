export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Suren Pal</h1>
        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}