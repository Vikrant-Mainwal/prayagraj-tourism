import Varanasi from "../assets/city/varanasi.png";
import Ayodhya from "../assets/city/aayodhaya.png";
import Chitrakoot from "../assets/city/chitrakoot.png";
export default function AttractionPage({ place, howToReach }) {
  const nearby = [
    { title: "Varanasi", distance: "120 kms", image: Varanasi },
    { title: "Ayodhya", distance: "165 kms", image: Ayodhya },
    { title: "Chitrakoot", distance: "130 kms", image: Chitrakoot },
  ];

  return (
    <div>
      <div className="relative w-full mx-auto mb-10 rounded-xl shadow-lg">
        <h5 className="absolute top-10 left-1/2 -translate-x-1/2 text-white text-6xl font-bold drop-shadow-lg">
          {place.title}
        </h5>
        <p className="absolute top-24 left-1/2 -translate-x-1/2 text-white text-4xl font-bold drop-shadow-lg">Prayagraj</p>
        <img
          src={place.image.src}
          alt={place.title}
          className="w-full h-[600px] object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto pt-28 pb-16 px-4">
        <h6 className="text-5xl text-center font-bold mb-6">{place.title}</h6>

        <p className="text-center text-lg text-gray-700 mb-6">
          <b>Location:</b> {place.location}
        </p>

        <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-10">
          {place.description}
        </p>
      </div>

      {/* CTA */}
      <section className="text-center my-10">
        <h3 className="text-2xl font-semibold mb-6">
          I WISH TO VISIT {place.title.toUpperCase()}
        </h3>

        <a
          href="/plan-trip"
          className="bg-[#e96a1a] text-white px-12 py-4 rounded-full text-xl tracking-wide hover:bg-[#d45f15] transition"
        >
          PLAN YOUR TRIP
        </a>
      </section>

      <div className="py-16 rounded-xl max-w-5xl mx-auto my-10 px-4">
        <h5 className="text-3xl font-semibold text-center mb-6 tracking-wide">
          HOW TO REACH HERE
        </h5>

        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
          The City Palace is easily accessible from any part of the city by
          auto-rickshaw, taxi or public buses.
        </p>
      </div>

      <div className="mt-24 mb-24">
        <h5 className="text-3xl font-semibold text-center mb-10 tracking-wide">
          PLACES TO VISIT NEAR PRAYAGRAJ
        </h5>

        <div className="flex flex-wrap justify-center gap-20 text-center">
          {nearby.map((p, i) => (
            <div key={i} className="w-40 cursor-pointer">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-25 bg-[#fff4df] flex items-center justify-center">
                  <img src={p.image.src} alt="" className="h-25" />
                </div>
              </div>
              <h6 className="text-xl font-semibold mt-4">{p.title}</h6>
              <p className="text-gray-600">{p.distance}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BACK */}
      <div className="text-center mb-16">
        <a
          href="/places"
          className="px-6 py-3 bg-[#bd6628e6] text-white font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          ← Back to all attractions
        </a>
      </div>
    </div>
  );
}
