"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import Image from "next/image";

export function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="logo" width={80} height={80} />
            <div className="flex flex-col">
              <span
                className="font-['Monument_Extended'] font-extrabold text-4xl"
                style={{ color: "#69172D" }}
              >
                SUPER SELECT
              </span>
              <span
                className="font-['SF_Pro_Display'] text-lg"
                style={{ color: "#0E186D" }}
              >
                Glass & Aluminium
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-8">
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
        </div>
      </div>
    </nav>
  );
}
