import React, { useState } from "react";
import "./Matrix.css";

const Matrix = () => {
  const [clicked, setClicked] = useState(Array(9).fill(null));
  const [order, setOrder] = useState([]);

  const handleClick = (index) => {
    if (clicked[index] !== null) return;

    const newClicked = [...clicked];
    newClicked[index] = "green";
    setClicked(newClicked);
    setOrder([...order, index]);

    if (order.length === 8) {
      setTimeout(() => {
        const newOrderClicked = [...clicked];
        order.forEach((idx, i) => {
          setTimeout(() => {
            newOrderClicked[idx] = "orange";
            setClicked([...newOrderClicked]);
          }, i * 300);
        });
        setTimeout(() => {
          newOrderClicked[index] = "orange";
          setClicked([...newOrderClicked]);
        }, order.length * 300);
      }, 300);
    }
  };

  return (
    <div className="matrix">
      {clicked.map((color, i) => (
        <div
          key={i}
          className="box"
          style={{ backgroundColor: color || "gray" }}
          onClick={() => handleClick(i)}
        />
      ))}
    </div>
  );
};

export default Matrix;
