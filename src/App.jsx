import "./App.css";
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
