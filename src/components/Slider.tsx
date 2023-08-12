"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import SliderComp from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const slides = [
  {
    id: 1,
    name: "Classic Essentials",
    description:
      "Your Starbucks experience just got an upgrade with our newly designed merchandise.",
    price: 480,
    bg:"green",
    url: "https://images.unsplash.com/photo-1585039261108-ec658b915e37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=797&q=80",
  },
  {
    id: 2,
    name: "Mocha Cokie Crumble",
    description:
      "Rich mocha, crunchy cookies, and velvety smoothness: A perfect Frappuccino experience! ",
    price: 480,
    bg:"yellow",
    url: "https://images.unsplash.com/photo-1538587888044-79f13ddd7e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 3,
    name: "Strawberry Acai",
    description:
      "Experience the harmonious blend of sweet strawberry accented with notes of acai, chilled with ice and real fruit.",
    price: 480,
    bg:"pink",
    url: "https://images.unsplash.com/photo-1538587888044-79f13ddd7e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
];

const Slider = () => {
  const [act, setAct] = useState(0);
  // console.log(act);

  useEffect(() => {
    const interval = setInterval(() => {
      setAct((prev) => (prev < 2 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // console.log(first)

  return (
    <>
      {/* <div className=" border border-black mx-12 my-36 h-80"> */}
        <div className={` border border-black  flex items-center justify-around relative mx-12 my-36 h-80 bg-${slides[act]?.bg}-600`}>
          <div className="w-1/2">
            <Image src={slides[act]?.url} alt={slides[act]?.name} width={240} height={96} />
          </div>
          <div className="w-1/2 text-white">
            <h2 className="text-3xl font-bold">{slides[act]?.name}</h2>
            <p>{slides[act]?.description}</p>
            <p>{slides[act]?.price}</p>
          </div>
          {/* <BsArrowLeftCircle size={24}  className="absolute left-[-12px] top-20" onClick={()=>setAct(act > 0 ?act-1 : act)}/>
                <BsArrowRightCircle size={24} className="absolute right-[-11px] top-20" onClick={()=>setAct(act < 3 ?act+1 : act)}/> */}
        </div>
      {/* </div> */}
    </>
  );
};

export default Slider;
