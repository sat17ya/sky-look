import { memo } from "react";
import { useLocation, Link } from "react-router-dom";

// Default Freepik placeholder (replace later)
const defaultImage = "https://img.freepik.com/free-photo/modern-luxury-house_1203-1589.jpg";

const routeConfig = {
  "/about": { title: "About Us", image: defaultImage },
  "/projects": { title: "Projects", image: defaultImage },
  "/services": { title: "Services", image: defaultImage },
  "/contact": { title: "Contact Us", image: defaultImage },
};

function Breadcrumb() {
  const { pathname } = useLocation();

  // Hide breadcrumb on Home
  if (pathname === "/") return null;

  // Match config or fallback
  const { title, image } = routeConfig[pathname] || {
    title: pathname.replace("/", "").replace("-", " ").replace(/\b\w/g, l => l.toUpperCase()),
    image: defaultImage,
  };

  return (
    <section className="relative w-full h-56 md:h-64 lg:h-72 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover brightness-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-md">{title}</h1>
        <nav className="mt-3 text-sm md:text-base">
          <Link to="/" className="hover:underline hover:text-gray-200 transition">
            Home
          </Link>{" "}
          / <span className="font-medium">{title}</span>
        </nav>
      </div>
    </section>
  );
}

export default memo(Breadcrumb);
