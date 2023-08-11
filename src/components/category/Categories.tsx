import React from "react";
import CategoryItem from "./CategoryItem";



const categoryItems = [
  {
    id: 1,
    name: "Bestseller",
    url: "https://images.unsplash.com/photo-1498709112912-9be3173d30be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: 2,
    name: "Drinks",
    url: "https://images.unsplash.com/photo-1498709112912-9be3173d30be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: 3,
    name: "Food",
    url: "https://images.unsplash.com/photo-1498709112912-9be3173d30be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: 4,
    name: "Merchandise",
    url: "https://images.unsplash.com/photo-1498709112912-9be3173d30be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: 5,
    name: "Coffee at home",
    url: "https://images.unsplash.com/photo-1498709112912-9be3173d30be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: 6,
    name: "Ready to eat",
    url: "https://images.unsplash.com/photo-1498709112912-9be3173d30be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
];

const Categories = () => {
  return (
    <div className="flex justify-between items-center max-w-60vw b">
      {categoryItems.map((category) => (
        <div key={category.id}>
          <CategoryItem category={category} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
