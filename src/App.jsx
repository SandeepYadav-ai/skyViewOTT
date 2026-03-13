
import SkyviewSeries from "./components/SkyviewSeries";
// import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "./components/SkyviewSeries.css"

export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">Tranding movies</h1>
    <SkyviewSeries />
    </section>
  );
};

// function App() {
//   return React.createElement("button", null, "click me!");
// };

export default App;
