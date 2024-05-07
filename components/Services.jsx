import React from "react";
import { Card, CardDescription, CardFooter, CardTitle } from "./ui/card";
import MyButton from "./MyButton";

const Services = () => {
  return (
    <div className="bg-gray2 pb-20 mt-[900px] md:mt-[300px] lg:mt-[250px]">
      <div className="container">
        <div className="pt-20 items-center justify-center flex flex-col">
          <h1 className="font-bold text-2xl lg:text-4xl pb-4 tracking-wider">
            VETERINARY SERVICES
          </h1>
          <p className="text-center max-w-[550px] text-slate-400 text-sm leading-6">
            We offer a variety of services to care for your pet. If you have any
            questions please contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 md:grid-cols-3">
          <Card>
            <img src="dog1.jpg" alt="dog1" className="w-full" />
            <CardTitle className="pt-10 pb-5 pl-4 pr-4 text-lg hover:text-blue1">
              SMART TAGS
            </CardTitle>
            <CardDescription className="pb-5 pl-4 pr-4">
              Dignissim per dis dignissim mi nibh a parturient habitasse
              suspendisse ut a feugiat morbi neque tortor.
            </CardDescription>
            <CardFooter className="pl-4">
              <MyButton
                title="Read More"
                href="/"
                style="text-white bg-blue1 border border-blue1 hover:bg-transparent hover:text-blue1 mr-5"
              />
            </CardFooter>
          </Card>
          <Card>
            <img src="dog1.jpg" alt="dog1" className="w-full" />
            <CardTitle className="pt-10 pb-5 pl-4 pr-4 text-lg hover:text-blue1">
              QUICK EXAMINATION
            </CardTitle>
            <CardDescription className="pb-5 pl-4 pr-4">
              Dignissim per dis dignissim mi nibh a parturient habitasse
              suspendisse ut a feugiat morbi neque tortor.
            </CardDescription>
            <CardFooter className="pl-4">
              <MyButton
                title="Read More"
                href="/"
                style="text-white bg-blue1 border border-blue1 hover:bg-transparent hover:text-blue1 mr-5"
              />
            </CardFooter>
          </Card>
          <Card>
            <img src="dog1.jpg" alt="dog1" className="w-full" />
            <CardTitle className="pt-10 pb-5 pl-4 pr-4 text-lg hover:text-blue1">
              WELNESS CLINIC
            </CardTitle>
            <CardDescription className="pb-5 pl-4 pr-4">
              Dignissim per dis dignissim mi nibh a parturient habitasse
              suspendisse ut a feugiat morbi neque tortor.
            </CardDescription>
            <CardFooter className="pl-4">
              <MyButton
                title="Read More"
                href="/"
                style="text-white bg-blue1 border border-blue1 hover:bg-transparent hover:text-blue1 mr-5"
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
