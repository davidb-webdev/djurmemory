import { useState } from "react";
import "../styles/card.css";

type CardProps = {
  imageUrl: string;
};

export const Card = ({ imageUrl }: CardProps) => {
  const [flippedCard, setFlippedCard] = useState(false);
  console.log(imageUrl);

  return (
    <div
      className="container"
      onClick={() => {
        setFlippedCard(true);
      }}
    >
      <div className="card-container">
        <div className={flippedCard ? "flipped card" : "card"}>
          <div className="front-card"></div>
          <div
            className="back-card"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
