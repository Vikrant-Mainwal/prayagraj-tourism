import { useEffect, useState } from "react";

export default function NavLink({ href, children }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(window.location.pathname === href);
  }, []);

  return (
    <a
      href={href}
      className={
        "px-4 py-2 rounded-md transition-all duration-200 " +
        (isActive
          ? "text-[#bd6628e6] font-semibold bg-gray-100"   // ACTIVE
          : "text-gray-700 hover:text-[#bd6628e6] hover:bg-gray-100")  // NORMAL
      }
    >
      {children}
    </a>
  );
}
