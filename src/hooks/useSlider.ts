import { useState, MouseEvent } from "react";

export const useSlider = (initial:number, imageArray:string[]) => {
  const [selectedImage, setSelectedImage] = useState<number>(initial);

  const decrement = (e: MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    if (selectedImage === 0) {
      setSelectedImage((prev) => prev + imageArray.length - 1);
    } else {
      setSelectedImage((prev) => prev - 1);
    }
  };

  const increment = (e: MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    if (selectedImage + 1 === imageArray.length) {
      setSelectedImage((prev) => prev - prev);
    } else {
      setSelectedImage((prev) => prev + 1);
    }
  };

  return {
    selectedImage,
    decrement,
    increment
  }
};
