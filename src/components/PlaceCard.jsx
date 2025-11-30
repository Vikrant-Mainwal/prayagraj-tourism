import { MapPin } from "lucide-react";

export default function PlaceCard({ title, description, image, location,slug }) {
  return (
    <a href={`/places/${slug}`} className="block">
      <div className="group overflow-hidden rounded-lg bg-white hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image.src}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-[#bd6628e6] transition-colors">
            {title}
          </h3>

          {location && (
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <MapPin className="h-4 w-4 mr-1 text-[#bd6628e6]" />
              <span>{location}</span>
            </div>
          )}

          <p className="text-gray-600 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
