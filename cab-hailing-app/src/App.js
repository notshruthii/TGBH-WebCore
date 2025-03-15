// src/App.js
import React from "react";
import MapComponent from "./MapComponent";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <h1 style={{ textAlign: "center" }}>Cab Hailing App</h1>
      <MapComponent />
    </div>
  );
}

export default App;
