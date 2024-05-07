import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Space = () => {
  return (
    <section className="bg-gray2 pt-20 overflow-hidden">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl md:text-4xl mb-10 tracking-wider text-center">
            Ο ΧΩΡΟΣ
          </h1>
          <p className="text-center text-slate-400 leading-6 max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            eius sapiente! Asperiores iste molestias inventore deleniti quae
            ipsa officiis laboriosam dolores ad voluptate.
          </p>
        </div>
        <div className="pt-10 pb-10 pl-5 pr-5">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <img
                  src="space1.jpg"
                  alt="space1"
                  className="w-full h-[500px] object-contain items-center"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="space2.jpg"
                  alt="space1"
                  className="w-full h-[500px] object-contain items-center"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="space3.jpg"
                  alt="space1"
                  className="w-full h-[500px] object-contain items-center"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="space4.jpg"
                  alt="space1"
                  className="w-full h-[500px] object-contain items-center"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="space5.jpg"
                  alt="space1"
                  className="w-full h-[500px] object-contain items-center"
                />
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="hover:text-blue1 transition-all ease-in-out duration-200" />
            <CarouselNext className="hover:text-blue1 transition-all ease-in-out duration-200" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Space;
