"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { reviews } from "@/constants";

const Testimonials = () => {
  return (
    <section className="pt-20 pb-10 container">
      <h1 className="font-bold text-2xl md:text-4xl mb-10 tracking-wider text-center">
        ΑΞΙΟΛΟΓΗΣΕΙΣ
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row flex-wrap gap-4 mt-20">
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
