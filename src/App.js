import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./Service/Service";
import Contact from "./Contact/Contact";
import Loginform from "./LoginForm/Loginform";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Loginform />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
