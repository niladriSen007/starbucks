import React from "react";
import { foods } from "../../../../constants/food";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <div className="my-44 grid grid-cols-4 px-48 gap-10">
      {foods?.map((food) => (
        <Link
          href={`/products/${food?.id}`}
          key={food?.id}
          className="w-[320px] h-40 flex justify-between items-start gap-4 p-2 group even:bg-green-200  odd:bg-green-100 rounded-md"
        >
          <div>
            <Image
              alt={food?.title}
              src={food?.img}
              width={64}
              height={64}
              className="w-24 object-fill h-16 rounded-md mt-1"
              priority
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className=" text-xl font-bold">{food?.title}</h2>
            <p className="text-xs">{food?.description?.slice(0, 60)}...</p>
            <p className=" font-bold text-sm">Price - ${food?.price}</p>
            <div className="flex items-center  gap-2">
              <button className="w-1/2 bg-green-800  p-1 rounded-sm text-white text-sm my-1">
                Add to Cart
              </button>
              <button className="w-1/2 hidden group-hover:block bg-red-600 px-2 py-1 rounded-sm text-sm text-white my-1">
                Buy Now
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
