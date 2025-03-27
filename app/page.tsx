"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PhotoGrid } from "@/components/photo-grid";
import { Menu, Filter } from "lucide-react";
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
  {
    id: "31",
    url: "Image002.jpg",
    category: "Aluminium",
    title: "Folding",
  },
  {
    id: "32",
    url: "dream (1).jpg ",
    category: "Aluminium",
    title: "Folding",
  },

  {
    id: "33",
    url: "Folding (4).jpg",
    category: "Aluminium",
    title: "Folding",
  },
  {
    id: "34",
    url: "Folding (5).jpg",
    category: "Aluminium",
    title: "Folding",
  },
  {
    id: "35",
    url: "Folding (6).jpg",
    category: "Aluminium",
    title: "Folding",
  },
  {
    id: "36",
    url: "Folding (7).jpg",
    category: "Aluminium",
    title: "Folding",
  },
  {
    id: "37",
    url: "Folding (8).jpg",
    category: "Aluminium",
    title: "Folding",
  },
  {
    id: "38",
    url: "Folding (9).jpg",
    category: "Aluminium",
    title: "Folding",
  },
  {
    id: "39",
    url: "Folding (1).jpg ",
    category: "Aluminium",
    title: "Folding",
  },
  {
    id: "40",
    url: "Folding (1).jpg ",
    category: "Aluminium",
    title: "Folding",
  },
  {
    id: "41",
    url: "Image010.jpg ",
    category: "Aluminium",
    title: "Closet",
  },
  {
    id: "43",
    url: "Image013.jpg ",
    category: "Aluminium",
    title: "Closet",
  },
  {
    id: "44",
    url: "Folding (2).jpg ",
    category: "Aluminium",
    title: "Folding",
  },
  {
    id: "45",
    url: "Image016.jpg ",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "46",
    url: "Image019.jpg ",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "47",
    url: "Image020.jpg ",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "48",
    url: "Image022.jpg ",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "49",
    url: "Image062.jpg ",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "50",
    url: "IMG_0005.JPG",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "51",
    url: "IMG_0009.JPG",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "52",
    url: "IMG_0010.JPG",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "53",
    url: "IMG_0018.JPG",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "54",
    url: "IMG_0023.JPG",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "55",
    url: "IMG_0030.JPG",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "56",
    url: "IMG_0040.JPG",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "57",
    url: "IMG_0041.JPG ",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "58",
    url: "IMG_0054.JPG ",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "59",
    url: "IMG_0055.JPG ",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "60",
    url: "IMG_0168.JPG",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "61",
    url: "IMG_0189.JPG",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "62",
    url: "IMG_0200.JPG",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "63",
    url: "IMG_0224.JPG",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "64",
    url: "IMG_0231.JPG",
    category: "Aluminium",
    title: "Aluminium",
  },
  {
    id: "65",
    url: "14 Street.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "66",
    url: "2011-06-20 12.31.06.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "67",
    url: "2011-06-20 12.31.29.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "68",
    url: "20140428_143916.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "69",
    url: "20140428_144056.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "70",
    url: "20140428_144627.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "71",
    url: "20140708_165015.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "72",
    url: "20140723_111222.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "73",
    url: "20190109_152603.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "74",
    url: "20190109_153102.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "75",
    url: "20140821_133521.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "76",
    url: "20190102_110503.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "77",
    url: "20190102_111046.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "78",
    url: "20190109_153102.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "79",
    url: "20190109_152603.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "80",
    url: "1616646431754.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
  {
    id: "81",
    url: "1616676366992.jpg",
    category: "Bathroom",
    title: "Bathroom",
  },
];

export default function Home() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [clickedCategory, setClickedCategory] = useState("");
  {
    /* Mobile Category Menu */
  }
  const [isOpen, setIsOpen] = useState(false);
  const handleCategoryClick = (category: string) => {
    setClickedCategory(category);
    setActiveCategory(category);

    setTimeout(() => {
      setClickedCategory("");
    }, 300); // Adjust duration as needed
  };
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
          onClick={() => {
            handleCategoryClick(category);
            setIsOpen(false);
          }}
          className={`
                whitespace-nowrap px-4 rounded-full transition-all font-['SF_Pro_Display']
                ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg blinking-effect"
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
        <div className="flex items-center justify-between mb-8"></div>

        <div className="">
          <div className="relative group">
            <div className="mb-3">
              <div className="relative group">
                <div className="flex gap-1 fixed top-16 md:top-[84px] md:w-full w-[400px] bg-background z-30 overflow-x-auto  md:border-none md:rounded-none px-2 py-2  custom-scrollbar-x snap-x scroll-smooth">
                  <CategoryButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <PhotoGrid photos={filteredPhotos} />
        </div>
      </div>
    </>
  );
}
