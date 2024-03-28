import React from "react"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Beginner from "./layouts/Beginner";
import Intermediate from "./layouts/Intermediate";
import Advanced from "./layouts/Advanced";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/advanced" element={<Advanced />} />
      </Routes>
    </Router>
  );
}
