import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Skill from "./component/Skill";
import About from "./component/About";
import Footer from "./component/Footer";

export default function App() {
  return (
    <>
      <main>
        <Navbar />
        <Home />
        <Projects />
        <Skill />
        <About />
        <Footer />
      </main>
    </>
  );
}
