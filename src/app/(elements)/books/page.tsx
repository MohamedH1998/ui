"use client";
import BookReview from "@/components/book-review";
import ElementNav from "@/components/element-nav";
import React from "react";

const Page = () => {
  const githubLink =
    "https://github.com/MohamedH1998/ui/blob/main/src/components/book-review/index.tsx";
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <ElementNav githubLink={githubLink} />
      <BookReview />
    </div>
  );
};

export default Page;
