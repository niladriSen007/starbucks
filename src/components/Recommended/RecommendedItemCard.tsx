import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecommendedItemCard = ({ recommendedItem }) => {
  const nameLink : String = recommendedItem?.name.replace(/\s/g,'').toLowerCase() ;
  return (
    <Link href={`/products/${nameLink}`}>
    <div className=" cursor-pointer w-64 md:w-80 h-[354px] md:h-96 flex flex-col gap-20 md:gap-28 shadow-xl rounded-md ">
      <div className="relative h-1/4 rounded-sm ">
        <Image
          src={recommendedItem?.imageSrc}
          alt="food"
          width={400}
          height={24}
          className=" rounded-tl-md rounded-tr-md"
        />
      </div>
      <div className="flex flex-col gap-2 p-3 ">
        <span className="text-green-800 text-xs font-bold">New Launch</span>
        <h2 className="font-bold  text-sm">{recommendedItem?.name}</h2>
        <p className=" text-xs">{recommendedItem?.description} </p>
        <div className="flex ite justify-between">
          <p className="font-bold">₹ {recommendedItem?.price}</p>
          <button className="rounded-full bg-green-800 text-white px-2 py-1">
            Add Item
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default RecommendedItemCard;
