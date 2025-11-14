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
import Image from "next/image";

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
                <Image
                  src="/space1.jpg"
                  alt="Exterior of the practice"
                  className="w-full h-[500px] object-contain items-center"
                  loading="lazy"
                  width={648}
                  height={486}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/space9.jpeg"
                  alt="Interior office"
                  className="w-full h-[500px] object-contain items-center"
                  loading="lazy"
                  width={1600}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/space2.jpg"
                  alt="Interior offices"
                  className="w-full h-[500px] object-contain items-center"
                  loading="lazy"
                  width={648}
                  height={486}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/space3.jpg"
                  alt="Diagnostic table"
                  className="w-full h-[500px] object-contain items-center"
                  loading="lazy"
                  width={648}
                  height={486}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/space4.jpeg"
                  alt="Diagonistc table"
                  className="w-full h-[400px] object-contain items-center"
                  loading="lazy"
                  width={800}
                  height={360}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/space11.jpeg"
                  alt="Interior and animal food"
                  className="w-full h-[500px] object-contain items-center"
                  loading="lazy"
                  width={1600}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/space5.jpg"
                  alt="Vet practice logo"
                  className="w-full h-[500px] object-contain items-center"
                  loading="lazy"
                  width={648}
                  height={486}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/space7.jpeg"
                  alt="Interior and animal foods that we sell"
                  className="w-full h-[500px] object-contain items-center"
                  loading="lazy"
                  width={1600}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/space11.jpeg"
                  alt="Animal food we sell"
                  className="w-full h-[500px] object-contain items-center"
                  fetchPriority="high"
                  loading="lazy"
                  width={1600}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/space8.jpeg"
                  alt="Taking blood sample from a dog"
                  className="w-full h-[500px] object-contain items-center"
                  loading="lazy"
                  width={1600}
                  height={1065}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/space12.jpeg"
                  alt="A dog getting their ears checked"
                  className="w-full h-[500px] object-contain items-center"
                  loading="lazy"
                  width={1600}
                  height={1065}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/space10.jpeg"
                  alt="Photo of a puppy"
                  className="w-full h-[500px] object-contain items-center"
                  loading="lazy"
                  width={1600}
                  height={1065}
                  sizes="(max-width: 768px) 100vw, 33vw"
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
