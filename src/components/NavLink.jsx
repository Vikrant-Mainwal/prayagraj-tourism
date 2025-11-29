export default function NavLink({ href, children, className = "", activeClassName = "" }) {
  const isActive = typeof window !== "undefined" && window.location.pathname === href;

  return (
    <a
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </a>
  );
}
