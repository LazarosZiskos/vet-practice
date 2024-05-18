import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

const MyCard = ({ title, description, style, icon, descStyle }) => {
  return (
    <>
      <Card className={`${style}`}>
        <CardHeader>
          <CardTitle className="flex flex-col gap-5 text-xl pb-5">
            <span>{icon}</span>
            {title}
          </CardTitle>
          <CardDescription className={`${descStyle} + h-[100px]`}>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/services">
            <button className="font-bold text-sm hover:text-blue1 transition-all ease-in duration-150">
              Περισσότερα
            </button>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default MyCard;
