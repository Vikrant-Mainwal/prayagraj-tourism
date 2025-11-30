import { Building2, Crown, Scroll, School } from "lucide-react";

export default function HeritageContent() {
  const heritageCategories = [
    {
      icon: Crown,
      title: "Mughal Architecture",
      description:
        "Prayagraj is home to some of the finest examples of Mughal architecture. The Allahabad Fort, built by Emperor Akbar in 1583, is a monumental symbol of Mughal heritage. Khusro Bagh, with its grand tombs and sandstone carvings, reflects the artistic brilliance of the Mughal era.",
      highlights: [
        "Allahabad Fort & Ashoka Pillar",
        "Khusro Bagh tombs and gardens",
        "Mughal inscriptions & calligraphy",
      ],
    },
    {
      icon: Building2,
      title: "Colonial Architecture",
      description:
        "The British era left behind magnificent Victorian buildings, Gothic churches, and colonial administrative blocks. Civil Lines in Prayagraj still echoes this European influence with its heritage structures and wide streets.",
      highlights: [
        "All Saints Cathedral (Patthar Girja)",
        "Allahabad High Court",
        "British-era Civil Lines buildings",
      ],
    },
    {
      icon: Scroll,
      title: "Museums & Archives",
      description:
        "Prayagraj preserves centuries of culture through its museums and archives. The Allahabad Museum displays sculptures, paintings, manuscripts, and artifacts from various eras. Anand Bhavan and Swaraj Bhavan highlight the freedom movement and the legacy of the Nehru family.",
      highlights: [
        "Allahabad Museum galleries",
        "Anand Bhavan archives",
        "Rare manuscripts & documents",
      ],
    },
    {
      icon: School,
      title: "Educational Legacy",
      description:
        "Known as the 'Oxford of the East,' Prayagraj has been an intellectual hub for over a century. The University of Allahabad, established in 1887, is one of India's oldest universities and has produced several national leaders and scholars.",
      highlights: [
        "University of Allahabad",
        "Heritage libraries",
        "Research institutions",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-14 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 cinzel-font">
            Heritage & Culture
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Explore the architectural masterpieces, cultural treasures, and
            intellectual legacy of Prayagraj.
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white border border-zinc-200 rounded-xl shadow-lg p-8 md:p-12">
            <p className="text-gray-700  leading-relaxed mb-4 text-lg">
              Prayagraj's heritage is a blend of ancient Hindu traditions,
              Mughal artistry, British colonial architecture, and modern academic
              excellence. Each monument and institution tells a unique story of
              India's cultural and historical journey.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              From ancient stone pillars to grand Mughal tombs and Victorian-era
              churches, Prayagraj presents a timeless blend of artistic and
              architectural wonders.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-12 mb-20">
          {heritageCategories.map((category, index) => (
            <div
              key={index}
              className="border border-zinc-200 rounded-xl bg-white shadow p-8 md:p-12 hover:shadow-xl transition"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-red-100 text-[#bd6628e6] flex items-center justify-center">
                  <category.icon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <h3 className="font-semibold text-[#bd6628e6] uppercase text-xs tracking-wider mb-2">
                    Key Highlights
                  </h3>

                  <ul className="space-y-2">
                    {category.highlights.map((h, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#bd6628e6] mr-2 mt-1">→</span>
                        <span className="text-gray-700">{h}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* UNESCO Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 p-8 md:p-12 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cultural Significance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prayagraj's Kumbh Mela was inscribed on UNESCO's Representative List of Intangible Cultural Heritage of Humanity in 2017, recognizing its exceptional universal value and contribution to world heritage.
            </p>
            <p className="text-gray-700 leading-relaxed">
             The city continues to play a vital role in preserving India's cultural heritage while adapting to modern times, making it a living museum where past and present coexist harmoniously.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
