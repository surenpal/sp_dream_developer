import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MyCareer from "./components/MyCareer";

export default function App() {
  return (
    <div className="bg-gray-400 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <MyCareer />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}