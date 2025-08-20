import "./App.css";
import Contact from "./sections/Contact/Contact.jsx";
import Hero from "./sections/Hero/Hero.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Skills from "./sections/Skills/Skills.jsx";
import Footer from "./sections/Footer/Footer.jsx";
import Navbar from "./sections/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
