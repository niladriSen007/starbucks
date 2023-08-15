"use client";
import Footer from "@/components/Footer";
import Recommendations from "@/components/Recommended/Recommendations";
import Slider from "@/components/Slider";
import TypewriterComp from "@/components/TypewriterComp";
import Categories from "@/components/category/categories";
import FeatureSlider from "@/components/featureSlider/FeatureSlider";
import Image from "next/image";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

export default function Home() {
  const { online } = useOnlineStatus();

  return (
    <>
      {online ? (
        <main className="mt-16 max-w-[100vw] mx-8 md:mx-44 no-scrollbar">
          <div className="flex flex-col md:flex-row items-center h-[560px] md:h-[640px] no-scrollbar">
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
          {/* <Slider /> */}
          <Recommendations />
          <FeatureSlider />
        </main>
      ) : (
        <p className="my-32 text-black">Currently you are offline</p>
      )}
    </>
  );
}
