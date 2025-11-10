import React from "react";
import "./Cards.css";

const cardData = [
  {
    title: "Card 1",
    text: "This is the first card description.",
  },
  {
    title: "Card 2",
    text: "This is the second card description.",
  },
  {
    title: "Card 3",
    text: "This is the third card description.",
  },
  {
    title: "Card 4",
    text: "This is the fourth card description.",
  },
];

const Cards = () => {
  return (
    <section className="cards-section">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Cards;
