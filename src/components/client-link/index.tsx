"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const ClientLink = ({
  children,
  href,
  className,
  newPage,
}: {
  children: React.ReactNode | string;
  href: string;
  className?: string;
  newPage?: boolean;
}) => {
  return (
    <Link
      href={href}
      target={newPage ? "_blank" : ""}
      className={cn(
        "block text-black border border-black/10 px-2 py-2 rounded-md shadow-sm ",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default ClientLink;
