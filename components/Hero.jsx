"use client";
import React from "react";
import MyButton from "./MyButton";

import MyCard from "./MyCard";
import { BriefcaseMedical, Hospital, Syringe } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const Hero = () => {
  useGSAP(() => {
    gsap.from("#div1", {
      opacity: 0,
      ease: "power1.in",
      duration: 1,
      stagger: 0.5,
    });
  }, []);

  return (
    <section>
      <div className="top-[20px]">
        <img
          className="w-full h-[70vh] pt-12 object-cover"
          src="/dog2.jpg"
          alt="dog-2"
        />
        {/* <div className="bg-black/40 absolute top-[157px] w-full h-[64.4vh]" /> */}
        <div className="absolute justify-center items-center flex flex-col top-[120px] w-full h-[70vh]">
          <div className="container" id="div1">
            <h1
              className="text-white font-bold leading-1 text-4xl tracking-wider pb-4 max-w-[300px]
            md:text-5xl md:max-w-[500px] md:pb-10"
            >
              Κτηνιατρείο <br /> Λίνα Ακακιάδου
            </h1>
            <p className="text-white pb-4 font-semibold text-sm md:text-xl md:pb-10">
              Η φροντίδα του ζώου σας, είναι προτεραιότητα μας!
            </p>
            <div className="flex">
              <MyButton
                title="Περισσότερα"
                style="text-white bg-blue1 border border-blue1 hover:bg-transparent hover:text-blue1 mr-5"
                href="/about"
              />
              <MyButton
                title="Επικοινωνία"
                style="text-blue1 bg-white border border-white hover:bg-transparent
              hover:text-white"
                href="/contact"
              />
            </div>
          </div>
        </div>

        <div className="absolute md:top-[650px] left-0 right-0 ml-auto mr-auto w-full">
          <div
            id="div1"
            className=" mt-10 md:mt-0 mb-10 justify-center m-auto items-center container grid md:grid-cols-3 md:top-[650px] "
          >
            <MyCard
              title="Πρόληψη"
              description="Προγράμματα εμβολιασμών-αποπαρασιτώσεων & Συμβουλευτική σύμφωνα
              με τις ανάγκες του κάθε ζώου και του κηδεμόνα του."
              style="bg-gray2 "
              icon={<BriefcaseMedical size={40} className="text-blue1" />}
            />
            <MyCard
              title="Διάγνωση"
              description="Αξιολόγηση και εκτίμηση συμπτωμάτων κάθε περιστατικού με τις
              απαραίτητες εξετάσεις."
              style="bg-blue1 text-white"
              icon={<Syringe size={40} className="text-white" />}
              descStyle="text-white"
            />
            <MyCard
              title="Θεραπεία"
              description="Απαραίτητη φαρμακευτική αγωγή, νοσηλεία, χειρουργεία και
              παρακολούθηση (follow-up)."
              style="bg-gray1 text-white"
              icon={<Hospital size={40} className="text-blue1" />}
              descStyle="text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
