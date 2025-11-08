"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { use, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const Space = () => {
  const scrollref = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollref.current.children);

    boxes.forEach((box) => {
      gsap.from(box, {
        opacity: 0,
        y: 75,
        duration: 1,
        scrollTrigger: {
          trigger: box,
          start: "bottom, bottom",
        },
        ease: "power1.in",
      });
    });
  }, []);

  const { t } = useTranslation("Space");

  return (
    <section className="bg-gray2 pt-10 overflow-hidden">
      <div className="container" ref={scrollref}>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl md:text-4xl mb-10 tracking-wider text-center">
            {t("xoros")}
          </h1>
          <p className="text-center text-slate-400 leading-6 max-w-[700px]">
            {t("xoros-subtitle")}
          </p>
        </div>
        <div className="md:pb-10 md:pt-10 pl-5 pr-5">
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
                  src="space9.jpeg"
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
                  src="space4.jpeg"
                  alt="space4"
                  className="w-full h-[400px] object-contain items-center"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="space11.jpeg"
                  alt="space11"
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
              <CarouselItem>
                <img
                  src="space7.jpeg"
                  alt="space7"
                  className="w-full h-[500px] object-contain items-center"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="space11.jpeg"
                  alt="space11"
                  className="w-full h-[500px] object-contain items-center"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="space8.jpeg"
                  alt="space8"
                  className="w-full h-[500px] object-contain items-center"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="space12.jpeg"
                  alt="space12"
                  className="w-full h-[500px] object-contain items-center"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="space10.jpeg"
                  alt="space10"
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
