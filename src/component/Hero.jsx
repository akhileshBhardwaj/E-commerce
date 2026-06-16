import React from "react";
import banner from "../images/banner-1.jpg";
import HeroCard from "./usable_card/HeroCard";
import { TfiReload } from "react-icons/tfi";

const Hero = () => {
  const heroCardData = [
    {
      id: 1,
      color: "bg-green-100",
      logo: <TfiReload />,
      h1: "Free Returns",
      paragraph: "Easy returns within 30 days",
    },
    {
      id: 2,
      color: "bg-yellow-100",
      logo: <TfiReload />,
      h1: "Fresh Products",
      paragraph: "Directly sourced from trusted farms",
    },
    {
      id: 3,
      color: "bg-blue-100",
      logo: <TfiReload />,
      h1: "Fast Delivery",
      paragraph: "Delivered quickly to your doorstep",
    },
  ];

  return (
    <section
      className="relative min-h-[100svh] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-5 py-16 sm:px-8 lg:px-12">
        {/* Heading */}
        <h2 className="max-w-5xl text-3xl font-bold leading-tight text-orange-600 sm:text-5xl lg:text-7xl">
          Your One-Stop Online
          <br />
          Shopping Destination
        </h2>

        {/* Paragraph */}
        <p className="mt-4 max-w-2xl text-sm text-gray-700 sm:text-lg lg:text-2xl">
          Discover premium products at unbeatable prices with fast and reliable
          delivery.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="w-full rounded-full border border-green-500 bg-green-500 px-6 py-3 text-white transition hover:bg-green-600 sm:w-auto">
            Start Shopping
          </button>

          <button className="w-full rounded-full border border-gray-800 bg-gray-800 px-6 py-3 text-white transition hover:bg-black sm:w-auto">
            Join Now
          </button>
        </div>

        {/* Stats */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <div className="flex items-center gap-4 rounded-2xl border border-white/30 bg-white/80 p-4 backdrop-blur-sm">
            <h1 className="text-2xl font-bold lg:text-4xl">14k+</h1>
            <p className="text-sm lg:text-xl">Product Varieties</p>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/30 bg-white/80 p-4 backdrop-blur-sm">
            <h1 className="text-2xl font-bold lg:text-4xl">16k+</h1>
            <p className="text-sm lg:text-xl">Happy Customers</p>
          </div>
        </div>

        {/* Hero Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {heroCardData.map((item) => (
            <HeroCard
              key={item.id}
              color={item.color}
              logo={item.logo}
              h1={item.h1}
              paragraph={item.paragraph}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
