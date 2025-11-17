import React from "react";
import "./LatestProducts.css";

const products = [
  {
    id: 1,
    img: "https://i.imgur.com/Vq1ZC8K.png",
    title: "LEXIN JP-630C PAPER SHREDDER",
    stock: "In stock",
  },
  {
    id: 2,
    img: "https://i.imgur.com/4H9S8z7.png",
    title: "BenQ MS550 3600 Lumens SVGA Business Projector",
    stock: "In stock",
  },
  {
    id: 3,
    img: "https://i.imgur.com/Ab4pPfT.png",
    title: "MSI M99 Wired RGB Ergonomic Gaming Mouse",
    stock: "In stock",
    badge: "-17%",
  },
  {
    id: 4,
    img: "https://i.imgur.com/8ZC6bqI.png",
    title: "ASTHA UV-106M10 FAKE NOTE DETECTOR MACHINE",
    stock: "In stock",
  },
  {
    id: 5,
    img: "https://i.imgur.com/rnbMpAb.png",
    title: "MSI Modern 14 C11M 11th Gen Intel Core i7",
    stock: "Available on backorder",
  },
];

export default function LatestProducts() {
  return (
    <div className="latest-container">
      <h2 className="latest-title">Latest Products</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            {item.badge && <span className="badge">{item.badge}</span>}

            <div className="image-box">
              <img src={item.img} alt={item.title} />
            </div>

            <h3 className="product-title">{item.title}</h3>

            <p className="stock">
              ✔ <span>{item.stock}</span>
            </p>

            <p className="price-text">Call for Price</p>

            <button className="add-btn">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
