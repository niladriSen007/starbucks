"use client";
import TypewriterComp from "@/components/TypewriterComp";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="mt-4 max-w-[100vw] flex items-center  mx-44 h-[700px]">
      <div>
        <TypewriterComp />
      </div>
      <div >
        <Image src={"/home_logo.png"} className="anim" alt="Home page" width={800} height={64}/>
      </div>
    </main>
  );
}
