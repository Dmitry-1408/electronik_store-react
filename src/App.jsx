//import React from "react";
import "./index.css"

const productData = [
  {
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display.",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
  {
    name: "Smartwatch Z",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 150,
    photoName: "/smartwatch.png",
    soldOut: false,
  },
  {
    name: "Gaming Console",
    description: "Powerful gaming console for endless fun.",
    price: 400,
    photoName: "/console.png",
    soldOut: true,
  },
  {
    name: "4K TV",
    description: "Ultra HD television with vibrant colors.",
    price: 1000,
    photoName: "/tv.png",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  const hour = new Date().getHours();
  const openHours = 9; // начало работы
  const closeHours = 21; // окнчание работы

  let isOpen = hour >= openHours && hour <= closeHours; // режим работы

  return (
    <header className="header">
      <h1>Electronik Store</h1>
      <nav className="nav">
        <ul>
          <li>
            Home
            <a href="#home"></a>
          </li>
          <li>
            Catalog
            <a href="#catalog"></a>
          </li>
          <li>
            About Us
            <a href="#about"></a>
          </li>
          <li>
            Contact
            <a href="#contact"></a>
          </li>
        </ul>
      </nav>
      <div className="working-hours">
        {isOpen ? (
          <p>
            We are currently open. Horus: {openHours}:00 - {closeHours}:00
          </p>
        ) : (
          <p>
            We are closed. Horus: {openHours}:00 - {closeHours}:00
          </p>
        )}
      </div>
    </header>
  );
}

function Catalog() {
  return (
    <main className="catalog">
      <ul className="products">
        <Product />
      </ul>
    </main>
  );
}

function Product() {
  const products = [...productData];

  return (
    <li className="product">
      <img src={products[1].photoName} alt={products[1].name} />
      <div>
        <h3>{products[1].name}</h3>
        <p>{products[1].description}</p>
        <span>{products[1].price}</span>
      </div>
    </li>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}
