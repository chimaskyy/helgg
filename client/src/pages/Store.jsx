import banner6 from "../assets/gallery/banner6.jpg";
import { Link } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";

function Store() {
  const sectionStyle = {
    backgroundImage: `url(${banner6})`,
  };
  const overlayClass = "absolute inset-0 bg-black opacity-70";

  return (
    <section
      className="w-full relative bg-cover bg-center object-cover bg-no-repeat h-[93vh] lg:h-screen"
      style={sectionStyle}
    >
      {/* Dark overlay */}
      <div className={overlayClass}></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white animate-fadeIn p-4">
        {/* Title */}
        <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-200 mb-4">
          Coming Soon!
        </h1>

        {/* Description */}
        <p className="text-base lg:text-lg text-gray-300 mb-6 lg:mb-8 max-w-xl leading-relaxed">
          We're working hard to launch our EV Store, where you'll find a wide
          selection of electric scooters, cars, and bicycles.
        </p>

        <p className="text-xs lg:text-sm text-gray-400 mb-10">
          Stay tuned for updates, or check back soon!
        </p>

        {/* Button */}
        <div className="flex justify-center mt-4 space-x-4">
          <Link to="/download">
            <button
              type="submit"
              className="flex items-center justify-center text-sm lg:text-lg text-gray-900 gap-2 px-6 py-2 bg-customGreen rounded-full border-2 border-gray-50 shadow-lg hover:bg-green-500 hover:text-white transition duration-300"
            >
              Download App
              <DownloadIcon style={{ color: "inherit" }} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Store;
