import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComp: React.FC = () => {
  return (
    <div className="w-[280px] md:w-[840px] flex flex-col items-center  md:items-start h-[10vh] my-24 md:my-20">
      <h1 className="text-4xl md:text-6xl font-bold text-green-800">
        <Typewriter
          options={{
            strings: [
              "Welcome to Starbucks",
              "The Best Store in USA",
              "Order & Enjoy your Meal",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="mt-8 text-xs md:text-lg font-bold text-green-800 ml-2 text-center md:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corporis
      </p>
    </div>
  );
};

export default TypewriterComp;
