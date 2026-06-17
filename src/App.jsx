import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import ShopWithUs from "./component/ShopWithUs";
import NewArrival from "./component/NewArrival";
import DiscountTwoPart from "./component/DiscountTwoPart";
import Footer from "./component/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ShopWithUs />

        <Features />
        <DiscountTwoPart />
        <NewArrival />
      </main>
      <Footer />
    </>
  );
};

export default App;
