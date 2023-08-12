"use client";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import TypewriterComp from "@/components/TypewriterComp";
import Categories from "@/components/category/categories";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-16 max-w-[100vw] mx-8 md:mx-44 ">
      <div className="flex flex-col md:flex-row items-center h-[560px] md:h-[640px]">
        <div>
          <TypewriterComp />
        </div>
        <div>
          <Image
            src={"/home_logo.png"}
            alt="Home page"
            width={900}
            className="w-[900px] anim"
            height={24}
            
          />
        </div>
      </div>
      <Categories />
      <Slider />
    
    </main>
  );
}
