"use client";
import Image from "next/image";
import React, { useState } from "react";
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
    name: "Mocha Coffee",
    description:
      "uygv erifvhei9yhf er8f erfyh ve9r8f e89fhgv 98erfyh ve89rfyh ve ve98v h98ehv ",
    price: 480,
    url: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Mocha Coffee 2",
    description:
      "uygv erifvhei9yhf er8f erfyh ve9r8f e89fhgv 98erfyh ve89rfyh ve ve98v h98ehv ",
    price: 480,
    url: "https://images.unsplash.com/photo-1538587888044-79f13ddd7e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 3,
    name: "Mocha Coffee 3",
    description:
      "uygv erifvhei9yhf er8f erfyh ve9r8f e89fhgv 98erfyh ve89rfyh ve ve98v h98ehv ",
    price: 480,
    url: "https://images.unsplash.com/photo-1538587888044-79f13ddd7e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
];

const Slider = () => {
  const [act, setAct] = useState(0);
  console.log(act);

  const slideClass = act !== 0 ? `translate-x-[-70vw]` : ``;
  // const slideClass = act === 0 ? `bg-green-100` : `bg-green-600`
  return (
    <>
      <SliderComp {...settings} className=" border border-black mx-64">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex items-center justify-center border-8 border-red-800"
          >
            <Image src={slide.url} alt={slide.name} width={96} height={32} />
            <div>
              <h2>{slide.name}</h2>
              <p>{slide.description}</p>
              <p>{slide.price}</p>
            </div>
            {/* <BsArrowLeftCircle size={24}  className="absolute left-[-12px] top-20" onClick={()=>setAct(act > 0 ?act-1 : act)}/>
                <BsArrowRightCircle size={24} className="absolute right-[-11px] top-20" onClick={()=>setAct(act < 3 ?act+1 : act)}/> */}
          </div>
        ))}
      </SliderComp>
    </>
  );
};

export default Slider;
