"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#F7F7F8] space-y-4">
      <Link href="/tactile-button">tactile-button</Link>
      <Link href="/books">books</Link>
    </div>
  );
}
