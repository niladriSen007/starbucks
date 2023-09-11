import React, { useEffect, useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

type PriceProps = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: PriceProps) => {
  const [selectedSizeButtonId, setselectedSizeButtonId] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [total,setTotal] = useState(price)

  useEffect(()=>(
    setTotal(quantity * (options ? (price + options[selectedSizeButtonId].additionalPrice ) : price))
  ),[quantity,price,selectedSizeButtonId,options])





  return (
    <div>
      <p className="font-bold text-2xl text-green-900 pb-3">
        $ {total?.toFixed(2)}
      </p>
      <div>
        {options?.map((button, index) => (
          <button
            key={index}
            type="submit"
            className={`px-2 py-1 border-2 border-green-800 mr-3 rounded-full ${
              selectedSizeButtonId === index ? "bg-green-800 text-white" : ""
            }`}
            onClick={() => setselectedSizeButtonId(index)}
          >
            {button?.title}
          </button>
        ))}
      </div>
      <div className=" flex justify-between items-center  my-7 md:my-5 px-4 md:px-12 py-2 w-64 md:w-80 rounded-full bg-gradient-to-r from-green-600 to-green-900">
        <h3 className="  text-white font-bold text-xl">Quantity</h3>
        <div className="flex items-center justify-between gap-4 bg-white p-2 rounded-full max-w-24">
          <button
            className="text-2xl text-green-900"
            onClick={() => setQuantity((prev) => (prev >= 1 ? prev - 1 : 0))}
          >
            <AiFillMinusCircle />
          </button>
          <p>{quantity}</p>
          <button
            className="text-2xl text-green-900"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            {" "}
            <AiFillPlusCircle />
          </button>
        </div>
      </div>
      <div className="flex gap-3">
        <button className=" bg-green-800 text-white px-3 py-2 rounded-full">Add To Cart</button>
        <button className=" bg-red-800 text-white px-3 py-2 rounded-full">Buy Now</button>
      </div>
    </div>
  );
};

export default Price;
