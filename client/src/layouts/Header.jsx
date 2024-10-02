import { useEffect, useRef, useState } from "react";
import Logo from "../assets/helgg-logo-mint-and-cobalt.png";
import { Link } from "react-router-dom";

function Header() {
  const [state, setState] = useState(false);
  const navRef = useRef();

  const navigation = [
    { title: "About us", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Locations", path: "/locations" },
    { title: "Blog", path: "/blog" },
    { title: "Ev Store", path: "/ev-store" },
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

  return (
    <nav ref={navRef} className="bg-white w-full top-0 z-20 shadow-lg">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex lg:justify-between">
        {/* Logo on the left */}
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block lg:w-1/3">
          <Link to="/">
            <img src={Logo} width={150} height={90} alt="Helgg UI logo" />
          </Link>

          {/* Button and Toggle Icon - aligned on the same row with the logo on medium screens */}
          <div className="flex items-center lg:hidden">
            <a
              href="https://play.google.com/store/apps/details?id=com.helggscooters.android&pli=1"
              target="_blank"
              aria-label="Download button"
              rel="noreferrer noopener"
              className="mr-32"
            >
              <button
                aria-label="Download Button"
                className="group relative px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm rounded-full shadow-xl transition-transform transform bg-green-200 border-2 border-white hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-3xl focus:outline-none"
                id="downloadButton"
              >
                <span>Get the App</span>
              </button>
            </a>
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
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
        </div>

        {/* Navigation Links and Button */}
        <div
          className={`flex-1 justify-between lg:flex lg:items-center ${
            state
              ? "h-screen pb-20 overflow-auto pr-4"
              : "hidden lg:flex lg:h-auto"
          }`}
        >
          {/* Links in the middle on large screens */}
          <ul className="text-lg text-extrabold justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0 lg:flex-1">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-800 hover:text-gray-1000">
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>

          {/* Button - hidden on medium screens, right-aligned on large screens */}
          <div
            className={`hidden lg:block lg:justify-end ${
              state ? "lg:hidden" : ""
            }`}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.helggscooters.android&pli=1"
              target="_blank"
              aria-label="Google Play Store"
              rel="noreferrer noopener"
            >
              <button
                aria-label="Google Play Store"
                className="group relative px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm rounded-full shadow-xl transition-transform transform bg-green-200 border-2 border-white hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-3xl focus:outline-none"
                id="downloadButton"
              >
                <span>Get the App</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
