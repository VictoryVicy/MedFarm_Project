import "./App.css";
import Navbar from "./component/Navbar";
import Beranda from "./component/Beranda";
import Projects from "./component/Projects";
import Skill from "./component/Skill";
import About from "./component/About";
import Footer from "./component/Footer";

export default function App() {
  return (
    <>
      <main>
        <Navbar />
        <Beranda />
        <Projects />
        <Skill />
        <About />
        <Footer />
      </main>
    </>
  );
}
