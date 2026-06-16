import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import ShopWithUs from "./component/ShopWithUs";
import NewArrival from "./component/NewArrival";
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ShopWithUs />
        <NewArrival />
        <Features />
      </main>
    </>
  );
};

export default App;
