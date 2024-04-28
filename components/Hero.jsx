import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="">
        <img
          className="w-full h-[70vh] object-fit"
          src="dog1.jpg"
          alt="dog-1"
        />
        <div className="bg-black/40 absolute top-[90px] w-full h-[70vh]" />
      </div>
    </section>
  );
};

export default Hero;
