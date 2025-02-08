'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { PhotoGrid } from '@/components/photo-grid';

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

export default function GalleryPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPhotos = activeCategory === 'All' 
    ? SAMPLE_PHOTOS 
    : SAMPLE_PHOTOS.filter(photo => photo.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{t('nav.gallery')}</h1>
      
      <Tabs defaultValue="All" className="w-full mb-8">
        <TabsList className="w-full flex flex-wrap h-auto gap-2">
          {CATEGORIES.map(category => (
            <TabsTrigger
              key={category}
              value={category}
              onClick={() => setActiveCategory(category)}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <PhotoGrid photos={filteredPhotos} />
    </div>
  );
}