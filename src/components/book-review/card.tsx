"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { X } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "500", "700", "800"],
});

const Card = ({
  name,
  author,
  publisher,
  isbn,
  synopsis,
  bg,
  src,
  index,
  activeCard,
  setActiveCard,
}: {
  name: string;
  src: string;
  index: any;
  activeCard: number | null;
  setActiveCard: any;
  author: string;
  publisher: string;
  isbn: string;
  synopsis: string;
  bg: string;
}) => {
  const properties = () => {
    switch (index) {
      case 1:
        return "top-16 scale-[0.85] z-[0]";
      case 2:
        return "top-32 scale-[0.9] z-[1]";
      case 3:
        return "top-48 scale-[0.95] z-[2]";
    }
  };
  const handleClose = (e: any) => {
    e.stopPropagation();
    setActiveCard(null);
  };

  const isActiveCard = activeCard === index;

  return (
    <div
      // this is gross i know, i'm sorry
      style={{
        transform: `rotateX(${isActiveCard ? "0" : "30"}deg)`,
      }}
      onClick={() => setActiveCard(index)}
      className={`absolute shadow-md bg-white text-xl text-ms  w-full md:w-2/3  grid grid-cols-2 transition-all ease-in-out ${properties()} ${
        inter.className
      } ${isActiveCard && "top-[0%] z-[20] scale-[1]"}`}
    >
      <div
        className={`p-6 space-y-8  cols-span-1 ${bg} relative flex flex-col items-center justify-between`}
      >
        <h3 className="md:text-2xl w-full text-left">Book</h3>
        <Image
          width={200}
          height={200}
          src={src}
          alt={name}
          className="w-48"
          placeholder="blur"
          blurDataURL="#F5F5F5"
        />
        <span className="text-xs absolute bottom-7 right-2 -rotate-90">
          {index} / 3
        </span>
        <span className="text-[10px] md:text-xs w-full text-left">
          Favourite reads of 2024
        </span>
      </div>
      <div className="h-full w-full relative p-6">
        <div className="flex flex-col items-start text-base justify-start  md:pt-6 cols-span-1 space-y-10 md:py-4">
          <h1 className="font-light text-lg md:text-4xl">{name}</h1>
          <div className="flex flex-col space-y-1 text-xs md:text-base">
            <span>
              <strong>Author:</strong> {author}
            </span>
            <span>
              <strong>Publisher:</strong> {publisher}
            </span>
            <span>
              <strong>ISBN:</strong> {isbn}
            </span>
          </div>
          <p className="text-sm md:text-base line-clamp-4">{synopsis}</p>
        </div>
        {isActiveCard && (
          <button
            onClick={(e) => handleClose(e)}
            className="absolute top-5 right-5"
          >
            <X strokeWidth={1} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
