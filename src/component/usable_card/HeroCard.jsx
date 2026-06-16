import React from "react";

const HeroCard = ({ color, logo, h1, paragraph }) => {
  return (
    <div
      className={`${color} flex items-center gap-3 rounded-xl px-4 py-4 w-full lg:w-fit`}
    >
      <div className="text-2xl lg:text-3xl">{logo}</div>

      <div>
        <h1 className="text-lg font-semibold lg:text-2xl">{h1}</h1>

        <p className="text-sm text-gray-700 lg:text-lg">{paragraph}</p>
      </div>
    </div>
  );
};

export default HeroCard;
