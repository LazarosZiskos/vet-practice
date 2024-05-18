"use client";
import React from "react";
import MyButton from "./MyButton";
import { ArrowRight, Scroll } from "lucide-react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Doctor = () => {
  const scrollref = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollref.current.children);

    boxes.forEach((box) => {
      gsap.from(box, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: box,
          start: "bottom, bottom",
        },
        ease: "power1.in",
      });
    });
  }, []);

  return (
    <section className="container pt-10 mb-10" ref={scrollref}>
      <h1 className="font-bold text-2xl md:text-4xl mb-10 tracking-wider text-center">
        Η ΚΤΗΝΙΑΤΡΟΣ
      </h1>
      <div className="flex flex-col md:flex-row justify-between w-full gap-4">
        <div className="md:w-1/2 flex items-center justify-end mb-4">
          <img
            src="doctor2.jpg"
            alt="doctor"
            className="w-full max-h-[500px] object-contain"
          />
        </div>
        <div className="flex flex-col justify-around md:w-1/2">
          <p className="max-w-[550px] leading-2 pb-10">
            Η έμπειρη κτηνίατρος Λίνα Ακακιάδου είναι απόφοιτη του Αριστοτελείου
            Πανεπιστημίου Θεσσαλονίκης. Με δεκαετή εμπειρία στην κτηνιατρική
            επιστήμη. Επίσης είναι κάτοχος Μεταπτυχιακού Διπλώματος στην
            Τεχνολογία Τροφίμων...
          </p>
          <MyButton
            title="Συνεχίστε την Ανάγνωση"
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
