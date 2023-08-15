"use client";
import React from "react";
import CategoryItem from "./CategoryItem";
import {categoryItems} from "../../../constants/categoryItems";



const Categories = () => {
  return (
    <div className="">
    <h1 className="text-2xl md:text-4xl text-green-800 font-bold  text-center py-6 md:py-12">Handcrafter Curations</h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-8 justify-between items-center place-items-center">
        {categoryItems.map((category) => (
          <div key={category.id}>
            <CategoryItem catItems={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
