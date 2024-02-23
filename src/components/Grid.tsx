import { getAnimals } from '../services/animalServices';
import '../styles/Grid.css';
import { useState } from 'react';
import { Card } from './Card';
import { IAnimal } from '../models/IAnimal';

export const Grid = () => {
  const [number, setNumber] = useState('')
  const [animalArray, setAnimalArray] = useState<IAnimal[]>([]);

  const handleButtonClick = async () => {
    const response = await getAnimals(number.toString());
    setAnimalArray(response.data);
  };

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleButtonClick();
        setNumber('');
      }}>
        <input 
        type="number" 
        placeholder='Pick amount of cards'
        onChange={(e) => { setNumber(e.target.value) }}
        value={number}
        />
        <button>Get cards</button>
      </form>
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
    </>
  );
};
