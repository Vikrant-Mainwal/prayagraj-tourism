import { Book, Globe, Heart, Award } from "lucide-react";

export default function AboutContent() {
  const sections = [
    {
      icon: Book,
      title: "Ancient History",
      content:
        "Prayagraj's history dates back to ancient times, mentioned in Hindu scriptures as Prayag. The city has witnessed the rise and fall of empires, from the Mauryas to the Mughals, and played a crucial role in India's freedom struggle.",
    },
    {
      icon: Globe,
      title: "Spiritual Significance",
      content:
        "As the site of Triveni Sangam, where three sacred rivers meet, Prayagraj holds immense religious importance. It hosts the Kumbh Mela, the world's largest religious gathering, attracting millions of pilgrims from around the globe.",
    },
    {
      icon: Heart,
      title: "Cultural Heritage",
      content:
        "The city has been a center of learning, culture, and literature. It was home to the Nehru family and birthplace of India's first Prime Minister. The city's universities and institutions continue this legacy of excellence.",
    },
    {
      icon: Award,
      title: "Modern Prayagraj",
      content:
        "Today, Prayagraj beautifully blends its ancient heritage with modern development. It remains a major pilgrimage destination while also being an important educational and administrative center in Uttar Pradesh.",
    },
  ];

  const milestones = [
    {
      period: "Ancient Era",
      event: "Mentioned in Vedic texts as Prayag, site of sacred confluence",
    },
    {
      period: "1583 CE",
      event: "Emperor Akbar built the magnificent Allahabad Fort",
    },
    {
      period: "1858",
      event: "Became important center during British colonial period",
    },
    {
      period: "1920s–40s",
      event: "Key location in the Indian independence movement",
    },
    {
      period: "2018",
      event: "Renamed officially to Prayagraj, restoring its ancient identity",
    },
  ];

  return (
    <div className="min-h-screen pt-14 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 cinzel-font">
            About Prayagraj
          </h3>
          <p className="text-lg md:text-xl text-gray-600">
            A sacred confluence of heritage, spirituality, and timeless history.
          </p>
        </div>

        {/* INTRO */}
        <div className="bg-white border border-zinc-200 rounded-lg shadow-lg p-8 md:p-12 mb-20 max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-6 open-sans-font">
            Prayagraj, known as Prayag in ancient times and Allahabad during the
            Mughal and British era, is one of India’s most culturally and
            spiritually significant cities. Situated at the confluence of the
            Ganga, Yamuna, and the mythical Saraswati rivers, it has been a
            center of civilization for thousands of years.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Its name “Prayag” translates to “the place of sacrifice,”
            symbolizing deep spiritual reverence. From ancient scriptures to
            modern history, Prayagraj has played a pivotal role in shaping the
            cultural, religious, and intellectual fabric of India.
          </p>
        </div>

        {/* SECTION CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-white border border-zinc-200 rounded-lg p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-100 text-[#bd6628e6] mb-6">
                <section.icon className="h-7 w-7" />
              </div>

              <h5 className="text-2xl font-bold text-gray-900 mb-2">
                {section.title}
              </h5>

              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="max-w-4xl mx-auto">
          <h4 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Historical Milestones
          </h4>

          <div className="relative space-y-6">
            <div className="absolute left-[152px] top-3 bottom-0 w-0.5 bg-[#bd6628e6]/40 mx-1 hidden"></div>

            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 items-start">
                {/* Year */}
                <div className="w-32 text-right">
                  <span className="text-sm font-semibold text-[#bd6628e6]">
                    {m.period}
                  </span>
                </div>

                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-[#bd6628e6] mt-2 relative z-10" />
                  <div className=" h-10 top-3 bottom-0 w-0.5 bg-[#bd6628e6]/40 mx-1 "/>
                </div>

                {/* Event */}
                <div className="flex-1">
                  <p className="text-gray-700">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
