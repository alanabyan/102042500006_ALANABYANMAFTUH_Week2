import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <main>
      {/* Hero menempel di layar (sticky), .sheet naik menimpanya saat di-scroll */}
      <Hero />
      <div className="sheet">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
