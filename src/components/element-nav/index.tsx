import React from "react";
import ClientLink from "../client-link";
import { ArrowLeft, Code } from "lucide-react";

const ElementNav = ({ githubLink }: { githubLink: string }) => {
  return (
    <div className="absolute top-10 flex justify-center items-center space-x-4">
      <ClientLink href="/">
        <ArrowLeft />
      </ClientLink>
      <ClientLink
        newPage={true}
        href={githubLink}
        className="text-white bg-black"
      >
        <Code />
      </ClientLink>
    </div>
  );
};

export default ElementNav;
