import React from "react"
import './App.css'
// import beginner from "../public/beginner.jpg"
// import intermediate from "../public/intermediate.jpg"
// import advanced from "../public/advanced.jpg"
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import RootLayout from "./layouts/RootLayout"
// import Beginner from "./layouts/Beginner"
// import Intermediate from "./layouts/Intermediate"
// import Advanced from "./layouts/Advanced"

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route path="/beginner" element={<Beginner />} />
//       <Route path="/intermediate" element={<Intermediate />} />
//       <Route path="/advanced" element={<Advanced/>}/>
//     </Route>
//   )
// )


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
