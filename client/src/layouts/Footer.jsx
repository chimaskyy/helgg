import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "../assets/helgg-logo-mint-and-cobalt.png";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import VerifiedUserTwoToneIcon from "@mui/icons-material/VerifiedUserTwoTone";
import LiveHelpTwoToneIcon from "@mui/icons-material/LiveHelpTwoTone";
import { Link } from "react-router-dom";

const footerClasses = "bg-gray-900 text-gray-300 p-6";
const headingClasses = "font-semibold text-gray-400";
const subHeadingClasses = "mt-8 font-semibold text-gray-400";
const textClasses = "mt-6 text-sm";
const linkClasses = "text-sm hover:text-gray-500";

const Footer = () => {
  return (
    <footer className={footerClasses}>
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-6">
        <ContactInfo />
        <CompanyLinks />
        <SupportLinks />
        <CommunitySection />
      </div>
      <div className="mt-24">
        <ExtraLink />
      </div>
    </footer>
  );
};

const ContactInfo = () => {
  return (
    <div>
      <h3 className={headingClasses}>CONTACT US</h3>
      <a
        href="https://twitter.com/helgg_"
        target="_blank"
        className={textClasses}
      >
        Twitter support
      </a>
      <h4 className={subHeadingClasses}>OUR LOCATION</h4>
      <a
        href="https://goo.gl/maps/cvNPBdC7Pkwn8DFA9"
        target="_blank"
        className={textClasses}
      >
        Owena Street, Parkview, Ikoyi, Lagos, Nigeria.
      </a>
      <h4 className={subHeadingClasses}>CALL US DIRECTLY</h4>
      <a
        href="tel:(+234)8057091624%E2%80%8B"
        target="_blank"
        className={textClasses}
      >
        (+234) 8165810438
      </a>
      <h4 className={subHeadingClasses}>SEND US AN EMAIL</h4>
      <a href="mailto:info@helgg.com" target="_blank" className={textClasses}>
        contact@helgg.com
      </a>
    </div>
  );
};

const CompanyLinks = () => {
  return (
    <div>
      <h3 className={headingClasses}>COMPANY</h3>
      <ul className="mt-2 space-y-2">
        <li>
          <Link to="/store" className={linkClasses}>
            E-Bikes
          </Link>
        </li>
        <li>
          <Link to="/store" className={linkClasses}>
            Universities
          </Link>
        </li>
        <li>
          <Link to="/career" className={linkClasses}>
            Careers
          </Link>
        </li>
        <li>
          <Link to="/store" className={linkClasses}>
            Electric Cars
          </Link>
        </li>
      </ul>
    </div>
  );
};

const SupportLinks = () => {
  return (
    // change a to Link
    <div>
      <h3 className={headingClasses}>SUPPORT</h3>
      <ul className="mt-2 space-y-2">
        <li>
          <Link to="/safety" className={linkClasses}>
            Safety
          </Link>
        </li>
        <li>
          <Link to="/safety" className={linkClasses}>
            Estates
          </Link>
        </li>
        <li>
          <Link to="/store" className={linkClasses}>
            Partners
          </Link>
        </li>
        <li>
          <Link to="/about" className={linkClasses}>
            About Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

const CommunitySection = () => {
  return (
    <div className="lg:col-span-1 col-span-1 lg:row-auto mt-6 lg:mt-0">
      <div className="h-[16em] w-[20em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-green-400 to-g-200 text-white font-nunito p-[1em] flex items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
        <div>
          <h4 className="text-[1.5em] font-medium">Join our EV community 🚀</h4>
          <p className="mt-2 text-[1em]">
            Be part of the change in promoting sustainable transportation and
            reducing carbon footprint.
          </p>
        </div>
        <Link to="/community">
          <button className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
            <p>Join the Community</p>
            <svg
              className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

const ExtraLink = () => {
  return (
    <>
      <div className="mt-12 gap-12 space-x-18 lg:mt-0 w-full flex flex-col  lg:flex-row items-center">
        {/* Logo */}
        <div className="flex justify-center  w-full lg:w-auto mb-4 lg:mb-0">
          <Link to="/">
            <img src={Logo} alt="Logo" width={100} height={90} />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex mt-6">
          <ul className="flex space-x-12">
            <li>
              <a href="" className="hover:text-gray-500">
                <WysiwygIcon style={{ fontSize: 20 }} />
                Blog
              </a>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-gray-500">
                <VerifiedUserTwoToneIcon style={{ fontSize: 20 }} />
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/user-agreement" className="hover:text-gray-500">
                <VerifiedUserTwoToneIcon style={{ fontSize: 20 }} />
                Agreement
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-gray-500">
                <LiveHelpTwoToneIcon style={{ fontSize: 20 }} />
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex justify-center space-x-12 mt-12 mb-12">
          <li>
            <a
              href="https://www.instagram.com/helgg_/"
              target="_blank"
              className="hover:text-gray-500"
            >
              <InstagramIcon style={{ fontSize: 30 }} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/helgg_"
              target="_blank"
              className="hover:text-gray-500"
            >
              <XIcon style={{ fontSize: 30 }} />
            </a>
          </li>
          <li>
            <a
              href="https://ng.linkedin.com/company/helggscooters"
              className="hover:text-gray-500"
              target="_blank"
            >
              <LinkedInIcon style={{ fontSize: 30 }} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@helggcommunity1642"
              className="hover:text-gray-500"
              target="_blank"
            >
              <YouTubeIcon style={{ fontSize: 30 }} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
