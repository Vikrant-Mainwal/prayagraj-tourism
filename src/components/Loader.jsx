import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1500); // 1.5s loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-9999 transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[#bd6628e6] border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <h2 className="text-xl font-semibold text-gray-800">
          Loading Prayagraj...
        </h2>
      </div>
    </div>
  );
}
