// src/components/TextToSpeech.tsx
import React from "react";

interface TextToSpeechProps {
  text: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
  const handleSpeech = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return <button onClick={handleSpeech}>Leer en voz alta</button>;
};

export default TextToSpeech;
