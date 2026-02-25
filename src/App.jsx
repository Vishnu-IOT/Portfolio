
import Navbar from './components/Navbar';
import CanvasContainer from './components/CanvasContainer';
import Hero3D from './components/Hero3D';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative text-white">
      <CanvasContainer>
        <Hero3D />
      </CanvasContainer>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
