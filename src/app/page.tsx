"use client";
import Slider from "@/components/Slider";
import TypewriterComp from "@/components/TypewriterComp";
import Categories from "@/components/category/categories";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-16 max-w-[100vw]   mx-44 ">
      <div className="flex items-center h-[700px]">
        <div>
          <TypewriterComp />
        </div>
        <div>
          <Image
            src={"/home_logo.png"}
            className="anim"
            alt="Home page"
            width={800}
            height={64}
          />
        </div>
      </div>
      {/* <Categories /> */}
      <Slider />
    </main>
  );
}
