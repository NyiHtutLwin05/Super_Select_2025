"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";

interface Photo {
  id: string;
  url: string;
  category: string;
  title: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [loadedPhotoIds, setLoadedPhotoIds] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadedPhotoIds(photos.map((photo) => photo.id));
    }, 3000); // 3 seconds skeleton

    return () => clearTimeout(timer);
  }, [photos]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => {
          const isLoaded = loadedPhotoIds.includes(photo.id);
          return (
            <div
              key={photo.id}
              className={cn(
                "relative aspect-square cursor-pointer overflow-hidden rounded-lg",
                "hover:opacity-90 transition-opacity"
              )}
              onClick={() => isLoaded && setSelectedPhoto(photo)}
            >
              {!isLoaded ? (
                <div className="relative w-full h-full bg-neutral-400 rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                </div>
              ) : (
                <>
                  <Image
                    src={photo.url}
                    alt={photo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium">
                        {photo.title}
                      </p>
                      <p className="text-white/80 text-xs">{photo.category}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <Dialog
        open={!!selectedPhoto}
        onOpenChange={() => setSelectedPhoto(null)}
      >
        <DialogContent className="max-w-4xl">
          <DialogTitle asChild>
            <VisuallyHidden>Photo Viewer</VisuallyHidden>
          </DialogTitle>
          {selectedPhoto && (
            <div className="relative aspect-video">
              <Image
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
