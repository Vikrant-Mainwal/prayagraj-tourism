import { ChevronRight } from "lucide-react";
import Triveni from "../assets/triveni-sangam1.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Triveni.src}
          alt="Prayagraj Triveni Sangam"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl text-white animate-fade-in">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight cinzel-font">
            Welcome to Prayagraj
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Where three sacred rivers meet. Experience the spiritual heart of India,
            rich in heritage, culture, and timeless traditions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            {/* Explore Attractions Button */}
            <a
              href="/places"
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg flex items-center hover:bg-yellow-400 transition"
            >
              Explore Attractions
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>

            {/* Learn More Button */}
            <a
              href="/about"
              className="px-6 py-3 border border-white/40 text-white rounded-lg backdrop-blur-sm hover:bg-white/10 transition"
            >
              Learn More
            </a>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
      
    </section>
  );
}
