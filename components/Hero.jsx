import React from "react";
import MyButton from "./MyButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Hero = () => {
  return (
    <section>
      <div className="">
        <img
          className="w-full h-[70vh] object-fit"
          src="dog1.jpg"
          alt="dog-1"
        />
        <div className="bg-black/40 absolute top-[90px] w-full h-[70vh]" />
        <div className="absolute justify-center items-center flex flex-col top-[90px] w-full h-[70vh]">
          <div className="container">
            <h1
              className="text-white font-bold leading-0.5 text-4xl tracking-wider pb-4 max-w-[300px]
            md:text-6xl md:max-w-[500px] md:pb-10"
            >
              Friendly pet care for every size
            </h1>
            <p className="text-white pb-4 font-semibold text-sm md:text-xl md:pb-10">
              We strive to provide complete care for our patients
            </p>
            <MyButton
              title="Read More"
              style="text-white bg-blue1 border border-blue1 hover:bg-transparent hover:text-blue1 mr-5"
              href="/services"
            />
            <MyButton
              title="Contact"
              style="text-blue1 bg-white border border-white hover:bg-transparent
                hover:text-white"
              href="/contact"
            />
          </div>
        </div>
        {/* CREATE MYCARD COMPONENT WITH THE SHADCNUI CARD INSIDE TO PASS PROPS */}
        <div className="absolute mt-auto justify-center items-center container grid grid-cols-3 top-[650px]">
          <Card className="bg-gray2">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card className="bg-blue1">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card className="bg-gray1">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
