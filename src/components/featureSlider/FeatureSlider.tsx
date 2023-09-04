// import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";
import RecommendedItemCard from "../Recommended/RecommendedItemCard";
import { withFeaturedSlider } from "../HOC/withFeaturedSlider";

const featuredProducts = [
  {
    id: 1,
    name: "Mocha Cookie Crumbelite",
    bestSeller:true,
    description:
      "Our Mocha Cookie crumble Latte is a deliciously flavoured mochaindulgence - Hot coffee meets chocolate and co",
    price: 484,
    imageSrc:
      "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 1,
    name: "Mocha Cookie Crumbelite",
    description:
      "Our Mocha Cookie crumble Latte is a deliciously flavoured mochaindulgence - Hot coffee meets chocolate and co",
    price: 484,
    imageSrc:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 1,
    name: "Mocha Cookie Crumbelite",
    bestSeller:true,
    description:
      "Our Mocha Cookie crumble Latte is a deliciously flavoured mochaindulgence - Hot coffee meets chocolate and co",
    price: 484,
    imageSrc:
      "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 1,
    name: "Mocha Cookie Crumbelite",
    description:
      "Our Mocha Cookie crumble Latte is a deliciously flavoured mochaindulgence - Hot coffee meets chocolate and co",
    price: 484,
    imageSrc:
      "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
  {
    id: 1,
    name: "Mocha Cookie Crumbelite",
    description:
      "Our Mocha Cookie crumble Latte is a deliciously flavoured mochaindulgence - Hot coffee meets chocolate and co",
    price: 484,
    bestSeller: true,
    imageSrc:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const FeatureSlider = () => {
  return (
    <div className="">
      <div className="mx-2 md:mx-12 my-24 ">
        <h2 className=" text-3xl my-8 font-bold  text-green-800">
          Baristo Recommendations
        </h2>
        <div className=" w-[84vw] overflow-x-scroll no-scrollbar">
          <div className="w-max flex gap-16">
            {featuredProducts.map((recommendedItem) =>
              recommendedItem.bestSeller ? (
                withFeaturedSlider(RecommendedItemCard)({ recommendedItem })
              ) : (
                <RecommendedItemCard
                  recommendedItem={recommendedItem}
                  key={recommendedItem.id}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSlider;
