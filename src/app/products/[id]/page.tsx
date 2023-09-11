"use client"
import Price from "@/components/Price";
import Image from "next/image";
import React, { useState } from "react";

const buttons = [{ title: "Small" },{ title: "Medium" },{ title: "Large" }];


const options = [
  {
    title: "Small",
    additionalPrice: 0,
  },
  {
    title: "Medium",
    additionalPrice: 4,
  },
  {
    title: "Large",
    additionalPrice: 6,
  },
]

const SingleProduct = () => {

  const [selectedButtonId,setSelectedButtonId] = useState(null)

  return (
    <div className="w-full  md:px-96 my-44 flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-center  ">
      <div className="w-1/2 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80"
          width={96}
          height={96}
          alt=""
          className="w-full md:w-80 h-82 object-fill rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2 w-[300px] md:w-[640px]">
        <h2 className=" text-2xl md:text-3xl font-bold text-green-900">Pizza</h2>
        <p className=" text-base md:text-lg leading-1">
          Ignite your taste buds with a fiery combination of spicy pepperoni,
          jalapeños, crushed red pepper flakes, and melted mozzarella cheese,
          delivering a kick with every bite.
        </p>
        {/* <p className=" font-bold text-2xl text-green-900">$ 299</p>
        <div>
          {
            buttons?.map((button,index)=>(
              <button key={index} type="submit" className={`px-2 py-1 border-2 border-green-800 mr-3 rounded-md ${selectedButtonId === index ? "bg-green-800 text-white":""}`} onClick={()=>setSelectedButtonId(index)}>{button?.title}</button>
            ))
          }
        </div> */}
        <Price price={299} id={123} options={options} />

      </div>
    </div>
  );
};

export default SingleProduct;
