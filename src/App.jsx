
import SkyviewSeries from "./components/SkyviewSeries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

// import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "./components/SkyviewSeries.css"
// import Home from "./pages/Home";
// import Movies from "./pages/Movies";
// import Series from "./pages/Series";
import Anime from "./pages/Anime";
// import Kids from "./pages/Kids";

export const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <h1 className="card-heading">Trending Movies</h1>
              <SkyviewSeries />
            </>
          } />
          {/* <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} /> */}
          <Route path="/anime" element={<Anime />} />
          {/* <Route path="/kids" element={<Kids />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

// function App() {
//   return React.createElement("button", null, "click me!");
// };

export default App;
