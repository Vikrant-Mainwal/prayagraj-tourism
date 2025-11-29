import PlaceCard from "../components/PlaceCard.jsx";
import Triveni from "../assets/triveni-sangam1.jpg";
import AllahabadFort from "../assets/allahabad-fort.jpg";
import KhusroBagh from "../assets/khusro-bagh.jpg";
import AnandBhavan from "../assets/anand-bhavan.jpg";
import ChandrashekharAzadPark from "../assets/azad-park.jpg";
import AllahabadMuseum from "../assets/museum.jpg";

export default function AttractionsContent() {
  const attractions = [
    {
      title: "Triveni Sangam",
      description:
        "The holiest site in Prayagraj where three sacred rivers converge...",
      image:
        Triveni,
      location: "Sangam Area",
    },
    {
      title: "Allahabad Fort",
      description:
        "Built by Emperor Akbar in 1583, this magnificent fort showcases Mughal architecture...",
      image:
       AllahabadFort,
      location: "Near Sangam",
    },
    {
      title: "Khusro Bagh",
      description:
        "A stunning example of Mughal garden architecture with three royal tombs...",
      image:
       KhusroBagh,
      location: "Civil Lines",
    },
    {
      title: "Anand Bhavan",
      description:
        "The ancestral home of the Nehru family, now a museum of India's freedom struggle...",
      image:
        AnandBhavan,
      location: "Colonelganj",
    },
    {
      title: "Chandrashekhar Azad Park",
      description:
        "Historic 133-acre park with monuments, library, and lush gardens...",
      image: ChandrashekharAzadPark,
      location: "Civil Lines",
    },
    {
      title: "Allahabad Museum",
      description:
        "A major museum with sculptures, paintings, artifacts, and freedom movement memorabilia...",
      image:
        AllahabadMuseum,
      location: "Kamla Nehru Road",
    },
  ];
  console.log(attractions);

  return (
    <div className="min-h-screen pt-28 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Top Attractions in Prayagraj
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Explore iconic monuments, sacred sites, and cultural landmarks.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {attractions.map((place, index) => (
            <PlaceCard key={index} {...place} />
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-20 max-w-4xl mx-auto bg-white border rounded-lg shadow p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Visiting Tips</h2>

          <ul className="space-y-3 text-gray-600">
            <li>• Best time: October to March</li>
            <li>• Early mornings are ideal for Sangam</li>
            <li>• Dress modestly at religious sites</li>
            <li>• Hire local guides at major sites</li>
            <li>• Plan 2–3 days for a full city tour</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
