import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "../assets/helgg-logo-mint-and-cobalt.png";

const footerClasses = "bg-gray-900 text-gray-300 p-6";
const headingClasses = "font-semibold text-gray-400";
const subHeadingClasses = "mt-8 font-semibold text-gray-400";
const textClasses = "mt-6 text-sm";
const linkClasses = "text-sm hover:text-gray-500";

// const socialLinks = [
//   { label: "Instagram", icon: InstagramIcon, href: "#" },
//   { label: "Twitter", icon: TwitterIcon, href: "#" },
//   { label: "LinkedIn", icon: LinkedInIcon, href: "#" },
//   { label: "YouTube", icon: YouTubeIcon, href: "#" },
// ];

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
      <p className={textClasses}>Twitter support</p>
      <h4 className={subHeadingClasses}>OUR LOCATION</h4>
      <p className={textClasses}>
        Owena Street, Parkview, Ikoyi, Lagos, Nigeria.
      </p>
      <h4 className={subHeadingClasses}>CALL US DIRECTLY</h4>
      <p className={textClasses}>(+234) 8165810438</p>
      <h4 className={subHeadingClasses}>SEND US AN EMAIL</h4>
      <p className={textClasses}>contact@helgg.com</p>
    </div>
  );
};

const CompanyLinks = () => {
  return (
    <div>
      <h3 className={headingClasses}>COMPANY</h3>
      <ul className="mt-2 space-y-2">
        <li>
          <a href="#" className={linkClasses}>
            E-Bikes
          </a>
        </li>
        <li>
          <a href="#" className={linkClasses}>
            Universities
          </a>
        </li>
        <li>
          <a href="#" className={linkClasses}>
            Careers
          </a>
        </li>
        <li>
          <a href="#" className={linkClasses}>
            Electric Cars
          </a>
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
          <a href="#" className={linkClasses}>
            Safety
          </a>
        </li>
        <li>
          <a href="#" className={linkClasses}>
            Estates
          </a>
        </li>
        <li>
          <a href="#" className={linkClasses}>
            Partners
          </a>
        </li>
        <li>
          <a href="#" className={linkClasses}>
            About Us
          </a>
        </li>
      </ul>
    </div>
  );
};

const CommunitySection = () => {
  return (
    <div className="lg:col-span-1 col-span-1 lg:row-auto mt-6 lg:mt-0">
      <div className="h-[16em] w-[24em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-green-400 to-g-200 text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
        <div>
          <h4 className="text-[1.5em] font-medium">Join our EV community 🚀</h4>
          <p className="mt-2 text-[1em]">
            Be part of the change in promoting sustainable transportation and
            reducing carbon footprint.
          </p>
        </div>
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
      </div>
    </div>
  );
};

const ExtraLink = () => {
  return (
    <>
      <div className="mt-12 space-x-24 lg:mt-0 w-full flex flex-col lg:justify-center lg:flex-row items-center">
        {/* Logo */}
        <div className="flex justify-center  w-full lg:w-auto mb-4 lg:mb-0">
          <img src={Logo} alt="Logo" width={100} height={90} />
        </div>

        {/* Navigation Links */}
        <div className="flex mt-6">
          <ul className="flex space-x-6">
            <li>
              <a href="" className="hover:text-gray-500">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-500">
                Language
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-500">
                User Agreement
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-500">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex justify-center space-x-6 mt-8">
          <li>
            <a href="" className="hover:text-gray-500">
              <InstagramIcon style={{ fontSize: 40 }} />
            </a>
          </li>
          <li>
            <a href="" className="hover:text-gray-500">
              <TwitterIcon style={{ fontSize: 40 }} />
            </a>
          </li>
          <li>
            <a href="" className="hover:text-gray-500">
              <LinkedInIcon style={{ fontSize: 40 }} />
            </a>
          </li>
          <li>
            <a href="" className="hover:text-gray-500">
              <YouTubeIcon style={{ fontSize: 40 }} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
