import "../styles/Grid.css";
import { useState } from "react";

export const Grid = () => {
  const numberOfCards = 12;

  const [animalArray, setAnimalArray] = useState([
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
  ]);

  return (
    <div className="grid">
      {animalArray.map((animal) => {
        return <div className="card">{animal}</div>;
      })}
    </div>
  );
};
