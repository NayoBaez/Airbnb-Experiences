import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";
import data from "./data";

import "./App.css";

function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
  );
}

export default App;
