import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      
      {/* Main Image */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-lg">
        <img
          src={images[currentIndex].src.src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {images[currentIndex].title}
          </h3>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:bg-white transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:bg-white transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mt-6">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-20 rounded border-2 transition-all duration-200 ${
              index === currentIndex
                ? "border-primary scale-105"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={image.src.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
