import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="min-h-[70vh]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
