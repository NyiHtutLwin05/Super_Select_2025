"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PhotoGrid } from "@/components/photo-grid";
import { Menu } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from "./components/Footer";
import { setDate } from "date-fns";

const CATEGORIES = [
  "All",
  "Aluminium",
  "Bathroom",
  "Buddha",
  "Canopy",
  "Composite",
  "Glass Partition",
  "Glass Show Case",
  "Hand Rail",
  "Mirror",
  "Sensor",
  // "ShowCase",
  "Smart Mirror",
  "Whole Building",
];
const SAMPLE_PHOTOS = [
  {
    id: "1",
    url: "/ALU 25.jpg",
    category: "Aluminium",
    title: "Modern Office Partition",
  },
  {
    id: "2",
    url: "/CITY_lOFT.jpg",
    category: "Aluminium",
    title: "Aluminum Framework",
  },
  {
    id: "3",
    url: "/eidorado.jpg",
    category: "Aluminium",
    title: "Aluminum Framework",
  },
  {
    id: "4",
    url: "/Photo0008.jpg",
    category: "Buddha",
    title: "Buddha",
  },
  {
    id: "5",
    url: "/20190102_111215.jpg",
    category: "Bathroom",
    title: "Bathroom Partition",
  },
  {
    id: "6",
    url: "/2011-06-20 12.35.14.jpg",
    category: "Bathroom",
    title: "Bathroom Partition",
  },
  {
    id: "7",
    url: "/desttop 009.jpg",
    category: "Canopy",
    title: "Canopy",
  },
  {
    id: "8",
    url: "/desttop 006.jpg",
    category: "Canopy",
    title: "Canopy",
  },
  {
    id: "9",
    url: "/IMG_0129.JPG",
    category: "Composite",
    title: "Composite",
  },
  {
    id: "10",
    url: "/0000.jpg",
    category: "Buddha",
    title: "Buddha",
  },
  {
    id: "11",
    url: "/1.jpg",
    category: "Buddha",
    title: "Buddha",
  },
  {
    id: "12",
    url: "/1A.jpg",
    category: "Buddha",
    title: "Buddha",
  },
  {
    id: "13",
    url: "/11.jpg",
    category: "Glass Partition",
    title: "Pandora - Junction City",
  },
  {
    id: "14",
    url: "/11-21.jpg",
    category: "Glass Show Case",
    title: "Glass Show Case",
  },
  {
    id: "15",
    url: "/133 Thuwana.jpg",
    category: "Hand Rail",
    title: "Hand Rail",
  },

  {
    id: "16",
    url: "0-02-06-043ad675c78e8fe54ff0a36fdee17721f18bf7e45e1626f4532912949b325622_863ade70.jpg",
    category: "Mirror",
    title: "Mirror",
  },
  {
    id: "17",
    url: "0-02-06-ae65257f5bd816dadd321fd0132996a2082997b931f01afa8b53690b080f50e0_2868ed8a.jpg",
    category: "Mirror",
    title: "Mirror",
  },
  {
    id: "18",
    url: "/12.jpg",
    category: "Hand Rail",
    title: "Hand Rail",
  },
  {
    id: "19",
    url: "/DIAMOND BANK 2024 (1).jpg",
    category: "Composite",
    title: "Composite",
  },
  {
    id: "20",
    url: "/Wave Money.jpg",
    category: "Glass Partition",
    title: "Wave Money",
  },
  {
    id: "21",
    url: "/viber_image_2021-01-19_15-00-08.jpg",
    category: "Sensor",
    title: "Sensor",
  },
  {
    id: "22",
    url: "/viber_image_2021-01-19_15-00-12.jpg",
    category: "Sensor",
    title: "Sensor",
  },
  {
    id: "23",
    url: "/smart/1.jpg",
    category: "Smart Mirror",
    title: "Smart Mirror",
  },
  {
    id: "24",
    url: "/smart/2.jpg",
    category: "Smart Mirror",
    title: "Smart Mirror",
  },
  {
    id: "25",
    url: "/smart/3.jpg",
    category: "Smart Mirror",
    title: "Smart Mirror",
  },
  {
    id: "26",
    url: "2001.jpg",
    category: "Whole Building",
    title: "Whole Building",
  },
  {
    id: "27",
    url: "SeinLeAung.jpg",
    category: "Whole Building",
    title: "Whole Building",
  },
  {
    id: "28",
    url: "Pro-One (HTY).jpg",
    category: "Whole Building",
    title: "Whole Building",
  },
  {
    id: "29",
    url: "ko zwe 9 miles 1.jpg",
    category: "Whole Building",
    title: "Whole Building",
  },
  {
    id: "30",
    url: "Pro 1 TG.jpg",
    category: "Whole Building",
    title: "Whole Building",
  },
];

export default function Home() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos =
    activeCategory === "All"
      ? SAMPLE_PHOTOS
      : SAMPLE_PHOTOS.filter((photo) => photo.category === activeCategory);

  const CategoryButtons = () => (
    <>
      {CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "ghost"}
          onClick={() => setActiveCategory(category)}
          className={`
            whitespace-nowrap px-4 rounded-full transition-all font-['SF_Pro_Display']
            ${
              activeCategory === category
                ? "bg-primary text-primary-foreground shadow-lg"
                : "hover:bg-primary/10 hover:text-primary"
            }
          `}
        >
          {category}
        </Button>
      ))}
    </>
  );

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-['Monument_Extended'] text-4xl font-extrabold">
            {t("company.name")}
          </h1>

          {/* Mobile Category Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[385px]">
              <ScrollArea className="h-[calc(100vh-4rem)] mt-4">
                <div className="flex flex-col gap-2 pr-4">
                  <CategoryButtons />
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Categories */}
        <div className="hidden md:block mb-8">
          <div className="relative group">
            {/* <div className="absolute inset-y-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z- 10"></div> */}
            {/* <div className="absolute inset-y-0 -0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10 flex items-center justify-end">
            <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div> */}
            <div className="">
              <div className="flex gap-2 pb-4 overflow-x-auto custom-scrollbar-x ">
                <CategoryButtons />
              </div>
            </div>
          </div>
        </div>

        <PhotoGrid photos={filteredPhotos} />
      </div>
      {/* <Footer /> */}
    </>
  );
}
