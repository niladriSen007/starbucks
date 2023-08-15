import Image from "next/image";
import React from "react";
import RecommendedItemCard from "./RecommendedItemCard";
import {recommendedItems} from '../../../constants/recommendedItems'



const Recommendations = () => {
  return (
    <div className="mx-8 md:mx-12 my-24">
      <h2 className=" text-3xl my-8 font-bold  text-green-800">Latest Offerings</h2>
      <div className="flex flex-col gap-16 md:flex-row items-center justify-between ">
        {recommendedItems.map((recommendedItem) => (
          <RecommendedItemCard recommendedItem={recommendedItem} key={recommendedItem.id}/>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
