"use client";

import React, { useState } from "react";
import Card from "./card";

const books = [
  {
    name: "Lesson in Chemistry",
    author: "Bonnie Garmus",
    publisher: "Doubleday",
    isbn: "9780385547345",
    synopsis:
      "In the 1960s, at Hastings Research Institute, chemist Elizabeth Zott challenges gender norms among her all-male colleagues. Despite societal biases, Calvin Evans, a brilliant but lonely Nobel Prize-nominated scientist, is drawn to Elizabeth's intellect, sparking a profound connection between them.",
    src: "/lesson-in-chem.jpeg",
    bg: "bg-[#FFC0A2]",
  },
  {
    name: "And the Mountains Echoed",
    author: "Khaled Hosseini",
    publisher: "Bloomsbury",
    isbn: "9781408842423",
    synopsis:
      "In 1952 Afghanistan, Abdullah and sister Pari endure poverty in Shadbagh village with their father Saboor and stepmother. Abdullah, deeply devoted to Pari, sacrifices his shoes for her beloved collection, highlighting their profound bond amidst hardship.",
    src: "/and-the-mountains-echoed.jpg",
    bg: "bg-[#DBC9D3]",
  },
  {
    name: "Babel",
    author: "R.F. Kuang",
    publisher: "HarperVoyager",
    isbn: "9780008501853",
    synopsis:
      "Orphaned in Canton, Robin Swift trains in London for Oxford's Royal Institute of Translation—Babel. Oxford is his utopia, but loyalty to his homeland conflicts with serving Babel. Amid political tensions, he faces a pivotal choice as Britain's imperial ambitions clash with his principles.",
    src: "/babel.jpg",
    bg: "bg-[#A7A8AC]",
  },
];
const BookReview = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  return (
    <div className="w-full max-w-7xl h-4/5 relative flex items-center justify-center">
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
