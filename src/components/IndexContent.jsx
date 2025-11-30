import Hero from "../components/Hero.jsx";
import PlaceCard from "../components/PlaceCard.jsx";
import { ChevronRight, Landmark, Users, Calendar } from "lucide-react";
import Triveni from "../assets/triveni-sangam1.jpg";
import AllahabadFort from "../assets/allahabad-fort.jpg";
import KhusroBagh from "../assets/khusro-bagh.jpg";

export default function IndexContent() {
  const featuredAttractions = [
    {
      title: "Triveni Sangam",
      description:
        "The sacred confluence of the Ganga, Yamuna and mystical Saraswati. A pilgrimage site of immense spiritual significance.",
      image:
        Triveni,
      location: "Sangam Area",
    },
    {
      title: "Allahabad Fort",
      description:
        "A magnificent Mughal fort built by Emperor Akbar in 1583. Home to the Ashoka Pillar and Akshayavat tree.",
      image:
        AllahabadFort,
      location: "Near Sangam",
    },
    {
      title: "Khusro Bagh",
      description:
        "A stunning Mughal garden complex with historic tombs and breathtaking sandstone carvings.",
      image:
        KhusroBagh,
      location: "Civil Lines",
    },
  ];

  const highlights = [
    {
      icon: Landmark,
      title: "Rich Heritage",
      description: "Ancient monuments and Mughal architecture spanning centuries",
    },
    {
      icon: Users,
      title: "Cultural Hub",
      description: "Birthplace of national leaders and literary legends",
    },
    {
      icon: Calendar,
      title: "Kumbh Mela",
      description: "Host of the world’s largest spiritual gathering",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <Hero />

      {/* ABOUT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover Prayagraj
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              One of India’s oldest and most sacred cities, located at the meeting
              point of holy rivers and known for its cultural and spiritual legacy.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((h, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-zinc-200 bg-white shadow hover:shadow-lg transition"
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-red-100 text-[#bd6628e6] mb-4">
                  <h.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {h.title}
                </h3>
                <p className="text-gray-600">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ATTRACTIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Featured Attractions
              </h2>
              <p className="text-gray-600">Must-visit places in Prayagraj</p>
            </div>

            <a
              href="/places"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              View All <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {featuredAttractions.map((place, index) => (
              <PlaceCard key={index} {...place} />
            ))}
          </div>

          {/* Mobile Button */}
          <div className="text-center mt-8 sm:hidden">
            <a
              href="/places"
              className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              View All Attractions <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#bd6628] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Plan Your Visit to Prayagraj
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Explore ancient monuments, walk along the Sangam, and experience the
            spiritual heart of India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-white text-[#bd6628e6] font-semibold rounded-lg shadow hover:bg-gray-100 transition"
            >
              Contact Us
            </a>

            <a
              href="/gallery"
              className="px-6 py-3 border border-white rounded-lg text-white font-semibold hover:bg-white/20 transition"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
