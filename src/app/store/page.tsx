import React from "react";
import { categoryItems } from "../../../constants/categoryItems";
import Image from "next/image";
import Link from "next/link";
import CategoryItem from "@/components/category/CategoryItem";

const Store = () => {
  return (
    <div className="px-32 my-48">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryItems?.map((category) => (
          <CategoryItem
            id={category?.id}
            name={category?.name}
            url={category?.url}
            key={category?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
