import { ArrowRight } from "lucide-react";
import React from "react";

const DetailService = ({ title, subtitle1, subtitle2 }) => {
  return (
    <>
      <div className="flex items-center justify-start pb-6 md:w-[500px]">
        <div className="flex justify-start items-center gap-4 w-[370px] md:w-full">
          <ArrowRight className="text-blue1 w-[40px] h-[40px] hover:translate-x-4 transition-all ease-in-out duration-300" />

          <h2 className="text-xl md:text-2xl tracking-wider font-bold">
            {title}
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center max-w-[600px] mb-6">
        <p className="pb-4 text-sm md:text-base tracking-wide">{subtitle1}</p>
        <p className="text-sm md:text-base tracking-wide ">{subtitle2}</p>
      </div>
    </>
  );
};

export default DetailService;
