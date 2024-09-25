// src/App.tsx
import React from "react";
import TazaComponent from "./components/TazaComponent";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Simulador de Taza</h1>
      <TazaComponent />
    </div>
  );
};

export default App;
