"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import i18nConfig from "@/i18nConfig";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    i18n.changeLanguage(newLocale);

    const defaultLocale = i18nConfig.defaultLocale;
    const prefixDefault = i18nConfig.prefixDefault;

    if (currentLocale === defaultLocale && !prefixDefault) {
      router.push(`/${newLocale}${pathname}`);
    } else {
      router.push(pathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-32 justify-center gap-2">
          {currentLocale === "el" ? "🇬🇷 Ελληνικά" : "🇬🇧 English"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 mt-1 text-sm">
        <div className="flex flex-col gap-2">
          <button
            onClick={() => handleLocaleChange("en")}
            className={`flex items-center gap-2 hover:text-blue-500 ${
              currentLocale === "en" ? "font-semibold" : ""
            }`}
          >
            🇬🇧 English
          </button>
          <button
            onClick={() => handleLocaleChange("el")}
            className={`flex items-center gap-2 hover:text-blue-500 ${
              currentLocale === "el" ? "font-semibold" : ""
            }`}
          >
            🇬🇷 Ελληνικά
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
