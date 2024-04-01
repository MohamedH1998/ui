"use client";

import React, { useState } from "react";
import Card from "./card";
import books from "./data.json";
const BookReview = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  return (
    <div className="w-full max-w-7xl h-3/5 relative flex items-end justify-center">
      {books.map((item, i) => (
        <Card
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          {...item}
          key={i}
          index={i + 1}
        />
      ))}
    </div>
  );
};

export default BookReview;
