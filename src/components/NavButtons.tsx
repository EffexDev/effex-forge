import { Link, useLocation } from "react-router";

function NavButtons({ flexDirection = "row" }) {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <nav className={`flex flex-${flexDirection} items-center justify-between w-full sm:w-auto`}>
      {isAboutPage ? (
        <>
        <Link to="/" className="px-4 py-5 sm:px-6">Home</Link>
        <p className="px-4 py-5 sm:px-6">Services</p>
        <p className="px-4 py-5 sm:px-6">Projects</p>
        </>

      ) : (
        
        <>
          <Link to="about" className="px-4 py-5 sm:px-6">About</Link>
          <p className="px-4 py-5 sm:px-6">Services</p>
          <p className="px-4 py-5 sm:px-6">Projects</p>
        </>
      )}
    </nav>
  );
}

export default NavButtons;