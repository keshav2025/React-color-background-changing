import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  const handleColorChange = (newColor) => {
    document.body.style.backgroundColor = newColor;
    setColor(newColor);
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'></div>
      <div className='flex flex-wrap gap-3 shadow-lg big-white px-3 py-2 rounded-3xl'></div>
      <button
        onClick={() => handleColorChange("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "red" }}
      >
        Red
      </button>
      <button
        onClick={() => handleColorChange("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "green" }}
      >
        Green
      </button>
      <button
        onClick={() => handleColorChange("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "blue" }}
      >
        Blue
      </button>

      <button
        onClick={() => handleColorChange("yellow")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "yellow" }}
      >
        yellow
      </button>

      <button
        onClick={() => handleColorChange("pink")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "pink" }}
      >
        pink
      </button>
      {/* Additional color buttons */}
    </div>
  );
}

