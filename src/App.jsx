import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Produk from "./pages/Produk";
import "./App.css";
import Penyakit from "./pages/Penyakit";
import Layanan from "./pages/Layanan";
import Lokasi from "./pages/Lokasi";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda/>} />
        <Route path="/produk" element={<Produk/>} />
        <Route path="/layanan" element={<Layanan/>} />
        <Route path="/temukan-penyakit" element={<Penyakit/>} />
        <Route path="/lokasi" element={<Lokasi/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);