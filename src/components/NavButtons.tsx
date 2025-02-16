import { Link, useLocation } from "react-router";

function NavButtons({ flexDirection = "row" }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className={`flex flex-${flexDirection} items-center justify-between w-full sm:w-auto`}>
      {pathname !== "/" && <Link to="/" className="px-4 py-5 sm:px-6">Home</Link>}
      {pathname !== "/about" && <Link to="/about" className="px-4 py-5 sm:px-6">About</Link>}
      {pathname !== "/projects" && <Link to="/projects" className="px-4 py-5 sm:px-6">Projects</Link>}
    </nav>
  );
}

export default NavButtons;
