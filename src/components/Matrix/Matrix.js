
import React, { useState } from 'react';
import './Matrix.css';

const Matrix = () => {
  const [colors, setColors] = useState(Array(9).fill('white'));
  const [clickSequence, setClickSequence] = useState([]);

  const handleClick = (index) => {
    if (colors[index] === 'white') {
      const newColors = [...colors];
      newColors[index] = 'green';
      setColors(newColors);

      setClickSequence([...clickSequence, index]);

      if (index === 8) {
        changeToOrange();
      }
    }
  };

  const changeToOrange = () => {
    clickSequence.forEach((index, i) => {
      setTimeout(() => {
        const newColors = [...colors];
        newColors[index] = 'orange';
        setColors(newColors);
      }, i * 500);
    });
  };

  return (
    <div className="matrix">
      {colors.map((color, index) => (
        <button
          key={index}
          className="cell"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        ></button>
      ))}
    </div>
  );
};

export default Matrix;
