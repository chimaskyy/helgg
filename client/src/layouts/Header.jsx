import Logo from "../assets/gallery/helgg-logo-mint-and-cobalt.png";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

const navigation = [
  { title: "About us", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Locations", path: "/locations" },
  { title: "Blog", path: "/blog" },
  { title: "Ev Store", path: "/store" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef();
  const sideMenuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (mobileMenuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className={`bg-white w-full top-0 z-20 transition-all duration-300 ${
        isScrolled ? "shadow-lg fixed" : ""
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            <img src={Logo} width={100} height={80} alt="Helgg UI logo" />
          </Link>
        </div>
        <div className="flex items-center justify-between w-full lg:hidden">
          <div className="flex-1"></div>
          <Link to="/download" className="flex-1 flex justify-center">
            <button
              aria-label="Google Play Store"
              className="group relative items-center px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm rounded-full shadow-xl transition-transform transform bg-customGreen border-2 border-white hover:scale-105 hover:border-green-600 hover:text-white hover:bg-black hover:shadow-3xl focus:outline-none min-w-[130px] whitespace-nowrap"
            >
              <span className="group-hover:hidden text-sm font-bold">
                Get the App
              </span>
              <span className="hidden group-hover:inline text-sm font-bold animate-drop-in">
                Download
              </span>
            </button>
          </Link>
          <div className="flex-1 flex justify-end">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        <div className="hidden lg:flex  lg:gap-x-8">
          {navigation.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-semibold leading-6 ${
                  isActive
                    ? "text-customBlue"
                    : "text-gray-900 hover:text-gray-600 hover-bg-gray-200 text-xl"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/download">
            <button
              aria-label="Google Play Store"
              className="w-40 group relative px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm rounded-full shadow-xl transition-transform transform bg-green-200 border-2 border-white hover:scale-105 hover:border-green-600 hover:shadow-3xl focus:outline-none hover:bg-black hover:text-white"
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
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={sideMenuRef}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="px-8 pt-12">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Helgg</span>
              <img className="h-12 w-auto" src={Logo} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-12">
                {navigation.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    className={({ isActive }) =>
                      `-mx-3 block rounded-lg px-3 py-2 text-base text-xl font-semibold leading-7 ${
                        isActive
                          ? "bg-gray-50 text-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/download"
                  className="flex w-full items-center justify-center rounded-md bg-customGreen px-3 py-3 text-center font-semibold shadow-sm hover:bg-green-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                  Get the App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-25"
          aria-hidden="true"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}
