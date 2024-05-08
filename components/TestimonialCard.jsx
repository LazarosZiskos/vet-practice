import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const TestimonialCard = ({ title, description, name, writer, town }) => {
  return (
    <div>
      <Card className="w-[320px] md:w-[400px] h-[400px] border-2 border-gray2 flex flex-col items-center justify-center shadow-md">
        <CardHeader className="flex flex-col items-center justify-center gap-2">
          <Avatar>
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-center">{title}</CardTitle>
          <CardTitle className="flex">
            <StarIcon className="text-blue1 pr-1" />
            <StarIcon className="text-blue1 pr-1" />
            <StarIcon className="text-blue1 pr-1" />
            <StarIcon className="text-blue1 pr-1" />
            <StarIcon className="text-blue1 pr-1" />
          </CardTitle>
        </CardHeader>
        <CardDescription className="text-center w-[300px]">
          {description}
        </CardDescription>

        <CardFooter className="flex flex-col items-center justify-center mt-4">
          <p className="font-bold text-md uppercase">{writer}</p>
          <p className="text-slate-400">{town}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TestimonialCard;
