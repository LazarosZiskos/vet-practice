import React from "react";
import MyButton from "./MyButton";

import MyCard from "./MyCard";
import { BriefcaseMedical, Dog, Hospital } from "lucide-react";
import Services from "./Services";

const Hero = () => {
  return (
    <section>
      <div className="">
        <img
          className="w-full h-[70vh] object-cover"
          src="dog1.jpg"
          alt="dog-1"
        />
        <div className="bg-black/40 absolute top-[90px] w-full h-[70vh]" />
        <div className="absolute justify-center items-center flex flex-col top-[90px] w-full h-[70vh]">
          <div className="container">
            <h1
              className="text-white font-bold leading-0.5 text-4xl tracking-wider pb-4 max-w-[300px]
            md:text-6xl md:max-w-[500px] md:pb-10"
            >
              Friendly pet care for every size
            </h1>
            <p className="text-white pb-4 font-semibold text-sm md:text-xl md:pb-10">
              We strive to provide complete care for our patients
            </p>
            <MyButton
              title="Read More"
              style="text-white bg-blue1 border border-blue1 hover:bg-transparent hover:text-blue1 mr-5"
              href="/services"
            />
            <MyButton
              title="Contact"
              style="text-blue1 bg-white border border-white hover:bg-transparent
                hover:text-white"
              href="/contact"
            />
          </div>
        </div>

        <div className="absolute md:top-[650px] left-0 right-0 ml-auto mr-auto w-full">
          <div className=" mt-10 md:mt-0 mb-10 justify-center m-auto items-center container grid md:grid-cols-3 md:top-[650px] ">
            <MyCard
              title="Diagnostic"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              style="bg-gray2"
              icon={<Hospital size={40} className="text-blue1" />}
            />
            <MyCard
              title="Wellness"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              style="bg-blue1 text-white"
              icon={<Dog size={40} className="text-white" />}
              descStyle="text-white"
            />
            <MyCard
              title="Surgery"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              style="bg-gray1 text-white"
              icon={<BriefcaseMedical size={40} className="text-blue1" />}
              descStyle="text-white"
            />
          </div>
          <Services />
        </div>
      </div>
    </section>
  );
};

export default Hero;
