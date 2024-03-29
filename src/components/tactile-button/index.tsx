"use client";

import { useState } from "react";

const Button = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
      <div className="bg-gradient-to-b from-[#E9E9E9] to-white shadow-inner w-fit p-6 rounded-[68px]">
        <button
          onClick={() => setIsActive((prev) => !prev)}
          className={`transition-shadow ease-in   ${
            isActive
              ? "p-2 bg-gradient-to-b to-[#DBDBDB] from-[#F4F4F4] rounded-[56px]  shadow-dance"
              : "p-4 bg-gradient-to-b to-[#F4F4F4] from-white rounded-[64px]  drop-shadow-[0_10px_10px_rgba(0,4,16,0.20)]"
          }`}
        >
          <div
            className={` bg-gradient-to-b ${
              isActive
                ? "to-[#F4F4F4] from-[#EAEAEA] w-fit px-12 py-[50px] rounded-[48px]"
                : "from-[#F4F4F4] to-white w-fit px-10 py-[42px] rounded-[48px]"
            }`}
          >
            <div
              className={`rounded-full w-[150px] h-[150px]  flex items-center justify-center ${
                isActive
                  ? "bg-[#EFEFEF] shadow-inset"
                  : "bg-[#EFEFEF] shadow-inset"
              }`}
            >
              <div
                className={`p-[2px] bg-gradient-to-b rounded-full ${
                  isActive
                    ? "from-[#2DAE8] to-[#ECF9F4]"
                    : "from-[#6D6D6D] to-[#F2F2F2]"
                }`}
              >
                <div
                  className={`w-[22px] h-[22px] bg-gradient-to-t  shadow-inner-md rounded-full ${
                    isActive
                      ? "from-[#EAFAF7] to-[#08E2A7]"
                      : "from-[#F2F2F2] to-[#B2B2B2]"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default Button;
