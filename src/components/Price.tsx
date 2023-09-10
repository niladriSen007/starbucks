import React, { useState } from "react";
import {AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai'

type PriceProps = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: PriceProps) => {
  const [selectedButtonId, setSelectedButtonId] = useState(0);
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <p className="font-bold text-2xl text-green-900 pb-3">
        $ {price?.toFixed(2)}
      </p>
      <div>
        {options?.map((button, index) => (
          <button
            key={index}
            type="submit"
            className={`px-2 py-1 border-2 border-green-800 mr-3 rounded-full ${
              selectedButtonId === index ? "bg-green-800 text-white" : ""
            }`}
            onClick={() => setSelectedButtonId(index)}
          >
            {button?.title}
          </button>
        ))}
      </div>
      <div className=" flex justify-between items-center  my-5 px-12 py-2 w-80 rounded-full bg-gradient-to-r from-green-600 to-green-900">
        <h3 className="  text-white font-bold text-xl">Quantity</h3>
        <div className="flex items-center justify-between gap-4 bg-white p-2 rounded-full max-w-24">
          <button className="text-2xl text-green-900"
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            <AiFillMinusCircle />
          </button>
          <p>{quantity}</p>
          <button className="text-2xl text-green-900" onClick={() => setQuantity((prev) => prev + 1)}> <AiFillPlusCircle /></button>
          <button className="text-2xl text-green-900" onClick={() => setQuantity((prev) => prev + 1)}> <AiFillPlusCircle /></button>
          <button className="text-2xl text-green-900" onClick={() => setQuantity((prev) => prev + 1)}> <AiFillPlusCircle /></button>
          <button className="text-2xl text-green-900" onClick={() => setQuantity((prev) => prev + 1)}> <AiFillPlusCircle /></button>
        </div>
      </div>
    </div>
  );
};

export default Price;
