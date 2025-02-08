'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PhotoGrid } from '@/components/photo-grid';
import { Menu, ChevronRight } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const CATEGORIES = [
  'All',
  'Aluminium',
  'Bathroom',
  'Buddha',
  'Canopy',
  'Composite',
  'Glass Partition',
  'Glass Show Case',
  'Hand Rail',
  'Mirror',
  'Sensor',
  'Services Photo',
  'ShowCase',
  'Smart Mirror',
  'UPVC',
  'Whole Building',
  'YTG'
];

// This would typically come from your API/CMS
const SAMPLE_PHOTOS = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    category: 'Glass Partition',
    title: 'Modern Office Partition'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b',
    category: 'Aluminium',
    title: 'Aluminum Framework'
  },
  // Add more sample photos here
];

export default function Home() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPhotos = activeCategory === 'All' 
    ? SAMPLE_PHOTOS 
    : SAMPLE_PHOTOS.filter(photo => photo.category === activeCategory);

  const CategoryButtons = () => (
    <>
      {CATEGORIES.map(category => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "ghost"}
          onClick={() => setActiveCategory(category)}
          className={`
            whitespace-nowrap px-4 rounded-full transition-all font-['SF_Pro_Display']
            ${activeCategory === category 
              ? 'bg-primary text-primary-foreground shadow-lg' 
              : 'hover:bg-primary/10 hover:text-primary'
            }
          `}
        >
          {category}
        </Button>
      ))}
    </>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-['Monument_Extended'] text-4xl font-extrabold">{t('company.name')}</h1>
        
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
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10 flex items-center justify-end">
            <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="scrollbar-minimal">
            <div className="flex gap-2 pb-4 overflow-x-auto">
              <CategoryButtons />
            </div>
          </div>
        </div>
      </div>

      <PhotoGrid photos={filteredPhotos} />
    </div>
  );
}