// src/ColorPicker.js
import React, { useState } from 'react';

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

const App = () => {
  const [bgColor, setBgColor] = useState("black");

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', padding: '20px' }}>
      <h1 className='text-white'> Pick a color to change the background</h1>
      <div>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleColorChange(color)}
            style={{
              backgroundColor: color,
              color: 'white',
              margin: '5px',
              padding: '10px',
              border: 'none',
              cursor: 'pointer',
              borderRadius:'9px',
            
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
