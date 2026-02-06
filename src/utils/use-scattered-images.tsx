import React, { useRef, useState, type ReactNode, useEffect } from "react";

interface UseScatteredImagesSimpleProps {
  imageUrls: string[];
  itemsPerImage?: number;
  imgSize?: number;
}

export const useScatteredImagesSimple = ({
  imageUrls,
  itemsPerImage = 5,
  imgSize = 100,
}: UseScatteredImagesSimpleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scatteredImages, setScatteredImages] = useState<ReactNode[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();

    if (width === 0 || height === 0) return;

    const result: React.ReactNode[] = [];

    imageUrls.forEach((url, imageIndex) => {
      for (let i = 0; i < itemsPerImage; i++) {
        const id = `${imageIndex}-${i}`;
        const x = Math.random() * (width - imgSize);
        const y = Math.random() * (height - imgSize);
        const rotation = Math.random() * 30 - 15;

        result.push(
          <img
            key={id}
            src={url}
            alt={`Image ${imageIndex + 1}`}
            style={{
              position: "absolute",
              left: `${x}px`,
              top: `${y}px`,
              width: `${imgSize}px`,
              height: `${imgSize}px`,
              objectFit: "cover",
              transform: `rotate(${rotation}deg)`,
              borderRadius: "8px",
            }}
          />,
        );
      }
    });

    setScatteredImages(result);
  }, [imageUrls, itemsPerImage, imgSize, setScatteredImages, containerRef]);

  return { containerRef, scatteredImages };
};
