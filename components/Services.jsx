import React from "react";
import { Card, CardDescription, CardFooter, CardTitle } from "./ui/card";
import MyButton from "./MyButton";

const Services = () => {
  return (
    <div className="bg-gray2 pb-20 mt-[900px] md:mt-[300px] lg:mt-[250px]">
      <div className="container">
        <div className="pt-20 items-center justify-center flex flex-col">
          <h1 className="font-bold text-2xl lg:text-4xl pb-4 tracking-wider">
            ΥΠΗΡΕΣΙΕΣ
          </h1>
          <p className="text-center max-w-[450px] text-slate-400 text-sm leading-6">
            Προσφέρουμε πληθώρα υπηρεσιών που καλύπτουν ολες τις ανάγκες του
            κατοικιδίου σας.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 md:grid-cols-3">
          <Card>
            <img src="dog1.jpg" alt="dog1" className="w-full" />
            <CardTitle className="pt-10 pb-5 pl-4 pr-4 text-lg hover:text-blue1">
              Τοποθέτηση Micro-Chip
            </CardTitle>
            <CardDescription className="pb-5 pl-4 pr-4">
              Dignissim per dis dignissim mi nibh a parturient habitasse
              suspendisse ut a feugiat morbi neque tortor.
            </CardDescription>
          </Card>
          <Card>
            <img src="dog1.jpg" alt="dog1" className="w-full" />
            <CardTitle className="pt-10 pb-5 pl-4 pr-4 text-lg hover:text-blue1">
              Γρήγορη Διάγνωση
            </CardTitle>
            <CardDescription className="pb-5 pl-4 pr-4">
              Dignissim per dis dignissim mi nibh a parturient habitasse
              suspendisse ut a feugiat morbi neque tortor.
            </CardDescription>
          </Card>
          <Card>
            <img src="dog1.jpg" alt="dog1" className="w-full" />
            <CardTitle className="pt-10 pb-5 pl-4 pr-4 text-lg hover:text-blue1">
              Καλώπισμός Ζώου
            </CardTitle>
            <CardDescription className="pb-5 pl-4 pr-4">
              Dignissim per dis dignissim mi nibh a parturient habitasse
              suspendisse ut a feugiat morbi neque tortor.
            </CardDescription>
          </Card>
        </div>
        <div className="flex justify-start mt-10">
          <MyButton
            title="Όλες οι υπηρεσίες"
            href="/services"
            style="text-white bg-blue1 border border-blue1 hover:bg-transparent hover:text-blue1"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
