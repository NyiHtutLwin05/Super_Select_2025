"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import Image from "next/image";

export function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b fixed w-full bg-[#E3ECED] z-40 select-none outline-none">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={10}
            height={10}
            className="md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem]"
          />
          <div className="flex flex-col">
            <span className="font-['Monument_Extended'] font-extrabold text-2xl md:text-4xl text-[#69172D]">
              SUPER SELECT
            </span>
            <span className="font-['SF_Pro_Display'] text-sm md:text-lg text-[#0E186D]">
              Glass & Aluminium
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-primary">
            {t("nav.home")}
          </Link>
          <Link href="/about" className="hover:text-primary">
            {t("nav.about")}
          </Link>
          <Link href="/contact" className="hover:text-primary">
            {t("nav.contact")}
          </Link>
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button with Animation */}
        <button
          className="md:hidden flex flex-col space-y-1.5 w-8 h-8 justify-center items-center cursor-pointer select-none bg-none outline-none border-none focus:ring-0 focus:outline-none active:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-8 h-[3px] rounded-md bg-black transition-transform duration-300 ease-in-out 
              ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            className={`block w-8 h-[3px] rounded-md bg-black transition-opacity duration-200 ease-in-out 
              ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block w-8 h-[3px] rounded-md bg-black transition-transform duration-300 ease-in-out 
              ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-y-0 z-30 left-0 w-64 bg-[#E2ECED] transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-6 space-y-6">
          <Link
            href="/"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            {t("nav.contact")}
          </Link>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
