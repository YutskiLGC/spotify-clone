import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Contributions from "./Contributions";
import About from "./About";
import Support from "./Support";

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contributions" element={<Contributions />} />
          <Route exact path="/About" element={<About />}/>
          <Route exact path="/Support" element={<Support />}/>
        </Routes>
      </main>
    </Router>
  );
}
