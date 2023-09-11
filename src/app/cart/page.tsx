import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div className="my-44 mx-32 flex items-start">
      <div className="w-3/5 flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80"
              width={96}
              height={96}
              alt=""
              className="w-full md:w-16 h-16 object-cover rounded-full"
            />
          </div>
          <div className="flex flex-1 items-center justify-between px-8">
            <div>
              <h2 className=" font-bold text-2xl">Pizza</h2>
              <p>Large</p>
            </div>
            <p className=" font-bold text-xl">$ 299</p>
            <p className=" font-bold">X</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <Image
              src="https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-food-restaurant-spoon-drinks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={96}
              height={96}
              alt=""
              className="w-full md:w-16 h-16 object-cover rounded-full"
            />
          </div>
          <div className="flex flex-1 items-center justify-between px-8">
            <div>
              <h2 className=" font-bold text-2xl">Burger</h2>
              <p>Large</p>
            </div>
            <p className=" font-bold text-xl">$ 499</p>
            <p className=" font-bold">X</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1547&q=80"
              width={96}
              height={96}
              alt=""
              className="w-full md:w-16 h-16 object-cover rounded-full"
            />
          </div>
          <div className="flex flex-1 items-center justify-between px-8">
            <div>
              <h2 className=" font-bold text-2xl">Soup</h2>
              <p>Large</p>
            </div>
            <p className=" font-bold text-xl">$ 99</p>
            <p className=" font-bold">X</p>
          </div>
        </div>
      </div>
      <div className="w-2/5 px-32 flex flex-col gap-3">
        <div className="flex justify-between items-center ">
          <p>Subtotal (3 items)</p>
          <p>$ 897.0</p>
        </div>

        <div className="flex justify-between items-center ">
          <p>Service Cost</p>
          <p>$ 0.00</p>
        </div>
        <div className="flex justify-between items-center ">
          <p>Delivery Cost</p>
          <p className=" text-green-700">Free</p>
        </div>
        <div className="flex justify-between items-center my-3 border-t-2 pt-4 border-green-400">
          <p className=" text-xl font-bold">Total</p>
          <p className=" font-bold">$ 897.0</p>
        </div>
        <div className=" text-right">
          <button className="p-2 bg-green-600 text-white rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
