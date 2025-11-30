import GallerySlider from "../components/GallerySlider.jsx";
import Triveni from "../assets/sangam1.jpeg";
import AllahabadFort from "../assets/allahabad-fort.jpg";
import KhusroBagh from "../assets/khusro.jpeg";
import AnandBhavan from "../assets/anand-bhavan.jpg";
import ChandrashekharAzadPark from "../assets/azad2.jpg";
import AllahabadMuseum from "../assets/museum.jpg";

export default function GalleryContent() {
  const galleryImages = [
    {
      src: Triveni,
      alt: "Triveni Sangam - Sacred Confluence",
      title: "Triveni Sangam - Sacred Confluence",
    },
    {
      src: AllahabadFort,
      alt: "Allahabad Fort",
      title: "Allahabad Fort - Mughal Grandeur",
    },
    {
      src: KhusroBagh,
      alt: "Khusro Bagh",
      title: "Khusro Bagh - Mughal Garden Complex",
    },
    {
      src: AnandBhavan,
      alt: "Anand Bhavan",
      title: "Anand Bhavan - Nehru Family Home",
    },
    {
      src: ChandrashekharAzadPark,
      alt: "Chandrashekhar Azad Park",
      title: "Chandrashekhar Azad Park - Historic Gardens",
    },
    {
      src: AllahabadMuseum,
      alt: "Allahabad Museum",
      title: "Allahabad Museum - Cultural Heritage",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h4>
          <p className="text-lg md:text-xl text-gray-600">
            Experience Prayagraj through stunning images of its heritage and beauty.
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="max-w-5xl mx-auto mb-16">
          <GallerySlider images={galleryImages} />
        </div>

        {/* Grid Gallery */}
        <h5 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Explore More Images
        </h5>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div className="relative aspect-square rounded-lg overflow-hidden group" key={index}>
              <img
                src={image.src.src}
                alt={image.alt}
                className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-end p-3 transition">
                <p className="text-white text-sm">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info Box */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="border border-zinc-200 rounded-lg shadow-lg p-8 bg-white text-center">
            <p className="text-gray-600">
              These images reflect the authentic beauty of Prayagraj. For high-resolution photographs,
              media usage, or permissions, kindly contact the tourism office.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
