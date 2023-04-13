import React, { useState } from 'react';
import './App.css';

function App() {
  const [colors, setColors] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const isValidHex = (hex) => {
    if (hex.length !== 4 && hex.length !== 7) {
      return false;
    }

    if (hex[0] !== '#') {
      return false;
    }

    const validCharacters = '0123456789ABCDEFabcdef';

    for (let i = 1; i < hex.length; i++) {
      if (!validCharacters.includes(hex[i])) {
        return false;
      }
    }

    return true;
  };
  const addColor = (e) => {
    e.preventDefault();
    //const isValidHex = /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(inputValue);

    if (isValidHex(inputValue)) {
      setColors([...colors, inputValue]);
      setInputValue('');
      setError('');
    } else {
      setError('Invalid color code. Please enter a valid HEX code (e.g., #FF5733).');
    }
  };

  const clearPalette = () => {
    setColors([]);
  };

  return (
    <div className="App">
      <h1>Color Palette Picker</h1>
      <form onSubmit={addColor}>
        <input
          type="text"
          placeholder="Enter a HEX color code"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Color</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <button onClick={clearPalette}>Clear Palette</button>
    </div>
  );
}

export default App;
