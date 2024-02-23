import { getAnimals } from "../services/animalServices";
import "../styles/Grid.css";
import { useState } from "react";
import { Card } from "./Card";
import { IAnimal } from "../models/IAnimal";

export const Grid = () => {
  const numberOfPairs = 6;
  const [animalArray, setAnimalArray] = useState<IAnimal[]>([]);

  const handleButtonClick = async () => {
    const response = await getAnimals(numberOfPairs);
    console.log(response.data);

    setAnimalArray(response.data);
  };

  return (
    <>
      <div className="grid">
        {animalArray.map((animal) => {
          return (
            <>
              <Card imageUrl={animal.url}></Card>
              <Card imageUrl={animal.url}></Card>
            </>
          );
        })}
      </div>
      <button onClick={handleButtonClick}>Get cards</button>
    </>
  );
};
