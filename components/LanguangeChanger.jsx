"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import i18nConfig from "@/i18nConfig";

export default function LanguageChanger({ closeSheet }) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      if (closeSheet) closeSheet();
      return;
    }

    // Update language
    i18n.changeLanguage(newLocale);

    // Set cookie
    const expires = new Date(Date.now() + 30 * 864e5).toUTCString(); // 30 days
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Build new path
    const defaultLocale = i18nConfig.defaultLocale;
    const prefixDefault = i18nConfig.prefixDefault;

    let newPath = pathname;

    if (currentLocale === defaultLocale && !prefixDefault) {
      newPath = `/${newLocale}${pathname}`;
    } else {
      newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    }

    router.push(newPath);
    setIsOpen(false);
    if (closeSheet) closeSheet();
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-32 px-4 py-2 text-sm font-medium border rounded-md bg-white shadow-sm hover:bg-gray-100 focus:outline-none flex items-center justify-center gap-2"
      >
        {currentLocale === "el" ? "🇬🇷 " : "🇬🇧 "}
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 12l-4-4h8l-4 4z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-32 bg-white border rounded-md shadow-lg">
          <ul className="text-sm">
            <li>
              <button
                onClick={() => handleLocaleChange("el")}
                className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 ${
                  currentLocale === "el" ? "font-semibold text-blue-600" : ""
                }`}
              >
                🇬🇷 Ελληνικά
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLocaleChange("en")}
                className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 ${
                  currentLocale === "en" ? "font-semibold text-blue-600" : ""
                }`}
              >
                🇬🇧 English
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
