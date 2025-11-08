"use client";
import React from "react";
import MyButton from "./MyButton";
import { ArrowRight, Scroll } from "lucide-react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const Doctor = () => {
  const scrollref = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollref.current.children);

    boxes.forEach((box) => {
      gsap.from(box, {
        opacity: 0,
        y: 75,
        duration: 0.7,
        scrollTrigger: {
          trigger: box,
          start: "bottom, bottom",
        },
        ease: "power1.in",
      });
    });
  }, []);

  const { t } = useTranslation("Doctor");

  return (
    <section className="container pt-10 mb-10" ref={scrollref}>
      <h1 className="font-bold text-2xl md:text-4xl mb-10 tracking-wider text-center">
        {t("kthniatros")}
      </h1>
      <div className="flex flex-col md:flex-row justify-between w-full gap-4">
        <div className="md:w-1/2 flex items-center justify-end mb-4">
          <img
            src="doctor41.jpeg"
            alt="doctor"
            className="w-full object-cover md:mr-4 rounded-lg "
          />
        </div>
        <div className="flex flex-col justify-around md:w-1/2">
          <p className="max-w-[550px] leading-2 pb-10">{t("keimeno")}</p>
          <MyButton
            title={t("kthniatros-button")}
            href="/about"
            style="flex items-center gap-2 text-white bg-blue1 border border-blue1 hover:bg-transparent hover:text-blue1 mr-5"
            icon={<ArrowRight />}
          ></MyButton>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
