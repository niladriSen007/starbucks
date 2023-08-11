import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComp: React.FC = () => {
  return (
    <div className="w-[840px] flex items-start flex-col">
      <h1 className=" text-6xl font-bold text-green-800">
        <Typewriter
          options={{
            strings: [
              "Welcome to STARBUCKS",
              "The Best Store in USA",
              "Order & Enjoy your Meal",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="mt-8 text-md font-bold text-green-800 ml-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corporis
      </p>
    </div>
  );
};

export default TypewriterComp;
