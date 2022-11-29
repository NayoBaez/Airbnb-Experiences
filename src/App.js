import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Data from "./Data";

import "./App.css";

function App() {
  console.log(Data);
  const cards = Data.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
