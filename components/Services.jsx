"use client";
import { Card, CardDescription, CardTitle } from "./ui/card";
import MyButton from "./MyButton";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
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

  const { t } = useTranslation("Services");

  return (
    <div className="bg-gray2 pb-10 mt-[1000px] md:mt-[300px] lg:mt-[350px]">
      <div className="container" id="div2">
        <div className="pt-10 items-center justify-center flex flex-col">
          <h1 className="font-bold text-2xl lg:text-4xl pb-4 tracking-wider">
            {t("ypiresies")}
          </h1>
          <p className="text-center max-w-[450px] text-slate-400 text-sm leading-6">
            {t("ypiresies-subheader")}
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 md:grid-cols-3"
          ref={scrollref}
        >
          <Card>
            <img src="dog1.jpg" alt="dog1" className="w-full" />
            <CardTitle className="pt-10 pb-5 pl-4 pr-4 text-lg hover:text-blue1">
              {t("ypiresies-title1")}
            </CardTitle>
            <CardDescription className="pb-5 pl-4 pr-4">
              Dignissim per dis dignissim mi nibh a parturient habitasse
              suspendisse ut a feugiat morbi neque tortor.
            </CardDescription>
          </Card>
          <Card>
            <img src="dog1.jpg" alt="dog1" className="w-full" />
            <CardTitle className="pt-10 pb-5 pl-4 pr-4 text-lg hover:text-blue1">
              {t("ypiresies-title2")}
            </CardTitle>
            <CardDescription className="pb-5 pl-4 pr-4">
              Dignissim per dis dignissim mi nibh a parturient habitasse
              suspendisse ut a feugiat morbi neque tortor.
            </CardDescription>
          </Card>
          <Card>
            <img src="dog1.jpg" alt="dog1" className="w-full" />
            <CardTitle className="pt-10 pb-5 pl-4 pr-4 text-lg hover:text-blue1">
              {t("ypiresies-title3")}
            </CardTitle>
            <CardDescription className="pb-5 pl-4 pr-4">
              Dignissim per dis dignissim mi nibh a parturient habitasse
              suspendisse ut a feugiat morbi neque tortor.
            </CardDescription>
          </Card>
        </div>
        <div className="flex justify-start mt-10">
          <MyButton
            title={t("ypiresies-button")}
            href="/services"
            style="text-white bg-blue1 border border-blue1 hover:bg-transparent hover:text-blue1"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
