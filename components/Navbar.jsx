"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import LanguageChanger from "./LanguangeChanger";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();
  return (
    <header className="h-[50px] mt-5 mb-10">
      <div className="container flex items-center justify-between">
        <div className="text-xl font-bold md:text-3xl mb-10">
          <a href="/">
            <img
              src="/main_logo.jpg"
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
              className={`font-semibold transition-all ease-in-out duration-200 hover:text-blue1 ${
                pathname.endsWith(link.href) ? "text-blue1" : ""
              }`}
            >
              {t(link.title)}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center justify-center w-[300px]">
              <div className="flex items-start mt-[-300px]">
                <img
                  src="main_logo.jpg"
                  alt="logo"
                  className="w-[150px] mb-20"
                />
              </div>
              {navLinks.map((link, index) => (
                <div key={index} className="pb-5">
                  <Link
                    onClick={() => setSheetOpen(false)}
                    href={link.href}
                    className={`font-semibold transition-all ease-in-out duration-100 hover:text-blue1 ${
                      pathname === link.href ? "text-blue1" : ""
                    }`}
                  >
                    {t(link.title)}
                  </Link>
                </div>
              ))}
              <LanguageChanger closeSheet={() => setSheetOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex">
          <LanguageChanger />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
