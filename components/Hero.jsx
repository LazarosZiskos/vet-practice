import React from "react";
import MyButton from "./MyButton";

import MyCard from "./MyCard";
import { BriefcaseMedical, Dog, Hospital } from "lucide-react";
import Services from "./Services";

const Hero = () => {
  return (
    <section>
      <div className="top-[20px]">
        <img
          className="w-full h-[70vh] object-cover pt-12"
          src="dog1.jpg"
          alt="dog-1"
        />
        <div className="bg-black/40 absolute top-[157px] w-full h-[64.4vh]" />
        <div className="absolute justify-center items-center flex flex-col top-[120px] w-full h-[70vh]">
          <div className="container">
            <h1
              className="text-white font-bold leading-3 text-4xl tracking-wider pb-4 max-w-[300px]
            md:text-5xl md:max-w-[500px] md:pb-10"
            >
              Κτηνιατρείο <br />
              Λίνα Ακακιάδου
            </h1>
            <p className="text-white pb-4 font-semibold text-sm md:text-xl md:pb-10">
              Η φροντίδα του ζώου σας, είναι προτεραιότητα μας!
            </p>
            <MyButton
              title="Διαβάστε Περισσότερα"
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

        <div className="absolute md:top-[650px] left-0 right-0 ml-auto mr-auto w-full">
          <div className=" mt-10 md:mt-0 mb-10 justify-center m-auto items-center container grid md:grid-cols-3 md:top-[650px] ">
            <MyCard
              title="Διαγνωστικοί Έλεγχοι"
              description="Διαγνωστικοί έλεγχοι για καθε ειδους περιστατικό"
              style="bg-gray2 "
              icon={<Hospital size={40} className="text-blue1" />}
            />
            <MyCard
              title="Περιποίηση"
              description="Καλωπισμός και φροντίδα του κατοικιδίου σας"
              style="bg-blue1 text-white"
              icon={<Dog size={40} className="text-white" />}
              descStyle="text-white"
            />
            <MyCard
              title="Χειρουργεία"
              description="Υπηρεσίες χειρουργείου για διάφορες περιπτώσεις"
              style="bg-gray1 text-white"
              icon={<BriefcaseMedical size={40} className="text-blue1" />}
              descStyle="text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
