import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VDVDProject from "./page/VDVDProject";
import LGUProject from "./page/LGUProject";
import SSAProject from "./page/SSAProject";

function App() {
  return (
    <Router>
      <div className="font-sans bg-black text-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <TechStack />
                <Contact />
              </>
            } 
          />
          <Route path="/project/vendo-dito-vendo-doon" element={<VDVDProject />} />
          <Route path="/project/sustainable-smart-agri" element={<SSAProject />} />
          <Route path="/project/lgu-scholar" element={<LGUProject />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
