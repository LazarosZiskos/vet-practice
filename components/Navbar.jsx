import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  return (
    <header className="h-[50px] mt-5 mb-10">
      <div className="container flex items-center justify-between">
        <div className="text-xl font-bold md:text-3xl mb-10">
          <a href="/">
            <img
              src="main_logo.jpg"
              alt="logo"
              className="w-[150px] h-full"
            ></img>
          </a>
        </div>
        <div className="md:flex space-x-10 hidden">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="font-semibold transition-all ease-in-out duration-200 hover:text-blue1 "
            >
              <h2>{link.title}</h2>
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center justify-center">
              {navLinks.map((link, index) => (
                <div key={index} className="pb-5">
                  <Link
                    href={link.href}
                    className="font-semibold uppercase transition-all ease-in-out duration-100 hover:text-blue1 "
                  >
                    <h2>{link.title}</h2>
                  </Link>
                </div>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
