import "./App.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import Contact from "./pages/contact/contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden  tracking-wide">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
