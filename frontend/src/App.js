import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Professors from "./pages/Professors";
import Departments from "./pages/Departments";
// import Professors from "./pages/test";

function App() {
  return (
    <div class="">
      <BrowserRouter>
        <Navbar />
        <div className="overflow-y-scroll no-scrollbar">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/professors" element={<Professors />} />
            <Route path="/departments" element={<Departments />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
