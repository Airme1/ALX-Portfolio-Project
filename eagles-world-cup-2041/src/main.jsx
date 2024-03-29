import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import router from './Router.jsx'



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Beginner from "./layouts/beginner/Beginner";
import Intermediate from "./layouts/intermediate/Intermediate";
import Advanced from "./layouts/advanced/Advanced";
import BeginnerPass from "./layouts/beginner/BeginnerPass";
import BeginnerShoot from "./layouts/beginner/BeginnerShoot";
import BeginnerControl from "./layouts/beginner/BeginnerControl";
import BeginnerDribble from "./layouts/beginner/BeginnerDribble";
import IntermediateControl from "./layouts/intermediate/IntermediateControl";
import IntermediateDribble from "./layouts/intermediate/IntermediateDribble";
import IntermediateShoot from "./layouts/intermediate/IntermediateShoot";
import IntermediatePass from "./layouts/intermediate/IntermediatePass";
import AdvancedControl from "./layouts/advanced/AdvancedControl";
import AdvancedPass from "./layouts/advanced/AdvancedPass";
import AdvancedShoot from "./layouts/advanced/AdvancedShoot";
import AdvancedDribble from "./layouts/advanced/AdvancedDribble";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />} />
        <Route path="beginner" element={<Beginner />} />
        <Route path="beginner/passing" element={<BeginnerPass />} />
        <Route path="beginner/shoot" element={<BeginnerShoot />} />
        <Route path="beginner/control" element={<BeginnerControl />} />
        <Route path="beginner/dribble" element={<BeginnerDribble />} />
        <Route path="intermediate" element={<Intermediate />} />
        <Route path="intermediate/passing" element={<IntermediatePass />} />
        <Route path="intermediate/shoot" element={<IntermediateShoot />} />
        <Route path="intermediate/control" element={<IntermediateControl />} />
        <Route path="intermediate/dribble" element={<IntermediateDribble />} />
        <Route path="advanced" element={<Advanced />} />
        <Route path="advanced/passing" element={<AdvancedPass />} />
        <Route path="advanced/shoot" element={<AdvancedShoot />} />
        <Route path="advanced/control" element={<AdvancedControl />} />
        <Route path="advanced/dribble" element={<AdvancedDribble />} />
      </Routes>
    </Router>
  </React.StrictMode >
)