"use client";
import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { reviews } from "@/constants";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
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
    <section className="pt-10 pb-10 container items-center" ref={scrollref}>
      <h1 className="font-bold text-2xl md:text-4xl mb-10 tracking-wider text-center">
        ΑΞΙΟΛΟΓΗΣΕΙΣ
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row flex-wrap gap-4 ">
        {reviews.map((review, idx) => (
          <div key={idx}>
            <TestimonialCard
              title={review.title}
              description={review.description}
              writer={review.writer}
              town={review.town}
              name={review.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
