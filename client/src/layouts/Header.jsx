import { useEffect, useRef, useState } from "react";
import Logo from "../assets/gallery/helgg-logo-mint-and-cobalt.png";
import { Link, NavLink } from "react-router-dom";
import Sidemenu from "./SideMenu";

function Header() {
  const [state, setState] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const navigation = [
    { title: "About us", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Locations", path: "/locations" },
    { title: "Blog", path: "/blog" },
    { title: "Ev Store", path: "/store" },
  ];

  useEffect(() => {
    const body = document.body;
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    else body.classList.remove(...customBodyStyle);

    const customStyle = ["sticky-nav", "fixed", "border-b"];
    window.onscroll = () => {
      if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };
  }, [state]);

  const toggleMenuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      ref={navRef}
      className="bg-white w-full top-0 z-20 shadow-lg transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 pl-4 sm:pl-6 lg:pl-1">
            <Link to="/">
              <img src={Logo} width={120} height={80} alt="Helgg UI logo" />
            </Link>
          </div>

          <div className="flex items-center justify-center lg:hidden">
            <Link to="/download">
              <button
                aria-label="Download App"
                className="group relative items-center px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm rounded-full shadow-xl transition-transform transform bg-customGreen border-2 border-white hover:scale-105 hover:border-green-600 hover:bg-customGray hover:text-white hover:shadow-3xl focus:outline-none"
              >
                <span className="group-hover:hidden text-lg font-bold">
                  Get the App
                </span>
                <span className="hidden group-hover:inline text-lg font-bold animate-drop-in">
                  Download
                </span>
              </button>
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={toggleMenuHandler}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Navigation Links */}
          <div
            className={`flex-1 justify-center lg:flex lg:items-center lg:justify-center ${
              state
                ? "h-screen pb-20 overflow-auto pr-4"
                : "hidden lg:flex lg:h-auto"
            }`}
          >
            <ul className="text-xl justify-center items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0 lg:flex-1">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-600 font-roboto hover:text-customBlue hover:bg-gray-100 p-2 rounded-lg"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-100 text-gray-900 p-1 rounded-lg"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Button - hidden on medium screens */}
            <div
              className={`hidden lg:block lg:justify-end ${
                state ? "lg:hidden" : ""
              }`}
            >
              <Link to="/download">
                <button
                  aria-label="Download Button"
                  className=" w-40 h-15 group relative items-center px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm rounded-full shadow-xl transition-transform transform bg-customGreen border-2 border-white hover:scale-105 hover:border-green-600 hover:bg-customGray hover:text-white hover:shadow-3xl focus:outline-none"
                  id="downloadButton"
                >
                  <span className="group-hover:hidden text-lg font-bold">
                    Get the App
                  </span>
                  <span className="hidden group-hover:inline text-lg font-bold animate-drop-in">
                    Download
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Side Menu */}
        <Sidemenu menuOpen={menuOpen} toggleMenuHandler={toggleMenuHandler} />
      </div>
    </nav>
  );
}

export default Header;
