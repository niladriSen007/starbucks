import Image from "next/image";
import React from "react";
import RecommendedItemCard from "./RecommendedItemCard";

const recommendedItems = [
  {
    id: 1,
    name: "Mocha Cookie Crumbelite",
    description:
      "Our Mocha Cookie crumble Latte is a deliciously flavoured mochaindulgence - Hot coffee meets chocolate and co",
    price: 484,
    imageSrc:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 1,
    name: "Mocha Cookie Crumbelite",
    description:
      "Our Mocha Cookie crumble Latte is a deliciously flavoured mochaindulgence - Hot coffee meets chocolate and co",
    price: 484,
    imageSrc:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 1,
    name: "Mocha Cookie Crumbelite",
    description:
      "Our Mocha Cookie crumble Latte is a deliciously flavoured mochaindulgence - Hot coffee meets chocolate and co",
    price: 484,
    imageSrc:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

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
