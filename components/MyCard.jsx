import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const MyCard = ({ title, description, style, icon, descStyle }) => {
  return (
    <>
      <Card className={`${style}`}>
        <CardHeader>
          <CardTitle className="flex flex-col gap-5 text-xl pb-5">
            <span>{icon}</span>
            {title}
          </CardTitle>
          <CardDescription className={`${descStyle}`}>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <button className="uppercase font-bold text-sm hover:text-blue1 transition-all ease-in duration-150">
            Read more
          </button>
        </CardContent>
      </Card>
    </>
  );
};

export default MyCard;
