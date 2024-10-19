import Logo from "../assets/gallery/whitelogo2.png";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import VerifiedUserTwoToneIcon from "@mui/icons-material/VerifiedUserTwoTone";
import LiveHelpTwoToneIcon from "@mui/icons-material/LiveHelpTwoTone";

import { Link } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-400 tracking-wider uppercase mb-6">
              CONTACT US
            </h3>
            <ul className="space-y-6 text-lg">
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/helgg_"
                  rel="noopener noreferrer"
                >
                  Twitter support
                </a>
              </li>
              <li className="text-xl text-gray-400">OUR LOCATION</li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://goo.gl/maps/cvNPBdC7Pkwn8DFA9"
                >
                  Owena Street, Parkview, Ikoyi, Lagos, Nigeria.
                </a>
              </li>
              <li className="text-xl mb-4 text-gray-400">CALL US DIRECTLY</li>
              <li>
                <a href="tel:(+234)8057091624%E2%80%8B" target="_blank">
                  (+234) 8165810438
                </a>
              </li>
              <li className="text-xl text-gray-400">SEND US AN EMAIL</li>
              <li>
                {" "}
                <a target="_blank" href="mailto:info@helgg.com">
                  contact@helgg.com
                </a>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-400 tracking-wider uppercase mb-6">
              COMPANY
            </h3>
            <ul className="space-y-4 text-lg">
              <li>
                <Link to="/store" className="hover:text-white">
                  E-Bikes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Universities
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/store" className="hover:text-white">
                  Electric Cars
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-400 tracking-wider uppercase mb-4">
              SUPPORT
            </h3>
            <ul className="space-y-4 text-lg">
              <li>
                <Link to="/safety" className="hover:text-white">
                  Safety
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Estates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-8 rounded-3xl border-2 border-[rgba(75,30,133,0.5)] flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-2 text-center">
              Join our EV community 🚀
            </h3>
            <p className="text-lg text-gray-400 mb-4 text-center">
              Be part of the change in promoting sustainable transportation and
              reducing carbon footprint.
            </p>
            <Link href="/community" className="w-full sm:w-auto">
              <button
                aria-label="Community page"
                className="text-customGreen group relative font-roboto w-full sm:w-[250px] px-6 py-4 text-sm rounded-full shadow-2xl bg-teal-900 hover:scale-105 hover:bg-customGreen hover:text-black hover:shadow-3xl focus:outline-none transition-all duration-300 md:w-full h-18 lg:w-52 lg:h-18"
              >
                <span className="group-hover:hidden text-lg">
                  Join the Community
                </span>
                <span className="hidden group-hover:inline text-lg font-bold animate-drop-in">
                  It&apos;s Easy
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row gap-6  items-center p-6 lg:justify-around">
            <div className="flex items-center mb-4 md:mb-0">
              <Link to="/">
                <img src={Logo} alt="Logo" width={100} height={100} />{" "}
              </Link>
            </div>
            <nav className="space-x-2 flex flex-wrap justify-center md:justify-end  gap-4 mb-4 md:mb-0">
              <Link to="/blog" className="text-sm hover:text-white">
                <WysiwygIcon
                  // style={{ fontSize: 20 }}
                  className="hidden mr-2"
                />
                Blog
              </Link>
              <Link to="/privacy-policy" className="text-sm hover:text-white">
                <VerifiedUserTwoToneIcon
                  // style={{ fontSize: 20 }}
                  className="hidden md:inline mr-2"
                />
                Privacy Policy
              </Link>
              <Link to="/user-agreement" className="text-sm hover:text-white">
                <VerifiedUserTwoToneIcon
                  // style={{ fontSize: 20 }}
                  className="hidden  mr-2"
                />
                User Agreement
              </Link>
              <Link to="/faq" className="text-sm hover:text-white">
                <LiveHelpTwoToneIcon
                  // style={{ fontSize: 20 }}
                  className="hidden  mr-2"
                />
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex justify-center mt-6 space-x-12 p-8">
            <a
              target="_blank"
              href="https://www.instagram.com/helgg_/"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon style={{ fontSize: 30 }} />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/helgg_"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">Twitter</span>
              <XIcon style={{ fontSize: 30 }} />
            </a>
            <a
              target="_blank"
              href="https://ng.linkedin.com/company/helggscooters"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon style={{ fontSize: 30 }} />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@helggcommunity1642"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">YouTube</span>
              <YouTubeIcon style={{ fontSize: 30 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
