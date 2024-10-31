// src/components/TazaComponent.tsx
import React, { useState } from "react";
import Taza from "./Taza"; // Importamos la clase Taza
import TextToSpeech from "./TextToSpeech"; // Importamos el componente de Texto a Voz

const TazaComponent: React.FC = () => {
  // Creamos una instancia de la clase Taza CANTIDAD ACTUAL
  const [miTaza] = useState(new Taza(250, "Café", 200));
  const [cantidad, setCantidad] = useState(miTaza.obtenerCantidad());

  // Funciones para interactuar con la taza
  const handleLlenar = () => {
    miTaza.llenar(50);
    setCantidad(miTaza.obtenerCantidad());
  };

  const handleBeber = () => {
    miTaza.beber(50);
    setCantidad(miTaza.obtenerCantidad());
  };

  const handleVaciar = () => {
    miTaza.vaciar();
    setCantidad(miTaza.obtenerCantidad());
  };

  // Texto para leer en voz alta
  const textoParaLeer = `Mi taza de ${miTaza.obtenerLiquido()} tiene actualmente ${cantidad} mililitros.`;

  return (
    <div>
      <h2>Mi Taza de {miTaza.obtenerLiquido()}</h2>
      <p>Capacidad: 250 ml</p>
      <p>Cantidad actual: {cantidad} ml</p>

      <button onClick={handleLlenar}>Llenar 50ml</button>
      <button onClick={handleBeber}>Beber 50ml</button>
      <button onClick={handleVaciar}>Vaciar Taza</button>

      {/* Agregamos el componente de Texto a Voz */}
      <TextToSpeech text={textoParaLeer} />
    </div>
  );
};

export default TazaComponent;
