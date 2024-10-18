import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CardsHero from "./components/CardsHero";
import BrankaSection from "./components/BrankaSection";

function App() {
  return (
    <div>
      <Navbar />
    <HeroSection/>
    <CardsHero/>
    <BrankaSection/>
    </div>
  );
}

export default App;
